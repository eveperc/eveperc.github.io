import type { FC } from 'react';

const TagList: FC<{ tags: string[] }> = ({ tags }) => {
  if (!tags.length) return null;

  const handleTagClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="card-actions justify-end">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="badge badge-outline badge-sm"
          onClick={handleTagClick}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default TagList;
