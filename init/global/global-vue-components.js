import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const categories = {
  boards: require.context('@/components/boards', true, /[A-Z]\w+\.(vue|js)$/),
  atoms: require.context('@/components/atoms', true, /[A-Z]\w+\.(vue|js)$/),
  molecules: require.context(
    '@/components/molecules',
    true,
    /[A-Z]\w+\.(vue|js)$/
  ),
  popovers: require.context(
    '@/components/popovers',
    true,
    /[A-Z]\w+\.(vue|js)$/
  )
};

const register = (list) => {
  list.keys().forEach((filename) => {
    const componentConfig = list(filename);

    const componentName = upperFirst(
      camelCase(
        filename
          .split('/')
          .pop()
          .replace(/\.\w+$/, '')
      )
    );

    Vue.component(componentName, componentConfig.default || componentConfig);
  });
};

for (const c in categories) {
  register(categories[c]);
}
