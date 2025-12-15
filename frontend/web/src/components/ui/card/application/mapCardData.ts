import { CardItemEntity } from "../domain/card.types";

export const mapCardData = (items: CardItemEntity[]) => {
  return items.map((item) => ({
    ...item,
    title: item.title ?? "",
    description: item.description ?? "",
  }));
};
