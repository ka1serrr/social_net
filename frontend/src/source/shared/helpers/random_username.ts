export const randomUsername = (max: number = 13565641435) => {
  return Math.round(Math.random() * max).toString();
};
