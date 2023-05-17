import Image from 'next/image';
import React from 'react';
import tw from 'twin.macro';
import { useUser } from '@clerk/nextjs';
import { BsArrowRight } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';

import { STATIC } from 'utils/constants';

interface IWidget {
  title: string
  value: number
  imgSrc: string
}

const Widget = ({ title, value, imgSrc }: IWidget) => {
  return <div className={'bg-white rounded-xl'}>
    <div className={'flex h-24 px-10 justify-between items-center'}>
      <div className={'flex flex-col text-xl'}>
        <p className={'text-gray-400'}>{title}</p>
        <p>{value}</p>
      </div>
      <Image
        src={imgSrc}
        alt="graph"
        width={80}
        height={50}
        priority
      />
    </div>
  </div>;
};

const Tile = tw.div`flex flex-col justify-between bg-white rounded-xl p-8`;

const Tasks = () => {
  return <>
    <p className={'text-4xl'}>27 Maj</p>
    <div className={'flex flex-col gap-y-4'}>
      <div className={'flex gap-2 h-12'}>
        <div className={'w-1 bg-secondary'} />
        <div className={'flex flex-col'}>
          <p className={'font-bold'}>Zoom meeting z Alexem</p>
          <p className={'text-gray-400'}>Dzisiaj, 13:00 - 14:00</p>
        </div>
      </div>
      <div className={'flex gap-2 h-12'}>
        <div className={'w-1 bg-secondary'} />
        <div className={'flex flex-col'}>
          <p className={'font-bold'}>Onboarding Michała</p>
          <p className={'text-gray-400'}>Jutro, 10:00 - 11:00</p>
        </div>
      </div>
      <div className={'flex gap-2 h-12'}>
        <div className={'w-1 bg-secondary'} />
        <div className={'flex flex-col'}>
          <p className={'font-bold'}>Start kampanii Marty</p>
          <p className={'text-gray-400'}>2 kwietnia, 15:00 - 16:00 </p>
        </div>
      </div>
    </div>
    <span className={'flex justify-end items-center text-base md:text-xl gap-x-3 text-secondary font-bold cursor-pointer hover:underline'}>
      Zobacz wszystkie zadania <BsArrowRight />
    </span>
  </>;
};

const DashboardMainPage = () => {
  const { user } = useUser();
  return (
    <main className={'grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-10'}>
      <div className={'flex flex-col gap-10'}>
        <Widget
          title={'Aktywne projekty'}
          value={11}
          imgSrc={STATIC.DASHBOARD_GRAPH_1}
        />
        <Widget
          title={'Aktywne projekty'}
          value={11}
          imgSrc={STATIC.DASHBOARD_GRAPH_2}
        />
        <Widget
          title={'Aktywne kampanie'}
          value={16}
          imgSrc={STATIC.DASHBOARD_GRAPH_1}
        />
      </div>
      <Tile>
        <Tasks />
      </Tile>
      <Tile>
        <div className={'flex justify-center'}>
          {user?.profileImageUrl && <Image
            src={user?.profileImageUrl}
            alt="graph"
            width={120}
            height={120}
            className={'rounded-full'}
            priority
          />}
        </div>
        <div className={'flex flex-col items-center justify-center'}>
          <p className={'text-4xl'}>{user?.firstName}</p>
          <span className={'text-xl text-gray-400 flex items-center gap-2'}><FiMapPin /> Warszawa, Polska</span>
        </div>
        <div className={'flex justify-evenly gap-x-3 px-10'}>
          <div className={'flex flex-col items-center'}>
            <p className={'text-gray-400'}>Projekty</p>
            <p className={'text-3xl'}>28</p>
          </div>
          <div className={'flex flex-col items-center'}>
            <p className={'text-gray-400'}>Klienci</p>
            <p className={'text-3xl'}>37</p>
          </div>
        </div>
      </Tile>
      <Tile className={'overflow-x-auto col-span-1 sm:col-span-2 2xl:col-span-3'}>
        <div className={'min-w-[500px]'}>
          <h2 className={'text-2xl'}>Twoje projekty</h2>
        </div>
      </Tile>
    </main>
  );
};

export default DashboardMainPage;
