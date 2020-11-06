import { storiesOf } from '@storybook/vue';
import { select, text } from '@storybook/addon-knobs';
import { placements } from '@/defs/settings/v-tooltip';

storiesOf('Interactives|Overlays', module).add(
  'Tooltip',
  () => ({
    template: `
        <Icon :key="placementKnob" :style="{ marginTop: '2rem' }" v-tooltip="tooltip" name="information-circle" />
      `,
    props: {
      textKnob: {
        type: String,
        default: text('Text', 'This is an example of a tooltip.')
      },
      placementKnob: {
        type: String,
        default: select('Placement', placements, 'top')
      }
    },
    computed: {
      tooltip() {
        return {
          content: this.textKnob,
          placement: this.placementKnob
        };
      }
    }
  }),
  {
    options: { showPanel: true },
    notes: false
  }
);
