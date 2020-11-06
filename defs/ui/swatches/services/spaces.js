const swatches = require('../swatches-spaces');
const { getValue } = require('./_helpers');

exports.space = (value) => getValue(swatches, 'spaces', value);
