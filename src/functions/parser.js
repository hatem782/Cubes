export const RP = (tab) => {
  return [
    Math.PI * (tab[0] / 180),
    Math.PI * (tab[1] / 180),
    Math.PI * (tab[2] / 180),
  ];
};

export const RP1 = (val) => {
  return Math.PI * (val / 180);
};
