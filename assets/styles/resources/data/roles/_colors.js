const data = require('../../../../../defs/ui/roles/roles-colors');
const generateSassMap = require('../sass-map-generator');
const maps = {};

generateSassMap(data, maps, 'roles-colors-');

module.exports = maps;
