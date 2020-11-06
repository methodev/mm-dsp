<template>
  <Popover
    :active="menuIsOpened"
    :settings="settings"
    :class="$style.root"
    @click-trigger="openMenu"
    @close-popover="closeMenu"
  >
    <slot slot="trigger" name="trigger" />

    <SelectiveList
      slot="popover"
      ref="list"
      :active="menuIsOpened"
      :items="items"
      :multiple="multiple"
      :mark="mark"
      :contentless="contentless"
      :initial-current="initialCurrent"
      :class="[$style.overlay, { [$style.constrained]: constrainedWidth }]"
      @selection="handleChoiceSelection"
      @cancel-selection="handleCancelSelection"
      @set-current-item="handleCurrentSelection"
      @reach-end="handleReachEnd"
    >
      <slot slot="prefix" name="prefix" />
      <slot slot="suffix" name="suffix" />
      <slot slot="contentless-popover" name="contentless-popover" />
    </SelectiveList>
  </Popover>
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
      default: undefined
    },
    popoverSettings: {
      type: Object,
      default: () => ({})
    },
    fullWidth: {
      type: Boolean,
      default: true
    },
    contentless: {
      type: String,
      default: ''
    },
    mark: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    constrainedWidth: {
      type: Boolean,
      default: false
    },
    initialCurrent: {
      type: Number,
      default: undefined
    }
  },

  data() {
    return {
      defaultPopoverSettings: { placement: 'bottom-start' },
      insideActive: false
    };
  },

  computed: {
    settings() {
      return { ...this.defaultPopoverSettings, ...this.popoverSettings };
    },

    menuIsOpened() {
      return typeof this.active !== 'undefined'
        ? this.active
        : this.insideActive;
    }
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        if (this.$refs.list) {
          this.$refs.list.$el.setAttribute(
            'style',
            `width: ${this.$slots.trigger[0].elm.clientWidth}px`
          );
        }
      }, 100);
    });
  },

  methods: {
    openMenu() {
      this.insideActive = true;
      this.$emit('open-menu');
    },

    closeMenu() {
      this.insideActive = false;
      this.$emit('close-menu');
    },

    handleChoiceSelection(selection) {
      this.$emit('selection', selection);

      if (!this.multiple) {
        this.closeMenu();
      }
    },

    handleCurrentSelection(id) {
      this.$emit('set-current-item', id);
    },

    handleCancelSelection() {
      this.$emit('cancel-current-item');
    },

    handleReachEnd(e) {
      this.$emit('reach-end', e);
    }
  }
};
</script>

<style src="./ContextMenu.scss" module lang="scss" />
