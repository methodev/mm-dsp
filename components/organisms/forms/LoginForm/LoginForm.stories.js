import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import LoginForm from './LoginForm';

storiesOf('Organisms/Forms', module)
  .addParameters({ component: LoginForm })
  .add('LoginForm', () => ({
    components: { LoginForm },
    template: `
      <LoginForm
        :submitting="submitting"
        :form-state="formState"
        @input-change="formState = null"
        @submit="submit"
      />`,
    data() {
      return {
        submitting: false,
        formState: null
      };
    },
    methods: {
      submit({ data }) {
        this.submitting = true;
        setTimeout(() => {
          this.submitting = false;
        }, 1000);
        action('Submit')(data);
      }
    }
  }));
