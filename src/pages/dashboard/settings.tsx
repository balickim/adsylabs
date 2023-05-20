import { ReactElement } from 'react';

import DashboardLayout from 'components/Dashboard/Layout';

export default function DashboardPage () {
  return <>settings</>;
};

DashboardPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
};