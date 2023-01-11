import { cva } from "class-variance-authority";

import { Trigger, TabsTriggerProps } from "@radix-ui/react-tabs";

export const styles = cva([
  "flex-1 px-s py-xs",
  // first item
  "first:rounded-tl-s first:border-l-transparent",
  // last item
  "last:rounded-tr-s last:border-l-transparent last:border-r-transparent",
  // borders
  "border-xs border-x-bd-secondary",
  "border-l-none",
  "border-t-transparent",
  "border-b-xs border-b first:border-r-xs last:border-l-xs",
  "border-b-bg-primary-accent",
  // radix states
  "radix-state-active:border-b-fg-cta",
  "radix-state-active:border-b-bd-primary",
  "focus-visible:radix-state-active:border-b-transparent",
  "radix-state-inactive:bg-bg-primary-subtle",
  "focus:z-raised focus:outline-none focus-visible:ring focus-visible:ring-bg-primary-accent focus-visible:ring-opacity-75",
]);

interface Props extends TabsTriggerProps {
  /** Custom description */
  toto?: string;
  disabled?: boolean;
}

export function TabsTrigger({
  children,
  asChild = false,
  disabled = false,
  ...rest
}: Props) {
  const defaultRadixValues = {
    asChild,
    disabled,
  };

  return (
    <Trigger className={styles()} {...defaultRadixValues} {...rest}>
      {children}
    </Trigger>
  );
}

TabsTrigger.displayName = TabsTrigger.name;
