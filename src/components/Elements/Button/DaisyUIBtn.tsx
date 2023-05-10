import type {DaisyUIColorsType} from '@layouts/Colors';
type ButtonProps = {
  children: React.ReactNode;
  // DaisyUIColorsの色を指定する
  colors: DaisyUIColorsType[keyof DaisyUIColorsType][keyof DaisyUIColorsType[keyof DaisyUIColorsType]];
  outline?: boolean;
}
export default function({ children,colors,outline }: ButtonProps) {
  const btnOutline = outline ? 'btn-outline' : ''
  const btnColors = `btn btn-${colors}`
  const text = 'font-black text-lg'
  const style = `${text} ${btnColors} ${btnOutline}`
  return (
    <button className={style}>
      {children}
    </button>
  )
}
