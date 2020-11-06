const { ratio } = require('../swatches/services/ratios');

module.exports = {
  ratios: {
    name: 'Ratios',
    value: {
      font: {
        name: 'Font',
        value: ratio('ratio-1_23')
      },

      logo: {
        name: 'Logo',
        value: ratio('ratio-2_16')
      },

      space: {
        name: 'Space',
        value: ratio('ratio-10')
      },

      thumb: {
        name: 'thumb',
        value: ratio('ratio-1_74')
      }
    }
  }
};
