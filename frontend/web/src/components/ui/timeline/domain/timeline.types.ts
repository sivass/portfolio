import { IconType } from "react-icons";

export interface TimelineItemEntity {
    id: string;
    icon?: IconType;
    title: string;
    subtitle?: string;
    description?: string;
    period?: string;
    isOngoing?: boolean;
    tags?: string[];
}