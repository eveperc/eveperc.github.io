import DaisyUIBtn from '@components/Elements/Button/DaisyUIBtn';
import DaisyUIColors from '@layouts/Colors';
export type CardButtonProps = {
  url: string;
  children: React.ReactNode;
}

export default function({ children, url }: CardButtonProps) {
  return (
    <a href={url}>
      <DaisyUIBtn colors={DaisyUIColors.primary.primary}>
        {children}
      </DaisyUIBtn>
    </a>
  )
}
