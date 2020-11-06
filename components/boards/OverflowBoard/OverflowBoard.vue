<template>
  <component
    :is="!!computedSettings ? 'vue-custom-scrollbar' : 'div'"
    :class="$style.root"
    :settings="computedSettings"
    @ps-scroll-down="handleScroll"
    @scroll="handleScroll"
  >
    <slot />
  </component>
</template>

<script>
// Plugins
import vueCustomScrollbar from 'vue-custom-scrollbar';
import { isMobile, osName } from 'mobile-device-detect';

const defaultSettings = {
  suppressScrollX: true
};

export default {
  components: {
    vueCustomScrollbar
  },

  props: {
    settings: {
      type: Object,
      default: () => defaultSettings
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    computedSettings() {
      return !isMobile &&
        !osName.toLowerCase().includes('mac') &&
        !this.disabled
        ? { ...defaultSettings, ...this.settings }
        : false;
    }
  },

  methods: {
    handleScroll(e) {
      const {
        target: { scrollTop, clientHeight, scrollHeight }
      } = e;
      if (Math.ceil(scrollTop) + clientHeight >= scrollHeight) {
        this.$emit('reach-end', e);
      }
    }
  }
};
</script>

<style src="./OverflowBoard.scss" module lang="scss" />
