import React from "react";

const sizes = {
  xs: "text-[10px] font-medium",
  lg: "text-sm font-normal",
  s: "text-xs font-normal",
  "2xl": "text-lg font-normal",
  "3xl": "text-xl font-medium",
  "4xl": "text-2xl font-medium md:text-[22px]",
  xl: "text-base font-normal",
  md: "text-[13px] font-normal",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";
  // text-gray-700_01 
  return (
    <Component className={`font-lato ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
