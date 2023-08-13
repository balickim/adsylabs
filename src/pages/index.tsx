import React, { ReactElement, useEffect } from 'react';
import tw from 'twin.macro';
import Head from 'next/head';

import Layout from 'components/Common/Layout';
import { useRect } from 'utils/hooks/useRect';
import { LANDING_IMAGES_PATH } from 'utils/constants';
import { HotJarScript } from 'components/Common/externalScripts';
import Hero from 'components/Index/Hero';
import Panels from 'components/Index/Panels';
import Cards from 'components/Index/Cards';
import AllInOne from 'components/Index/AllInOne';
import Faq from 'components/Index/Faq';
import AdditionalCTA from 'components/Index/AdditionalCTA';
import Footer from 'components/Index/Footer';

const Main = tw.main`flex flex-col bg-[#1C1C28] text-white`;

export default function HomePage () {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rect, ref] = useRect<HTMLDivElement>();
  useEffect( () => {
    document?.querySelector('body')?.classList.add('home-background');
    return () => {
      document?.querySelector('body')?.classList.remove('home-background');
    };
  }, []);

  return (
    <>
      <Head>
        <meta property="og:title" content={'Twój marketing w jednym miejscu'} key="title" />
      </Head>
      <Head>
        <meta property="og:image" content={LANDING_IMAGES_PATH.ALL_IN_ONE_1_COMPRESSED} key="image" />
      </Head>
      <HotJarScript />

      <Main>
        <Hero />

        <Panels />

        <Cards />

        <AllInOne />

        <AdditionalCTA />

        <Faq />

        <Footer />
      </Main>
    </>
  );
};

HomePage.getLayout = function getLayout (page: ReactElement) {
  return (
    <Layout
      meta={{
        title: 'Adsylabs - automatyzujemy współprace marketingowe',
        description: 'Sprawdź jak automatyzujemy zatrudnianie i zarządzanie sprawdzonymi specjalistami marketingu. Nie znajdziemy kandydata? Nie płacisz.',
      }}
    >
      {page}
    </Layout>
  );
};