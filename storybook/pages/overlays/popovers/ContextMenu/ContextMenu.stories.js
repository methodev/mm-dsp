import { storiesOf } from '@storybook/vue';
import { array, boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { placements } from '@/defs/settings/v-tooltip';

const list = ['Alpha', 'Beta', 'Gamma', 'Delta'];

const mixin = {
  methods: {
    handleChoiceSelection(e) {
      const selection = Array.isArray(e) ? e.map(({ id }) => id) : e.id;
      action('Select item')(selection);
    },

    handleCurrentSelection(e) {
      action('Set current item')(e);
    },

    handleCancelSelection() {
      action('Cancel selection')();
    },

    openMenu() {
      action('Open menu')();
    },

    closeMenu() {
      action('Close menu')();
    }
  },

  computed: {
    listItems() {
      return this.itemsKnob.map((item) => ({
        id: item.toLowerCase(),
        label: item
      }));
    },
    settings() {
      return {
        placement: this.placementKnob
      };
    },
    key() {
      return this.multipleKnob + this.itemsKnob.join(', ');
    }
  }
};

storiesOf('Overlays/Popovers', module).add(
  'ContextMenu',
  () => ({
    mixins: [mixin],
    template: `
        <ContextMenu
          :key="key"
          :items="listItems"
          :multiple="multipleKnob"
          :contentless="contentlessKnob"
          @selection="handleChoiceSelection"
          @set-current-item="handleCurrentSelection"
          @cancel-current-item="handleCancelSelection"
          @open-menu="openMenu"
          @close-menu="closeMenu"
        >
          <Button slot="trigger">Context menu</Button>
        </ContextMenu>
      `,
    props: {
      itemsKnob: {
        type: Array,
        default: array('List of items', list, ', ')
      },
      placementKnob: {
        type: String,
        default: select('Placement', placements, 'auto')
      },
      contentlessKnob: {
        type: String,
        default: text('Contentless', '')
      },
      multipleKnob: {
        type: Boolean,
        default: boolean('Multi-selection', false)
      }
    }
  }),
  {
    options: { showPanel: true }
  }
);
