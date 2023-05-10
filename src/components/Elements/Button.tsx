
type ButtonProps = {
  children: React.ReactNode;
}

export default function({ children }: ButtonProps) {
  return (
    <button className="text-lg btn btn-primary">Home</button>
  )
}
