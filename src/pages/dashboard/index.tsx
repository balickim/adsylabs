import { ReactElement } from 'react';

import DashboardMainPage from 'components/Dashboard';
import DashboardLayout from 'components/Dashboard/Layout';

export default function DashboardPage () {
  return <DashboardMainPage />;
};

DashboardPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
};