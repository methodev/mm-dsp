<template>
  <span :class="[$style.root, $style[kind]]">
    {{ label }}
  </span>
</template>

<script>
import { idsOf, mainOf } from '@/utils/ui-handlers';
import { kinds } from './characteristics';

/**
 * `Badge` is made for highlighting key info with a predefined status.
 */

export default {
  props: {
    /**
     * *Expects the text of the badge.*
     */
    label: {
      type: String,
      required: true
    },
    /**
     * *Expects the name of the background color.*<br>
     * *Available values:* `"gray"` | `"paleGray"` | `"blue"`
     */
    kind: {
      type: String,
      default: mainOf(kinds),
      validator(value) {
        return idsOf(kinds).includes(value);
      }
    }
  }
};
</script>

<style src="./Badge.scss" module lang="scss" />
