<template>
  <div :class="[$style.root, $style[type]]">
    <!-- @slot *Provides a place for the text.* -->
    <slot />
  </div>
</template>

<script>
/**
 * `FormNote` is made for displaying a short info text related to form elements or entire forms.
 */

export default {
  props: {
    /**
     * *Expects an optional type that sets the color of the text.*<br>
     * *Available values:* `"neutral"` | `"error"` | `"success"`
     */
    type: {
      type: String,
      default: 'neutral',
      validator(value) {
        return ['neutral', 'error', 'success'].includes(value);
      }
    }
  }
};
</script>

<style src="./FormNote.scss" module lang="scss" />
