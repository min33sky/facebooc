import React from 'react';
import Image from 'next/image';

interface IContact {
  src: string;
  name: string;
}

function Contact({ src, name }: IContact) {
  return (
    <div className="relative flex items-center p-2 mb-2 space-x-3 cursor-pointer hover:bg-gray-200 rounded-xl">
      <Image
        className="rounded-full"
        src={src}
        alt="profile-image"
        width={50}
        height={50}
        layout="fixed"
        objectFit="cover"
      />
      <p>{name}</p>
      <div className="absolute w-3 h-3 bg-green-400 rounded-full bottom-2 left-7 animate-bounce"></div>
    </div>
  );
}

export default Contact;
