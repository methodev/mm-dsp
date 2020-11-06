const { getColorSwatch } = require('../swatches/services/colors');

module.exports = {
  texts: {
    name: 'Texts',
    value: {
      body: {
        name: 'Body',
        value: getColorSwatch('black', 'base')
      },
      negative: {
        name: 'Negative',
        value: getColorSwatch('white', 'base')
      },
      system: {
        name: 'System',
        value: getColorSwatch('black', 'graphite')
      }
    }
  },

  links: {
    prefix: 'link-',
    name: 'Links',
    value: {
      black: {
        name: 'Black',
        value: {
          link: {
            name: 'Link',
            value: getColorSwatch('black', 'base')
          },
          hover: {
            name: 'Hover',
            value: getColorSwatch('blue', 'dark')
          },
          active: {
            name: 'Active',
            value: getColorSwatch('midnight', 'base')
          }
        }
      },
      blue: {
        name: 'Blue',
        value: {
          link: {
            name: 'Link',
            value: getColorSwatch('blue', 'dark')
          },
          hover: {
            name: 'Hover',
            value: getColorSwatch('blue', 'base')
          },
          active: {
            name: 'Active',
            value: getColorSwatch('blue', 'light')
          }
        }
      },
      gray: {
        name: 'Gray',
        value: {
          link: {
            name: 'Link',
            value: getColorSwatch('black', 'graphite')
          },
          hover: {
            name: 'Hover',
            value: getColorSwatch('black', 'graphite')
          },
          active: {
            name: 'Active',
            value: getColorSwatch('black', 'graphite')
          }
        }
      }
    }
  },

  backgrounds: {
    name: 'Backgrounds',
    value: {
      graylight: {
        name: 'Graylight',
        value: getColorSwatch('white', 'ghost')
      },
      app: {
        name: 'App',
        value: getColorSwatch('white', 'vanish')
      },
      board: {
        name: 'Board',
        value: getColorSwatch('white', 'base')
      },
      modal: {
        name: 'Modal',
        value: getColorSwatch('white', 'base')
      },
      tooltip: {
        name: 'Tooltip',
        value: getColorSwatch('black', 'base')
      },
      'selective-list': {
        name: 'Selective list',
        value: getColorSwatch('white', 'base')
      },
      curtain: {
        name: 'Curtain',
        value: `rgba(${getColorSwatch('black', 'base')}, 0.7)`
      }
    }
  },

  states: {
    name: 'States',
    value: {
      disabled: {
        name: 'Disabled',
        value: getColorSwatch('silver', 'base')
      },
      success: {
        name: 'Success',
        value: getColorSwatch('cyan', 'dark')
      },
      warning: {
        name: 'Warning',
        value: getColorSwatch('yellow', 'dark')
      },
      error: {
        name: 'Error',
        value: getColorSwatch('red', 'dark')
      },
      current: {
        name: 'Current',
        value: getColorSwatch('silver', 'light')
      },
      selected: {
        name: 'Selected',
        value: getColorSwatch('silver', 'base')
      }
    }
  },

  brand: {
    name: 'Brand',
    value: {
      logo: {
        name: 'Logo',
        value: getColorSwatch('blue', 'base')
      }
    }
  }
};
