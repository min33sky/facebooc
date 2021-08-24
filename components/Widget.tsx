import { DotsHorizontalIcon, SearchIcon, VideoCameraIcon } from '@heroicons/react/solid';
import React from 'react';
import Contact from './Contact';

const contacts = [
  {
    name: 'Sonny Sangha',
    src: 'https://links.papareact.com/zof',
  },
  {
    name: 'Elon Musk',
    src: 'https://links.papareact.com/4zn',
  },
  {
    name: 'Zeff Bezoz',
    src: 'https://links.papareact.com/k2j',
  },
  {
    name: 'Mark Zuckerberg',
    src: 'https://links.papareact.com/xql',
  },
  {
    name: 'Bill Gates',
    src: 'https://links.papareact.com/4u4',
  },
  {
    name: 'Harry Potter',
    src: 'https://links.papareact.com/d0c',
  },
];

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
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widget;
