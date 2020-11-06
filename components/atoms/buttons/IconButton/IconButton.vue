<template>
  <button
    v-tooltip="tooltip ? tooltip : null"
    :disabled="disabled"
    :class="[$style.root, $style[kind], $style[`s${size}`]]"
    v-on="listeners"
  >
    <Icon :size="size" :name="icon" />
  </button>
</template>

<script>
import icons from '@/assets/graphics/icons';
import { mainOf, idsOf } from '@/utils/ui-handlers';
import { kinds, sizes } from '../../Icon/characteristics';

/**
 * `IconButton` is made to serve an icon as a button.
 */

export default {
  props: {
    /**
     * *Expects the name of the icon.*
     */
    icon: {
      type: String,
      required: true,
      validator(value) {
        return Object.keys(icons).includes(value);
      }
    },
    /**
     * *Expects the kind of the icon.*<br>
     * *Available values:* `"blue"` | `"gray"` | `"light-gray"` | `"black"` | `"white"`
     */
    kind: {
      type: String,
      default: mainOf(kinds),
      validator(value) {
        return idsOf(kinds).includes(value);
      }
    },
    /**
     * *Expects the size of the icon.*<br>
     * *Available values:* `"24"` | `"16"` | `"18"` | `"36"` | `"48"`
     */
    size: {
      type: String,
      default: mainOf(sizes),
      validator(value) {
        return idsOf(sizes).includes(value);
      }
    },
    /**
     * *Expects an optional tooltip data.*
     */
    tooltip: {
      type: [String, Object],
      default: undefined
    },
    /**
     * *Expects a disabled state of the button.*
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners
      };
    }
  }
};
</script>

<style src="./IconButton.scss" module lang="scss" />
