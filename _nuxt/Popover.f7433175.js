import y from"./ContentSlot.730e7492.js";import{d as _,r as s,b as u,c as d,e as b,g as l,U as e,w as x,a1 as v,f as k,T as w,l as C}from"./entry.5f410bcd.js";import{u as h,L as S,A as $,O as N,a as B}from"./floating-ui.vue.esm.64fbe14c.js";import{o as R}from"./index.bbfd5632.js";const P=["tabindex"],T=_({__name:"Popover",props:{tabbable:{type:Boolean,default:!1},maxWidth:{type:String,default:"240px"},offset:{type:Number,default:4},delay:{type:Number,default:200},strategy:{type:String,default:"absolute"},placement:{type:String,default:"bottom"}},setup(a){const o=a,t=s(!1),r=s(null),n=s(null),{x:c,y:m,strategy:g,placement:V}=h(r,n,{strategy:o.strategy,middleware:[S(o.offset),$(),N({padding:4})],placement:o.placement,whileElementsMounted:B});return R(n,()=>setTimeout(()=>t.value=!1,0)),(p,i)=>{const f=y;return u(),d("div",null,[b("span",{tabindex:a.tabbable?0:-1,ref_key:"triggerRef",ref:r,class:"trigger",onClick:i[0]||(i[0]=W=>t.value=!e(t))},[l(f,{use:p.$slots.default,unwrap:"p"},null,8,["use"])],8,P),l(w,{name:"popover"},{default:x(()=>[e(t)?(u(),d("span",{key:0,ref_key:"floatingRef",ref:n,class:"popover-content",style:v({position:e(g),top:`${e(m)??0}px`,left:`${e(c)??0}px`,width:"max-content",maxWidth:a.maxWidth}),tabindex:"0"},[l(f,{use:p.$slots.content,unwrap:"p"},null,8,["use"])],4)):k("",!0)]),_:1})])}}});const F=C(T,[["__scopeId","data-v-a98c5a41"]]);export{F as default};