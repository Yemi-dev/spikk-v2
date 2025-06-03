import React from "react";
import { MdError } from "react-icons/md";

interface CustomTextInputProps {
  icon?: React.ReactNode;
  unFocusBorderColor?: string;
  focusBorderColor?: string;
  widthInPercentage?: number;
  placeholder?: string;
  afterLabel?: string;
  bgColor?: string;
  name: string;
  type?: string;
  label?: string;
  labelColor?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  margin?: string;
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  iconEnd?: React.ReactNode;
  errorMessage?: string | boolean;
  padding?: string;
  borderRadius?: string;
  labelWeight?: number | string;
  readOnly?: boolean;
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  icon,
  unFocusBorderColor = "border-soft200",
  focusBorderColor = "border-blue100",
  widthInPercentage,
  placeholder,
  afterLabel,
  labelColor,
  bgColor = "bg-white",
  name,
  type = "text",
  label,
  onKeyDown,
  margin,
  onFocus,
  onBlur,
  iconEnd,
  errorMessage,
  padding = "p-4",
  borderRadius = "rounded-lg",
  labelWeight = "font-medium",
  readOnly,
  className,
  ...props
}) => {
  const borderColorClass = errorMessage ? "border-error" : unFocusBorderColor;
  const focusBorderColorClass = errorMessage ? "focus-within:border-error" : `focus-within:${focusBorderColor}`;

  return (
    <div id='search' className={`${widthInPercentage ? `w-[${widthInPercentage}%]` : "w-full"} ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className={`text-sm mb-1 flex gap-2 ${labelColor ? labelColor : "text-black"} ${labelWeight}`}>
          {label}
        </label>
      )}
      <div
        onFocus={onFocus}
        onBlur={onBlur}
        className={`
          flex w-full items-center justify-start gap-2
          ${bgColor}
          ${padding}
          ${borderRadius}
          ${margin}
          ${borderColorClass}
          border
          focus-within:border-1
          focus-within:border-yellow700
        ${focusBorderColorClass}
          transition-colors duration-200
        `}>
        {icon && <div>{icon}</div>}
        <input
          className={`
            flex-1 h-full bg-transparent border-none focus:outline-none
            placeholder:text-gray-400 placeholder:text-base placeholder:font-normal
            text-base sm:text-xs text-textDark
          `}
          {...props}
          placeholder={placeholder}
          name={name}
          id={name}
          readOnly={readOnly}
          type={type}
          onKeyDown={onKeyDown}
        />
        {iconEnd && <div>{iconEnd}</div>}
      </div>
      {afterLabel && (
        <label htmlFor={name} className='text-sm mb-1 flex gap-2 text-sub-500 font-medium'>
          {afterLabel}
        </label>
      )}
      {errorMessage && (
        <div className='flex items-center gap-1 mt-1'>
          <MdError className='text-error' size={16} />
          <p className='text-error text-sm m-1'>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default CustomTextInput;
