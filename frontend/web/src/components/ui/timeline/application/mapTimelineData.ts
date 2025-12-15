import { TimelineItemEntity } from "../domain/timeline.types";

export const sortTimelineByDate = (items: TimelineItemEntity[]) => {
  return items.sort((a, b) => (a.period ?? "").localeCompare(b.period ?? ""));
};

export const mapTimelineData = (items: TimelineItemEntity[]) => {
  return items.map((item) => ({
    ...item,
    tags: item.tags?.map((tag) => tag.toUpperCase()) || [],
    subtitle: item.subtitle ?? "",
  }));
};
