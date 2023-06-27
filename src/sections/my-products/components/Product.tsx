import { Box, Stack, Typography } from '@mui/material';
import { BaseProduct } from '../types';

export type Props = {
  border?: boolean;
  product: BaseProduct;
  sx?: any;
};

export default function ProductComponent({ border = true, product, sx }: Props) {
  return (
    <Box
      sx={{
        padding: '16px',
        border: border ? '1px solid #EEEDF2' : 'none',
        boxShadow: border ? '0px 2px 4px rgba(22, 19, 47, 0.06)' : 'none',
        borderRadius: '8px',
        ...sx,
      }}
    >
      <Stack direction="row" spacing={2}>
        <Box component="img" src={product.logo} sx={{ height: '44px', width: '44px' }} />
        <Stack direction="column" justifyContent="space-between">
          <Typography>{product.name}</Typography>
          <Typography>{product.url}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
