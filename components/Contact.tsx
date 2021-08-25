import React from 'react';
import Image from 'next/image';

interface IContact {
  src: string;
  username: string;
}

/**
 * 연락처 목록
 * @param src 이미지 소스
 * @param username 회원 이름
 * @returns
 */
function Contact({ src, username }: IContact) {
  return (
    <div className="relative flex items-center p-2 mb-2 space-x-3 cursor-pointer hover:bg-gray-200 rounded-xl">
      <Image
        className="rounded-full"
        src={src}
        alt="contact-profile-image"
        width={50}
        height={50}
        layout="fixed"
        objectFit="cover"
      />

      <p>{username}</p>

      <div className="absolute w-3 h-3 bg-purple-500 rounded-full bottom-2 left-7 animate-bounce"></div>
    </div>
  );
}

export default Contact;
