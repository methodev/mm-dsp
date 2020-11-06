const data = require('../../../../../defs/ui/roles/roles-borders');
const generateSassMap = require('../sass-map-generator');
const maps = {};

generateSassMap(data, maps, 'roles-borders-');

module.exports = maps;
