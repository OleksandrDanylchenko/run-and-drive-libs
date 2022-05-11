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

const stringToColor = (string: string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

export const stringAvatar = (name: string) => ({
  sx: {
    bgcolor: stringToColor(name),
  },
  children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
});
