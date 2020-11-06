<template>
  <span
    :class="[
      $style.root,
      [$style[mode]],
      { [$style.stretched]: stretched, [$style.overall]: overall }
    ]"
  >
    <BounceLoader
      :key="calculatedSize + color"
      :class="$style.loader"
      :loading="true"
      :size="calculatedSize"
      :color="color"
    />
  </span>
</template>

<script>
import BounceLoader from 'vue-spinner/src/BounceLoader.vue';

/**
 * `Loader` is made to inform the user of loading or computing processes being carried out by the system.
 */

export default {
  components: {
    BounceLoader
  },

  props: {
    /**
     * *Expects an optional color mode of the loader.*<br>
     * *Available values:* `"dark"` | `"light"`
     */
    mode: {
      type: String,
      default: 'dark',
      validator(value) {
        return ['dark', 'light'].includes(value);
      }
    },
    /**
     * *Expects an optional size of the loader.*<br>
     * *Available values:* `"small"` | `"big"`
     */
    size: {
      type: String,
      default: 'small',
      validator(value) {
        return ['small', 'big'].includes(value);
      }
    },
    /**
     * *Expects a stretched state of the loader.*<br>
     * *(expands it horizontally)*
     */
    stretched: {
      type: Boolean,
      default: false
    },
    /**
     * *Expects an overall state of the loader.*<br>
     * *(expands it all over the layout)*
     */
    overall: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    color() {
      switch (this.mode) {
        case 'dark':
          return '#2d4ea2';
        default:
          return '#fff';
      }
    },

    calculatedSize() {
      switch (this.size) {
        case 'big':
          return '2.5rem';
        default:
          return '1.25rem';
      }
    }
  }
};
</script>

<style src="./Loader.scss" module lang="scss" />
