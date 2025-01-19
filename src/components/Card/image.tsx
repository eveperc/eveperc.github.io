import type { FC } from 'react';
const CardImage: FC<{ imageSrc: string; title: string }> = ({ imageSrc, title }) => {
  const IMAGE_SIZE = 120;
  return (
    <figure className="flex items-center min-w-[160px] p-4">
      <div className="w-[120px] h-[120px] shrink-0">
        <img
          src={imageSrc}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          alt={title}
          className="w-full h-full object-cover bg-neutral-content rounded-lg"
        />
      </div>
    </figure>
  );
};

export default CardImage;
