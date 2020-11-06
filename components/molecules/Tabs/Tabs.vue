<template>
  <div :class="$style.root">
    <a
      v-for="({ label, id, current }, index) in tabs"
      :key="index"
      :class="[$style.tab, { [$style.current]: current }]"
      @click="$emit('change', id)"
    >
      {{ label }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style src="./Tabs.scss" module lang="scss" />
