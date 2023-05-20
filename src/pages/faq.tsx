import React, { ReactElement } from 'react';

import Layout from 'components/Common/Layout';

export default function FaqPage () {
  return <>
    test
  </>;
}

FaqPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <Layout
      meta={{
        title: 'AdsBridge - automatyzujemy współprace marketingowe',
        description: 'Sprawdź jak automatyzujemy zatrudnianie i zarządzanie sprawdzonymi specjalistami marketingu. Nie znajdziemy kandydata? Nie płacisz.',
      }}
    >
      {page}
    </Layout>
  );
};