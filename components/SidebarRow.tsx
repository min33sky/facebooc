import React from 'react';
import Image from 'next/image';

interface ISidebarRow {
  src?: string;
  Icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
  title: string;
}

function SidebarRow({ src, Icon, title }: ISidebarRow) {
  return (
    <div className="flex items-center p-4 space-x-2 cursor-pointer hover:bg-gray-200 rounded-xl ">
      {src && (
        <Image
          src={src}
          alt="profile_image"
          width={30}
          height={30}
          layout="fixed"
          className="rounded-full"
        />
      )}
      {Icon && <Icon className="w-8 h-8 text-blue-500" />}

      <p className="hidden font-medium sm:inline-flex">{title}</p>
    </div>
  );
}

export default SidebarRow;
