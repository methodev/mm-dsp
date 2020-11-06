const { getColorSwatch } = require('../../../defs/ui/swatches/services/colors');

const main = true;

module.exports = {
  kinds: {
    blue: {
      main,
      colors: {
        normal: getColorSwatch('blue', 'dark'),
        hover: getColorSwatch('blue', 'light'),
        active: getColorSwatch('red', 'dark')
      }
    },
    gray: {
      colors: {
        normal: getColorSwatch('black', 'graphite'),
        hover: getColorSwatch('black', 'base'),
        active: getColorSwatch('black', 'base')
      }
    },
    'light-gray': {
      colors: {
        normal: getColorSwatch('silver', 'dark'),
        hover: getColorSwatch('black', 'base'),
        active: getColorSwatch('black', 'base')
      }
    },
    black: {
      colors: {
        normal: getColorSwatch('black', 'base'),
        hover: getColorSwatch('blue', 'base'),
        active: getColorSwatch('blue', 'light')
      }
    },
    white: {
      colors: {
        normal: getColorSwatch('black', 'graphite'),
        hover: getColorSwatch('white', 'base'),
        active: getColorSwatch('white', 'base')
      }
    }
  },
  sizes: {
    24: {
      main,
      value: '24px'
    },
    16: {
      value: '16px'
    },
    18: {
      value: '18px'
    },
    36: {
      value: '36px'
    },
    48: {
      value: '48px'
    }
  }
};
