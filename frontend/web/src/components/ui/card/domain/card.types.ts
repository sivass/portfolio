import { IconType } from "react-icons";

export interface CardItemEntity {
    id: string;
    icon?: IconType;
    title: string;
    description?: string;
    points?: { label: string; color: string }[];
}