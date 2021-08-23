import React from 'react';
import Image from 'next/image';
import {
  FlagIcon,
  HomeIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from '@heroicons/react/solid';
import HeaderIcon from './HeaderIcon';

function Header() {
  return (
    <div className="flex items-center lg:px-5 sticky top-0 z-50 bg-white p-2">
      {/* Left */}
      <div className="flex items-center ">
        <Image
          src="https://links.papareact.com/5me"
          alt="facebook_logo"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center border-2 rounded-full bg-gray-200 p-2">
          {/* 아이콘 */}
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            placeholder="Search Facebooc"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
    </div>
  );
}

export default Header;
