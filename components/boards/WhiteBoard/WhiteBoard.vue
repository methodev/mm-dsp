<template>
  <component :is="element" :class="$style.root">
    <slot />
  </component>
</template>

<script>
// Views
import OverflowBoard from '@/components/boards/OverflowBoard/OverflowBoard';

export default {
  props: {
    overflow: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    element() {
      return this.overflow ? OverflowBoard : 'div';
    }
  }
};
</script>

<style src="./WhiteBoard.scss" module lang="scss" />
