const swatches = require('../swatches-breakpoints');
const { getValue } = require('./_helpers');

exports.breakpoint = (value) => getValue(swatches, 'breakpoints', value);
