import { ComponentPropsWithoutRef } from "react";
import { cva } from "class-variance-authority";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export const tabsListVariants = cva([
  "flex",
  "min-w-full",
  "rounded-t-m",
  "bg-bg-primary",
]);

interface TabsListProps
  extends ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  /** Custom description */
  toto?: string;
}

export const TabsList = ({ children, ...rest }: TabsListProps) => {
  return (
    <TabsPrimitive.List className={tabsListVariants()} {...rest}>
      {children}
    </TabsPrimitive.List>
  );
};

TabsList.displayName = "Tabs.List";
