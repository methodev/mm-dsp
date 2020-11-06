const swatches = require('../swatches-ratios');
const { getValue } = require('./_helpers');

exports.ratio = (value) => getValue(swatches, 'ratios', value);
