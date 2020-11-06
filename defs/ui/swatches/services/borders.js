const swatches = require('../swatches-borders');
const { getValue } = require('./_helpers');

exports.border = (value) => getValue(swatches, 'borders', value);
exports.borderRadius = (value) => getValue(swatches, 'border-radiuses', value);
