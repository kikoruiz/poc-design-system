import{j as a,a as r}from"./jsx-runtime-a9c13c85.js";import{S as t}from"./Stack-c53fe459.js";import{R as s}from"./index-557fd086.js";import{c}from"./index.esm-6031b14f.js";const p=c(["spark-Button"],{variants:{disabled:{true:["is-disabled"]},intent:{primary:["spark-Button--primary"],secondary:["spark-Button--secondary"]},size:{small:["spark-Button--small"],medium:["spark-Button--medium"],large:["spark-Button--large"]}},defaultVariants:{intent:"primary",size:"small"},compoundVariants:[{intent:"primary",size:"small",disabled:!0,className:"spark-Button--variantOne"}]});function e({color:i="gray",children:l,disabled:n=!1,intent:o="primary",size:d="small",...m}){const u={...m,disabled:n};return a("button",{className:p({intent:o,size:d,disabled:!!n}),...u,children:l})}try{e.displayName="Button",e.__docgenInfo={description:"",displayName:"Button",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},intent:{defaultValue:{value:"primary"},description:"",name:"intent",required:!1,type:{name:'"primary" | "secondary" | null | undefined'}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large" | null | undefined'}}}}}catch{}const y=()=>a(s,{scope:{Button:e,Stack:t},children:r(t,{alignItems:"end",gap:"m",children:[a(e,{intent:"primary",children:"primary button"}),a(e,{intent:"secondary",children:"secondary button"})]})}),f=()=>a(s,{scope:{Button:e,Stack:t},children:r(t,{alignItems:"end",gap:"m",children:[a(e,{size:"small",children:"small button"}),a(e,{size:"medium",children:"medium button"}),a(e,{size:"large",children:"large button"})]})}),b=["Variants","Sizes"],h=Object.freeze(Object.defineProperty({__proto__:null,Sizes:f,Variants:y,__namedExportsOrder:b},Symbol.toStringTag,{value:"Module"}));export{e as B,f as S,y as V,h as a};
//# sourceMappingURL=Button.stories-f9fc8e96.js.map