<template src="../Pickbox.html" />

<script>
// Mixins
import pickboxMixin from '../Pickbox';

export default {
  mixins: [pickboxMixin],

  data() {
    return {
      type: 'radio',
      off: 'radio-off',
      on: 'radio-on'
    };
  }
};
</script>

<style src="../Pickbox.scss" module="$stylePickbox" lang="scss" />
<style src="./PickboxRadio.scss" module="$styleCustom" lang="scss" />
