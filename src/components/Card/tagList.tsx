import type { FC } from 'react';

const TagList: FC<{ tags: string[] }> = ({ tags }) => {
  if (!tags.length) return null;

  return (
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
  );
};

export default TagList;
