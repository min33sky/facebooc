import { DotsHorizontalIcon, SearchIcon, VideoCameraIcon } from '@heroicons/react/solid';
import React from 'react';
import Contact from './Contact';

const contacts = [
  {
    username: 'Sonny Sangha',
    src: 'https://links.papareact.com/zof',
  },
  {
    username: 'Elon Musk',
    src: 'https://links.papareact.com/4zn',
  },
  {
    username: 'Zeff Bezoz',
    src: 'https://links.papareact.com/k2j',
  },
  {
    username: 'Mark Zuckerberg',
    src: 'https://links.papareact.com/xql',
  },
  {
    username: 'Bill Gates',
    src: 'https://links.papareact.com/4u4',
  },
  {
    username: 'Harry Potter',
    src: 'https://links.papareact.com/d0c',
  },
];

/**
 * 우측 사이드 연락처 위젯
 * @returns
 */
function Widget() {
  return (
    <div className="flex-col hidden p-2 mt-5 lg:flex w-60">
      <div className="flex items-center justify-between mb-5 text-gray-500">
        <h2 className="text-2xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} username={contact.username} />
      ))}
    </div>
  );
}

export default Widget;
