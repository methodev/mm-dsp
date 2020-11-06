import { storiesOf } from '@storybook/vue';
import { text } from '@storybook/addon-knobs';
import MetaText from './MetaText';

storiesOf('Atoms/MetaText', module)
  .addParameters({ component: MetaText })
  .add('Default', () => ({
    template: `
        <MetaText>
          {{ metaTextKnob }}
        </MetaText>
      `,
    props: {
      metaTextKnob: {
        type: String,
        default: text('Label', 'Dec 31, 2020')
      }
    }
  }));
