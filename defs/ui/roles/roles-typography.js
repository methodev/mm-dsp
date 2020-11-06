const {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing
} = require('../swatches/services/typography');

module.exports = {
  'font-families': {
    name: 'Font families',
    value: {
      body: {
        name: 'Body',
        value: fontFamily('font-family-acari-sans')
      }
    }
  },

  'font-sizes': {
    name: 'Font sizes',
    value: {
      body: {
        name: 'Body',
        value: fontSize('font-size-16')
      },
      heading1: {
        name: 'Heading 1',
        value: fontSize('font-size-22')
      },
      heading2: {
        name: 'Heading 2',
        value: fontSize('font-size-22')
      },
      heading3: {
        name: 'Heading 3',
        value: fontSize('font-size-16')
      },
      menu: {
        name: 'Menu',
        value: fontSize('font-size-14')
      },
      small: {
        name: 'Small',
        value: fontSize('font-size-12')
      },
      'super-small': {
        name: 'Super small',
        value: fontSize('font-size-9')
      },
      tooltip: {
        name: 'Tooltip',
        value: fontSize('font-size-12')
      },
      badge: {
        name: 'Badge',
        value: fontSize('font-size-12')
      }
    }
  },

  'font-weights': {
    name: 'Font weights',
    value: {
      body: {
        name: 'Body',
        value: fontWeight('font-weight-regular')
      },
      heading1: {
        name: 'Heading 1',
        value: fontWeight('font-weight-medium')
      },
      heading2: {
        name: 'Heading 2',
        value: fontWeight('font-weight-bold')
      },
      heading3: {
        name: 'Heading 3',
        value: fontWeight('font-weight-medium')
      }
    }
  },

  'line-heights': {
    name: 'Line heights',
    value: {
      body: {
        name: 'Body',
        value: lineHeight('line-height-150percent')
      },
      button: {
        name: 'Button',
        value: lineHeight('line-height-100percent')
      },
      menu: {
        name: 'Menu',
        value: lineHeight('line-height-16px')
      },
      'super-small': {
        name: 'Super small',
        value: lineHeight('line-height-12px')
      },
      'form-note': {
        name: 'Form note',
        value: lineHeight('line-height-normal')
      }
    }
  }
};
