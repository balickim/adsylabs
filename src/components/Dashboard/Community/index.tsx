import React, { useEffect, useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import tw from 'twin.macro';

import { api } from 'utils/api';
import { Profiles } from 'utils/helpers/skeletonLoaders';
import Card from 'components/Dashboard/Community/Card';
import Filters from 'components/Common/ui/filters';
import Pagination from 'components/Common/ui/pagination';

const Title = tw.h2`text-4xl text-center my-5 w-4/5`;
const SubTitle = tw.p`text-xl text-center w-3/6`;

const calculatePages = (total: number, take: number) => {
  return Math.ceil(total / take);
};

export default function Community () {
  const [take] = useState(5);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(1);
  const { isLoaded } = useAuth();

  const {
    data,
    isLoading,
  } = api.community.getSpecialists.useQuery(
    {
      take,
      skip,
      orderBy: {},
      where: {},
    }, { enabled: isLoaded, retry: 3 });

  useEffect(() => {
    if (data?.meta?.total) setTotal(data?.meta?.total);
  }, [data?.meta?.total]);

  return (
    <div>
      <div className={'flex items-center flex-col w-full mb-10'}>
        <Title>Nawiąż kontakt z naszymi ekspertami</Title>
        <SubTitle>Zdefiniuj swoje potrzeby i rozpocznij konwerację z Twoimi nowymi ekspertami marketingu internetowego.</SubTitle>
      </div>

      <div className={'flex'}>
        <div className={'w-full flex flex-col gap-10'}>
          {(isLoading || !data)
            ? <Profiles count={5} />
            : <>{data.data.map((element) => <Card
              key={element.id}
              specialist={element}
            />
            )}</>
          }
        </div>

        <Filters />
      </div>

      <div className={'flex justify-center mt-10'}>
        <Pagination
          pages={calculatePages(total, take)}
          skip={skip}
          setSkip={setSkip}
        />
      </div>
    </div>
  );
}