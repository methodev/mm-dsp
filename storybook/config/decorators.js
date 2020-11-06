import { addDecorator } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';
import { withKnobs } from '@storybook/addon-knobs';
import { withStyles } from 'storybook-addon-styles/vue';
import { withPaddings } from 'storybook-addon-paddings';
import { setConsoleOptions } from '@storybook/addon-console';
import { i18n } from './i18n';

addDecorator(() => ({
  template: '<story />',
  i18n
}));

// Documentation here:
// https://www.npmjs.com/package/@storybook/addon-knobs
addDecorator(withKnobs);

// Documentation here:
// https://www.npmjs.com/package/storybook-vue-router
addDecorator(StoryRouter());

// Documentation here:
// https://www.npmjs.com/package/storybook-addon-styles
addDecorator(withStyles);

// Documentation here:
// https://www.npmjs.com/package/storybook-addon-paddings
addDecorator(withPaddings);

// Documentation here:
// https://www.npmjs.com/package/@storybook/addon-console
setConsoleOptions({
  panelExclude: []
});
