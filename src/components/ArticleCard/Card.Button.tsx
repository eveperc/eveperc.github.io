import DaisyUIBtn from '@components/Elements/Button/DaisyUIBtn';
export type CardButtonProps = {
  url: string;
  children: React.ReactNode;
}

export default function({ children, url }: CardButtonProps) {
  return (
    <a href={url}>
      <DaisyUIBtn colors='btn-primary'>
        {children}
      </DaisyUIBtn>
    </a>
  )
}
