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
export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'search', 'number', 'email', 'password'].includes(
          value
        );
      }
    },
    placeholder: {
      type: String,
      required: true
    },
    placeholderInfo: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      default: ''
    },
    systemNote: {
      type: String,
      default: null
    },
    maxLength: {
      type: [Number, null],
      default: null
    },
    invalid: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    opened: {
      type: Boolean,
      default: false
    },
    footless: {
      type: Boolean,
      default: false
    },
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
      this.$emit('input', event.target.value);
    },

    clearInput(e) {
      this.$emit('clear');
      this.$refs.input.focus();
      e.preventDefault();
    }
  }
};
</script>

<style src="../TextInput.scss" module lang="scss" />
<style src="./TextField.scss" module="textFieldStyles" lang="scss" />
