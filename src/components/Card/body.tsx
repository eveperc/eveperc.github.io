import type { FC } from 'react';
import TagList from './tagList';

type Props = {
  title: string;
  pubDate: string;
  isNew?: boolean;
  description: string;
  tags?: string[];
};
const CardBody: FC<Props> = ({
  title,
  pubDate,
  isNew,
  description,
  tags = []
}) => {
  const formattedDate = new Date(pubDate).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="card-body py-4 pr-4">
      <h2 className="card-title">
        {title}
        {isNew && <div className="badge badge-secondary badge-sm">NEW</div>}
      </h2>
      <div className="text-sm text-gray-500">
        <time dateTime={pubDate}>{formattedDate}</time>
      </div>
      <p className="text-base-content/70">{description}</p>
      <TagList tags={tags} />
    </div>
  );
};

export default CardBody;
