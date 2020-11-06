const swatches = require('../swatches-shadows');
const { getValue } = require('./_helpers');

exports.shadow = (value) => getValue(swatches, 'shadows', value);
