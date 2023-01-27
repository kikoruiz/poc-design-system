import{j as n,a as o,F as s}from"./jsx-runtime-a9c13c85.js";import{M as c}from"./index-0a62f3d6.js";import{S as t}from"./index-56f92e4a.js";import{u as l}from"./index-f3daabb9.js";import"./index-d8ade8ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-466c67b7.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-8f1b41fb.js";import"./chunk-XHUUYXNA-0d7bec29.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-BVZGY62N-610dc239.js";import"./_getTag-6acf5a83.js";import"./_baseIsEqual-0821e666.js";import"./inheritsLoose-321c38e7.js";import"./index-639f2073.js";const d=""+new URL("argstable-03647f8b.png",import.meta.url).href;function X(r={}){const{wrapper:i}=Object.assign({},l(),r.components);return i?n(i,Object.assign({},r,{children:n(a,{})})):a();function a(){const e=Object.assign({h1:"h1",p:"p",a:"a",ol:"ol",li:"li",code:"code",ul:"ul",blockquote:"blockquote",pre:"pre",strong:"strong",h3:"h3"},l(),r.components);return o(s,{children:[n(c,{title:"Contributing/Writing stories"}),`
`,n(e.h1,{children:"Writing stories"}),`
`,o(e.p,{children:["Write your stories using ",n(e.a,{href:"https://storybook.js.org/docs/react/api/mdx",children:"MDX format"}),". It allows for more flexibility, and automatically generates a Docs pages for your component."]}),`
`,n(e.p,{children:"Each component's documentation should follow this structure:"}),`
`,o(e.ol,{children:[`
`,n(e.li,{children:n(e.a,{href:"#meta",children:"Meta"})}),`
`,n(e.li,{children:n(e.a,{href:"#description",children:"Description"})}),`
`,n(e.li,{children:n(e.a,{href:"#anatomy",children:"Anatomy"})}),`
`,n(e.li,{children:n(e.a,{href:"#argstable",children:"ArgsTable"})}),`
`,n(e.li,{children:n(e.a,{href:"#variants-and-examples",children:"Variants and examples"})}),`
`]}),`
`,n(t,{label:"Meta"}),`
`,o(e.p,{children:["A component's doc should be placed under the ",n(e.code,{children:"Components"})," section of the documentation."]}),`
`,n(e.p,{children:"They must belong to one of the following categories:"}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:"Disclosure"}),`
`,n(e.li,{children:"Feedback"}),`
`,n(e.li,{children:"Overlay"}),`
`,n(e.li,{children:"Layout"}),`
`,n(e.li,{children:"Media and Icons"}),`
`,n(e.li,{children:"Navigation"}),`
`,n(e.li,{children:"Forms"}),`
`,n(e.li,{children:"Data Display"}),`
`,n(e.li,{children:"Typography"}),`
`]}),`
`,o(e.blockquote,{children:[`
`,n(e.p,{children:"Example:"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{children:`import { Meta } from "@storybook/addon-docs";

<Meta title="Components/Forms/Button" component={Button} />
`})}),`
`,n(t,{label:"Description"}),`
`,n(e.p,{children:"Using markdown syntax, describe what your component's role is. Try to be concise and clear."}),`
`,o(e.p,{children:["For example, for a ",n(e.code,{children:"Button"})," component, it could be:"]}),`
`,o(e.blockquote,{children:[`
`,n(e.p,{children:"Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation."}),`
`]}),`
`,n(t,{label:"Anatomy"}),`
`,n(e.p,{children:"todo"}),`
`,n(t,{label:"ArgsTable"}),`
`,o(e.p,{children:["Simply use Storybook's ",n(e.code,{children:"ArgsTable"}),` component in your MDX to generate the props documentation.
It will parse the typescript files of your component to generate a full table.`]}),`
`,n(e.p,{children:"It uses the JSDoc comments above each prop of your component to show it as a description, and also retrieves default values for each prop."}),`
`,n(e.pre,{children:n(e.code,{children:`import { ArgsTable } from "@storybook/addon-docs";

## Props

<ArgsTable of={Button} />
`})}),`
`,n(e.p,{children:n(e.strong,{children:"Here is what the ArgsTable looks like for a simple component:"})}),`
`,n("img",{width:800,src:d,alt:"Argstable shows a table of the component's props"}),`
`,n(t,{label:"Variants and examples"}),`
`,o(e.p,{children:[`Display and describe as many use-case as you want to showcase the features offered by your component.
We `,n(e.a,{href:"https://github.com/storybookjs/storybook/blob/next/code/addons/docs/docs/recipes.md#csf-stories-with-mdx-docs",children:"suggest you split JSX examples from the markdown"})," for a better developer experience, because Typescript does not support MDX typechecking as of today."]}),`
`,n(e.h3,{}),`
`,n(t,{label:"Live editable example",heading:"h3"}),`
`,o(e.p,{children:["We created ",n(e.code,{children:"@devtools/ReactLiveBlock"})," to replace the ",n(e.code,{children:"Canvas"}),` component offered by Storybook.
`,n(e.code,{children:"ReactLiveBlock"})," allows you to display editable JSX of your stories, copy the code or reset it to its initial state."]}),`
`,n(e.p,{children:"Simply create examples like this:"}),`
`,n(e.pre,{children:n(e.code,{children:`import { Button } from "./Button";
import { ReactLiveBlock } from "@devtools/ReactLiveBlock";

export const variants = () => (
  <ReactLiveBlock scope={{ Button }}>
    <Button variant="default" label="Default" />
    <Button variant="warning" label="Warning" />
    <Button variant="danger" label="Danger" />
    <Button variant="info" label="Info" />
    <Button variant="success" label="Success" />
  </ReactLiveBlock>
);

export const sizes = () => (
  <ReactLiveBlock scope={{ Button }}>
    <Button size="small" label="Button (small)" />
    <Button size="medium" label="Button (medium)" />
    <Button size="large" label="Button (large)" />
  </ReactLiveBlock>
);
`})}),`
`,n(e.p,{children:"Then consume it in your MDX file:"}),`
`,n(e.pre,{children:n(e.code,{children:`import * as examples from "./ButtonExamples";

## Variants

Some description about the variants and their semantic roles...

<Story name="variants" story={examples.variants} />

## Sizes

Some description about the sizes...

<Story name="sizes" story={examples.sizes} />
`})}),`
`,n(e.p,{children:"Feel free to add as many examples as necessary."})]})}}export{X as default};
//# sourceMappingURL=WritingStories-6e6b0fae.js.map
