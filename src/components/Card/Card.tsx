import type { FC } from 'react';
import type { ImageMetadata } from 'astro';

interface Props {
  title: string;
  description: string;
  pubDate: string;
  tags?: string[];
  image?: ImageMetadata;
  isNew?: boolean;
}

const Card: FC<Props> = ({
  title,
  description,
  pubDate,
  tags = [],
  image,
  isNew = false
}) => {
  const formattedDate = new Date(pubDate).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const IMAGE_SIZE = 120;

  return (
    <div className="card card-side bg-neutral shadow-xl">
      {image && (
        <figure className="flex items-center min-w-[160px] p-4">
          <div className="w-[120px] h-[120px] shrink-0">
            <img
              src={image.src}
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
              alt={title}
              className="w-full h-full object-cover bg-neutral-content rounded-lg"
            />
          </div>
        </figure>
      )}
      <div className="card-body py-4 pr-4">
        <h2 className="card-title">
          {title}
          {isNew && <div className="badge badge-secondary badge-sm">NEW</div>}
        </h2>
        <div className="text-sm text-gray-500">
          <time dateTime={pubDate}>{formattedDate}</time>
        </div>
        <p className="text-base-content/70">{description}</p>
        {tags && tags.length > 0 && (
          <div className="card-actions justify-end">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge badge-outline badge-sm hover:badge-primary"
              >
                {typeof tag === 'object' ? JSON.stringify(tag) : tag}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
