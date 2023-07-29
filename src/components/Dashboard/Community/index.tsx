import React from 'react';
import { useAuth } from '@clerk/nextjs';
import tw from 'twin.macro';

import { api } from 'utils/api';
import { ProfileLoader } from 'utils/helpers/skeletonLoaders';
import Card from 'components/Dashboard/Community/Card';

const Title = tw.h2`text-5xl text-center my-5 w-4/5`;
const SubTitle = tw.p`text-xl text-center w-3/6`;

export default function Community () {
  const { isLoaded } = useAuth();
  const {
    data,
    isLoading,
  } = api.community.getSpecialists.useQuery(
    {
      take: 3,
      skip: 0,
      orderBy: {},
      where: {},
    }, { enabled: isLoaded, retry: 3 });

  if (isLoading || !data) return <ProfileLoader />;

  return (
    <div>
      <div className={'flex items-center flex-col w-full mb-10'}>
        <Title>Nawiąż kontakt z naszymi ekspertami</Title>
        <SubTitle>Zdefiniuj swoje potrzeby i rozpocznij konwerację z Twoimi nowymi ekspertami marketingu internetowego.</SubTitle>
      </div>

      <div className={'flex flex-col gap-10'}>
        {data.map((element) => {
          return (
            <Card
              key={element.id}
              specialist={element}
            />
          );
        })}
      </div>
    </div>
  );
}