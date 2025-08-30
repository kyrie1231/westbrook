import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-C9QWgLmx.js";import{c as i}from"./index-BeMCJIND.js";import"./preload-helper-D9Z9MdNV.js";const _={autoplay:!0,interval:3e3,direction:"horizontal",showIndicators:!0},I=C=>{const{items:e,autoplay:c,interval:l,direction:u,showIndicators:w}={..._,...C},[n,x]=o.useState(0),[d,g]=o.useState(!1),a=o.useRef(null),j=o.useRef(null),v=s=>{if(e.length===0)return;let t=s;t<0&&(t=e.length-1),t>=e.length&&(t=0),x(t)},y=()=>v(n+1);if(o.useEffect(()=>!c||d||e.length<=1?void 0:((()=>{a.current=setTimeout(y,l)})(),()=>{a.current&&clearTimeout(a.current)}),[c,d,l,n,e.length]),o.useEffect(()=>{!c||e.length<=1||!d&&a.current&&(clearTimeout(a.current),a.current=setTimeout(y,l))},[d,c,l]),e.length===0)return null;const T={transform:u==="horizontal"?`translateX(-${n*100}%)`:`translateY(-${n*100}%)`,flexDirection:u==="horizontal"?"row":"column"},z=i("carousel-container"),N=i("carousel-slides"),R=i("carousel-indicators"),b=s=>i("carousel-indicator",{active:s===n}),E=i("carousel-slide");return r.jsxs("div",{className:z,onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),"data-direction":u,children:[r.jsx("div",{className:"carousel-slides-wrapper",ref:j,children:r.jsx("div",{className:N,style:T,children:e.map(s=>r.jsx("div",{className:E,children:s.content},s.id))})}),w&&e.length>1&&r.jsx("div",{className:R,"data-direction":u,children:e.map((s,t)=>r.jsx("button",{className:b(t),onClick:()=>v(t),"aria-label":`切换到第 ${t+1} 项`},t))})]})};I.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"CarouselItem"}],raw:"CarouselItem[]"},description:""},autoplay:{required:!1,tsType:{name:"boolean"},description:""},interval:{required:!1,tsType:{name:"number"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""},showIndicators:{required:!1,tsType:{name:"boolean"},description:""}}};const q=""+new URL("1.cat-Cqy_nsvd.png",import.meta.url).href,S=""+new URL("2.cat-DEGijru0.png",import.meta.url).href,k=""+new URL("3.cat-BsRYToA7.png",import.meta.url).href,f=[{id:"1",content:r.jsx("img",{src:q,alt:"轮播图1",style:{width:"100%",height:"100%",objectFit:"cover"}})},{id:"2",content:r.jsx("img",{src:S,alt:"轮播图2",style:{width:"100%",height:"100%",objectFit:"cover"}})},{id:"3",content:r.jsx("img",{src:k,alt:"轮播图3",style:{width:"100%",height:"100%",objectFit:"cover"}})}],F={title:"Carousel",component:I,tags:["autodocs"]},m={args:{items:f,direction:"horizontal",autoplay:!0,interval:3e3,showIndicators:!0}},p={args:{items:f,direction:"vertical",autoplay:!0,interval:3500,showIndicators:!0}},h={args:{items:f,direction:"horizontal",autoplay:!1,showIndicators:!0}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockItems,
    direction: 'horizontal',
    autoplay: true,
    interval: 3000,
    showIndicators: true
  }
} as {
  args: CarouselProps;
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockItems,
    direction: 'vertical',
    autoplay: true,
    interval: 3500,
    showIndicators: true
  }
} as {
  args: CarouselProps;
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockItems,
    direction: 'horizontal',
    autoplay: false,
    showIndicators: true
  }
} as {
  args: CarouselProps;
}`,...h.parameters?.docs?.source}}};const U=["HorizontalCarousel","VerticalCarousel","NoAutoplayCarousel"];export{m as HorizontalCarousel,h as NoAutoplayCarousel,p as VerticalCarousel,U as __namedExportsOrder,F as default};
