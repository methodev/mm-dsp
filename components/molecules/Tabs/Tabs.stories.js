import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { array } from '@storybook/addon-knobs';
import Tabs from './Tabs';

storiesOf('Molecules', module)
  .addParameters({ component: Tabs })
  .add('Tabs', () => ({
    template: `<Tabs :tabs="tabsModified" @change="handleChange" />`,
    data() {
      return {
        tabsModified: this.buildTabs(this.tabsKnob)
      };
    },
    props: {
      tabsKnob: {
        type: Array,
        default: array(
          'List of tabs',
          ['Home', 'Services', 'About', 'Contacts'],
          ', '
        )
      }
    },
    methods: {
      handleChange(e) {
        action('Change tab')(e);
        this.setCurrentTab(e);
      },
      setCurrentTab(id) {
        this.tabsModified = this.tabsModified.map((tab) => {
          if (tab.id === id) {
            return {
              ...tab,
              current: true
            };
          }

          return {
            ...tab,
            current: false
          };
        });
      },
      buildTabs(rawTabs) {
        return rawTabs.map((tab, index) => ({
          label: tab,
          id: `tab_${tab.split(' ').join('_').toLowerCase()}`,
          current: tab.current ? tab.current : index === 0
        }));
      }
    },
    watch: {
      tabsKnob(newTabsValue) {
        this.tabsModified = this.buildTabs(newTabsValue);
      }
    }
  }));
