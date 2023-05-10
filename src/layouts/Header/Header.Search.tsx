import DaisyUIColors from '@layouts/Colors'
import DaisyUIBtn from '@components/Elements/Button/DaisyUIBtn'

export type HeaderSearchProps = {
  url: string;
}

export default function({ url }: HeaderSearchProps) {
  return (
    <a href={`${url}/search`}>
      <DaisyUIBtn
        colors='btn-info'
        outline={true}
      >
        Search
      </DaisyUIBtn>
    </a>
  )
}

