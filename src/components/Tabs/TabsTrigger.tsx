import { ComponentPropsWithoutRef } from "react";
import { cva } from "class-variance-authority";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export const tabsTriggerVariants = cva([
  "group", // ?
  /**
   * border styles
   */
  "first:rounded-tl-l",
  "last:rounded-tr-l",
  "border-b-xs",
  "first:border-r",
  "last:border-l",
  "border-gray-300",
  /** Other */
  "radix-state-active:bg-bg-secondary",
  "focus-visible:radix-state-active:border-b-transparent",
  "radix-state-inactive:bg-gray-50",
  "flex-1",
  "px-3",
  "py-2.5",
  "focus:radix-state-active:border-b-red",
  "focus:z-10",
  "focus:outline-none",
  "focus-visible:ring",
  "focus-visible:ring-purple-500",
  "focus-visible:ring-opacity-75",
]);

interface TabsTriggerProps
  extends ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  /** Custom description */
  toto?: string;
}

export const TabsTrigger = ({ children, ...rest }: TabsTriggerProps) => {
  return (
    <TabsPrimitive.Trigger className={tabsTriggerVariants()} {...rest}>
      {children}
    </TabsPrimitive.Trigger>
  );
};

TabsTrigger.displayName = "Tabs.Trigger";
