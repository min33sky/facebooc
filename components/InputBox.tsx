import React, { useCallback } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/client';

function InputBox() {
  const [session] = useSession();

  const sendPost = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            className="flex-grow h-12 px-5 bg-gray-100 rounded-full focus:outline-none"
            type="text"
            placeholder={`무슨 말이라도 해봐요, ${session?.user?.name}?`}
          />
          <button hidden type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputBox;
