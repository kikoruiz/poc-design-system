import React from "react";
import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: "default" | "danger" | "info" | "success" | "warning";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "default",
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        `storybook-button--${variant}`,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
