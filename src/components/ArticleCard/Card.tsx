import type { FC, ReactNode } from "react";

import CardBody, { CardBodyProps } from "./Card.Body";
import CardTitle, { CardTitleProps } from "./Card.Title";
import CardImage, { CardImageProps } from "./Card.Image";
import CardCategory, { CardCategoryProps } from "./Card.Category";
import CardUpdatedAt, { CardUpdatedAtProps } from "./Card.UpdatedAt";
import CardButton, { CardButtonProps } from "./Card.Button";
type CardsProps = {
  children: ReactNode;
}
type CardComposition = {
  Body: FC<CardBodyProps>
  Title: FC<CardTitleProps>;
  Image: FC<CardImageProps>;
  Category: FC<CardCategoryProps>;
  UpdatedAt: FC<CardUpdatedAtProps>;
  Button: FC<CardButtonProps>;
}

const Card: FC<CardsProps> & CardComposition = ({ children }) => {
  let style = "card w-full md:w-96 bg-base-300 shadow-xl my-10";
  return <div className={style}>{children}</div>
}

Card.Body = CardBody;
Card.Title = CardTitle;
Card.Image = CardImage;
Card.Category = CardCategory;
Card.UpdatedAt = CardUpdatedAt;
Card.Button = CardButton;

export default Card;
