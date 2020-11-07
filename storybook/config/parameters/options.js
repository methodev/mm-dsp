// Documentation here:
// https://storybook.js.org/docs/configurations/options-parameter

const order = [
  'home',
  'docs',
  'styleguide',
  'atoms',
  'molecules',
  'organisms',
  'boards',
  'overlays'
];

export default {
  showPanel: true,
  storySort: (a, b) =>
    order.indexOf(a[0].split('-')[0]) - order.indexOf(b[0].split('-')[0])
};
