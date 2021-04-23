import currencyFormatter from 'currency-formatter';

export const toCurrencyFormat = (value: number) => {
  return currencyFormatter.format(value, {
    decimal: ',',
    thousand: '.',
    precision: 0,
    format: '%s %v', // %s is the symbol and %v is the value
  });
};
