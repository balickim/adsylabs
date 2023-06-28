import React from 'react';
import tw from 'twin.macro';
import { FaCheck } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';

import { twConfig } from 'utils/helpers/tailwind';

const StyledSection = tw.section`mt-16 md:mt-32`;
const Title = tw.h1`text-2xl lg:text-3xl xl:text-4xl tracking-tight text-gray-900 text-center mb-16`;

const Table = tw.table`
  table-auto block overflow-x-auto whitespace-nowrap text-xs 
  lg:min-w-[48rem] lg:text-base lg:table lg:table-fixed lg:ml-auto lg:mr-auto
`;
const Thead = tw.thead`bg-primary`;
const HeaderRow = tw.tr`w-24`;
const Tbody = tw.tbody``;
const Th = tw.th`py-2 text-white`;
const Tr = tw.tr`leading-8`;
const TdLeft = tw.td`pl-5`;
const AssetCenter = tw.div`flex justify-center`;
const TdTextCenter = tw.td`text-center`;

const Comparison = () => {
  const ICON_SIZE = 16;
  const ICON_CLOSE_SIZE = 30;
  const ICON_COLOR = twConfig?.theme?.colors?.primary as string;

  return (
    <StyledSection id={'comparison'}>
      <Title>
        Ty dostarczasz wyniki, my zajmujemy się resztą
      </Title>

      <div className={'!flex !justify-center'}>
        <Table>
          <Thead>
            <HeaderRow className={'!items-start'}>
              <Th className={'text-left pl-5'}>
                Usługi
              </Th>
              <Th>

              </Th>
              <Th className={'font-bold'}>
                Adsylabs
              </Th>
            </HeaderRow>
          </Thead>
          <Tbody>
            <Tr className={'bg-gray-50'}>
              <TdLeft>Zespół sprzedażowy, marketing</TdLeft>
              <TdTextCenter>30 000 zł / miesięcznie</TdTextCenter>
              <td><AssetCenter><FaCheck size={ICON_SIZE} color={ICON_COLOR} /></AssetCenter></td>
            </Tr>
            <Tr>
              <TdLeft>CRM</TdLeft>
              <TdTextCenter>300 zł / miesięcznie</TdTextCenter>
              <td><AssetCenter><FaCheck size={ICON_SIZE} color={ICON_COLOR} /></AssetCenter></td>
            </Tr>
            <Tr className={'bg-gray-50'}>
              <TdLeft>Automatyczne raportowane wyników</TdLeft>
              <td><AssetCenter><GrFormClose size={ICON_CLOSE_SIZE} /></AssetCenter></td>
              <td><AssetCenter><FaCheck size={ICON_SIZE} color={ICON_COLOR} /></AssetCenter></td>
            </Tr>
            <Tr>
              <TdLeft>Integracje z kontami reklamowymi</TdLeft>
              <TdTextCenter>Czasochłonne</TdTextCenter>
              <td><AssetCenter><FaCheck size={ICON_SIZE} color={ICON_COLOR} /></AssetCenter></td>
            </Tr>
            <Tr className={'bg-gray-50'}>
              <TdLeft>Wsparcie w pracy z klientem</TdLeft>
              <td><AssetCenter><GrFormClose size={ICON_CLOSE_SIZE} /></AssetCenter></td>
              <td><AssetCenter><FaCheck size={ICON_SIZE} color={ICON_COLOR} /></AssetCenter></td>
            </Tr>
            <Tr>
              <TdLeft></TdLeft>
              <TdTextCenter className={'min-w-[13rem] lg:min-w-auto'}>ponad 30 tys zł/mies. + czas</TdTextCenter>
              <TdTextCenter className={'font-bold text-primary'}>Wszystko w pakiecie</TdTextCenter>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </StyledSection>
  );
};

export default Comparison;
