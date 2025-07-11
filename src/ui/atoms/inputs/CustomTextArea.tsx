import React from "react";
import { MdError } from "react-icons/md";

interface CustomTextAreaProps {
  icon?: React.ReactNode;
  unFocusBorderColor?: string;
  focusBorderColor?: string;
  widthInPercentage?: number;
  placeholder?: string;
  afterLabel?: string;
  bgColor?: string;
  name: string;
  label?: string;
  labelColor?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
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
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  icon,
  unFocusBorderColor = "border-natural300",
  focusBorderColor = "border-textDark",
  widthInPercentage,
  placeholder,
  afterLabel,
  labelColor,
  bgColor = "bg-white",
  name,
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
  rows = 4,
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
          flex w-full items-start justify-start gap-2
          ${bgColor}
          ${padding}
          ${borderRadius}
          ${margin}
          ${borderColorClass}
          border
          focus-within:border-2
          focus-within:border-bgPurple100
          ${focusBorderColorClass}
          transition-colors duration-200
        `}>
        {icon && <div className='mt-2'>{icon}</div>}
        <textarea
          className={`
            flex-1 w-full bg-transparent border-none focus:outline-none resize-none
            placeholder:text-gray-400 placeholder:text-base placeholder:font-normal
            text-base sm:text-xs text-textDark
          `}
          {...props}
          placeholder={placeholder}
          name={name}
          id={name}
          readOnly={readOnly}
          rows={rows}
          onKeyDown={onKeyDown}
        />
        {iconEnd && <div className='mt-2'>{iconEnd}</div>}
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

export default CustomTextArea;
