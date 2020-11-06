const { getColorSwatch } = require('../../../defs/ui/swatches/services/colors');

const main = true;

module.exports = {
  kinds: {
    gray: {
      main,
      colors: {
        background: getColorSwatch('silver', 'dark'),
        text: getColorSwatch('white', 'base')
      }
    },
    grayBorder: {
      main,
      colors: {
        text: getColorSwatch('black', 'graphite'),
        border: getColorSwatch('silver', 'dark')
      }
    },
    paleGray: {
      colors: {
        background: getColorSwatch('silver', 'light'),
        text: getColorSwatch('black', 'graphite')
      }
    },
    blue: {
      colors: {
        background: getColorSwatch('blue', 'dark'),
        text: getColorSwatch('white', 'base')
      }
    }
  }
};
