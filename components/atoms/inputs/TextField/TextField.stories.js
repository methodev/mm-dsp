import { storiesOf } from '@storybook/vue';
import { boolean, number, radios, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import TextField from './TextField';

storiesOf('Atoms/Inputs', module)
  .addParameters({ component: TextField })
  .add('TextField', () => ({
    template: `
      <TextField
        :id="idKnob"
        :name="nameKnob"
        :footless="footlessKnob"
        :placeholder="placeholderKnob"
        :disabled="disabled"
        :system-note="systemNoteKnob"
        :invalid="invalid"
        :opened="openedKnob"
        :staticPlaceholder="staticPlaceholderKnob"
        :max-length="maxLengthKnob > 0 ? maxLengthKnob : null"
        v-model="value"
        @input="inputHandler"
        @clear="clearHandler"
        :type="typeKnob"
      />
    `,
    props: {
      typeKnob: {
        type: Boolean | null,
        default: radios(
          'Input type',
          {
            Text: 'text',
            Search: 'search',
            Number: 'number',
            Email: 'email'
          },
          'text'
        )
      },
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
      openedKnob: {
        type: Boolean,
        default: boolean('Opened', false)
      },
      footlessKnob: {
        type: Boolean,
        default: boolean('No footer', false)
      },
      staticPlaceholderKnob: {
        type: Boolean,
        default: boolean('Static placeholder', false)
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
