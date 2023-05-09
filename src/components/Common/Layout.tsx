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
      <div className={'2xl:max-w-[1400px] 2xl:ml-auto 2xl:mr-auto 2xl:left-0 2xl:right-0'}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
