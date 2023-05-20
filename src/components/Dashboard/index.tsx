import Image from 'next/image';
import React from 'react';
import tw from 'twin.macro';
import { useUser } from '@clerk/nextjs';
import { BsArrowRight } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';

import { DASHBOARD_IMAGES_PATH } from 'utils/constants';
import { CtaButton, StyledFaSpinner } from 'components/Common/styled';

interface IWidget {
  title: string
  value: number
  imgSrc: string
  type: 'primary' | 'secondary'
}

const Widget = ({ title, value, imgSrc, type }: IWidget) => {
  return <div className={`rounded-xl ${type === 'primary' ? 'bg-secondary' : 'bg-white'}`}>
    <div className={'flex h-24 px-10 justify-between items-center'}>
      <div className={'flex flex-col text-xl'}>
        <p className={'text-gray-400'}>{title}</p>
        <p className={`text-2xl ${type === 'primary' ? 'text-gray-200' : 'text-black'}`}>{value}</p>
      </div>
      <Image
        src={imgSrc}
        alt="graph"
        width={80}
        height={50}
      />
    </div>
  </div>;
};

const Tile = tw.div`flex flex-col justify-between bg-white rounded-2xl p-8 min-h-[20rem] lg:min-h-0`;

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
      Zobacz wszystkie <BsArrowRight />
    </span>
  </>;
};

const DashboardMainPage = () => {
  const { user } = useUser();

  return (
    <main className={'grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-10'}>
      <div className={'flex flex-col gap-10'}>
        <Widget
          type={'secondary'}
          title={'Aktywne projekty'}
          value={11}
          imgSrc={DASHBOARD_IMAGES_PATH.GRAPH_1}
        />
        <Widget
          type={'primary'}
          title={'Pozycja w wyszukiwarce'}
          value={2}
          imgSrc={DASHBOARD_IMAGES_PATH.GRAPH_2}
        />
        <Widget
          type={'secondary'}
          title={'Aktywne kampanie'}
          value={16}
          imgSrc={DASHBOARD_IMAGES_PATH.GRAPH_3}
        />
      </div>
      <Tile>
        <Tasks />
      </Tile>
      <Tile>
        <div className={'flex justify-center'}>
          {user?.profileImageUrl ? <Image
            src={user?.profileImageUrl}
            alt="graph"
            width={120}
            height={120}
            className={'rounded-full'}
            priority
          /> : <StyledFaSpinner size={64} />}
        </div>
        <div className={'flex flex-col items-center justify-center'}>
          <p className={'text-4xl'}>{user?.firstName}</p>
          <span className={'text-base text-gray-400 flex items-center gap-2'}><FiMapPin /> Warszawa, Polska</span>
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
        <section className={'min-w-[500px]'}>
          <h2 className={'text-2xl'}>Twoje projekty</h2>
          <div className={'text-end my-3 text-gray-300'}>Konwersje</div>
          <div className={'flex flex-col gap-6'}>
            <div className={'flex items-center'}>
              <div className={'w-16'}>
                <Image
                  width={40}
                  height={40}
                  src={DASHBOARD_IMAGES_PATH.PLACEHOLDER_AVATAR_1}
                  alt="placeholder_dashboard_1"
                />
              </div>
              <div className={'flex flex-col'}>
                <p>Kampania Google Ads Alexa</p>
                <p className={'text-gray-300'}>Dzisiaj, 16:36</p>
              </div>
              <div className={'ml-auto'}>
                <div className={'bg-green-200 rounded text-green-600 p-1'}>
                  <p>+50</p>
                </div>
              </div>
            </div>
            <div className={'flex items-center'}>
              <div className={'w-16'}>
                <Image
                  width={40}
                  height={40}
                  src={DASHBOARD_IMAGES_PATH.PLACEHOLDER_AVATAR_2}
                  alt="placeholder_dashboard_1"
                />
              </div>
              <div className={'flex flex-col'}>
                <p>PPC sklep e-commerce Laury</p>
                <p className={'text-gray-300'}>Dzisiaj, 08:49</p>
              </div>
              <div className={'ml-auto'}>
                <div className={'bg-green-200 rounded text-green-600 p-1'}>
                  <p>+4</p>
                </div>
              </div>
            </div>
            <div className={'flex items-center'}>
              <div className={'w-16'}>
                <Image
                  width={40}
                  height={40}
                  src={DASHBOARD_IMAGES_PATH.PLACEHOLDER_AVATAR_3}
                  alt="placeholder_dashboard_1"
                />
              </div>
              <div className={'flex flex-col'}>
                <p>Rejestracje na webinar Lucasa</p>
                <p className={'text-gray-300'}>Wczoraj, 14:36</p>
              </div>
              <div className={'ml-auto'}>
                <div className={'bg-green-200 rounded text-green-600 p-1'}>
                  <p>+36</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Tile>
      <Tile className={'col-span-1 sm:col-span-2 2xl:col-span-3'}>
        <div className={'flex justify-between items-center'}>
          <div className={'flex flex-col gap-6'}>
            <p className={'text-4xl'}>Dołącz do społecznosci Slack!</p>
            <p className={'text-gray-400'}>
              Dołącz do grona specjalistów, rozmawiaj, nawiązuj kontakty i wymieniaj się spostrzeżeniami!
            </p>
          </div>
          <CtaButton className={'w-32 flex justify-center items-center gap-2'} version={'primary'}>Dołącz <BsArrowRight /></CtaButton>
        </div>
      </Tile>
    </main>
  );
};

export default DashboardMainPage;
