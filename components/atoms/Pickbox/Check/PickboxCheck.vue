<template src="../Pickbox.html" />

<script>
// Mixins
import pickboxMixin from '../Pickbox';

export default {
  mixins: [pickboxMixin],

  data() {
    return {
      type: 'checkbox',
      off: 'check-off',
      on: 'check-on'
    };
  }
};
</script>

<style src="../Pickbox.scss" module="$stylePickbox" lang="scss" />
<style src="./PickboxCheck.scss" module="$styleCustom" lang="scss" />
