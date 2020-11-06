import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { methods } from '../../init/global/global-vue-methods';
import '../../init/global/global-vue-filters';
import '../../init/global/global-vue-components';
import '../../init/plugins/v-tooltip';
import '../../init/plugins/vue-js-modal';
import '../../init/plugins/vue-shortkey';
import '../../init/plugins/vuelidate';

Vue.use(VueI18n);

Vue.mixin({
  methods: {
    ...methods,

    localePath(path) {
      return typeof path === 'string' ? path : path.name;
    }
  }
});
