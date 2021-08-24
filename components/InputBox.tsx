import React, { MutableRefObject, useCallback, useRef } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/client';
import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { db } from '../firebase';
import firebase from 'firebase';

function InputBox() {
  const [session] = useSession();
  const inputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const filepickerRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const sendPost = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!session) return;
      if (!inputRef.current?.value) return;

      console.log('input-value: ', inputRef.current.value);

      //* Firestore에 저장
      await db.collection('posts').add({
        message: inputRef.current.value,
        name: session.user?.name,
        email: session.user?.email,
        image: session.user?.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      inputRef.current.value = '';
    },
    [session]
  );

  const addImageToPost = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('이미지 올리기 핸들러');
  }, []);

  const onClickImageUpload = useCallback((e: React.MouseEvent) => {
    filepickerRef.current?.click();
  }, []);

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
