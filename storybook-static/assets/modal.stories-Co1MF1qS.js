import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-C9QWgLmx.js";import{c as m}from"./index-BeMCJIND.js";import{X as c}from"./x-CLu7rDeR.js";import{B as u}from"./index-CYu8qvKV.js";import"./preload-helper-D9Z9MdNV.js";import"./createLucideIcon-CgKGZkcl.js";function n({showModal:t,onCancel:r,title:a,children:l,size:o}){if(!t)return e.jsx(e.Fragment,{});const i=m("modal-container",{"w-1":o==="small","w-2":o==="medium","w-3":o==="large"});return e.jsx("div",{className:"modal-backdrop",children:e.jsxs("div",{className:i,children:[e.jsxs("div",{className:"modal-header",children:[a&&e.jsx("h2",{className:"modal-title",children:a}),r&&e.jsx(c,{className:"close-icon",onClick:r})]}),e.jsx("hr",{className:"modal-divider"}),e.jsx("div",{className:"modal-content",children:l})]})})}n.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!0,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""}}};const w={title:"Modal",component:n,tags:["autodocs"]},p=t=>{const[r,a]=d.useState(!1);return e.jsxs("div",{children:[e.jsx(u,{title:"Open Modal",onClick:()=>a(!0),variant:"outlined",rounded:"medium"}),e.jsx(n,{...t,showModal:r,onCancel:()=>a(!1)})]})},s={args:{showModal:!0,children:"Modal Content",closable:!0,title:"Modal Title",size:"medium"},render:p};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    showModal: true,
    children: "Modal Content",
    closable: true,
    title: "Modal Title",
    size: "medium"
  },
  render: Template
} as {
  args: ModalProps;
}`,...s.parameters?.docs?.source}}};const N=["Basic"];export{s as Basic,N as __namedExportsOrder,w as default};
