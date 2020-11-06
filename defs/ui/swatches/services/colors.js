const swatches = require('../swatches-colors');
const { getValue } = require('./_helpers');

exports.getColorSwatch = (group, col) => getValue(swatches, group, col);
