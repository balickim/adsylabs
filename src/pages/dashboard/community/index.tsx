import { ReactElement } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import DashboardLayout from 'components/Dashboard/Layout';
import Community from 'components/Dashboard/Community';

export default function CommunityPage () {
  return <ErrorBoundary
    fallbackRender={fallbackRender}
  >
    <Community />
  </ErrorBoundary>;
};

CommunityPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
};

function fallbackRender ({ error }: { error: { message: string } }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}