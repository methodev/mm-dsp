import { storiesOf } from '@storybook/vue';
import { number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Pagination from './Pagination';

storiesOf('Molecules/Pagination', module)
  .addParameters({ component: Pagination })
  .add('Default', () => ({
    template: `
        <Pagination
          :key="currentPageKnob"
          :total-items="totalItemsKnob"
          :current-page="page"
          :step="stepKnob"
          :loading="loading"
          @change="change"
          @load-prev="loadPrev"
          @load-next="loadNext"
        />`,
    props: {
      totalItemsKnob: {
        type: Number,
        default: number('Total items', 120)
      },
      currentPageKnob: {
        type: Number,
        default: number('Current page', 1)
      },
      stepKnob: {
        type: Number,
        default: number('Step', 10)
      }
    },
    data() {
      return {
        loading: false,
        page: this.currentPageKnob
      };
    },

    watch: {
      currentPageKnob(val) {
        this.page = val;
      }
    },

    methods: {
      change(page) {
        action('Change')(page);

        this.loading = true;

        setTimeout(() => {
          this.page = page;
          this.loading = false;
        }, 1000);
      },

      loadPrev(page) {
        action('Load previous')(page);
      },

      loadNext(page) {
        action('Load next')(page);
      }
    }
  }));
