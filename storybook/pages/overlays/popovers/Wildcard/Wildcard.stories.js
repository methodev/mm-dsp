import { storiesOf } from '@storybook/vue';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { placements } from '@/defs/settings/v-tooltip';
import { LoremIpsum } from 'lorem-ipsum';
/**
 * Definitions
 */
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});
const content = lorem.generateParagraphs(1);

storiesOf('Overlays/Popovers', module).add(
  'Wildcard',
  () => ({
    template: `
        <Wildcard
          :popover-settings="settings"
          @open="open"
          @close="close"
        >
          <Button slot="trigger">Wildcard</Button>
          <div slot="overlay">
            <WhiteBoard>
              {{ textKnob }}
            </WhiteBoard>
          </div>
        </Wildcard>
      `,
    props: {
      textKnob: {
        type: String,
        default: text('Text', content)
      },
      placementKnob: {
        type: String,
        default: select('Placement', placements, 'auto')
      }
    },
    computed: {
      settings() {
        return {
          placement: this.placementKnob
        };
      }
    },
    methods: {
      open() {
        action('Open popover')();
      },

      close() {
        action('Close popover')();
      }
    }
  }),
  {
    options: { showPanel: true }
  }
);
