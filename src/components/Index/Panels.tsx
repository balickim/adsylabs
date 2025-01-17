import styled from 'styled-components';
import tw, { theme } from 'twin.macro';
import Image from 'next/image';
import { LANDING_IMAGES_PATH } from 'utils/constants';

const StyledSection = styled.div`
  ${tw`px-5`}
`;

const PanelContainer = styled.div`
  ${tw`flex flex-col gap-5`}
  
  @media only screen and (min-width: ${theme`screens.lg`}) {
    ${tw`grid grid-cols-9`}
  }
`;

const Panel = styled.div`
  ${tw`rounded-xl p-5`};
  background: rgba(255, 255, 255, 0.10);
`;

const Panels = () => {
  return (
    <StyledSection id={'how-it-works'}>
      <PanelContainer>

        <Panel className={'lg:col-span-4'}>
          <p className={'text-[#676DFC]'}>Jak możemy Ci pomóc?</p>

          <h3 className={'text-lg my-5'}>
            <p>Zautomatyzuj swój marketing,</p>
            <p>zyskaj czas i zwiększ sprzedaż.</p>
          </h3>

          <p className={'text-gray-400'}>
            W Adsylabs pomagamy Ci nawiązać współpracę z topowymi ekspertami marketingu i reklamy oraz zapewniamy wygodny
            panel do śledzenia wyników wszystkich Twoich kampanii. Zyskaj większą kontrolę, oszczędź czas i skaluj swój biznes!
          </p>
        </Panel>

        <Panel className={'lg:col-span-5 lg:!p-0'}>
          <div className={'relative h-[260px] w-full left-0 top-0 lg:h-full'}>
            <Image
              src={LANDING_IMAGES_PATH.PANEL_1}
              alt={'panel 1'}
              fill
              className={'object-contain lg:object-cover lg:rounded-xl'}
            />
          </div>
        </Panel>

        <Panel className={'lg:col-span-3'}>
          <div className={'flex h-[260px] flex-col justify-center items-center'}>
            <p className={'text-[#FF934F] text-2xl font-bold'}>+120 milionów zł</p>
            <p className={'my-3'}>Budżety na reklamę online</p>
            <p className={'text-center text-gray-400'}>
              O tyle Twoja konkurencja zwiększyła
              budżety na reklamę od 2022 roku.
              Nie pozostań w tyle.
            </p>
          </div>
        </Panel>

        <Panel className={'lg:col-span-3 lg:!p-0'}>
          <div className={'relative h-[400px] w-full left-0 top-0'}>
            <Image
              src={LANDING_IMAGES_PATH.PANEL_2}
              alt={'panel 1'}
              fill
              className={'object-contain lg:object-cover lg:rounded-xl'}
            />
          </div>
        </Panel>

        <Panel className={'lg:col-span-3'}>
          <div className={'flex h-[260px] flex-col justify-center items-center'}>
            <p className={'text-[#676DFC] text-2xl font-bold'}>10 lat</p>
            <p className={'my-3'}>Średni staż naszych specjalistów</p>
            <p className={'text-center text-gray-400'}>
              Wchodzimy we współpracę tylko
              z najlepszymi ekspertami w branży.
              Bez kompromisów.
            </p>
          </div>
        </Panel>

      </PanelContainer>
    </StyledSection>
  );
};

export default Panels;
