// mui
import { Box } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <Box component="img" src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  tracker: icon('tracker-icon'),
  team: icon('team-icon'),
  setting: icon('setting-icon'),
  product: icon('product-icon'),
  research: icon('research-icon'),
  dashboard: icon('dashboard-icon'),
};

const navConfig = [
  // Upper Nav Items
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      { title: 'dashboard', path: PATH_DASHBOARD.root, icon: ICONS.dashboard },
      { title: 'Product Research', path: PATH_DASHBOARD.productResearch, icon: ICONS.research },
      { title: 'Sales Tracker', path: PATH_DASHBOARD.salesTracker, icon: ICONS.tracker },
      {
        title: 'My Products',
        path: PATH_DASHBOARD.myProducts.root,
        icon: ICONS.product,
        children: [
          { title: 'overview', path: PATH_DASHBOARD.myProducts.overview },
          { title: 'saved Products', path: PATH_DASHBOARD.myProducts.savedProducts },
          { title: 'scheduled', path: PATH_DASHBOARD.myProducts.scheduled },
          { title: 'tested', path: PATH_DASHBOARD.myProducts.tested },
        ],
      },
    ],
  },
];
export const bottomNavConfig = [
  // Bottom Nav Items
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      { title: 'team', path: PATH_DASHBOARD.team, icon: ICONS.team },
      { title: 'settings', path: PATH_DASHBOARD.settings, icon: ICONS.setting },
    ],
  },
];

export default navConfig;
