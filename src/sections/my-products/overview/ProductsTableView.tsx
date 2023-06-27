import React, { useMemo } from 'react';
import { Card, TableContainer, Paper, Stack, Chip, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import CardTable from '@components/table/CardTable';
import CustomTable from '@components/table/Table';
import ProductBox from '@sections/my-products/components/Product';
import Pagination from '@sections/sales-tracker/SalesTrackerPagination';

import { ProductOverview, TestStatus } from '../types';
import TestStatusChip from './TestStatusChip';

export default function ProductsTableView() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const columns = useMemo(
    () => [
      {
        id: 'product',
        label: isMobile ? '' : 'Product',
        render: (row: any) => (
          <ProductBox border={false} product={row} sx={isMobile ? { padding: '12px 16px' } : {}} />
        ),
      },
      {
        id: 'price',
        label: 'Price',
        render: (row: any) => `£${row.price.toFixed(2)}`,
      },
      {
        id: 'salesToday',
        label: 'Sales Today',
        render: (row: any) => `£${row.salesToday.toFixed(2)}`,
      },
      {
        id: 'salesYesterday',
        label: 'Sales Yesterday',
        render: (row: any) => `£${row.salesYesterday.toFixed(2)}`,
      },
      {
        id: 'status',
        label: 'Status',
        render: (row: any) => <TestStatusChip status={row.status} />,
      },
    ],
    [isMobile]
  );

  return (
    <>
      {isMobile ? (
        <CardTable columns={columns} dataSource={dataSource} divider />
      ) : (
        <Card sx={{ padding: '24px' }}>
          <Stack spacing={2}>
            <Pagination sortBy={sortBy} />
            <TableContainer component={Paper}>
              <CustomTable columns={columns} dataSource={dataSource} sx={{ minWidth: 700 }} />
            </TableContainer>
          </Stack>
        </Card>
      )}
    </>
  );
}

const sortBy = [
  { id: 1, name: 'Saved date' },
  { id: 2, name: 'Unit sold' },
  { id: 3, name: 'Revenue day' },
  { id: 4, name: 'Last tracking' },
];

const dataSource: ProductOverview[] = [
  {
    name: 'Carrigan Tracksuit',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
    savedDate: '15 Mar 2023',
    lastTrack: '22 Mar 2023',
    price: 159,
    salesToday: 10992.99,
    salesYesterday: 10992.99,
    status: TestStatus.TESTED,
  },
  {
    name: 'Carrigan Tracksuit',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
    savedDate: '15 Mar 2023',
    lastTrack: '22 Mar 2023',
    price: 159,
    salesToday: 10991242.21,
    salesYesterday: 220991242.21,
    status: TestStatus.TESTED,
  },
  {
    name: 'Carrigan Tracksuit',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
    savedDate: '15 Mar 2023',
    lastTrack: '22 Mar 2023',
    price: 321,
    salesToday: 220991242.21,
    salesYesterday: 10991242.21,
    status: TestStatus.SCHEDULED,
  },
  {
    name: 'Carrigan Tracksuit',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
    savedDate: '15 Mar 2023',
    lastTrack: '22 Mar 2023',
    price: 212,
    salesToday: 10242.45,
    salesYesterday: 10242.45,
    status: TestStatus.TESTING,
  },
  {
    name: 'Carrigan Tracksuit',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
    savedDate: '15 Mar 2023',
    lastTrack: '22 Mar 2023',
    price: 142,
    salesToday: 50242.45,
    salesYesterday: 50242.45,
    status: TestStatus.TESTING,
  },
];
