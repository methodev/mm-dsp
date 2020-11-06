<template>
  <div :class="$style.root">
    <label v-if="label" :class="$style.groupLabel">
      {{ label }}
    </label>
    <div :class="$style.identitiesContainer">
      <IdentityCircle
        v-for="(identity, index) in identities"
        :key="index"
        :class="$style.singleIdentity"
        :initials="identity"
      />
    </div>
  </div>
</template>

<style src="./IdentitiesGroup.scss" module lang="scss" />

<script>
export default {
  props: {
    label: {
      type: String,
      default: null
    },
    identities: {
      type: Array,
      required: true
    }
  }
};
</script>
