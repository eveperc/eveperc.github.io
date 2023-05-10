import type { DaisyUIColorsType } from "@layouts/Colors";

type DaisyUIBudgeProps = {
  children: React.ReactNode;
  colors: DaisyUIColorsType[keyof DaisyUIColorsType][keyof DaisyUIColorsType[keyof DaisyUIColorsType]];
}

export default function ({children,colors}: DaisyUIBudgeProps) {
  const badge = `badge badge-${colors}`;
  return (
    <div className={badge}>
      {children}
    </div>
  )
}
