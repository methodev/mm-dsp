import { storiesOf } from '@storybook/vue';
import { array, radios } from '@storybook/addon-knobs';
import PickboxGroup from './PickboxGroup';

const fontFaces = ['Light', 'Regular', 'Medium', 'Semibold', 'Bold'];

const displayTypes = {
  Block: 'block',
  Inline: 'inline'
};

storiesOf('Molecules/PickboxGroup', module)
  .addParameters({ component: PickboxGroup })
  .add('Checkboxes', () => ({
    template:
      '<PickboxGroup :items="items" type="checkbox" :display="displayTypeKnob" :key="fontFacesKnob.join()" />',
    props: {
      fontFacesKnob: {
        type: Array,
        default: array('List of items', fontFaces, ', ')
      },
      displayTypeKnob: {
        type: String,
        default: radios('Display', displayTypes, 'block')
      }
    },
    computed: {
      items() {
        return this.fontFacesKnob.map((item) => ({
          id: item.toLowerCase(),
          name: item,
          label: item,
          value: false
        }));
      }
    }
  }))
  .add('Radios', () => ({
    template:
      '<PickboxGroup :items="items" type="radio" :display="displayTypeKnob" :key="fontFacesKnob.join()" />',
    props: {
      fontFacesKnob: {
        type: Array,
        default: array('List of items', fontFaces, ', ')
      },
      displayTypeKnob: {
        type: String,
        default: radios('Display', displayTypes, 'block')
      }
    },
    computed: {
      items() {
        return this.fontFacesKnob.map((item) => ({
          id: item.toLowerCase(),
          name: 'pickbox-group',
          label: item,
          value: false
        }));
      }
    }
  }));
