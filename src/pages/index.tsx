import React from 'react';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
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

const introHeaderVariants: Variants = {
  hide: {
    opacity: 0,
    y: -40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const Motion = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hide"
    whileInView="show"
    variants={introHeaderVariants}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export const Main = tw.main`min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-8 flex flex-col`;

const HomePage: NextPage = () => {
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
          <Pricing />
        </Motion>

      </Main>
      <Footer />
    </Layout>
  );
};

export default HomePage;
