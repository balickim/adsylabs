import { ReactElement } from 'react';

import DashboardLayout from 'components/Dashboard/Layout';
import Settings from 'components/Dashboard/settings';

export default function SettingsPage () {
  return <Settings />;
};

SettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
};