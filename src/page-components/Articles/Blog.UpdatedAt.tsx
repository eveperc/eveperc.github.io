export type BlogUpdatedAtProps = {
  children: React.ReactNode;
};

export default function({ children }: BlogUpdatedAtProps) {
  return (
    <div className="p-3 text-3xl font-bold">{children}</div>
  )
}
