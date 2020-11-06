import { storiesOf } from '@storybook/vue';
import { array, boolean } from '@storybook/addon-knobs';
import MetaGroup from './MetaGroup';

storiesOf('Molecules/MetaGroup', module)
  .addParameters({ component: MetaGroup })
  .add('Default', () => ({
    template: '<MetaGroup :items="metaListKnob" :block="block" />',
    props: {
      metaListKnob: {
        type: Array,
        default: array(
          'Items',
          ['Martin', 'Dec 31, 2020', 'Sofia, Bulgaria'],
          ', '
        )
      },
      block: {
        type: Boolean,
        default: boolean('Block', false)
      }
    }
  }));
