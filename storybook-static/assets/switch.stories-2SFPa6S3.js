import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as d}from"./index-BeMCJIND.js";import{r as p}from"./iframe-C9QWgLmx.js";import"./preload-helper-D9Z9MdNV.js";function o({label:n,checked:a,onChange:c,disabled:m=!1,orientation:l="vertical"}){return e.jsxs("div",{className:d("switch-container",{"flex-row":l==="horizontal","flex-col":l==="vertical"}),children:[e.jsx("span",{className:"switch-label",children:n}),e.jsx("div",{className:d("switch",{"switch-checked":a,"switch-disabled":m}),onClick:()=>c(!a),children:e.jsx("div",{className:"switch-thumb"})})]})}o.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{label:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const g={title:"Switch",component:o,tags:["autodocs"]},i=n=>{const[a,c]=p.useState(!1);return e.jsx(o,{...n,checked:a,onChange:c})},r={args:{label:"switch",checked:!1},render:i},s={args:{label:"switch",checked:!1,orientation:"horizontal"},render:i},t={args:{label:"switch",checked:!0,disabled:!0},render:i};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "switch",
    checked: false
  },
  render: Template
} as {
  args: SwitchProps;
  render: () => JSX.Element;
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "switch",
    checked: false,
    orientation: "horizontal"
  },
  render: Template
} as {
  args: SwitchProps;
  render: () => JSX.Element;
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "switch",
    checked: true,
    disabled: true
  },
  render: Template
} as {
  args: SwitchProps;
  render: () => JSX.Element;
}`,...t.parameters?.docs?.source}}};const b=["Basic","Horizontal","Disabled"];export{r as Basic,t as Disabled,s as Horizontal,b as __namedExportsOrder,g as default};
