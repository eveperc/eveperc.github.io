import type { FC } from 'react';
import CardImage from './image';
import CardBody from './body';

interface Props {
  url: string;
  title: string;
  description: string;
  pubDate: string;
  tags?: string[];
  imageSrc: string;
  isNew?: boolean;
}
const Card: FC<Props> = ({
  url,
  title,
  description,
  pubDate,
  tags = [],
  imageSrc,
  isNew = false
}) => {
  return (
    <a
      href={url}
      className="block transition-transform hover:-translate-y-1"
    >
      <div className="card card-side bg-neutral shadow-xl">
        <CardImage imageSrc={imageSrc} title={title} />
        <CardBody
          title={title}
          pubDate={pubDate}
          isNew={isNew}
          description={description}
          tags={tags}
        />
      </div>
    </a>
  );
};

export default Card;
