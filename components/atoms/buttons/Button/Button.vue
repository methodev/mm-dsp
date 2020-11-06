<template>
  <component
    :is="element"
    ref="button"
    :data-type="type"
    :class="[
      $style.root,
      {
        [$style.disabled]: disabled,
        [$style.loading]: loading,
        [$style.warning]: warning
      }
    ]"
    @click="handleEventClick"
  >
    <span v-if="!loading" :class="$style.wrapper">
      <span v-if="$slots['prefix']" :class="[$style.addon, $style.prefix]">
        <!-- @slot *Provides a prefix place in the button.* -->
        <slot name="prefix" />
      </span>
      <span :class="$style.main">
        <!-- @slot *Provides a place for the main content of the button.* -->
        <slot />
      </span>
      <span v-if="$slots['suffix']" :class="[$style.addon, $style.suffix]">
        <!-- @slot *Provides a suffix place in the button.* -->
        <slot name="suffix" />
      </span>
    </span>
    <Loader v-if="loading" :mode="type ? 'dark' : 'light'" />
  </component>
</template>

<script>
/**
 * `Button` is made to serve as a classic button trigger.
 */

export default {
  props: {
    /**
     * *Expects a type of the html element.*<br>
     * *Available values:* `"a"` | `"button"`
     */
    element: {
      type: String,
      default: 'a',
      validator(value) {
        return ['a', 'button'].includes(value);
      }
    },
    /**
     * *Expects a disabled state of the button.*<br>
     * *Available values:* `undefined` | `"blue"` | `"outlined"` | `"transparent"`
     */
    type: {
      type: String,
      default: undefined,
      validator(value) {
        return ['blue', 'outlined', 'transparent'].includes(value);
      }
    },
    /**
     * *Expects a disabled state of the button.*
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * *Expects a loading state of the button.*
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * *Expects a warning state of the button.*
     */
    warning: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    loading(val) {
      if (val) {
        this.setWidth(this.$refs.button);
      } else {
        this.setWidth(this.$refs.button, 'auto');
      }
    }
  },

  methods: {
    setWidth(element, value) {
      element.style.width = value || this.$rem(element.clientWidth);
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

<style src="./Button.scss" module lang="scss" />
