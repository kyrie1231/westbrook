import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./iframe-C9QWgLmx.js";import{c as s}from"./index-BeMCJIND.js";import"./preload-helper-D9Z9MdNV.js";function l(d){const{tabsData:n,activeTab:e,onTabChange:b,disabledTabIndexes:u=[],orientaion:r="horizontal"}=d;return t.jsxs("div",{className:s("flex gap-5",{"flex-row justify-start":r==="vertical","flex-col":r==="horizontal"}),children:[t.jsx("div",{className:s("flex gap border border-solid border-gray",{"flex-col border-r":r==="vertical","flex-row border-b":r==="horizontal"}),children:n.map((T,a)=>t.jsx("div",{className:s("px py pr cursor-pointer",{"border-primary border-solid border-b border":e===a&&r==="horizontal","border-primary border-solid border-r border":e===a&&r==="vertical","opacity cursor-not-allowed pointer-events-none":u.includes(a)}),onClick:()=>b(a),children:t.jsx("span",{className:s("text-sm text-gray",{"text-primary":e===a}),children:T.title})},a))}),t.jsx("div",{className:"text-sm",children:n[e].content})]})}l.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabsData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  title: string;\r
  content: React.ReactNode;\r
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}],raw:`Array<{\r
  title: string;\r
  content: React.ReactNode;\r
}>`},description:""},activeTab:{required:!0,tsType:{name:"number"},description:""},onTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},disabledTabIndexes:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},orientaion:{required:!1,tsType:{name:"union",raw:"'horizontal' |'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""}}};const h={component:l,title:"Tabs",tags:["autodocs"]},m=[{title:"Tab 1",content:"Content of Tab 1"},{title:"Tab 2",content:"Content of Tab 2"},{title:"Tab 3",content:"Content of Tab 3"}],p=d=>{const[n,e]=g.useState(0);return t.jsx(l,{...d,activeTab:n,onTabChange:e})},o={args:{tabsData:m},render:p},i={args:{tabsData:m,disabledTabIndexes:[1]},render:p},c={args:{tabsData:m,orientaion:"vertical"},render:p};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tabsData
  },
  render: Template
} as {
  args: TabsProps;
  render: () => JSX.Element;
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    tabsData,
    disabledTabIndexes: [1]
  },
  render: Template
} as {
  args: TabsProps;
  render: () => JSX.Element;
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    tabsData,
    orientaion: "vertical"
  },
  render: Template
} as {
  args: TabsProps;
  render: () => JSX.Element;
}`,...c.parameters?.docs?.source}}};const N=["Basic","WithDisabledTabs","Vertical"];export{o as Basic,c as Vertical,i as WithDisabledTabs,N as __namedExportsOrder,h as default};
