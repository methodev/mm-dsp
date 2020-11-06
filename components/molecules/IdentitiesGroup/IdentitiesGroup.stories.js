import { storiesOf } from '@storybook/vue';
import { text, array } from '@storybook/addon-knobs';
import IdentitiesGroup from './IdentitiesGroup';

storiesOf('Molecules/IdentitiesGroup', module)
  .addParameters({ component: IdentitiesGroup })
  .add('Default', () => ({
    template: `<IdentitiesGroup :label="labelKnob" :identities="identitiesKnob.map(identity => identity.substring(0, 2))" />`,
    props: {
      labelKnob: {
        type: String,
        default: text('Label', 'Seen by')
      },
      identitiesKnob: {
        type: Array,
        default: array('List of identities', ['JK', 'DZ', 'MM'], ', ')
      }
    }
  }));
