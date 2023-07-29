import { ReactElement } from 'react';

import DashboardLayout from 'components/Dashboard/Layout';
import Messages from 'components/Dashboard/Messages';

export default function MessagesPage () {
  return <Messages />;
};

MessagesPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
};