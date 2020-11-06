export const methods = {
  $rem: (px) =>
    px /
      parseFloat(
        window
          .getComputedStyle(document.documentElement, null)
          .getPropertyValue('font-size')
      ) +
    'rem',

  $getItemById: (list, id) => list.find((item) => item.id === id)
};

export default (context, inject) => {
  for (const m in methods) {
    inject(m, methods[m]);
  }
};
