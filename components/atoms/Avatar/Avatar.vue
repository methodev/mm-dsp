<template>
  <picture :class="$style.root">
    <img :src="src" :alt="alt" :class="$style.avatar" />
  </picture>
</template>

<script>
/**
 * `Avatar` is made for displaying an user image.
 */

export default {
  props: {
    /**
     * *Expects the src path of the avatar image.*
     */
    src: {
      type: String,
      required: true
    },
    /**
     * *Expects an optional alt text for the avatar image.*
     */
    alt: {
      type: String,
      default: undefined
    }
  }
};
</script>

<style src="./Avatar.scss" module lang="scss" />
