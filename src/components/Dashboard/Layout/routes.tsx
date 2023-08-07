import React from 'react';

import { MdShowChart } from 'react-icons/md';
import { RiDashboardFill } from 'react-icons/ri';
import { TiMessages } from 'react-icons/ti';
import { IoIosCalendar, IoIosPeople } from 'react-icons/io';
import { AiOutlineSetting } from 'react-icons/ai';
import { ROLES } from '@prisma/client';

export interface IRoutesItem {
  name: string
  path: string
  icon: JSX.Element
  notifications?: number | string
  disabled?: boolean
}

interface IGetRoutes {
  role?: ROLES
  messages?: number
}

export function getRoutes ({ role, messages }: IGetRoutes): IRoutesItem[] {
  const isLoading = (!role || (messages !== 0));
  return [
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
      notifications: isLoading ? '-' : messages.toString(),
    },
    {
      name: 'Społeczność',
      path: role === 'CUSTOMER' ? '/community' : '/community#',
      icon: <IoIosPeople size={32} />,
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
}