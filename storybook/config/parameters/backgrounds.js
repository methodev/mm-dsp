// Documentation here:
// https://www.npmjs.com/package/@storybook/addon-backgrounds

import roles_colors from '../../../defs/ui/roles/roles-colors';

const {
  backgrounds: {
    value: { app, board }
  },
  brand: {
    value: { logo: brand }
  }
} = roles_colors;

const backgrounds = {
  default: 'App',
  values: [
    { name: 'App', value: app.value },
    { name: 'Board', value: board.value },
    { name: 'Brand', value: brand.value }
  ]
};

export default backgrounds;
