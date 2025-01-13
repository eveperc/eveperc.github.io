const numberDesc = {
  "100": "100",
  "200": "200",
  "300": "300",
} as const;

const description = {
  focus: "focus",
  content: "content",
} as const;

const Colors = {
  primary: "primary",
  secondary: "secondary",
  accent: "accent",
  neutral: "neutral",
  base: "base",
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
} as const;

type ColorKeys = keyof typeof Colors;
type DescriptionKeys = keyof typeof description;
type NumberDescKeys = keyof typeof numberDesc;

type CombinedKeys = DescriptionKeys | NumberDescKeys | ColorKeys;

const initCombinedKeys = (colorKey: ColorKeys): Record<CombinedKeys, string> => {
  const record: Partial<Record<CombinedKeys, string>> = {};
  Object.keys(description).forEach((descKey) => {
    record[descKey as DescriptionKeys] = `${Colors[colorKey as ColorKeys]}-${description[descKey as DescriptionKeys]}`;
  });
  if (colorKey === Colors.base) {
    Object.keys(numberDesc).forEach((numberKey) => {
      record[numberKey as NumberDescKeys] = `${Colors.base}-${numberDesc[numberKey as NumberDescKeys]}`;
    });
  }
  record[colorKey as ColorKeys] = Colors[colorKey as ColorKeys];
  return record as Record<CombinedKeys, string>;
};

const DaisyUIColors: Record<ColorKeys, Record<CombinedKeys, string>> = Object.keys(Colors).reduce((acc, colorKey) => {
  acc[colorKey as ColorKeys] = initCombinedKeys(colorKey as ColorKeys);
  return acc;
}, {} as Record<ColorKeys, Record<CombinedKeys, string>>);

export type DaisyUIColorsType = typeof DaisyUIColors;
export default DaisyUIColors;
