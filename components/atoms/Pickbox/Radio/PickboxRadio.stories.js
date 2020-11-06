import { storiesOf } from '@storybook/vue';
import { boolean, text } from '@storybook/addon-knobs';
import PickboxRadio from './PickboxRadio';

storiesOf('Atoms/Pickboxes', module)
  .addParameters({ component: PickboxRadio })
  .add('PickboxRadio', () => ({
    template: `
        <div style="max-width: 600px">
          <PickboxRadio :disabled="disabledKnob" v-bind="radio" v-model="radio.value">{{ labelKnob }}</PickboxRadio>
        </div>
      `,
    data() {
      return {
        radio: {
          id: 'radio-example',
          name: 'radio-example',
          value: false
        }
      };
    },
    props: {
      labelKnob: {
        type: String,
        default: text('Label', 'Radio label')
      },
      disabledKnob: {
        type: Boolean,
        default: boolean('Disabled', false)
      }
    }
  }));
