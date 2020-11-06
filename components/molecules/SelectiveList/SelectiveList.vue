<template>
  <OverflowBoard
    v-shortkey="
      active
        ? {
            up: ['arrowup'],
            down: ['arrowdown']
          }
        : null
    "
    :class="$style.root"
    :data-mode="multiple ? 'multiple' : 'single'"
    @shortkey.native="setRequiredItemAsCurrent"
    @reach-end="handleReachEnd"
  >
    <div v-if="$slots.prefix" :class="[$style.custom, $style.prefix]">
      <slot name="prefix" />
    </div>
    <ul
      ref="list"
      :class="$style.list"
      @mousedown="
        (e) => {
          e.preventDefault();
        }
      "
    >
      <template
        v-for="{
          id,
          label,
          icon,
          hotkey,
          suffix,
          separated,
          disabled,
          selected,
          maxLength
        } in list"
      >
        <li
          :key="id"
          :ref="id"
          v-shortkey="
            currentItem && active
              ? hotkey
                ? {
                    enter: ['enter'],
                    hotkey: [hotkey.toLowerCase()]
                  }
                : { enter: ['enter'] }
              : hotkey && active
              ? { hotkey: [hotkey.toLowerCase()] }
              : null
          "
          v-tooltip.right="tooltip(label, maxLength)"
          :class="[
            $style.item,
            {
              [$style.current]: currentItem === id,
              [$style.separated]: separated,
              [$style.disabled]: disabled,
              [$style.selected]: selected
            }
          ]"
          @shortkey="
            (e) =>
              e.srcKey === 'enter'
                ? handleChoice(currentItem)
                : handleChoice(id)
          "
          @mousemove="setCurrent(id)"
        >
          <a data-selective-list-item @click="handleChoice(id)">
            <Icon v-if="icon" kind="black" :class="$style.icon" :name="icon" />
            <Icon
              v-if="multiple"
              :name="selected ? 'check-on' : 'check-off'"
              :class="$style.checkbox"
            />
            <span :class="$style.label">{{ label | truncate(maxLength) }}</span>
            <span :class="$style.itemSuffix">{{ suffix }}</span>
            <span v-if="hotkey" :class="$style.hotkey">{{ hotkey }}</span>
          </a>
        </li>
      </template>
    </ul>
    <div v-if="noContentLine" :class="$style.item">
      <div :class="$style.contentless">
        <SystemText :class="$style.contentlessText" :text="contentless" />
        <Wildcard
          v-if="$slots['contentless-popover']"
          :popover-settings="contentlessPopoverSettings"
          :class="$style.contentlessPopover"
        >
          <span slot="trigger">
            <div :class="$style.contentlessInfoTrigger">
              <Icon name="information-circle" />
            </div>
          </span>
          <div slot="overlay" :class="$style.contentlessPopoverOverlay">
            <slot name="contentless-popover" />
          </div>
        </Wildcard>
      </div>
    </div>
    <div v-if="$slots.suffix" :class="[$style.custom, $style.suffix]">
      <slot name="suffix" />
    </div>
  </OverflowBoard>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    mark: {
      type: Boolean,
      default: false
    },
    initialCurrent: {
      type: Number,
      default: undefined
    },
    contentless: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      list: [...this.items],
      selectionMark: this.multiple || this.mark,
      selection: this.multiple ? [] : null,
      currentItem: '',
      contentlessPopoverSettings: {
        placement: 'top',
        trigger: 'hover',
        autoHide: false
      },
      directions: [
        {
          keys: ['up'],
          func: this.getPrevItemIndex
        },
        {
          keys: ['down'],
          func: this.getNextItemIndex
        }
      ]
    };
  },

  computed: {
    noContentLine() {
      return !this.list.length && this.contentless;
    }
  },

  watch: {
    items: {
      immediate: true,
      handler(val) {
        this.list = [...val];

        if (
          !isNaN(this.initialCurrent) &&
          this.list.length &&
          this.list.length > this.initialCurrent
        ) {
          this.setCurrent(this.list[this.initialCurrent].id);
        }
      }
    },

    initialCurrent(val) {
      if (!isNaN(val) && this.list.length && this.list.length > val) {
        this.setCurrent(this.list[val].id);
      } else {
        this.clearCurrent();
      }
    },

    active(val) {
      if (!val) {
        this.currentItem = null;
      }
    }
  },

  methods: {
    setCurrent(id) {
      if (this.active) {
        this.currentItem = id;
        this.$emit('set-current-item', id);
      }
    },

    clearCurrent() {
      this.currentItem = null;
      this.$emit('cancel-selection');
    },

    getPrevItemIndex(currIndex = this.getIndexOfCurrentItem()) {
      return typeof currIndex === 'undefined'
        ? this.items.length - 1
        : currIndex === 0
        ? this.items.length - 1
        : currIndex - 1;
    },

    getNextItemIndex(currIndex = this.getIndexOfCurrentItem()) {
      return typeof currIndex === 'undefined'
        ? 0
        : currIndex === this.items.length - 1
        ? 0
        : currIndex + 1;
    },

    getIndexOfCurrentItem() {
      if (!this.currentItem) {
        return;
      }

      return this.items.findIndex((item) => item.id === this.currentItem);
    },

    scrollIntoView(id) {
      // this custom-written scrollIntoView function is needed
      // because the native Element.scrollIntoView() method
      // does not work with custom scrollbar
      const target = this.$refs[id][0];
      const targetTop = target.offsetTop;
      const targetBottom = target.offsetTop + target.clientHeight;
      const box = target.parentNode.parentNode;

      if (targetTop < box.scrollTop) {
        box.scrollTop = targetTop - box.offsetTop;
      }

      if (targetBottom > box.scrollTop + box.clientHeight) {
        box.scrollTop = targetBottom - box.clientHeight;
      }
    },

    setRequiredItemAsCurrent(e) {
      const getIndex = this.directions.find(({ keys }) =>
        keys.includes(e.srcKey)
      ).func;

      if (!this.items.every((i) => i.disabled)) {
        let itemIndex = this.getIndexOfCurrentItem();
        do {
          itemIndex = getIndex(itemIndex);
        } while (this.items[itemIndex] && this.items[itemIndex].disabled);
        if (this.items[itemIndex]) {
          const { id } = this.items[itemIndex];
          this.setCurrent(id);
          this.scrollIntoView(id);
        }
      }
      e.preventDefault();
    },

    handleChoice(id) {
      const selection = this.$getItemById(this.items, id);

      if (this.multiple) {
        if (this.$getItemById(this.selection, selection.id)) {
          this.selection = this.selection.filter(
            (item) => item.id !== selection.id
          );
        } else {
          this.selection.push(selection);
        }

        this.list = this.list.map((item) => ({
          ...item,
          selected: !!this.$getItemById(this.selection, item.id)
        }));
      } else {
        this.selection = selection;

        this.list = this.list.map((item) => ({
          ...item,
          selected: item.id === this.selection.id && this.selectionMark
        }));
      }

      this.$emit('selection', this.selection);
    },

    tooltip(label, maxLength) {
      return maxLength && label.length > maxLength ? label : null;
    },

    handleReachEnd(e) {
      this.$emit('reach-end', e);
    }
  }
};
</script>

<style src="./SelectiveList.scss" module lang="scss" />
