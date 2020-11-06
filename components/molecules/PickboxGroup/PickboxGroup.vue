<template>
  <div :class="[$style.root, $style[display]]">
    <template v-for="item in options">
      <PickboxCheck
        v-if="type === 'checkbox'"
        :key="item.id"
        v-model="item.value"
        v-tooltip.right="tooltip(item)"
        v-bind="item"
        :class="$style.pickbox"
        @input="checkboxCheck(item)"
      >
        {{ item.label | truncate(item.maxLength) }}
      </PickboxCheck>
      <PickboxRadio
        v-if="type === 'radio'"
        :key="item.id"
        v-tooltip.right="tooltip(item)"
        v-bind="item"
        :class="$style.pickbox"
        @input="radioCheck(item)"
      >
        {{ item.label | truncate(item.maxLength) }}
      </PickboxRadio>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['checkbox', 'radio'].includes(value);
      }
    },
    display: {
      type: String,
      default: 'block',
      validator(value) {
        return ['block', 'inline'].includes(value);
      }
    }
  },

  data() {
    return {
      options: [...this.items]
    };
  },

  methods: {
    radioCheck(item) {
      this.options = this.options.map((option) => {
        option.value = option.id === item.id;
        return option;
      });

      this.$emit('input-change', item);
    },

    checkboxCheck(item) {
      this.$emit('input-change', item);
    },

    tooltipContent(item) {
      let tooltip = '';

      if (item.maxLength && item.label.length > item.maxLength) {
        tooltip += `<p>${item.label}</p>`;
      }
      if (item.tooltipSuffix) {
        tooltip += `<p>${item.tooltipSuffix}</p>`;
      }

      return tooltip;
    },

    tooltip(item) {
      return {
        content: this.tooltipContent(item) || item.tooltipSuffix || undefined,
        html: true
      };
    }
  }
};
</script>

<style src="./PickboxGroup.scss" module lang="scss" />
