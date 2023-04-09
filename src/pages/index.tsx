import { motion } from 'framer-motion';

import type { NextPage } from 'next';
import type { Variants } from 'framer-motion';

import Layout from 'components/Common/Layout';
import Footer from 'components/Common/Footer';
import Top from 'components/Index/Top';
import { Main } from 'components/Index/styled';
import Central from 'components/Index/Central';

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

const HomePage: NextPage = () => {
  return (
    <Layout
      meta={{
        title: 'AdsBridge | Strona główna',
        description: 'Zatrudnij sprawdzonych marketerów do Twojego Biznesu.',
      }}
    >
      <Main>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants}
        >
          <Top />
        </motion.div>

        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introHeaderVariants}
        >
          <Central />
        </motion.div>
      </Main>
      <Footer />
    </Layout>
  );
};

export default HomePage;
