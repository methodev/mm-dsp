const icons = {};

const requireIcon = require.context('.', true, /[a-z]\w+\.svg$/);

requireIcon.keys().forEach((filename) => {
  const icon = requireIcon(filename);
  const name = filename.replace('./', '').replace('.svg', '');

  icons[name] = icon.default || icon;
});

export const groups = [
  {
    name: 'Checkbox states',
    icons: ['check-off', 'check-on']
  },
  {
    name: 'Radio button states',
    icons: ['radio-off', 'radio-on']
  },
  {
    name: 'Player icons',
    icons: ['play', 'pause']
  },
  {
    name: 'Profile icons',
    icons: ['single-neutral-circle', 'single-man-circle', 'single-woman-circle']
  },
  {
    name: 'Folder icons',
    icons: ['folder-closed', 'folder-opened']
  },
  {
    name: 'Chevron icons',
    icons: ['chevron-top', 'chevron-right', 'chevron-bottom', 'chevron-left']
  },
  {
    name: 'X icons',
    icons: ['x-big', 'x-circle']
  }
];
const standaloneIcons = Object.keys(icons).filter((icon) => {
  for (const g in groups) {
    if (groups[g].icons.includes(icon)) {
      return false;
    }
  }
  return true;
});
groups.unshift({
  name: 'Ungrouped',
  icons: standaloneIcons
});
groups.unshift({
  name: 'All',
  icons: Object.keys(icons)
});

export default icons;
