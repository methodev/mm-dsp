<template>
  <i
    :class="[$style.root, { [$style[kind]]: kind }, $style[`s${size}`]]"
    @click="handleEventClick"
  >
    <component :is="icon(name)" />
  </i>
</template>

<script>
import icons from '@/assets/graphics/icons';
import { mainOf, idsOf } from '@/utils/ui-handlers';
import { kinds, sizes } from './characteristics';

/**
 * `Icon` is made for serving glyph icons across different content types.
 */

export default {
  props: {
    /**
     * *Expects the name of the icon.*
     */
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.keys(icons).includes(value);
      }
    },
    /**
     * *Expects the kind of the icon which will set its color.*<br>
     * *Available values:* `"blue"` | `"gray"` | `"light-gray"` | `"black"` | `"white"`
     */
    kind: {
      type: String,
      default: undefined,
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
    }
  },

  methods: {
    icon(name) {
      return icons[name];
    },

    handleEventClick(e) {
      /**
       * *Passthrough click event.*
       * @type {Event}
       */
      this.$emit('click', e);
    }
  }
};
</script>

<style src="./Icon.scss" module lang="scss" />
