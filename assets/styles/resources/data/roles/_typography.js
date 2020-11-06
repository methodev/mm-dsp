const data = require('../../../../../defs/ui/roles/roles-typography');
const generateSassMap = require('../sass-map-generator');
const maps = {};

generateSassMap(data, maps, 'roles-typo-');

module.exports = maps;
