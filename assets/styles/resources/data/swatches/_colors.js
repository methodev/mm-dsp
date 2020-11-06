const data = require('../../../../../defs/ui/swatches/swatches-colors');
const generateSassMap = require('../sass-map-generator');
const maps = {};

generateSassMap(data, maps, 'swatches-colors-');

module.exports = maps;
