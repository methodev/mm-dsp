import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import TagGroup from './TagGroup';

const tags = [
  {
    label: 'positive'
  },
  {
    label: 'negative'
  },
  {
    label: 'neutral'
  }
];

const bigTags = [
  {
    label: 'signup',
    icon: 'chevron-right',
    iconLabel: 'Topic',
    size: 'big'
  },
  {
    label: 'No icon label',
    icon: 'chevron-right',
    size: 'big'
  },
  {
    label: 'Concept',
    icon: 'chevron-right',
    iconLabel: 'Concept',
    size: 'big'
  },
  {
    label: 'Albania',
    icon: 'chevron-right',
    iconLabel: 'Market',
    size: 'big'
  }
];

storiesOf('Molecules/TagGroup', module)
  .addParameters({ component: TagGroup })
  .add('RemovableTags', () => ({
    template: `
        <TagGroup
          :tags="tags"
          :style="{width: 'auto'}"
          @tag-remove="handleEventTagRemove"
        />
      `,
    data() {
      return {
        tags: tags.map((tag) => ({
          ...tag,
          isRemovable: true
        }))
      };
    },

    methods: {
      handleEventTagRemove(tag) {
        action('Remove tag')(tag);
      }
    }
  }))
  .add(
    'StaticTags',
    () => ({
      template: `<TagGroup :tags="tags" :style="{width: 'auto'}" />`,
      data() {
        return {
          tags
        };
      }
    }),
    {
      options: { showPanel: false }
    }
  )
  .add(
    'RemovableBigTags',
    () => ({
      template: `<TagGroup :tags="tags" :style="{width: 'auto'}" />`,
      data() {
        return {
          tags: bigTags.map((tag) => ({
            ...tag,
            isRemovable: true
          }))
        };
      }
    }),
    {
      options: { showPanel: false }
    }
  )
  .add(
    'StaticBigTags',
    () => ({
      template: `<TagGroup :tags="tags" :style="{width: 'auto'}" />`,
      data() {
        return {
          tags: bigTags
        };
      }
    }),
    {
      options: { showPanel: false }
    }
  );
