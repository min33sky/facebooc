import React, { MutableRefObject, useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/client';
import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { db, storage } from '../firebase';
import firebase from 'firebase';

function InputBox() {
  const [session] = useSession();
  const inputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const filepickerRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const [imageToPost, setImageToPost] = useState<string | undefined>('');

  const removeImage = useCallback(() => setImageToPost(''), []);

  const sendPost = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!inputRef.current?.value || !session) return;

      console.log('input-value: ', inputRef.current.value);

      //* Firestore에 저장
      const doc = await db.collection('posts').add({
        message: inputRef.current.value,
        name: session.user?.name,
        email: session.user?.email,
        image: session.user?.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      //* 이미지가 있을 경우 이미지를 storage에 저장
      if (imageToPost) {
        const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, 'data_url');

        removeImage();

        uploadTask.on(
          'state_change',
          null,
          (error) => console.error(error),
          () => {
            // when the upload completes
            storage
              .ref('posts')
              .child(doc.id)
              .getDownloadURL()
              .then((url) => {
                db.collection(`posts`).doc(doc.id).set(
                  {
                    postImage: url,
                  },
                  { merge: true }
                );
              });
          }
        );
      }

      console.log('doc: ', doc);

      //* 인풋 초기화
      inputRef.current.value = '';
    },
    [session, imageToPost, removeImage]
  );

  const addImageToPost = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files && e.target.files?.length > 0) {
      reader.readAsDataURL(e.target.files[0]); // ? 이미지의 미리보기 URL을 가져오기
    }

    reader.onload = (readerEvent) => {
      const result = readerEvent.target?.result as string | undefined;
      setImageToPost(result);
    };
    e.target.value = '';
  }, []);

  const onClickImageUpload = useCallback(
    (e: React.MouseEvent) => filepickerRef.current?.click(),
    []
  );

  return (
    <div className="p-2 mt-6 font-medium text-gray-500 bg-white shadow-md rounded-2xl">
      <div className="flex items-center p-4 space-x-4">
        <Image
          src={session?.user?.image!}
          alt="user_image"
          width={40}
          height={40}
          layout="fixed"
          className="rounded-full"
        />
        <form className="flex flex-1" onSubmit={sendPost}>
          <input
            ref={inputRef}
            className="flex-grow h-12 px-5 bg-gray-100 rounded-full focus:outline-none"
            type="text"
            placeholder={`무슨 말이라도 해봐요, ${session?.user?.name}?`}
          />
          <button hidden type="submit">
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col items-center transition transform cursor-pointer filter hover:brightness-110 hover:scale-105"
          >
            <img className="object-contain h-10" src={imageToPost} alt="thumbnail" />
            <p className="text-xs text-center text-red-500">Remove</p>
          </div>
        )}
      </div>

      <div className="flex p-3 border-t justify-evenly">
        <div className="inputIcon">
          <VideoCameraIcon className="text-red-500 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div className="inputIcon" onClick={onClickImageUpload}>
          <CameraIcon className="text-green-400 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input type="file" ref={filepickerRef} onChange={addImageToPost} hidden />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="text-yellow-300 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
