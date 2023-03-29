type Props = {
  html: string
}
export const Blog: React.FC<Props> = ({ html }) => {
  return (
    <div
      className="text-left"
      // htmlを渡す
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  )
}
