const { breakpoint } = require('../swatches/services/breakpoints');

module.exports = {
  breakpoints: {
    name: 'Breakpoints',
    value: {
      device: {
        name: 'Device',
        value: breakpoint('m')
      }
    }
  }
};
