<template>
  <div :class="$style.root">
    <Tag
      v-for="({
        label,
        icon,
        iconLabel,
        type,
        size,
        isRemovable,
        maxLength,
        tooltipSuffix
      },
      index) in tags"
      :key="index"
      :class="$style.singleTag"
      :label="label"
      :icon="icon"
      :icon-label="iconLabel"
      :type="type"
      :size="size"
      :is-removable="isRemovable"
      :max-length="maxLength"
      :tooltip-suffix="tooltipSuffix"
      @tag-remove="handleEventTagRemove"
    />
    <div v-if="$slots.default" :class="$style.optionalItem">
      <slot />
    </div>
  </div>
</template>

<style src="./TagGroup.scss" module lang="scss" />

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  },

  methods: {
    handleEventTagRemove(tag) {
      this.$emit('tag-remove', tag);
    }
  }
};
</script>
