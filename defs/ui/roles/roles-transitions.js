const { transition } = require('../swatches/services/transitions');

module.exports = {
  transitions: {
    name: 'Transitions',
    value: {
      link: {
        name: 'Link',
        value: transition('transition-100ms')
      },

      button: {
        name: 'Button',
        value: transition('transition-150ms')
      },

      input: {
        name: 'Input',
        value: transition('transition-100ms')
      },

      tooltip: {
        name: 'Tooltip',
        value: transition('transition-250ms')
      },

      board: {
        name: 'Board',
        value: transition('transition-250ms')
      },

      thumb: {
        name: 'Thumb',
        value: transition('transition-100ms')
      }
    }
  }
};
