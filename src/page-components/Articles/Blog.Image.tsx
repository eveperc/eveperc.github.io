export type BlogImageProps = {
  children: React.ReactNode;
};

export default function({ children }: BlogImageProps) {
  return (
    <figure className="bg-white flex justify-center max-h-96">
      {children}
    </figure>
  )
}
