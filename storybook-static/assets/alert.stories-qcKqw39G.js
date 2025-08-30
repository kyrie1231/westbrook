import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as f}from"./index-BeMCJIND.js";import{e as h}from"./iframe-C9QWgLmx.js";import{c as o}from"./createLucideIcon-CgKGZkcl.js";import{X as g}from"./x-CLu7rDeR.js";import"./preload-helper-D9Z9MdNV.js";/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],b=o("ban",y);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],T=o("check",x);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],N=o("circle-alert",w);/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],_=o("info",k);function c({message:l,type:s="info",description:j,showIcon:p=!0,closable:m=!1}){const[d,u]=h.useState(!0);return d?e.jsx("div",{className:f("alert-base",{"alert-info-bg alert-info-border":s==="info","alert-error-bg alert-error-border":s==="error","alert-success-bg alert-success-border":s==="success","alert-warning-bg alert-warning-border":s==="warning"}),children:e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("span",{className:"alert-content",children:[p&&e.jsxs("span",{children:[s==="info"&&e.jsx(_,{size:14,className:"text-blue-500"}),s==="success"&&e.jsx(T,{size:14,className:"text-green-500"}),s==="error"&&e.jsx(b,{size:14,className:"text-red-500"}),s==="warning"&&e.jsx(N,{size:14,className:"text-yellow-500"})]}),l]}),m&&e.jsx(g,{size:18,className:"alert-close",onClick:()=>u(!1)})]})}):null}c.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{message:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"success" | "error" | "warning" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const P={component:c,title:"Alert",tags:["autodocs"]},r={args:{message:"This is an info alert",description:"This is the description of the info alert , it can be multiline",type:"info"}},a={args:{message:"This is a success alert",description:"This is the description of the success alert , it can be multiline",type:"success"}},t={args:{message:"This is an error alert",description:"This is the description of the error alert , it can be multiline",type:"error"}},i={args:{message:"This is a warning alert",description:"This is the description of the warning alert , it can be multiline",type:"warning"}},n={args:{message:"Info alert without icon",description:"This is the description of the info alert , it can be multiline",type:"info",showIcon:!1}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    message: "This is an info alert",
    description: "This is the description of the info alert , it can be multiline",
    type: "info"
  }
} as {
  args: AlertProps;
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    message: "This is a success alert",
    description: "This is the description of the success alert , it can be multiline",
    type: "success"
  }
} as {
  args: AlertProps;
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    message: "This is an error alert",
    description: "This is the description of the error alert , it can be multiline",
    type: "error"
  }
} as {
  args: AlertProps;
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    message: "This is a warning alert",
    description: "This is the description of the warning alert , it can be multiline",
    type: "warning"
  }
} as {
  args: AlertProps;
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Info alert without icon",
    description: "This is the description of the info alert , it can be multiline",
    type: "info",
    showIcon: false
  }
} as {
  args: AlertProps;
}`,...n.parameters?.docs?.source}}};const E=["Info","Success","Error","Warning","WithoutIcon"];export{t as Error,r as Info,a as Success,i as Warning,n as WithoutIcon,E as __namedExportsOrder,P as default};
