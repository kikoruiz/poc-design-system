import { cva } from "class-variance-authority";
import { TabsContentProps, Content } from "@radix-ui/react-tabs";

export const styles = cva([
  "rounded-b-lg",
  "bg-white",
  "px-6",
  "py-4",
  "dark:bg-gray-800",
]);

interface Props extends TabsContentProps {
  /** Custom description */
  toto?: string;
}

export function TabsContent({ children, asChild = false, ...rest }: Props) {
  const defaultRadixValues = {
    asChild,
  };

  return (
    <Content className={styles()} {...defaultRadixValues} {...rest}>
      {children}
    </Content>
  );
}

TabsContent.displayName = TabsContent.name
