<template>
  <div :class="[$style.root, { [$style.block]: block }]">
    <MetaText v-for="(item, index) in items" :key="index" :class="$style.meta">
      {{ item }}
    </MetaText>
  </div>
</template>

<style src="./MetaGroup.scss" module lang="scss" />

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    block: {
      type: Boolean,
      default: false
    }
  }
};
</script>
