"use client";

import { TimelineItemEntity } from "../domain/timeline.types";

export default function TimelineItem({
  icon: Icon,
  title,
  subtitle,
  description,
  period,
  isOngoing,
  tags,
}: TimelineItemEntity) {
  return (
    <div className="relative pl-12 pb-12">
      {/* Vertical Line */}
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>

      {/* Icon */}
      {Icon && (
        <div
          className={`absolute left-0 top-1 w-10 h-10 rounded-full  
              flex items-center justify-center 
              ${isOngoing ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}
        >
          <Icon size={20} />
        </div>
      )}

      {/* Card */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            {subtitle && (
              <p className="text-blue-600 mt-1 font-medium">{subtitle}</p>
            )}
          </div>

          {period && (
            <span className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-600">
              {period}
            </span>
          )}
        </div>

        {/* Body */}
        {description && <p className="text-gray-600 mt-3">{description}</p>}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
