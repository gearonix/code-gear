import{u as S,H as $,c as y,a as P,j as A}from"./app.styles-63e7553f.js";import{r as N}from"./index-302fe4bd.js";import{A as V}from"./animation.decorator-4848d040.js";import{c as q}from"./create-storybook-variant-bfe14f1f.js";import"./tslib.es6-0f2e948e.js";import"./iframe-54c8d821.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";const D=(e,a)=>{const{Spring:r,Gesture:s}=S(),[{y:o},n]=r.useSpring(()=>({y:a})),l=()=>{n.start({y:0,immediate:!1,config:r.config.gentle})},m=(t=0)=>{e(),n.start({y:a,immediate:!1,config:{...r.config.stiff,velocity:t}})},b=s.useDrag(({last:t,velocity:[,u],direction:[,f],offset:[,p],cancel:h})=>{p<-70&&h(),t?p>a*.5||u>.5&&f===1?m(u):l():n.start({y:p,immediate:f===-1})},{from:()=>[0,o.get()],filterTaps:!0,bounds:{top:0},rubberband:!0}),x=o.to(t=>t<a?"block":"none");return{toggle:t=>{t?l():m()},bind:b,div:r.a.div,springs:{display:x,y:o}}},c=$.div`
  padding-left: 15px;
  z-index: 15;
  position: fixed;
  right: 0;
  height: calc(100vh + 100px);
  width: calc(100% - 54px);
  border-radius: 6px 6px 0;
  background: ${y("darkBlue")};
  border-top: 2px solid ${y("lightGrey")};
  touch-action: none;
  bottom: ${({$bottom:e})=>`calc(-100vh + ${e-100}px)`};
  overflow-y: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ${P()};
`;try{c.displayName="PopoverStyles",c.__docgenInfo={description:"",displayName:"PopoverStyles",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},$bottom:{defaultValue:null,description:"",name:"$bottom",required:!0,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const d=({children:e,onClose:a,isOpen:r,height:s})=>{const o=D(a,s);return N.useEffect(()=>{o.toggle(r)},[r]),A.jsx(c,{$bottom:s,...o.bind(),style:o.springs,as:o.div,children:e})};try{d.displayName="Popover",d.__docgenInfo={description:"",displayName:"Popover",props:{}}}catch{}try{popover.displayName="popover",popover.__docgenInfo={description:"",displayName:"popover",props:{}}}catch{}const B={component:d,title:"ui/popover",decorators:[V]},E=q({isOpen:!0,onClose:()=>{},height:200}),i=E();var g,_,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"variant()",...(v=(_=i.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const C=["Default"];export{i as Default,C as __namedExportsOrder,B as default};
//# sourceMappingURL=popover.stories-3eb30132.js.map
