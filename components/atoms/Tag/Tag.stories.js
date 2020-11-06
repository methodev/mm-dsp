import { storiesOf } from '@storybook/vue';
import { text, number, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import icons from '@/assets/graphics/icons';
import Tag from './Tag';

storiesOf('Atoms/Tag', module)
  .addParameters({ component: Tag })
  .add('Small', () => ({
    template: `
        <Tag
          :label="labelKnob"
          :icon="iconKnob"
          :icon-label="iconKnob"
          :is-removable="isRemovableKnob"
          :max-length="maxLengthKnob > 0 ? maxLengthKnob : null"
          :tooltip-suffix="tooltipSuffixKnob"
          @tag-remove="handleEventTagRemove"
        />
      `,
    props: {
      labelKnob: {
        type: String,
        default: text('Label', 'Color')
      },
      iconKnob: {
        type: [String, null],
        default: select('Icon', [undefined, ...Object.keys(icons)], null)
      },
      tooltipSuffixKnob: {
        type: String,
        default: text('Tooltip suffix', 'Additional info')
      },
      isRemovableKnob: {
        type: Boolean,
        default: boolean('Is removable', true)
      },
      maxLengthKnob: {
        type: Number,
        default: number('Max length', -1)
      }
    },

    methods: {
      handleEventTagRemove(tag) {
        action('Remove tag')(tag);
      }
    }
  }))
  .add('Big', () => ({
    template: `
      <Tag
        size="big"
        :label="labelKnob"
        :icon="iconKnob"
        :icon-label="iconKnob"
        :is-removable="isRemovableKnob"
        :max-length="maxLengthKnob"
        :tooltip-suffix="tooltipSuffixKnob"
        @tag-remove="handleEventTagRemove"
      />
    `,
    props: {
      labelKnob: {
        type: String,
        default: text('Label', 'Color')
      },
      iconKnob: {
        type: [String, null],
        default: select('Icon', [undefined, ...Object.keys(icons)], null)
      },
      tooltipSuffixKnob: {
        type: String,
        default: text('Tooltip suffix', 'Addition info')
      },
      isRemovableKnob: {
        type: Boolean,
        default: boolean('Is removable', true)
      },
      maxLengthKnob: {
        type: Number,
        default: number('Max length', -1)
      }
    },

    methods: {
      handleEventTagRemove(tag) {
        action('Remove tag')(tag);
      }
    }
  }));
