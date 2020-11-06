const { getColorSwatch } = require('./services/colors');

module.exports = {
  shadows: {
    name: 'Shadows',
    value: {
      'mid-gray': {
        name: 'Middle gray',
        value: `0 4px 10px rgba(${getColorSwatch('black', 'base')}, 0.1)`
      }
    }
  }
};
