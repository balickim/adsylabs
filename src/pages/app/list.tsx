import { getAuth, buildClerkProps, clerkClient } from '@clerk/nextjs/server';
import { GetServerSideProps } from 'next';
import { Clerk } from '@clerk/types';

import Layout from 'components/Common/Layout';

const List = ({ __clerk_ssr_state }: { __clerk_ssr_state: Clerk}) => {
  return <Layout>
    protected list
    <pre>{JSON.stringify(__clerk_ssr_state.user?.publicMetadata, null, 4)}</pre>
  </Layout>;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { userId } = getAuth(ctx.req);

  const user = userId ? await clerkClient.users.getUser(userId) : undefined;

  return { props: { ...buildClerkProps(ctx.req, { user }) } };
};

export default List;