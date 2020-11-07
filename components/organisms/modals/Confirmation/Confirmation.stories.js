import { storiesOf } from '@storybook/vue';
import { boolean, text } from '@storybook/addon-knobs';
import modalsMixin from '@/storybook/mixins/modals';
import Confirmation from './Confirmation';

storiesOf('Organisms/Modals', module)
  .addParameters({ component: Confirmation })
  .add('Confirmation', () => ({
    mixins: [modalsMixin],
    components: { Confirmation },
    data() {
      return {
        preventCheckbox: null
      };
    },
    template: `
      <Confirmation
        :title="titleKnob"
        :text="textKnob"
        :no-discard="noDiscardKnob"
        :confirm-button-text="confirmButtonTextKnob"
        :prevent-checkbox="preventCheckbox"
        v-bind="modalActions"
      />
    `,
    props: {
      titleKnob: {
        type: String,
        default: text('Title', 'Confirmation')
      },

      textKnob: {
        type: String,
        default: text(
          'Text',
          'Thank you for your feedback. Would you like to continue?'
        )
      },

      confirmButtonTextKnob: {
        type: String,
        default: text('Confirm button', 'Continue')
      },

      checkboxKnob: {
        type: String,
        default: text('Checkbox', 'Do not ask me again.')
      },

      noDiscardKnob: {
        type: Boolean,
        default: boolean('No discard', false)
      }
    },

    watch: {
      checkboxKnob(val) {
        this.setPreventCheckbox(val);
      }
    },

    created() {
      this.setPreventCheckbox(this.checkboxKnob);
    },

    methods: {
      setPreventCheckbox(val) {
        this.preventCheckbox = val
          ? {
              id: 'storybook_prevent_checkbox',
              name: 'storybook_prevent_checkbox',
              value: false,
              label: val
            }
          : null;
      }
    }
  }));
