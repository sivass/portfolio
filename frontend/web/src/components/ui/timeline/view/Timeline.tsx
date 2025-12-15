"use client";

import { TimelineItemEntity } from "../domain/timeline.types";
import TimelineItem from "./TimelineItem";

interface Props {
  items: TimelineItemEntity[];
}

export default function Timeline({ items }: Props) {
  return (
    <section className="py-10 max-w-3xl mx-auto px-6">
      
      {items.map((item) => (
        <TimelineItem key={item.id} {...item} />
      ))}
    </section>
  );
}
