import { storiesOf } from '@storybook/vue';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import PasswordForm from './PasswordForm';

storiesOf('Organisms/Forms', module)
  .addParameters({ component: PasswordForm })
  .add('PasswordForm', () => ({
    components: { PasswordForm },
    template: `
      <PasswordForm
        :key="submitButtonLabelKnob"
        :title="titleKnob"
        :submit-button-label="submitButtonLabelKnob"
        :submitting="submitting"
        @submit="submit"
      >
        <template v-if="emailFieldKnob" slot="additional-fields">
          <TextField
            id="email"
            name="email"
            type="email"
            :placeholder="$t('email')"
            :value="emailValueKnob"
            static-placeholder
            disabled
          />
        </template>
      </PasswordForm>`,
    props: {
      titleKnob: {
        type: String,
        default: text('Title', 'Change password')
      },
      submitButtonLabelKnob: {
        type: String,
        default: text('Submit button label', 'Change')
      },
      emailFieldKnob: {
        type: Boolean,
        default: boolean('Email field ( not editable )', false)
      },
      emailValueKnob: {
        type: String,
        default: text('Email value', 'user@email.com')
      }
    },
    data() {
      return {
        submitting: null
      };
    },
    methods: {
      submit({ password, passwordConfirmation }) {
        this.submitting = true;
        setTimeout(() => {
          this.submitting = false;
        }, 1000);
        action('Submit')(password, passwordConfirmation);
      }
    }
  }));
