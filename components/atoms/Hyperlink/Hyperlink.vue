<template>
  <span :class="$style.root" :data-type="type">
    <a v-if="href" :href="href" target="_blank">
      <slot />
    </a>
  </span>
</template>

<script>
/**
 * `Hyperlink` is made to serve as an ordinary URL link.
 */

export default {
  props: {
    /**
     * *Expects an optional type of the hyperlink.*<br>
     * *Available values:* `"black"` | `"blue"` | `"gray"`
     */
    type: {
      type: String,
      default: undefined,
      validator(value) {
        return ['black', 'blue', 'gray'].includes(value);
      }
    },
    /**
     * *Expects an optional URL.*
     */
    href: {
      type: String,
      default: undefined
    }
  }
};
</script>

<style src="./Hyperlink.scss" module lang="scss" />
