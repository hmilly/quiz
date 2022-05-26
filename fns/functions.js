export const formatMoney = (amount) =>
  amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const capMoney = (id) => {
  // -1 for correct answers worth / -2 for correct id
  while ((id - 1) % 5 !== 0) id -= 1;
  return id >= 5 ? id - 2 : 0;
};
