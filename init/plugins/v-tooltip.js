import Vue from 'vue';
import VTooltip from 'v-tooltip';

Vue.use(VTooltip, {
  defaultOffset: 0,
  defaultBoundariesElement: 'window',
  popover: {
    defaultOffset: 0
  },
  popperOptions: {
    modifiers: {
      preventOverflow: {
        escapeWithReference: true
      }
    }
  }
});
