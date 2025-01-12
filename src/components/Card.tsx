type Image = {
  src: string;
  alt: string;
}
type Props = {
  title: string
  description: string
  image?: Image
}
export default function Card({ title, description, image, }: Props) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image?.src ?? "../../public/logo.jpg"}
          alt={image?.alt ?? "no image"} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  )
}
