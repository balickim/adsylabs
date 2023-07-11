import React, { ReactElement, useEffect } from 'react';
import tw from 'twin.macro';
import Head from 'next/head';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

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
import { LANDING_IMAGES_PATH } from 'utils/constants';

export const Main = tw.main`min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-8 flex flex-col`;
const ExcerptContainer = tw.div`h-[500px]`;

export default function JoinUsPage () {
  const { query } = useRouter();
  useEffect(() => {
    if (query.error) {
      if (query.error === 'P2002') {
        toast('To konto jest już w użyciu.', { duration: 6000, icon: '👏' });
      } else {
        toast(query.error as string);
      }
    }
  }, [query]);

  return (
    <>
      <Head>
        <meta property="og:image" content={LANDING_IMAGES_PATH.SPECIALISTS_CTA_2} />
      </Head>
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
        title: 'Adsylabs | Zostań specjalistą',
        description: 'Sprawdź jak automatyzujemy pozyskiwanie nowych klientów na usługi marketingowe i zarządzanie projektami. Skorzystaj z 14 dniowego okresu próbnego.',
      }}
    >
      {page}
    </Layout>
  );
};