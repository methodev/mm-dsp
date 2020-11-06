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
      ten: {
        name: 'Ten',
        value: '10px'
      }
    }
  }
};
