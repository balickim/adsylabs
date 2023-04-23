import React from 'react';
import tw from 'twin.macro';

import type { NextPage } from 'next';

import { Motion } from 'helpers/framerMotion';
import Layout from 'components/Common/Layout';
import Footer from 'components/Common/Footer';
import Top from 'components/BecomeASpecialist/Top';

export const Main = tw.main`min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-8 flex flex-col`;

const BecomeASpecialistPage: NextPage = () => {
  return (
    <Layout
      meta={{
        title: 'AdsBridge | Zostań specjalistą',
        description: 'Zatrudnij sprawdzonych marketerów do Twojego Biznesu.',
      }}
    >
      <Main>
        <Motion>
          <Top />
        </Motion>
      </Main>
      <Footer />
    </Layout>
  );
};

export default BecomeASpecialistPage;
