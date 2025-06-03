import React from "react";
import { colors } from "@/constants/colors";

interface DividerProps {
  thick?: number;
  color?: string;
  isVertical?: boolean;
  margin?: string;
  className?: string;
}

const Divider = ({ thick = 2, color, isVertical, margin, className }: DividerProps) => {
  return (
    <div
      className={className}
      style={{
        width: isVertical ? `${thick}px` : "100%",
        height: isVertical ? "100%" : `${thick}px`,
        backgroundColor: color ?? colors.textGray,
        margin: margin ?? 0,
      }}
    />
  );
};

export default Divider;
