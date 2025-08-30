import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as h}from"./index-BeMCJIND.js";import"./iframe-C9QWgLmx.js";import"./preload-helper-D9Z9MdNV.js";function d({value:p,onChange:c,name:i="",placeholder:b="",label:g="",disabled:m=!1,type:y="text",size:t="medium",rounded:e="none",error:u=""}){return a.jsxs("div",{className:"flex-col-layout",children:[a.jsx("label",{htmlFor:`input-${i}`,className:"label-color",children:g}),a.jsx("input",{type:y,name:i,value:p,placeholder:b,onChange:f=>c(f.target.value),disabled:m,className:h("input-px-medium",{"input-h-medium":t==="medium","input-h-small":t==="small","input-h-large":t==="large","input-rounded-none":e==="none","input-rounded-small":e==="small","input-rounded-medium":e==="medium","input-rounded-large":e==="large","input-rounded-full":e==="full","input-error-border":u,"input-disabled":m})}),u&&a.jsx("span",{className:"error-text",children:u})]})}d.__docgenInfo={description:"",methods:[],displayName:"Input",props:{value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"text" | "number" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"number"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},rounded:{required:!1,tsType:{name:"union",raw:'"none" | "small" | "medium" | "large" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"none"',computed:!1}},error:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const w={title:"Input",component:d,tags:["autodocs"]},r={args:{label:"Hobby",placeholder:"Enter your hobby"}},n={args:{label:"Hobby",placeholder:"Enter your hobby",size:"large"}},l={args:{label:"Hobby",placeholder:"Enter your hobby",error:"Missing your dear"}},s={args:{label:"Hobby",placeholder:"Enter your hobby",disabled:!0,value:"westbrook"}},o={args:{label:"Hobby",placeholder:"Enter your hobby",rounded:"large"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Hobby",
    placeholder: "Enter your hobby"
  }
} as {
  args: InputProps;
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Hobby",
    placeholder: "Enter your hobby",
    size: "large"
  }
} as {
  args: InputProps;
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Hobby",
    placeholder: "Enter your hobby",
    error: "Missing your dear"
  }
} as {
  args: InputProps;
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Hobby",
    placeholder: "Enter your hobby",
    disabled: true,
    value: "westbrook"
  }
} as {
  args: InputProps;
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Hobby",
    placeholder: "Enter your hobby",
    rounded: "large"
  }
} as {
  args: InputProps;
}`,...o.parameters?.docs?.source}}};const H=["Basic","Large","Error","Disabled","Rounded"];export{r as Basic,s as Disabled,l as Error,n as Large,o as Rounded,H as __namedExportsOrder,w as default};
