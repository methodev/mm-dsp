const { getColorSwatch } = require('./services/colors');

module.exports = {
  shadows: {
    name: 'Shadows',
    value: {
      'mid-gray': {
        name: 'Middle gray',
        value: `0 4px 10px rgba(${getColorSwatch('black', 'base')}, 0.1)`
      },
      'mid-midnight': {
        name: 'Middle midnight blue',
        value: `0 8px 10px rgba(${getColorSwatch('midnight', 'base')}, 0.2)`
      },
      'top-black': {
        name: 'Top black',
        value: `0 -4px 10px rgba(${getColorSwatch('black', 'base')}, 0.1)`
      },
      'bottom-black': {
        name: 'Bottom black',
        value: `0 1px 10px rgba(${getColorSwatch('black', 'base')}, 0.1)`
      }
    }
  }
};
