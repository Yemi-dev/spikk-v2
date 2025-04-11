import { colors } from "@/constants/colors";
import useResponsive from "@/hooks/useResponsive";
import React from "react";
import { VscTriangleDown } from "react-icons/vsc";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectInputProps {
  label?: string;
  name: string;
  options?: Option[];
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  defaultSpace?: number;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  minWidth?: string;
  unFocusBorderColor?: string;
  focusBorderColor?: string;
  noBorder?: boolean;
  error?: string | boolean;
  width?: string;
  borderRadius?: string;
  fontSize?: string;
  readOnly?: boolean;
  bg?: string;
  height?: string;
}

const CustomSelectInput: React.FC<CustomSelectInputProps> = ({
  label,
  name,
  options = [],
  value,
  className,
  onChange,
  placeholder,
  defaultSpace = 1,
  minWidth,
  unFocusBorderColor = "border-natural200",
  focusBorderColor = "border-textDark",
  noBorder,
  borderRadius = "rounded-lg",
  onBlur,
  error,
  width = "w-full",
  fontSize = "text-base",
  readOnly,
  bg = "bg-transparent",
  height = "h-[45px]",
  ...props
}) => {
  const { isMobile } = useResponsive();
  const borderColorClass = error ? "border-error" : unFocusBorderColor;
  const focusBorderColorClass = error ? "focus-within:border-error" : `focus-within:${focusBorderColor}`;

  return (
    <div
      className={`flex flex-col ${className} ${width} ${minWidth ? `min-w-[${minWidth}]` : ""} text-textGray`}
      style={{ padding: `${defaultSpace}rem 0` }}>
      {label && (
        <label className={`text-base sm:text-sm mb-2 flex gap-2 font-medium text-textDark ${isMobile ? "text-sm" : ""}`}>
          {label}
        </label>
      )}
      <div className='relative'>
        <select
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          className={`
            ${bg}
            ${readOnly ? "cursor-not-allowed" : "cursor-pointer"}
            ${noBorder ? "border-0" : `border ${error ? "border-error" : unFocusBorderColor}`}
            ${borderRadius}
            py-2 px-4
            ${fontSize}
            w-full
            text-ellipsis
            sm:text-xs
            whitespace-nowrap
            appearance-none
            outline-none
            ${height}
            ${readOnly ? "text-natural200" : "text-natural400"}
           ${borderColorClass}
          border
          focus-within:border-2
          focus-within:border-bgPurple100
        ${focusBorderColorClass}
            transition-colors duration-200
            bg-[url('/svg/caret-down.svg')]
            bg-no-repeat
            bg-[position:calc(100%-20px)_calc(1em+2px),calc(100%-15px)_calc(1em+2px),100%_0]
          `}
          {...props}>
          <option className=' text-textDark' value=''>
            {placeholder ?? `Select ${placeholder ? placeholder : name}`}
          </option>
          {Array.isArray(options) ? (
            options.map((item, index) => (
              <option key={index} value={item.value} className='text-textDark'>
                {item.label}
              </option>
            ))
          ) : (
            <option value=''>No Options</option>
          )}
        </select>
        <VscTriangleDown className='absolute right-4 top-6' color={colors.bgPurple} />
      </div>
      {error && <p className={`text-error mt-1 ${isMobile ? "text-xs" : "text-sm"}`}>{error}</p>}
    </div>
  );
};

export default CustomSelectInput;
