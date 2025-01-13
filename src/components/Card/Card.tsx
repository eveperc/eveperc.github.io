// src/components/Card.tsx
import React from 'react';
import { Picture } from 'astro:assets';
import type { ImageMetadata } from 'astro';

interface CardProps {
  title: string;
  description: string;
  pubDate: string;
  url: string;
  tags?: string[];
  image?: ImageMetadata;
  isNew?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  pubDate,
  url,
  tags = [],
  image,
  isNew = false
}) => {
  const formattedDate = new Date(pubDate).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      {image && (
        <figure>

        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">
          <a href={url} className="hover:text-primary">
            {title}
          </a>
          {isNew && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <div className="text-sm text-gray-500 mb-2">
          <time dateTime={pubDate}>{formattedDate}</time>
        </div>
        <p className="text-base-content/70">{description}</p>
        {tags && tags.length > 0 && (
          <div className="card-actions justify-end">
            {tags.map(tag => (
              <a

                key={tag}
                href={`/tags/${tag}`}
                className="badge badge-outline hover:badge-primary"
              >
                {typeof tag === 'object' ? JSON.stringify(tag) : tag}
              </a>
            ))}
          </div>
        )}
      </div>
    </div >
  );
};

export default Card;
