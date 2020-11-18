<template>
  <div
    :class="[
      $style.root,
      textAreaStyles.root,
      {
        [$style[state]]: state,
        [$style.filled]: !!value,
        [$style.footless]: footless
      }
    ]"
  >
    <div>
      <div
        :class="[
          $style.inputArea,
          {
            [textAreaStyles.focused]: isFocused
          }
        ]"
      >
        <div :class="[$style.wrapper, textAreaStyles.wrapper]">
          <textarea
            :id="id"
            ref="input"
            rows="1"
            autocomplete="off"
            :value="value"
            :maxlength="maxLength"
            :class="[
              $style.element,
              textAreaStyles.element,
              { ['avoid-shortkeys']: avoidShortkeys }
            ]"
            :name="name"
            :disabled="disabled ? 'disabled' : false"
            v-bind="$attrs"
            v-on="listeners"
            @focus="isFocused = true"
            @blur="isFocused = false"
          />
        </div>
        <u />
        <label :for="id" :class="$style.label">{{ placeholder }}</label>
        <a
          :class="[$style.xButton, textAreaStyles.xButton]"
          @click="clearInput"
        >
          <Icon name="x-big" />
        </a>
      </div>
      <div :class="$style.bottom">
        <FormNote v-if="systemNote" :class="$style.systemNote">
          {{ systemNote }}
        </FormNote>
        <span v-if="maxLength" :class="$style.counter">{{
          `${value.length} / ${maxLength}`
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * `TextArea` is for showing an area of text.
 */

export default {
  inheritAttrs: false,
  props: {
    /**
     * *Expects the placeholder.*
     */
    placeholder: {
      type: String,
      required: true
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
      default: undefined
    },
    /**
     * *Expects an optional maximal allowed length.*
     */
    maxLength: {
      type: Number,
      default: undefined
    },
    /**
     * *Expects an optional parameter that specifies if the area is valid.*
     */
    invalid: {
      type: Boolean,
      default: false
    },
    /**
     * *Expects an optional parameter that specifies if the area is disabled.*
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * *Expects an optional parameter that specifies if the area is automatically focused.*
     */
    autofocus: {
      type: Boolean,
      default: false
    },
    /**
     * *Expects an optional parameter that specifies if the area is without a footer.
     */
    footless: {
      type: Boolean,
      default: false
    },
    /**
     * *Expects an optional parameter that specifies if the area should allow short-cuts.
     */
    avoidShortkeys: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      invalidState: this.invalid,
      elementInitialHeight: null,
      isFocused: false
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateInputValue,
        focus: () => {
          /**
           * *Passthrough focus event.*
           * @type {Event}
           */
          this.$emit('focus');
        },
        blur: () => {
          /**
           * *Passthrough blur event.*
           * @type {Event}
           */
          this.$emit('blur');
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

  mounted() {
    this.elementInitialHeight = this.$refs.input.clientHeight;

    setTimeout(() => {
      this.$refs.input.setAttribute(
        'style',
        `height: ${this.$refs.input.scrollHeight}px`
      );
    }, 100);
  },
  methods: {
    updateInputValue(event) {
      this.$nextTick(() => {
        event.target.style.height = 'auto';
        const contentHeight = event.target.scrollHeight;

        // this.elementDefaultHeight = contentHeight;
        event.target.style.height = `${contentHeight}px`;
      });
      /**
       * *Passthrough input event.*
       * @type {Event}
       */
      this.$emit('input', event.target.value);
    },
    clearInput() {
      this.$refs.input.setAttribute(
        'style',
        `height: ${this.elementInitialHeight}px`
      );
      this.$refs.input.focus();
      /**
       * *Passthrough clear event.*
       * @type {Event}
       */
      this.$emit('clear');
    }
  }
};
</script>

<style src="../TextInput.scss" module lang="scss" />
<style src="./TextArea.scss" module="textAreaStyles" lang="scss" />
