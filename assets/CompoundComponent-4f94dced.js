import{j as n,a as t,F as l}from"./jsx-runtime-a9c13c85.js";import{M as c}from"./index-0a62f3d6.js";import{S as o}from"./index-56f92e4a.js";import{u as s}from"./index-f3daabb9.js";import"./index-d8ade8ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-466c67b7.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-8f1b41fb.js";import"./chunk-XHUUYXNA-0d7bec29.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./_getTag-6acf5a83.js";import"./_baseIsEqual-0821e666.js";import"./inheritsLoose-321c38e7.js";import"./index-639f2073.js";function O(i={}){const{wrapper:a}=Object.assign({},s(),i.components);return a?n(a,Object.assign({},i,{children:n(r,{})})):r();function r(){const e=Object.assign({h1:"h1",p:"p",code:"code",blockquote:"blockquote",strong:"strong",pre:"pre",ul:"ul",li:"li",a:"a"},s(),i.components);return t(l,{children:[n(c,{title:"Contributing/Compound Component"}),`
`,n(e.h1,{children:"Compound component"}),`
`,t(e.p,{children:[`If your organism is composed of more than one visual element (component), you MUST implement it using the
`,n(e.code,{children:"compound component pattern"}),"."]}),`
`,t(e.blockquote,{children:[`
`,n(e.p,{children:`The compound component pattern typically comes in handy with larger components that have related child components that we also want to configure.
Instead of having props defined on the main wrapper of your organism that exist just to pass down to its internal children, we render the children directly.`}),`
`]}),`
`,n(e.p,{children:n(e.strong,{children:`The compound component pattern is the pattern to use when creating a new Brikke
organism. We took a Tabs organism as an example in the following section, but this
pattern can be applied to any organism.`})}),`
`,n(o,{label:"Using a compound component"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`import { MyTabs } from '@ds-name/tabs'

const MyTabs = () => {
  return (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Inbox</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Today</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Upcoming</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">Your inbox is empty</Tabs.Content>
      <Tabs.Content value="tab2">Make some coffee</Tabs.Content>
      <Tabs.Content value="tab3">Order more coffee</Tabs.Content>
    </Tabs>
  )
}
`})}),`
`,n(o,{label:"Implementation"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`import { TabsList as List } from './List'
import { TabsTrigger as Trigger } from './Trigger'
import { TabsContent as Content } from './Content'
import { TabsRoot as Root } from './Root'

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
`})}),`
`,n(o,{label:"Explanation"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.code,{children:"Tabs"})," is the Main wrapper. It acts as a context provider so that its children can communicate with each other without relying on props. The context is optional, for simpler organisms, you might not need it."]}),`
`,t(e.li,{children:[n(e.code,{children:"Object.assign"})," is then used to attach molecules to the compound organism ",n(e.code,{children:"Tabs"}),". It allows us to do ",n(e.code,{children:"<Tabs.List />, <Tabs.Trigger />, etc"})," to use an atom. Note that typescript likes this approach better and merge the types correctly without explicit typing."]}),`
`,t(e.li,{children:[t(e.strong,{children:["No ",n(e.code,{children:"default"})," export"]}),`. This is for better discoverability.
See `,n(e.a,{href:"https://basarat.gitbook.io/typescript/main-1/defaultisbad",children:"why in details"}),". Optionally, this is where you can also export your types/constants."]}),`
`]}),`
`,n(o,{label:"Benefits"}),`
`,n(o,{label:"Discoverability",heading:"h3"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:['Typing "',n(e.code,{children:"Tabs."}),'" will autocomplete the molecules to the developer. He/she does not need to know their name to discover them (',n(e.code,{children:"Tabs.List"}),", ",n(e.code,{children:"Tabs.Trigger"}),", etc)."]}),`
`,n(e.li,{children:"The JSDoc comments above each atom will be visible in the IDE."}),`
`,n(e.li,{children:"A link to the ZeroHeight specifications is accessible from the main wrapper of the organism."}),`
`,t(e.li,{children:["It needs a single import ",n(e.code,{children:"import { Tabs } from '@ds-name/tabs"})," to work. Instead of something like ",n(e.code,{children:"import { Tabs, TabsTrigger, TabsList, etc... }"})]}),`
`]}),`
`,n(o,{label:"Composability",heading:"h3"}),`
`,n(e.p,{children:"Composability comes from the fact that your organism is comprised of multiple components, instead of being a monolithic organism."}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"You can intertwine the component's molecules with custom HTML for more flexibility."}),`
`,n(e.li,{children:"You can cherry-pick which molecules of the organism you will use."}),`
`,n(e.li,{children:"It avoids props drilling (an organism/molecule passing props to its children and so on)."}),`
`]})]})}}export{O as default};
//# sourceMappingURL=CompoundComponent-4f94dced.js.map
