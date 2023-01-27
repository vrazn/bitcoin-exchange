export const formatCurrency = (value: number, currency: string) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    currency: currency,
  }).format(value);
};

export const formatPercent = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    signDisplay: 'never',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value / 100);
};
