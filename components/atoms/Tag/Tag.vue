<template>
  <div
    v-tooltip="tooltip"
    :class="[
      $style.root,
      $style[size],
      { [$style.removable]: isRemovable },
      { [$style.hasIcon]: icon }
    ]"
  >
    <Icon
      v-if="icon"
      v-tooltip="iconLabel"
      :class="[$style.icon, { [$style.hoverable]: iconLabel }]"
      :name="icon"
    />
    <span :class="$style.tagLabel">{{ label | truncate(maxLength) }}</span>
    <IconButton
      v-if="isRemovable"
      :icon="size === 'small' ? 'x-circle' : 'x-big'"
      kind="light-gray"
      :class="$style.remove"
      @click="emitRemovedTagEvent"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
      validator(value) {
        return value.trim().length > 0;
      }
    },
    icon: {
      type: [String, null],
      default: ''
    },
    iconLabel: {
      type: [String, null],
      default: ''
    },
    type: {
      type: String,
      default: undefined
    },
    size: {
      type: String,
      default: 'small',
      validator(value) {
        return ['small', 'big'].includes(value);
      }
    },
    tooltipSuffix: {
      type: String,
      default: undefined
    },
    isRemovable: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: Number,
      default: undefined
    }
  },

  computed: {
    tooltip() {
      let tooltip = '';

      if (this.maxLength && this.label.length > this.maxLength) {
        tooltip += `<p>${this.label}</p>`;
      }
      if (this.tooltipSuffix) {
        tooltip += `<p>${this.tooltipSuffix}</p>`;
      }

      return {
        content: tooltip || this.tooltipSuffix || undefined,
        html: true
      };
    }
  },

  methods: {
    emitRemovedTagEvent() {
      this.$emit('tag-remove', this.$props);
    }
  }
};
</script>

<style src="./Tag.scss" module lang="scss" />
