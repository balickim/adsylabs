import { useState } from 'react';
import { UserProfile } from '@clerk/nextjs';

import Navbar from 'components/Dashboard/Layout/navbar';
import ProfileSpecialist from 'components/Dashboard/ProfileSpecialist';
import Menu from 'components/Dashboard/settings/Menu';

export default function Settings () {
  const [item, setItem] = useState(0);
  return (
    <>
      <Navbar text={'Ustawienia'} />
      <Menu item={item} setItem={setItem} />

      {item === 0 ? <ProfileSpecialist canEdit={true} /> : null}

      {item === 2 ? <UserProfile /> : null}
    </>
  );
}