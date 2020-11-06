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

      head: {
        name: 'Head',
        value: space('space-36')
      },

      sections: {
        name: 'Sections',
        value: space('space-48')
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

      'sub-sections': {
        name: 'Sub-sections',
        value: space('space-24')
      },

      'list-items': {
        name: 'List items',
        value: space('space-10')
      },

      tag: {
        name: 'Tag',
        value: space('space-05')
      },

      badge: {
        name: 'Badge',
        value: space('space-05')
      },

      popover: {
        name: 'Popover',
        value: space('space-12')
      },

      'selective-list': {
        name: 'Selective list',
        value: space('space-12')
      }
    }
  },

  'spaces-panel-key-value': {
    name: 'Spaces PanelKeyValue',
    value: {
      'row-buffer': {
        name: 'Row buffer',
        value: space('space-24')
      },

      'sub-row-buffer': {
        name: 'Sub-row buffer',
        value: space('space-15')
      },

      'sub-row-items-left-buffer': {
        name: 'Sub-row item left buffer',
        value: space('space-19')
      }
    }
  }
};
