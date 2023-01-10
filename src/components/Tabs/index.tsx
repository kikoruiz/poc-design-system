import { TabsList as List } from "./List";
import { TabsTrigger as Trigger } from "./Trigger";
import { TabsContent as Content } from "./Content";
import { TabsRoot as Root } from "./Root";

export { List as List, Trigger, Content, Root };

// we have to override the "displayName" values here,
// in order to make it work with ReactLiveBlock
List.displayName = "Tabs.List";
Trigger.displayName = "Tabs.Trigger";
Content.displayName = "Tabs.Content";
Root.displayName = "Tabs.Root";
