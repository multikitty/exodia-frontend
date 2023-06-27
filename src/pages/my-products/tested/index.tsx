import Head from 'next/head';
import { Container, Stack } from '@mui/material';

import DashboardLayout from '@layouts/dashboard';
import AnimatedContainer from '@components/animated-container';
import { useSettingsContext } from '@components/settings';
import TestedProducts from '@sections/my-products/tested/TestedProducts';
import { TestedProduct } from '@sections/my-products/types';

export default function TestedProductsPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <AnimatedContainer>
      <Head>
        <title> Tested | Exodias</title>
      </Head>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Stack spacing={3}>
          <TestedProducts title="Today" products={products_today} />
          <TestedProducts title="Yesterday" products={[]}  />
          <TestedProducts title="7 Days Ago" products={products_today}  />
        </Stack>
      </Container>
    </AnimatedContainer>
  );
}

TestedProductsPage.getLayout = (page: React.ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

const products_today: TestedProduct[] = [
  {
    url: 'stubblead...',
    date: '23 Mar 2023',
    person: 'Luke Dalton',
    markets: [{ code: 'IT', value: 'Italy' }],
    media: 'Facebook',
    status: 'ready',
  },
  {
    url: 'stubblead...',
    date: '23 Mar 2023',
    person: null,
    markets: [{ code: 'US', value: 'United State' }],
    media: null,
    store: 'scaling100...',
    status: 'progress',
  },
  {
    url: 'stubblead...',
    date: '23 Mar 2023',
    person: null,
    markets: [{ code: 'IT', value: 'Italy' }],
    media: 'TikTok',
    store: 'scaling100...',
    status: null,
  },
  {
    url: 'stubblead...',
    date: '23 Mar 2023',
    person: 'Millan Itan',
    markets: [{ code: 'IT', value: 'Italy' }],
    media: 'Facebook',
    status: 'ready',
  },
];
