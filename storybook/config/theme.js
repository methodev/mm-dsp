import { create } from '@storybook/theming';
import * as roles_colors from '../../defs/ui/roles/roles-colors';
import brandImage from '../assets/logos/mm';

const brandColor = roles_colors.brand.value.logo.value;
const textColor = roles_colors.texts.value.body.value;
const systemColor = roles_colors.texts.value.system.value;
const borderColor = 'rgba(0, 0, 0, 0.1)';

export default create({
  base: 'light',
  //
  // colorPrimary: '#1c44b4', // don't know what it does
  colorSecondary: brandColor,

  // UI
  appBg: 'white',
  appContentBg: 'white', // the panel with Knobs, Story and Actions tabs
  appBorderColor: borderColor,
  appBorderRadius: 10,

  // Typography
  fontBase: 'system-ui, sans-serif',
  fontCode: '"Fira Code", monospace',

  // Text colors
  textColor: textColor,
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: systemColor,
  barSelectedColor: brandColor,
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: borderColor,
  inputTextColor: textColor,
  // inputBorderRadius: 4,

  brandImage,
  brandTitle: 'Design System Playground'
});
