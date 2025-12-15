"use client";

import { CardItemEntity } from "../domain/card.types";

export default function CardItem({
  icon: Icon,
  title,
  description,
  points,
}: CardItemEntity) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
      {/* Icon */}
      {Icon && (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-100 mb-4">
          <Icon className="w-6 h-6 text-gray-700" />
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {/* Skills list */}
      <ul className="space-y-2">
        <>
          {points?.map((point, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-800">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: point.color }}
              ></span>
              {point.label}
            </li>
          ))}
        </>
      </ul>
    </div>
  );
}
