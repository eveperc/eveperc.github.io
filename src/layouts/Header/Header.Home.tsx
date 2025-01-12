import Btn from '@components/Button'

export type HeaderHomeProps = {
}

export default function({ }: HeaderHomeProps) {
  return (
    <a href="/">
      <Btn variant='primary'>Home</Btn>
    </a>
  )
}
