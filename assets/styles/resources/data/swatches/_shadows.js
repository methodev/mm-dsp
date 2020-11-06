const data = require('../../../../../defs/ui/swatches/swatches-shadows');
const generateSassMap = require('../sass-map-generator');
const maps = {};

generateSassMap(data, maps, 'swatches-');

module.exports = maps;
