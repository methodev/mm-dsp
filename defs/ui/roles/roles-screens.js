const { screen } = require('../swatches/services/screens');

module.exports = {
  screens: {
    name: 'Screens',
    value: {
      min: {
        name: 'Min',
        value: screen('screen-1200')
      },

      max: {
        name: 'Max',
        value: screen('screen-1440')
      }
    }
  }
};
