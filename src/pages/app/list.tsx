import { getAuth, buildClerkProps, clerkClient } from '@clerk/nextjs/server';
import { GetServerSideProps } from 'next';
import { Clerk } from '@clerk/types';

import Layout from 'components/Common/Layout';
import { api } from 'utils/api';

const List = ({ __clerk_ssr_state }: { __clerk_ssr_state: Clerk}) => {
  const { data } = api.profile.getUsers.useQuery(undefined, { refetchOnWindowFocus: true });

  return <Layout>
    <pre>{JSON.stringify(data, null, 4)}</pre>
  </Layout>;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { userId } = getAuth(ctx.req);
  const user = userId ? await clerkClient.users.getUser(userId) : undefined;

  if (user?.publicMetadata.role === 'admin') {
    return { props: { ...buildClerkProps(ctx.req, { user }) } };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props:{},
    };
  }
};

export default List;