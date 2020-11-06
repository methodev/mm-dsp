import Vue from 'vue';

const filters = {
  truncate: (value, length) =>
    !isNaN(length) && length > 0 && value.length > length
      ? value.substring(0, length) + '…'
      : value,
  capitalize: (value) =>
    value.toLocaleLowerCase().replace(/^\w/, (c) => c.toUpperCase())
};

for (const filter in filters) {
  Vue.filter(filter, filters[filter]);
}
