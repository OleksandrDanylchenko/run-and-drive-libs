const locale = 'en-US';

export const capitalizeFirstLetter = (input: string): string => {
  const [first, ...rest] = input;
  return first.toLocaleUpperCase(locale) + rest.join('');
};

export const toPercentString = (input?: number | string | null): string => {
  const numberInput = typeof input === 'string' ? +input : input;
  return (
    numberInput?.toLocaleString(locale, {
      maximumFractionDigits: 2,
      style: 'percent',
    }) || '0%'
  );
};

const ordinalPluralRules = new Intl.PluralRules(locale, { type: 'ordinal' });
const ordinalSuffixes = new Map([
  ['one', 'st'],
  ['two', 'nd'],
  ['few', 'rd'],
  ['other', 'th'],
]);
export const formatOrdinals = (number: number): string => {
  const rule = ordinalPluralRules.select(number);
  const suffix = ordinalSuffixes.get(rule);
  return `${number}${suffix}`;
};
