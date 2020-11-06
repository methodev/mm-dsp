const {
  border,
  borderRadius
  // borderWrapper
} = require('../swatches/services/borders');

module.exports = {
  dividers: {
    name: 'Dividers',
    value: {
      tabs: {
        name: 'Tabs',
        value: border('1px-silver-middle')
      },
      data: {
        name: 'Data',
        value: border('1px-silver-light')
      }
    }
  },

  underlines: {
    name: 'Underlines',
    value: {
      'text-input': {
        name: 'Text input',
        value: border('1px-solid-gray')
      },
      separator: {
        name: 'Separator',
        value: border('1px-silver-middle')
      }
    }
  },

  wrappers: {
    name: 'Wrappers',
    value: {
      radio: {
        name: 'Radio',
        value: border('1px-solid-gray')
      },
      checkbox: {
        name: 'Checkbox',
        value: border('1px-solid-gray')
      }
    }
  },

  radiuses: {
    name: 'Radiuses',
    value: {
      board: {
        name: 'Board',
        value: borderRadius('ten')
      },
      modal: {
        name: 'Modal',
        value: borderRadius('ten')
      },
      'selective-list': {
        name: 'Selective list',
        value: borderRadius('ten')
      },
      radio: {
        name: 'Radio',
        value: borderRadius('circle')
      },
      badge: {
        name: 'Badge',
        value: borderRadius('four')
      },
      thumb: {
        name: 'Thumb',
        value: borderRadius('four')
      },
      'shadow-border': {
        name: 'Shadow border',
        value: borderRadius('twelve')
      }
    }
  }
};
