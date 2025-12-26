"use client";

import React from "react";

interface TranslucentCardProps {
  children?: React.ReactNode;
  className?: string;
  position?: "left" | "right";
  style?: React.CSSProperties;
}

const TranslucentCard: React.FC<TranslucentCardProps> = ({
  children,
  className = "",
  position = "",
  style,
}) => {
  return (
    <div
      className={`bg-opacity-20 backdrop-blur-3xl p-[30px] border border-white/10 shadow-2xl ${
        position === "left"
          ? " rounded-[12px] desktop:rounded-tr-[12px] desktop:rounded-br-[12px] desktop:rounded-none"
          : position === "right"
            ? " rounded-[12px] desktop:rounded-tl-[12px] desktop:rounded-bl-[12px] desktop:rounded-none"
            : "rounded-[12px]"
      } ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default TranslucentCard;
