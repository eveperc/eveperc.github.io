export type BlogTitleProps = {
  children: React.ReactNode;
};

export default function({ children }: BlogTitleProps) {
  return (
    <h2 className="p-5 text-center font-bold">{children}</h2>
  )
}
