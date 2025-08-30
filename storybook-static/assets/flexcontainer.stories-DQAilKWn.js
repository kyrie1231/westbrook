import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as m}from"./index-BeMCJIND.js";import"./iframe-C9QWgLmx.js";import"./preload-helper-D9Z9MdNV.js";function n({children:s,direction:l="column",align:r="top",justify:a="start",height:o,gap:i,showBorder:c=!1}){return e.jsx("div",{style:{height:o,gap:i},className:m("flex",{"flex-col":l==="column","justify-start":a==="start","justify-center":a==="center","justify-end":a==="end","items-center":r==="center","items-start":r==="top","items-end":r==="bottom","border border-all":c}),children:s})}n.__docgenInfo={description:"",methods:[],displayName:"FlexContainer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"row" | "column"',elements:[{name:"literal",value:'"row"'},{name:"literal",value:'"column"'}]},description:"",defaultValue:{value:'"column"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"center" | "top" | "bottom"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},justify:{required:!1,tsType:{name:"union",raw:'"center" | "start" | "end"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}},gap:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""},showBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const h={title:"FlexContainer",component:n,tags:["autodocs"]},d=e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex-item red",children:"Item 1"}),e.jsx("div",{className:"flex-item blue",children:"Item 2"}),e.jsx("div",{className:"flex-item green",children:"Item 3"})]}),t={args:{children:d,justify:"start",align:"top",direction:"row",height:300,showBorder:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children,
    justify: "start",
    align: "top",
    direction: "row",
    height: 300,
    showBorder: true
  }
} as {
  args: FlexContainerProps;
}`,...t.parameters?.docs?.source}}};const v=["Basic"];export{t as Basic,v as __namedExportsOrder,h as default};
