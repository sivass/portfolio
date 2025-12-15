"use client";
import { CardItemEntity } from "../domain/card.types";
import CardItem from "./CardItem";

interface Props {
  items: CardItemEntity[];
}

export default function Card({ items }: Props) {
  return (
    <section className="py-10 max-w-6xl mx-auto px-4 
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {items.map((item) => (
    <CardItem key={item.id} {...item} />
  ))}
</section>

  );
}
