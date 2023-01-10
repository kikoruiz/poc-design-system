import * as TabsPrimitive from "@radix-ui/react-tabs";

import { TabsList } from "./TabsList";
import { TabsTrigger } from "./TabsTrigger";
import { TabsContent } from "./TabsContent";

/**
 * A modal is a dialog that focuses the user's attention exclusively on an information via a window that is overlaid on primary content.
 * Specs: https://zeroheight.com/25c15666f/p/350f43-modal-/b/1659b8
 */
const Tabs = Object.assign(TabsPrimitive.Root, {
  displayName: "Tabs",
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

export { Tabs };
