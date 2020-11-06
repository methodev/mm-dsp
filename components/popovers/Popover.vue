<template>
  <v-popover
    ref="popover"
    :open="popoverIsOpened"
    v-bind="computedSettings"
    @auto-hide="closePopover"
  >
    <div
      ref="trigger"
      v-shortkey="popoverIsOpened ? ['esc'] : null"
      :class="$style.trigger"
      @click.stop="handleEventTriggerClick"
      @shortkey="closePopover"
    >
      <slot name="trigger" />
    </div>

    <div
      slot="popover"
      :class="[$style.overlay, 'overlay']"
      :style="{ minWidth }"
    >
      <slot name="popover" />
    </div>
  </v-popover>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      default: () => ({})
    },
    active: {
      type: Boolean,
      default: undefined
    },
    rerenderKey: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      defaultSettings: { trigger: 'manual', placement: 'auto' },
      insideActive: false,
      minWidth: 0
    };
  },

  computed: {
    computedSettings() {
      return { ...this.defaultSettings, ...this.settings };
    },
    popoverIsOpened() {
      return typeof this.active !== 'undefined'
        ? this.active
        : this.insideActive;
    }
  },

  watch: {
    rerenderKey(val) {
      this.$nextTick(() => {
        // Use popper instance update method for repositioning
        this.$refs.popover.popperInstance.update();
      });
    }
  },

  mounted() {
    this.minWidth = this.$rem(this.$refs.trigger.clientWidth);
  },

  methods: {
    handleEventTriggerClick() {
      if (!this.popoverIsOpened) {
        this.insideActive = true;
        this.$emit('click-trigger');
      }
    },

    closePopover() {
      this.insideActive = false;
      this.$emit('close-popover');
    }
  }
};
</script>

<style src="./Popover.scss" module lang="scss" />
