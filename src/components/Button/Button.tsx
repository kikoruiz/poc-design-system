import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import { buttonVariants, ButtonVariantsProps } from "./variants";

interface Props
  extends ButtonVariantsProps,
    ComponentPropsWithoutRef<"button"> {
  className?: string;
  disabled?: boolean;
}

export function Button({
  className,
  color = "gray",
  children,
  disabled = false,
  intent = "primary",
  size = "small",
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <button
      className={buttonVariants({
        intent,
        size,
        disabled: !!disabled,
        className,
      })}
      {...{ ...rest, disabled }}
    >
      {children}
    </button>
  );
}
