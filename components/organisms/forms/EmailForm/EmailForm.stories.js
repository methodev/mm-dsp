import { storiesOf } from '@storybook/vue';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import EmailForm from './EmailForm';

storiesOf('Organisms/Forms', module)
  .addParameters({ component: EmailForm })
  .add('EmailForm', () => ({
    components: { EmailForm },
    template: `
      <EmailForm
        :key="submitButtonLabelKnob"
        :title="titleKnob"
        :submit-button-label="submitButtonLabelKnob"
        :submitting="submitting"
        @submit="submit"
      />`,
    data() {
      return {
        submitting: null
      };
    },
    props: {
      titleKnob: {
        type: String,
        default: text('Title', 'Reset password')
      },
      submitButtonLabelKnob: {
        type: String,
        default: text('Submit button label', 'Send reset instructions')
      }
    },
    methods: {
      submit(email) {
        this.submitting = true;
        setTimeout(() => {
          this.submitting = false;
        }, 1000);
        action('Submit')(email);
      }
    }
  }));
