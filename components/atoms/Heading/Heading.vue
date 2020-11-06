<template>
  <component
    :is="element"
    :class="[$style.root, $style[type]]"
    v-on="$listeners"
  >
    <!-- @slot *Provides a place for the heading text.* -->
    <slot />
  </component>
</template>

<script>
import { idsOf, mainOf } from '@/utils/ui-handlers';
import { types } from './characteristics';

/**
 * `Heading` is made to serve as a classic title object.
 */

export default {
  props: {
    /**
     * *Expects an optional size of the heading.*<br>
     * *Available values:* `1` | `2` | `3` | `4` | `5` | `6`
     */
    size: {
      type: Number,
      default: undefined,
      validator(value) {
        return value >= 1 && value <= 6;
      }
    },
    /**
     * *Expects an optional type of the heading.*<br>
     * *Available values:* `"heading1"` | `"heading2"` | `"heading3"`
     */
    type: {
      type: String,
      default: mainOf(types),
      validator(value) {
        return idsOf(types).includes(value);
      }
    }
  },

  computed: {
    element() {
      const headingVal = parseInt(this.type.replace('heading', ''));
      return this.size
        ? `h${this.size}`
        : headingVal
        ? `h${headingVal}`
        : 'label';
    }
  }
};
</script>

<style src="./Heading.scss" module lang="scss" />
