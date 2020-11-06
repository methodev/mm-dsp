const swatches = require('../swatches-transitions');
const { getValue } = require('./_helpers');

exports.transition = (value) => getValue(swatches, 'transitions', value);
