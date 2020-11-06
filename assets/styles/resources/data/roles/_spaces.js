const data = require('../../../../../defs/ui/roles/roles-spaces');
const generateSassMap = require('../sass-map-generator');
const maps = {};

generateSassMap(data, maps, 'roles-');

module.exports = maps;
