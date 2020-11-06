const { getColorSwatch } = require('./services/colors');

module.exports = {
  borders: {
    prefix: 'sborder-',
    name: 'Borders',
    value: {
      '1px-solid-gray': {
        name: '1px-solid-gray',
        value: `1px solid ${getColorSwatch('black', 'graphite')}`
      },
      '1px-silver-middle': {
        name: '1px-silver-middle',
        value: `1px solid ${getColorSwatch('silver', 'base')}`
      },
      '1px-silver-light': {
        name: '1px-silver-light',
        value: `1px solid ${getColorSwatch('silver', 'light')}`
      }
    }
  },

  'border-radiuses': {
    name: 'Border radiuses',
    value: {
      circle: {
        name: 'Circle',
        value: '50%'
      },
      four: {
        name: 'Four',
        value: '4px'
      },
      six: {
        name: 'Six',
        value: '6px'
      },
      ten: {
        name: 'Ten',
        value: '10px'
      },
      twelve: {
        name: 'Twelve',
        value: '12px'
      }
    }
  }
};
