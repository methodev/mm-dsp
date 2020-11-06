const data = require('../../../../../defs/ui/swatches/swatches-typography');
const generateSassMap = require('../sass-map-generator');
const maps = {};

generateSassMap(data, maps, 'swatches-typo-');

module.exports = maps;
