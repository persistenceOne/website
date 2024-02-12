import React, { forwardRef } from "react";
import { ButtonHTMLAttributes } from "react";

export type CSType = any;

export const CSTypeValues = ["primary"] as const;

export type SizeType = "lg" | "md" | "sm" | "xl";

export const buttonSizes = ["sm", "md", "lg", "xl"] as const;

export const ButtonVariantsValues = [
  "outline",
  "solid",
  "link",
  "ghost",
  "custom",
] as const;
export type ButtonVariants = (typeof ButtonVariantsValues)[number];
export type InputVariants = "outline" | "solid" | "underline";

export interface CustomButtonProps {
  color?: CSType;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  variant?: ButtonVariants;
  focusEffect?: false;
  scale?: SizeType;
  isDisabled?: boolean;
  customButtonClass?: string;
}

const ENABLED_STYLES: Record<"solid" | "ghost", any> = {
  solid: {
    primary: "hover:bg-red-light",
  },
  ghost: {
    primary: "hover:bg-red",
  },
};

const COLORS = (variant: ButtonVariants, color: CSType) => {
  const colors = {
    solid: {
      primary: `bg-red text-light-high`,
    },
    ghost: {
      primary: "text-light-high",
    },
    outline: {
      primary: "border-red",
    },
  };
  // @ts-ignore
  return colors[variant][color];
};

const SIZES: Record<SizeType, string> = {
  lg: "px-5 py-3 gap-2",
  md: "px-4 py-2 gap-2",
  sm: "px-2 py-2 gap-1 text-xs",
  xl: "px-6 py-3 gap-3 text-lg",
};

const BASE_BUTTON = "rounded-md flex items-center";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  CustomButtonProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      isDisabled = false,
      customButtonClass = "",
      leftIcon,
      rightIcon,
      variant = "solid",
      color,
      className,
      focusEffect = true,
      scale = "md",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`${
          className || ""
        } font-medium transition-all duration-200 ease-in-out ${
          SIZES[scale]
        } min-w-fit ${
          isDisabled
            ? `cursor-not-allowed text-opacity-70`
            : `${
                variant === "ghost" || variant === "solid"
                  ? ENABLED_STYLES[variant][color]
                  : variant === "outline"
                  ? ENABLED_STYLES["ghost"][color]
                  : ""
              }`
        } ${
          leftIcon === undefined && rightIcon === undefined
            ? "justify-center"
            : "justify-start"
        } ${BASE_BUTTON} ${
          variant === "solid"
            ? `${COLORS("solid", "primary")}`
            : variant === "link"
            ? `${COLORS("ghost", "primary")} ${
                !isDisabled && "hover:underline"
              } no-underline bg-transparent border-none outline-none`
            : variant === "ghost"
            ? `hover:bg-opacity-50 bg-transparent  ${COLORS(
                "ghost",
                "primary"
              )}`
            : variant === "outline"
            ? `border hover:outline-none bg-transparent ${COLORS(
                "ghost",
                "primary"
              )} ${COLORS("outline", "primary")}`
            : `hover:bg-opacity-50 ${customButtonClass}`
        }`}
        disabled={isDisabled}
        {...props}
      >
        {leftIcon ? (
          <div
            className={`w-4 h-4 flex justify-center items-center ${
              variant === "solid" ? "text-white" : COLORS("ghost", "primary")
            }`}
          >
            {leftIcon}
          </div>
        ) : null}
        {children}
        {rightIcon ? (
          <div
            className={`w-4 h-4 flex justify-center items-center ${
              variant === "solid" ? "text-white" : COLORS("ghost", "primary")
            }`}
          >
            {rightIcon}
          </div>
        ) : null}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
