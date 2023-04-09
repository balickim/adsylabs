import Head from 'next/head';
import { Navbar } from 'components/Common/Navbar';

interface ILayoutMeta {
  title?: string;
  description?: string;
}

interface IAuthProps {
  meta?: ILayoutMeta;
  children?: React.ReactNode;
}

const Layout = ({ meta, children }: IAuthProps) => {
  return (
    <div>
      <Head>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
      </Head>

      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
