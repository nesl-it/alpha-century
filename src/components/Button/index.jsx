import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[22px]",
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    gray_50: "bg-gray-50",
    gray_50_01: "bg-gray-50_01",
    blue_900: "bg-blue-900 text-white-A700",
  },
};
const sizes = {
  md: "h-[45px] px-[23px] text-base",
  lg: "h-[48px] px-[30px] text-sm",
  sm: "h-[42px] px-2",
  xl: "h-[64px] px-3.5",
  xs: "h-[35px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xl",
  color = "blue_900",

  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["md", "lg", "sm", "xl", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_50", "gray_50_01", "blue_900"]),
};

export { Button };
