export default {
  inheritAttrs: false,

  data() {
    return {
      hover: false
    };
  },

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      };
    },
    icon() {
      return this.$attrs.value || this.hover ? this.on : this.off;
    }
  },

  methods: {
    updateValue(event) {
      this.$emit('input', event.target.checked);
    }
  }
};
