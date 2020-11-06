import { action } from '@storybook/addon-actions';

export default {
  data() {
    return {
      modalActions: {
        discardAction() {
          action('Discard')();
        },

        submitAction(result) {
          action('Submit')(result);
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 3000);
          });
        }
      }
    };
  }
};
