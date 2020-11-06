<template>
  <Popover
    :active="isOpened"
    :rerender-key="rerenderKey"
    :settings="settings"
    @click-trigger="open"
    @close-popover="close"
  >
    <slot slot="trigger" name="trigger" />

    <div slot="popover">
      <slot name="overlay" />
    </div>
  </Popover>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: undefined
    },
    popoverSettings: {
      type: Object,
      default: () => ({})
    },
    rerenderKey: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      defaultPopoverSettings: { placement: 'auto' },
      insideActive: false
    };
  },

  computed: {
    settings() {
      return { ...this.defaultPopoverSettings, ...this.popoverSettings };
    },
    isOpened() {
      return typeof this.active !== 'undefined'
        ? this.active
        : this.insideActive;
    }
  },

  methods: {
    open() {
      this.insideActive = true;
      this.$emit('open');
    },

    close() {
      this.insideActive = false;
      this.$emit('close');
    }
  }
};
</script>
