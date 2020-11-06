const swatches = require('../swatches-screens');
const { getValue } = require('./_helpers');

exports.screen = (value) => getValue(swatches, 'screens', value);
