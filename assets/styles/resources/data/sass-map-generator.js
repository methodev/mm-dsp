const generateSassMap = (list, object, prfx) => {
  const prefix = prfx || '';

  Object.keys(list).forEach((groupName) => {
    const value = list[groupName].value;
    const nestedPrefix = list[groupName].prefix || '';

    if (typeof value === 'object') {
      const nestedObject = (object[prefix + groupName] = {});
      generateSassMap(value, nestedObject, nestedPrefix);
    } else {
      object[prefix + groupName] = value;
    }
  });
};

module.exports = generateSassMap;
