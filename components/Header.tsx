import React from 'react';
import Image from 'next/image';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  FlagIcon,
  HomeIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import HeaderIcon from './HeaderIcon';

function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center p-2 bg-white lg:px-5">
      {/* Left */}
      <div className="flex items-center ">
        <Image
          src="https://links.papareact.com/5me"
          alt="facebook_logo"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex items-center p-2 ml-2 bg-gray-200 border-2 rounded-full">
          {/* 아이콘 */}
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            className="items-center flex-shrink hidden ml-2 placeholder-gray-500 bg-transparent outline-none md:inline-flex"
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
      <div className="flex items-center justify-end sm:space-x-2">
        {/* 프로필 이미지 */}
        <p className="pr-3 font-semibold whitespace-nowrap">Typemean</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
