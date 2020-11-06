const { space } = require('../swatches/services/spaces');

module.exports = {
  spaces: {
    name: 'Spaces',
    value: {
      app: {
        name: 'App',
        value: space('space-24')
      },

      'group-items': {
        name: 'Group items',
        value: space('space-24')
      },

      heading: {
        name: 'Heading',
        value: space('space-24')
      },

      button: {
        name: 'Button',
        value: space('space-24')
      },

      atoms: {
        name: 'Atoms',
        value: space('space-12')
      },

      molecules: {
        name: 'Molecules',
        value: space('space-15')
      },

      organisms: {
        name: 'Organisms',
        value: space('space-30')
      },

      modal: {
        name: 'Modal',
        value: space('space-24')
      },

      board: {
        name: 'Board',
        value: space('space-24')
      },

      table: {
        name: 'Table',
        value: space('space-24')
      },

      tag: {
        name: 'Tag',
        value: space('space-05')
      },

      badge: {
        name: 'Badge',
        value: space('space-05')
      },

      'selective-list': {
        name: 'Selective list',
        value: space('space-12')
      }
    }
  }
};
