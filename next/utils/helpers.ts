export const formatEUR = (amount: number) => {
  const currencyFormatter = new Intl.NumberFormat('en-NL', {
    style: 'currency',
    currency: 'EUR',
  });
  return currencyFormatter.format(amount);
};
