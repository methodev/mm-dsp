import { storiesOf } from '@storybook/vue';
import { array, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import SelectiveList from './SelectiveList';
import { LoremIpsum } from 'lorem-ipsum';

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

const list = ['Alpha', 'Beta', 'Gamma', 'Delta'];

const mixin = {
  data() {
    return {
      content,
      active: true,
      current: null
    };
  },

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
    }
  },

  computed: {
    listItems() {
      return this.itemsKnob.map((item, i) => ({
        id: item.toLowerCase(),
        label: item,
        icon: this.iconKnob ? 'folder-closed' : null,
        hotkey: this.hotkeyKnob ? item.charAt(0) : null
      }));
    },
    key() {
      return this.multiple + this.itemsKnob.join(', ');
    }
  }
};

storiesOf('Molecules/SelectiveList/Modes', module)
  .addParameters({ component: SelectiveList })
  .add('Single-selection', () => ({
    mixins: [mixin],
    template: `
        <SelectiveList
          :key="key+markKnob+initialCurrentKnob+hotkeyKnob"
          :active="active"
          :items="listItems"
          :mark="markKnob"
          :initial-current="current"
          :contentless="contentlessKnob"
          @selection="handleChoiceSelection"
          @set-current-item="handleCurrentSelection"
          @cancel-selection="handleCancelSelection"
        >
          <WhiteBoard slot="contentless-popover">
            {{ content }}
          </WhiteBoard>
        </SelectiveList>
      `,
    props: {
      itemsKnob: {
        type: Array,
        default: array('List of items', list, ', ')
      },
      initialCurrentKnob: {
        type: String,
        default: text('Initial current')
      },
      markKnob: {
        type: Boolean,
        default: boolean('Mark selection', false)
      },
      iconKnob: {
        type: Boolean,
        default: boolean('Icon', false)
      },
      hotkeyKnob: {
        type: Boolean,
        default: boolean('Hotkey', false)
      },
      contentlessKnob: {
        type: String,
        default: text('Contentless', '')
      },
      popoverTitleKnob: {
        type: String,
        default: text('Popover title', 'Popover title')
      },
      popoverMetaTitleKnob: {
        type: String,
        default: text('Popover meta title', 'Popover meta title')
      }
    },
    watch: {
      initialCurrentKnob: {
        immediate: true,
        handler(val) {
          this.current = parseInt(val);
        }
      }
    }
  }))
  .add('Multi-selection', () => ({
    mixins: [mixin],
    template: `
        <SelectiveList
          :key="key"
          :active="active"
          :items="listItems"
          multiple
          :contentless="contentlessKnob"
          @selection="handleChoiceSelection"
          @set-current-item="handleCurrentSelection"
          @cancel-selection="handleCancelSelection"
        >
          <WhiteBoard slot="contentless-popover">
            {{ content }}
          </WhiteBoard>
        </SelectiveList>
      `,
    props: {
      itemsKnob: {
        type: Array,
        default: array('List of items', list, ', ')
      },
      contentlessKnob: {
        type: String,
        default: text('Contentless', '')
      },
      popoverTitleKnob: {
        type: String,
        default: text('Popover title', 'Popover title')
      },
      popoverMetaTitleKnob: {
        type: String,
        default: text('Popover meta title', 'Popover meta title')
      }
    }
  }));

storiesOf('Molecules/SelectiveList/Addons', module)
  .add('List + prefix', () => ({
    mixins: [mixin],
    template: `
        <SelectiveList
          :key="key"
          :active="active"
          :items="listItems"
          @selection="handleChoiceSelection"
          @set-current-item="handleCurrentSelection"
          @cancel-selection="handleCancelSelection"
        >
          <MetaText slot="prefix">Prefix content</MetaText>
        </SelectiveList>
      `,
    props: {
      itemsKnob: {
        type: Array,
        default: array('List of items', list, ', ')
      }
    }
  }))
  .add('List + suffix', () => ({
    mixins: [mixin],
    template: `
        <SelectiveList
          :key="key"
          :active="active"
          :items="listItems"
          @selection="handleChoiceSelection"
          @set-current-item="handleCurrentSelection"
          @cancel-selection="handleCancelSelection"
        >
          <MetaText slot="suffix">Suffix content</MetaText>
        </SelectiveList>
      `,
    props: {
      itemsKnob: {
        type: Array,
        default: array('List of items', list, ', ')
      }
    }
  }))
  .add('List + prefix + suffix', () => ({
    mixins: [mixin],
    template: `
        <SelectiveList
          :key="key"
          :active="active"
          :items="listItems"
          @selection="handleChoiceSelection"
          @set-current-item="handleCurrentSelection"
          @cancel-selection="handleCancelSelection"
        >
          <MetaText slot="prefix">Prefix content</MetaText>
          <MetaText slot="suffix">Suffix content</MetaText>
        </SelectiveList>
      `,
    props: {
      itemsKnob: {
        type: Array,
        default: array('List of items', list, ', ')
      }
    }
  }));
