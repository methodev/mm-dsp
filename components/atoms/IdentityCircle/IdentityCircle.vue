<template>
  <div :class="$style.root">
    {{ initials }}
  </div>
</template>

<script>
/**
 * `IdentityCircle` is made for displaying name initials in a small circle.
 */

export default {
  props: {
    /**
     * *Expects the name initials (up to 2 letters).*
     */
    initials: {
      type: String,
      required: true,
      validator(value) {
        return value.length <= 2;
      }
    }
  }
};
</script>

<style src="./IdentityCircle.scss" module lang="scss" />
