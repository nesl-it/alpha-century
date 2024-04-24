import React from "react";

const sizes = {
  "3xl": "text-[31px] font-semibold md:text-[29px] sm:text-[27px]",
  "2xl": "text-3xl font-extrabold md:text-[28px] sm:text-[26px]",
  xl: "text-[28px] font-bold md:text-[26px] sm:text-2xl",
  "5xl": "text-[40px] font-semibold md:text-[38px] sm:text-4xl",
  "4xl": "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
  "7xl": "text-5xl font-bold md:text-[44px] sm:text-[38px]",
  s: "text-base font-semibold",
  md: "text-xl font-semibold",
  "6xl": "text-[42px] font-semibold md:text-[38px] sm:text-[32px]",
  xs: "text-sm font-semibold",
  lg: "text-2xl font-bold md:text-[22px]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";
  // text-gray-900
  return (
    <Component className={`font-lato ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
