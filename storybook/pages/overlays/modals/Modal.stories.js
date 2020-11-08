import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import { i18n } from '@/storybook/config/i18n';

// Data
const modals = {};
const names = {};

const components = require.context(
  '@/components/organisms/modals',
  true,
  /[a-z]\w+\.vue$/
);

components.keys().forEach((filename) => {
  const modal = components(filename);
  const modalName = upperFirst(
    camelCase(
      filename
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  );
  names[modalName] = modalName;
  modals[modalName] = { ...modal.default, i18n };
});

const stories = storiesOf('Overlays/Modals', module);

for (const name in names) {
  stories.add(
    name,
    () => ({
      template: '<Button @click="openModal">{{ name }}</Button>',
      data() {
        return {
          name,
          modal: modals[name]
        };
      },
      methods: {
        openModal() {
          this.$showModal(
            this.modal,
            {
              title: 'Confirmation',
              text: 'Thank you for your feedback. Would you like to continue?',
              preventCheckbox: {
                id: 'storybook_prevent_checkbox',
                name: 'storybook_prevent_checkbox',
                value: false,
                label: 'Do not ask me again.'
              },
              submit: (result) => {
                action('Submit Example modal')(result);
              }
            },
            { name: `modal-${this.name}` }
          );
        }
      },
      beforeDestroy() {
        this.$modal.hide(`modal-${this.name}`);
      }
    }),
    {
      options: { showPanel: false }
    }
  );
}
