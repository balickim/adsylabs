import { getAuth, buildClerkProps, clerkClient } from '@clerk/nextjs/server';
import { GetServerSideProps } from 'next';
import { Clerk } from '@clerk/types';

import Layout from 'components/Common/Layout';

const List = ({ __clerk_ssr_state }: { __clerk_ssr_state: Clerk}) => {
  return <Layout>
    protected list
  </Layout>;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  // if (!userId) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: '/sign-in',
  //     },
  //     props:{},
  //   };
  // }
  const { userId } = getAuth(ctx.req);

  const user = userId ? await clerkClient.users.getUser(userId) : undefined;

  return { props: { ...buildClerkProps(ctx.req, { user }) } };
};

export default List;