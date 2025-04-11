import { colors } from "@/constants/colors";
import React from "react";

interface CustomButtonProps {
  onClick?: () => void;
  bgColor?: string;
  padding?: string;
  margin?: string;
  type?: "button" | "submit" | "reset";
  color?: string;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  borderRadius?: string;
  background?: string;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  bgColor,
  padding,
  margin,
  color,
  type,
  className,
  isLoading,
  disabled,
  children,
  background,
  borderRadius,
}) => {
  const handleClick = () => {
    if (onClick && !isLoading && !disabled) {
      onClick();
    }
  };
  return (
    <button
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        padding: padding || "10px 16px",
        margin: margin || 0,
        color: color || colors.white,
        background: background || "linear-gradient(180deg, #55185D 0%, #290849 100%)",
        backgroundColor: bgColor || colors.green,
        borderRadius: borderRadius || "20px",
      }}
      type={type || "button"}
      className={className}
      onClick={handleClick}>
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default CustomButton;
