import { TabsContent as Content } from './Content'
import { TabsList as List } from './List'
import { TabsRoot as Root } from './Root'
import { TabsTrigger as Trigger } from './Trigger'

// we have to override the "displayName" values here,
// in order to make it work with ReactLiveBlock
Root.displayName = 'Tabs' // <-  the Root Component must be the first to be set 🤷
Trigger.displayName = 'Tabs.Trigger'
List.displayName = 'Tabs.List'
Content.displayName = 'Tabs.Content'

export const Tabs = Object.assign(Root, {
  List,
  Trigger,
  Content,
})
