const swatches = require('../swatches-typography');
const { getValue } = require('./_helpers');

exports.fontFamily = (col) => getValue(swatches, 'font-families', col);
exports.fontSize = (col) => getValue(swatches, 'font-sizes', col);
exports.fontWeight = (col) => getValue(swatches, 'font-weights', col);
exports.lineHeight = (col) => getValue(swatches, 'line-heights', col);
