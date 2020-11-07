const pages = '**/*.story.mdx';
const files = '**/*.stories.@(js|mdx)';
const stories = '../components';

module.exports = {
  presets: ['@storybook/addon-docs/preset'],

  stories: [
    `./pages/home/Intro.story.mdx`,
    `./pages/docs/getting-started/${pages}`,
    `./pages/docs/contribution/${pages}`,
    `./pages/styleguide/${pages}`,
    `${stories}/atoms/${files}`,
    `${stories}/molecules/${files}`,
    `${stories}/organisms/${files}`,
    `${stories}/boards/${files}`,
    `./pages/overlays/${files}`
  ],

  addons: [
    // '@storybook/addon-controls',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-toolbars',
    '@storybook/addon-viewport',
    '@storybook/addon-links',
    '@storybook/addon-docs/register',
    'storybook-addon-paddings',
    '@storybook/addon-storysource'
  ]
};
