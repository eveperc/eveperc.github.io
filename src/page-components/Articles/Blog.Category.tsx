export type BlogCategoryProps = {
  children: React.ReactNode;
};

export default function({ children }: BlogCategoryProps) {
  return (
    <div className="p-3 text-3xl font-bold badge badge-accent">
      {children}
    </div>
  )
}
