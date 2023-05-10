import { match, P } from "ts-pattern";

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

const combinedKeys: Record<ColorKeys, Record<DescriptionKeys | NumberDescKeys, string>> = Object.keys(Colors).reduce((acc, colorKey) => {
  acc[colorKey as ColorKeys] = Object.keys(description).reduce((descAcc, descKey) => {
    descAcc[descKey as DescriptionKeys] = match([colorKey, descKey])
      .with([Colors.base, P.string], () => "")
      .with([Colors.info, description.focus], () => "")
      .with([Colors.success, description.focus], () => "")
      .with([Colors.warning, description.focus], () => "")
      .with([Colors.error, description.focus], () => "")
      .otherwise(() => `${Colors[colorKey as ColorKeys]}-${description[descKey as DescriptionKeys]}`);
    return descAcc;
  }, {} as Record<DescriptionKeys | NumberDescKeys, string>);

  if (colorKey === Colors.base) {
    Object.keys(numberDesc).forEach((numberKey) => {
      acc[colorKey as ColorKeys][numberKey as NumberDescKeys] = `${Colors.base}-${numberDesc[numberKey as NumberDescKeys]}`;
    });
  }

  return acc;
}, {} as Record<ColorKeys, Record<DescriptionKeys | NumberDescKeys, string>>);

export default combinedKeys;
