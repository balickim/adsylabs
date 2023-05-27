import React, { ReactElement } from 'react';
import tw from 'twin.macro';

import { Motion } from 'utils/helpers/framerMotion';
import Layout from 'components/Common/Layout';
import Footer from 'components/Common/Footer';
import Top from 'components/JoinUs/Top';
import Why from 'components/JoinUs/Why';
import MoreBenefits from 'components/JoinUs/MoreBenefits';
import HowItWorks from 'components/JoinUs/HowItWorks';
import Comparison from 'components/JoinUs/Comparison';
import Bottom from 'components/JoinUs/Bottom';
import Video from 'components/JoinUs/Video';
import { HotJarScript } from 'components/Common/externalScripts';
import { FadeGradientContainer } from 'utils/helpers';
import { ExcerptCta, SpecialistExcerpt } from 'components/Faq/Excerpts';

export const Main = tw.main`min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-8 flex flex-col`;
const ExcerptContainer = tw.div`h-[500px]`;

export default function JoinUsPage () {
  return (
    <>
      <HotJarScript />
      <Main>
        <Motion>
          <Top />
        </Motion>

        <Motion>
          <Why />
        </Motion>

        <Motion>
          <MoreBenefits />
        </Motion>

        <Motion>
          <Video />
        </Motion>

        <Motion>
          <HowItWorks />
        </Motion>

        <Motion>
          <FadeGradientContainer
            fadeHeight={300}
            fadeFrom={1.5}
            fadeTo={0}
          >
            <ExcerptContainer>
              <SpecialistExcerpt />
            </ExcerptContainer>
          </FadeGradientContainer>
          <ExcerptCta href={'join-us/faq'} />
        </Motion>

        <Motion>
          <Comparison />
        </Motion>

        <Motion>
          <Bottom />
        </Motion>
      </Main>
      <Footer />
    </>
  );
};

JoinUsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <Layout
      meta={{
        title: 'AdsBridge | Zostań specjalistą',
        description: 'Sprawdź jak automatyzujemy pozyskiwanie nowych klientów na usługi marketingowe i zarządzanie projektami. Skorzystaj z 14 dniowego okresu próbnego.',
      }}
    >
      {page}
    </Layout>
  );
};