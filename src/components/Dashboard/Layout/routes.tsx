import React from 'react';

import { MdShowChart } from 'react-icons/md';
import { RiDashboardFill } from 'react-icons/ri';
import { TiMessages } from 'react-icons/ti';
import { IoIosPeople, IoIosCalendar } from 'react-icons/io';
import { AiOutlineSetting } from 'react-icons/ai';

export interface IRoutesItem {
  name: string
  path: string
  icon: JSX.Element
  notifications?: string
  disabled?: boolean
}

const routes: Array<IRoutesItem> = [
  {
    name: 'Dashboard',
    path: '',
    icon: <RiDashboardFill size={32} />,
  },
  {
    name: 'Raporty kampanii',
    path: '/reports',
    icon: <MdShowChart size={32} />,
    disabled: true,
  },
  {
    name: 'Wiadomości',
    path: '/messages',
    icon: <TiMessages size={32} />,
    disabled: true,
    notifications: '0',
  },
  {
    name: 'Społeczność',
    path: '/community',
    icon: <IoIosPeople size={32} />,
    disabled: true,
  },
  {
    name: 'Zadania',
    path: '/tasks',
    icon: <IoIosCalendar size={32} />,
    disabled: true,
  },
  {
    name: 'Ustawienia',
    path: '/settings',
    icon: <AiOutlineSetting size={32} />,
  },
];

export default routes;
