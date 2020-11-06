<template>
  <div :class="$style.root">
    <Loader v-if="loading" :class="$style.loader" />
    <div :class="$style.label">{{ label }}</div>
    <nav :class="$style.nav">
      <IconButton
        icon="chevron-left"
        kind="light-gray"
        :tooltip="tooltips.prev"
        :disabled="currentPage === 1"
        @click="decrementPage"
      />
      <IconButton
        icon="chevron-right"
        kind="light-gray"
        :tooltip="tooltips.next"
        :disabled="isLastPage"
        @click="incrementPage"
      />
    </nav>
  </div>
</template>

<style src="./Pagination.scss" module lang="scss" />

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      default: 1
    },
    step: {
      type: Number,
      default: 10
    },
    tooltips: {
      type: Object,
      default() {
        return {
          prev: this.$t('previous'),
          next: this.$t('next')
        };
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    label() {
      // Calculate current page items
      const offsetStart = (this.currentPage - 1) * this.step + 1;
      let offsetEnd = this.currentPage * this.step;

      // If offsetEnd is bigger than the total items, show the totalItems instead
      offsetEnd = offsetEnd < this.totalItems ? offsetEnd : this.totalItems;

      const currentResultItems =
        offsetStart !== offsetEnd
          ? `${offsetStart} - ${offsetEnd}`
          : `${offsetStart}`; // If only 1 item is present on the last page remove duplicate offset

      return `${currentResultItems} ${this.$t('outOf')} ${this.totalItems}`;
    },

    isLastPage() {
      // Calculate total pages
      const pageCount = Math.ceil(this.totalItems / this.step);

      return this.currentPage >= pageCount;
    }
  },

  methods: {
    incrementPage() {
      this.$emit('change', this.currentPage + 1);
      this.$emit('load-next', this.currentPage + 1);
    },

    decrementPage() {
      this.$emit('change', this.currentPage - 1);
      this.$emit('load-prev', this.currentPage - 1);
    }
  }
};
</script>
