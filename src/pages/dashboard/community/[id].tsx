import { ReactElement } from 'react';

import DashboardLayout from 'components/Dashboard/Layout';
import ProfileSpecialist from 'components/Dashboard/ProfileSpecialist';

export default function UserPage () {
  return <ProfileSpecialist canEdit={false} />;
};

UserPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
};