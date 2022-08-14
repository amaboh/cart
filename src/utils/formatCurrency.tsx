const FORMAT_CURRENCY = new Intl.NumberFormat(undefined, {
  currency: "GBP",
  style: "currency",
});

export function formatCurrency(number: number) {
  return FORMAT_CURRENCY.format(number);
}
