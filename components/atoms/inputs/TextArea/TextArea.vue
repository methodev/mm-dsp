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
export default {
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      required: true
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
      default: undefined
    },
    maxLength: {
      type: Number,
      default: undefined
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
    footless: {
      type: Boolean,
      default: false
    },
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
          this.$emit('focus');
        },
        blur: () => {
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

      this.$emit('input', event.target.value);
    },
    clearInput() {
      this.$refs.input.setAttribute(
        'style',
        `height: ${this.elementInitialHeight}px`
      );
      this.$refs.input.focus();
      this.$emit('clear');
    }
  }
};
</script>

<style src="../TextInput.scss" module lang="scss" />
<style src="./TextArea.scss" module="textAreaStyles" lang="scss" />
