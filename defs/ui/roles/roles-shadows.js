const { shadow } = require('../swatches/services/shadows');
// const { getColorSwatch } = require('../swatches/services/colors');

module.exports = {
  'box-shadows': {
    name: 'Box shadows',
    value: {
      board: {
        name: 'Board',
        value: shadow('mid-gray')
      },

      'board-hover': {
        name: 'Board hover',
        value: shadow('mid-midnight')
      },

      'board-active': {
        name: 'Board active',
        value: shadow('top-black')
      },

      modal: {
        name: 'Modal',
        value: shadow('mid-gray')
      },

      header: {
        name: 'Header',
        value: shadow('mid-gray')
      },

      'selective-list': {
        name: 'Selective list',
        value: shadow('mid-gray')
      }
    }
  }
};
