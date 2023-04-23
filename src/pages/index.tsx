import React from 'react';
import tw from 'twin.macro';

import type { NextPage } from 'next';

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
import { useRect } from 'hooks/useRect';
import { Motion } from 'helpers/framerMotion';

export const Main = tw.main`min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-8 flex flex-col`;

const HomePage: NextPage = () => {
  const [rect, ref] = useRect<HTMLDivElement>();

  return (
    <Layout
      meta={{
        title: 'AdsBridge | Strona główna',
        description: 'Zatrudnij sprawdzonych marketerów do Twojego Biznesu.',
      }}
    >
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
    </Layout>
  );
};

export default HomePage;
