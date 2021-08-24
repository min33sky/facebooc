import {
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
  DesktopComputerIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import { useSession } from 'next-auth/client';
import React from 'react';
import SidebarRow from './SidebarRow';

function Sidebar() {
  const [session] = useSession();

  return (
    <div className="p-2  max-w-[600px] xl:max-w-[300px]">
      <SidebarRow src={session?.user?.image!} title={session?.user?.name!} />
      <SidebarRow Icon={UsersIcon} title="친구" />
      <SidebarRow Icon={UserGroupIcon} title="그룹" />
      <SidebarRow Icon={ShoppingBagIcon} title="상점" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="이벤트" />
      <SidebarRow Icon={ClockIcon} title="과거의 오늘" />
      <SidebarRow Icon={ChevronDownIcon} title="더 보기" />
    </div>
  );
}

export default Sidebar;
