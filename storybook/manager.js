// This file allows you to customize how Storybook’s app UI renders.
// That is, everything outside of the Canvas (preview iframe).

import { addons } from '@storybook/addons';
import theme from './config/theme';

addons.setConfig({
  theme,
  showRoots: true
});
