import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, Stack, Drawer } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// config
import { NAV } from '../../../config-global';
// components
import HeaderLogo from '../../../components/header-logo';
import Scrollbar from '../../../components/scrollbar';
import { NavSectionVertical } from '../../../components/nav-section';
//
import navConfig, { bottomNavConfig } from './config-navigation';

// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
  const { pathname } = useRouter();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Stack
        sx={{
          pt: 3,
          pb: 4,
          px: 4,
          flexShrink: 0,
        }}
        direction="row"
        justifyContent="flex-start"
      >
        <HeaderLogo />
      </Stack>

      <NavSectionVertical data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <NavSectionVertical data={bottomNavConfig} sx={{ mb: 2 }} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              zIndex: 0,
              width: NAV.W_DASHBOARD,
              bgcolor: 'primary.main',
              borderStyle: 'none',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              bgcolor: 'primary.main',
              width: NAV.W_DASHBOARD_MOBILE,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
