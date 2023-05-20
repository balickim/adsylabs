import React, { ReactElement } from 'react';
import tw from 'twin.macro';

import Layout from 'components/Common/Layout';
import Footer from 'components/Common/Footer';
import Top from 'components/Index/Top';
import Statistics from 'components/Index/Statistics';
import HowItWorks from 'components/Index/HowItWorks';
import Video from 'components/Index/Video';
import ExpertSocialMedia from 'components/Index/ExpertSocialMedia';
import Pricing from 'components/Index/Pricing';
import Comparison from 'components/Index/Comparison';
import FloatingButton from 'components/Common/FloatingButton';
import { useRect } from 'utils/hooks/useRect';
import { Motion } from 'utils/helpers/framerMotion';
import { HotJarScript } from 'components/Common/externalScripts';

const Main = tw.main`flex flex-col px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32`;

export default function HomePage () {
  const [rect, ref] = useRect<HTMLDivElement>();

  return (
    <>
      <HotJarScript />
      <Main>
        <Motion>
          <Top />
        </Motion>

        <Motion>
          <Statistics />
        </Motion>

        <Motion>
          <HowItWorks />
        </Motion>

        <Motion>
          <ExpertSocialMedia />
        </Motion>

        <Motion>
          <Video />
        </Motion>

        <Motion>
          <Comparison />
        </Motion>

        <Motion>
          <Pricing innerRef={ref} />
        </Motion>

      </Main>
      <Footer />
      <FloatingButton pricingPosition={rect} />
    </>
  );
};

HomePage.getLayout = function getLayout (page: ReactElement) {
  return (
    <Layout
      meta={{
        title: 'AdsBridge - automatyzujemy współprace marketingowe',
        description: 'Sprawdź jak automatyzujemy zatrudnianie i zarządzanie sprawdzonymi specjalistami marketingu. Nie znajdziemy kandydata? Nie płacisz.',
      }}
    >
      {page}
    </Layout>
  );
};