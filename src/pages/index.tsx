import { motion } from 'framer-motion';

import type { NextPage } from 'next';
import type { Variants } from 'framer-motion';

import Layout from 'components/Common/Layout';
import Footer from 'components/Common/Footer';
import Top from 'components/Index/Top';
import { Main } from 'components/Index/styled';
import HowItWorks from 'components/Index/HowItWorks';

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
          <HowItWorks />
        </Motion>
      </Main>
      <Footer />
    </Layout>
  );
};

export default HomePage;
