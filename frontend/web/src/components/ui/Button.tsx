"use client";
import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-5 py-3 rounded-lg text-sm font-medium transition",
        variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700",
        variant === "secondary" &&
          "bg-gray-200 text-gray-800 hover:bg-gray-300",
        className
      )}
    >
      {children}
    </button>
  );
}
