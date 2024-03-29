import DaisyUIColors from '@layouts/Colors'
import DaisyUIBtn from '@components/Elements/Button/DaisyUIBtn'

export type HeaderHomeProps = {
}

export default function({ }: HeaderHomeProps) {
  return (
    <a href="/">
      <DaisyUIBtn colors='btn-primary'>Home</DaisyUIBtn>
    </a>
  )
}
