<template>
  <div
    :class="[
      $style.root,
      textFieldStyles.root,
      {
        [$style[state]]: state,
        [$style.filled]: !!value,
        [$style.opened]: opened,
        [$style.footless]: footless
      }
    ]"
  >
    <div :class="$style.inputArea">
      <input
        :id="id"
        ref="input"
        :value="value"
        :type="type"
        autocomplete="off"
        :maxlength="maxLength"
        :class="[$style.element, textFieldStyles.element]"
        :name="name"
        :disabled="disabled ? 'disabled' : false"
        v-bind="$attrs"
        v-on="listeners"
      />
      <u />
      <Icon v-if="type === 'search'" name="search" :class="$style.magnifier" />
      <label
        :for="id"
        :class="[
          $style.label,
          textFieldStyles.label,
          { [$style.staticPlaceholder]: staticPlaceholder }
        ]"
      >
        {{ placeholder }}

        <Icon
          v-if="placeholderInfo"
          v-tooltip="placeholderInfo"
          name="information-circle"
          kind="light-gray"
          size="16"
          :class="textFieldStyles.placeholderInfo"
        />
      </label>
      <a :class="$style.xButton" @mousedown="clearInput">
        <Icon name="x-big" />
      </a>
    </div>
    <div :class="$style.bottom">
      <FormNote v-if="$slots['system-note']" :class="$style.systemNote">
        <!-- @slot *Provides a system note place in the field.* -->
        <slot name="system-note" />
      </FormNote>
      <FormNote
        v-if="systemNote && !$slots['system-note']"
        :class="$style.systemNote"
      >
        {{ systemNote }}
      </FormNote>
      <span v-if="maxLength" :class="$style.counter">
        {{ `${value.length} / ${maxLength}` }}
      </span>
    </div>
  </div>
</template>

<script>
/**
 * `TextField` is for showing a field of text.
 */

export default {
  inheritAttrs: false,
  props: {
    /**
     * *Expects the type of the field.*<br>
     * *Available values:* `"text"` | `"search"` | `"number"` | `"email"` | `"password"`
     */
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'search', 'number', 'email', 'password'].includes(
          value
        );
      }
    },
    /**
     * *Expects the placeholder.*
     */
    placeholder: {
      type: String,
      required: true
    },
    /**
     * *Expects an optional placeholder info.*
     */
    placeholderInfo: {
      type: String,
      default: ''
    },
    /**
     * *Expects the name.*
     */
    name: {
      type: String,
      required: true
    },
    /**
     * *Expects the ID.*
     */
    id: {
      type: String,
      required: true
    },
    /**
     * *Used for `v-model` support.*
     */
    value: {
      type: [String, Number],
      default: ''
    },
    /**
     * *Expects an optional system note.*
     */
    systemNote: {
      type: String,
      default: null
    },
    /**
     * *Expects an optional maximum allowed length.*
     */
    maxLength: {
      type: [Number, null],
      default: null
    },
    /**
     * *Expects an optional parameter that specifies if the field is valid.*
     */
    invalid: {
      type: Boolean,
      default: false
    },
    /**
     * *Expects an optional parameter that specifies if the field is disabled.*
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * *Expects an optional parameter that specifies if the field is automatically focused.*
     */
    autofocus: {
      type: Boolean,
      default: false
    },
    /**
     * *Expects an optional parameter that specifies if the field is initially opened.*
     */
    opened: {
      type: Boolean,
      default: false
    },
    /**
     * *Expects an optional parameter that specifies if the field is without a footer.*
     */
    footless: {
      type: Boolean,
      default: false
    },
    /**
     * *Expects an optional parameter that specifies if the field has a static placeholder.*
     */
    staticPlaceholder: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      invalidState: this.invalid
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateInputValue,
        keyup: ({ keyCode, target }) => {
          if (keyCode === 13) {
            /**
             * *Passthrough enter pressed event.*
             * @type {Event}
             */
            this.$emit('enter', target.value);
            this.$refs.input.blur();
          }
        }
      };
    },
    state() {
      if (this.invalidState) {
        return 'invalid';
      }
      if (this.disabled) {
        return 'disabled';
      }
      return null;
    }
  },
  watch: {
    invalid(value) {
      this.invalidState = value;
    },
    autofocus: {
      immediate: true,
      handler(val) {
        if (val) {
          setTimeout(() => {
            this.$refs.input.focus();
          }, 50);
        }
      }
    }
  },

  methods: {
    updateInputValue(event) {
      /**
       * *Passthrough input event.*
       * @type {Event}
       */
      this.$emit('input', event.target.value);
    },

    clearInput(e) {
      /**
       * *Passthrough clear event.*
       * @type {Event}
       */
      this.$emit('clear');
      this.$refs.input.focus();
      e.preventDefault();
    }
  }
};
</script>

<style src="../TextInput.scss" module lang="scss" />
<style src="./TextField.scss" module="textFieldStyles" lang="scss" />
