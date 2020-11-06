import { storiesOf } from '@storybook/vue';
import { boolean, text } from '@storybook/addon-knobs';
import PickboxCheck from './PickboxCheck';

storiesOf('Atoms/Pickboxes', module)
  .addParameters({ component: PickboxCheck })
  .add('PickboxCheck', () => ({
    template: `
        <div style="max-width: 600px">
          <PickboxCheck :disabled="disabledKnob" v-bind="checkbox" v-model="checkbox.value">{{ labelKnob }}</PickboxCheck>
        </div>
      `,
    data() {
      return {
        checkbox: {
          id: 'checkbox-example',
          name: 'checkbox-example',
          value: false
        }
      };
    },
    props: {
      labelKnob: {
        type: String,
        default: text('Label', 'Checkbox label')
      },
      disabledKnob: {
        type: Boolean,
        default: boolean('Disabled', false)
      }
    }
  }));
