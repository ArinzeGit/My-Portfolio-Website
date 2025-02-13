"use client";

import React from "react";

interface TranslucentCardProps {
  children?: React.ReactNode;
  className?: string;
  position?: "left" | "right";
}

const TranslucentCard: React.FC<TranslucentCardProps> = ({
  children,
  className = "",
  position = "",
}) => {
  return (
    <div
      className={`bg-opacity-20 backdrop-blur-3xl p-[30px] ${
        position === "left"
          ? " rounded-bl-[12px] rounded-br-[12px] sm:rounded-tr-[12px] sm:rounded-br-[12px] sm:rounded-none"
          : position === "right"
          ? " rounded-tl-[12px] rounded-tr-[12px] sm:rounded-tl-[12px] sm:rounded-bl-[12px] sm:rounded-none"
          : "rounded-[12px]"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default TranslucentCard;
