export const formatLargeCurrency = (value: number, digits = 1): string => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
  ];
  const regexp = /\.0+$|(.*[1-9])0+$/;
  const range = lookup.findLast((item) => value >= item.value);
  return range
    ? (value / range.value)
        .toFixed(digits)
        .replace(regexp, "")
        .concat(range.symbol)
    : "0";
};
