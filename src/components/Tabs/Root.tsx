import { PropsWithChildren } from "react";
import { cva } from "class-variance-authority";
import { Root, TabsProps } from "@radix-ui/react-tabs";

export const styles = cva([
  "rounded-b-lg",
  "bg-white",
  "px-6",
  "py-4",
  "dark:bg-gray-800",
]);

interface Props extends TabsProps {
  /** Custom description */
  toto?: string;
}

export function TabsRoot({
  children,
  asChild = false,
  orientation = "horizontal",
  activationMode = "automatic",
  ...rest
}: PropsWithChildren<Props>) {
  const defaultRadixValues = {
    asChild,
    orientation,
    activationMode,
  };

  return (
    <Root className={styles()} {...defaultRadixValues} {...rest}>
      {children}
    </Root>
  );
}

TabsRoot.displayName = TabsRoot.name
