import React from 'react';

interface IHeaderIcon {
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  active?: boolean;
}

function HeaderIcon({ Icon, active }: IHeaderIcon) {
  return (
    <div className="group active:border-b-2 active:border-blue-500 cursor-pointer md:px-10 sm:h-14 flex items-center md:hover:bg-gray-100 rounded-xl">
      <Icon
        className={`h-5 text-gray-500 group-hover:text-blue-500 text-center sm:h-7 mx-auto ${
          active && `text-blue-500`
        }`}
      />
    </div>
  );
}

export default HeaderIcon;
