import { ComponentPropsWithoutRef } from "react";
import { cva } from "class-variance-authority";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export const tabsContentVariants = cva([
  "rounded-b-lg",
  "bg-white",
  "px-6",
  "py-4",
  "dark:bg-gray-800",
]);

interface TabsContentProps
  extends ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {
  /** Custom description */
  toto?: string;
}

export const TabsContent = ({ children, ...rest }: TabsContentProps) => {
  return (
    <TabsPrimitive.Content className={tabsContentVariants()} {...rest}>
      {children}
    </TabsPrimitive.Content>
  );
};

TabsContent.displayName = "Tabs.Content";
