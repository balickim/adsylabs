import type { NextPage } from 'next';
import Layout from 'components/Common/Layout';
import PricingComponent from 'components/Pricing';

const Pricing: NextPage = () => {
  return (
    <Layout
      meta={{
        title: 'AdsBridge | Cennik',
        description:
          'Każdy specjalista polecany przez AdsBridge został dokładnie sprawdzony pod kątem wyników, jakie dostarcza.',
      }}
    >
      <PricingComponent />
    </Layout>
  );
};

export default Pricing;
