import { storiesOf } from '@storybook/vue';
import { boolean, number, radios, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import TextArea from './TextArea';

storiesOf('Atoms/Inputs', module)
  .addParameters({ component: TextArea })
  .add('TextArea', () => ({
    template: `
      <TextArea
        :id="idKnob"
        :name="nameKnob"
        :footless="footlessKnob"
        :placeholder="placeholderKnob"
        :disabled="disabled"
        :system-note="systemNoteKnob"
        :invalid="invalid"
        :max-length="maxLengthKnob > 0 ? maxLengthKnob : null"
        v-model="value"
        @input="inputHandler"
        @clear="clearHandler"
      />
    `,
    props: {
      idKnob: {
        type: String,
        default: text('ID', 'input-id')
      },
      nameKnob: {
        type: String,
        default: text('Name', 'input-name')
      },
      placeholderKnob: {
        type: String,
        default: text('Placeholder', 'Placeholder text')
      },
      maxLengthKnob: {
        type: Number | null,
        default: number('Max characters', 100)
      },
      systemNoteKnob: {
        type: String,
        default: text('System note', '')
      },
      stateKnob: {
        type: Boolean | null,
        default: radios(
          'State',
          { Normal: 'normal', Disabled: 'disabled', Invalid: 'invalid' },
          'normal'
        )
      },
      footlessKnob: {
        type: Boolean,
        default: boolean('No footer', false)
      }
    },
    data() {
      return {
        value: ''
      };
    },
    computed: {
      invalid() {
        return this.stateKnob === 'invalid';
      },
      disabled() {
        return this.stateKnob === 'disabled';
      }
    },
    methods: {
      inputHandler: action('Input'),
      clearHandler() {
        this.value = '';
        action('Clear value')();
      }
    }
  }));
