<template>
  <span :class="[$style.root, $style[size], { [$style.block]: block }]">
    <span>{{ text }}</span>
    <span v-if="$slots.suffix" :class="$style.suffix">
      <!-- @slot *Provides a place for suffix content such as popover icon.* -->
      <slot name="suffix" />
    </span>
  </span>
</template>

<script>
/**
 * `SystemText` highlights grayed out system text.
 */

export default {
  props: {
    /**
     * *Expects string with the text.*
     */
    text: {
      type: String,
      required: true
    },
    /**
     * *Expects the size of the system text.*<br>
     * *Available values:* `"normal"` | `"small"`
     */
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return ['normal', 'small'].includes(value);
      }
    },
    /**
     * * Checks if the text is block.
     */
    block: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style src="./SystemText.scss" module lang="scss" />
