import { Card, CardContent, CardHeader, Chip, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import ProductBox from '@sections/my-products/components/Product';
import { BaseProduct } from '../types';

const BoardTitle = ({ title, chip }: { title: string; chip: number }) => (
  <Typography variant="subtitle1">
    {title} <Chip label={chip} sx={{ borderRadius: 1 }} />
  </Typography>
);

const Category = styled(Card)(() => ({
  minWidth: '420px',
  width: '420px',
  height: 'fit-content',
}));

export default function ProductBoardView() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      spacing={2}
      mt={4}
      sx={{ paddingBottom: '24px', overflow: 'auto' }}
    >
      {/* Saved Products */}
      <Category>
        <CardHeader title={<BoardTitle title="Saved Products" chip={9} />} />
        <CardContent>
          <Stack spacing={2}>
            {products.map((row, idx) => (
              <ProductBox key={idx} product={row} />
            ))}
          </Stack>
        </CardContent>
      </Category>

      {/* Scheduled */}
      <Category>
        <CardHeader title={<BoardTitle title="Scheduled" chip={5} />} />
        <CardContent>
          <Stack spacing={2}>
            {products2.map((row, idx) => (
              <ProductBox key={idx} product={row} />
            ))}
          </Stack>
        </CardContent>
      </Category>

      {/* Tested */}
      <Category>
        <CardHeader title={<BoardTitle title="Tested" chip={8} />} />
        <CardContent>
          <Stack spacing={2}>
            {products.map((row, idx) => (
              <ProductBox key={idx} product={row} />
            ))}
          </Stack>
        </CardContent>
      </Category>
    </Stack>
  );
}

const products: BaseProduct[] = [
  {
    name: 'Homerton Crew Tracksuit - Black',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
  },
  {
    name: 'Homerton Crew Tracksuit - Black',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
  },
  {
    name: 'Homerton Crew Tracksuit - Black',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
  },
  {
    name: 'Homerton Crew Tracksuit - Black',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
  },
  {
    name: 'Homerton Crew Tracksuit - Black',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
  },
  {
    name: 'Homerton Crew Tracksuit - Black',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
  },
  {
    name: 'Homerton Crew Tracksuit - Black',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
  },
];

const products2: BaseProduct[] = [
  {
    name: 'Homerton Crew Tracksuit - Black',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
  },
  {
    name: 'Homerton Crew Tracksuit - Black',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
  },
  {
    name: 'Homerton Crew Tracksuit 222 - Black',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
  },
  {
    name: 'Homerton Crew Tracksuit - Black',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
  },
  {
    name: 'Homerton Crew Tracksuit - Black',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
  },
  {
    name: 'Homerton Crew Tracksuit - Black',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
  },
  {
    name: 'Homerton Crew Tracksuit - Black',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
  },
  {
    name: 'Homerton Crew Tracksuit - Black',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
  },
  {
    name: 'Homerton Crew Tracksuit - Black',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
  },
  {
    name: 'Homerton Crew Tracksuit - Black',
    url: 'www.voilondon.com',
    logo: '/assets/images/products/product-1.svg',
  },
];
