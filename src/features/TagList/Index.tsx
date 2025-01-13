import React from 'react';

interface TagListProps {
  tags: {
    name: string;
    count: number;
  }[];
}

export const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map(({ name, count }) => (
        <a
          key={name}
          href={`/tags/${name}`}
          className="badge badge-lg badge-primary hover:badge-primary-focus transition-colors"
        >
          {name} ({count})
        </a>
      ))
      }
    </div >
  );
};
