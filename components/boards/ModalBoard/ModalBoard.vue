<template>
  <div :class="[$style.dialog, { [$style.stretched]: stretched }]">
    <div :class="$style.head">
      <div :class="$style.title">
        <Heading :size="1">{{ title }}</Heading>
      </div>
      <div v-if="$slots.head" :class="$style.meta">
        <slot name="head" />
      </div>
    </div>

    <div v-if="$slots.body" :class="$style.body">
      <slot name="body" />
    </div>

    <div v-if="$slots.foot" :class="$style.foot">
      <slot name="foot" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },

    stretched: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style src="./ModalBoard.scss" module lang="scss" />
