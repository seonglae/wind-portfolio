import{d as w,I as t,r as x,X as N,b as d,c as S,e as a,W as D,U as c,f as I,g as l,a2 as W,a3 as z,n as E,Y as P,l as Y}from"./entry.5f410bcd.js";import O from"./ContentSlot.730e7492.js";const R=["aria-expanded"],U={class:"summary-content"},X={class:"chevron-wrapper"},j={class:"content"},q=w({__name:"Disclosure",props:{open:{type:Boolean,default:!1},type:{type:String,default:"primary",validator(s){return["info","success","warning","danger","neutral","primary","secondary"].includes(s)}},icon:{type:[String,Boolean],default:!1}},emits:["update:open"],setup(s,{emit:i}){const n=s,_=t(()=>((e=o)=>`{elements.state.${e.type}.borderColor.primary}`)()),m=t(()=>((e=o)=>`{elements.state.${e.type}.backgroundColor.primary}`)()),y=t(()=>((e=o)=>`{elements.state.${e.type}.color.primary}`)()),C=t(()=>((e=o)=>`{elements.state.${e.type}.color.tertiary}`)()),f=t(()=>((e=o)=>`{elements.state.${e.type}.backgroundColor.tertiary}`)()),b=t(()=>((e=o)=>`{elements.state.${e.type}.backgroundColor.secondary}`)()),g=t(()=>((e=o)=>`{elements.state.${e.type}.backgroundColor.secondary}`)()),k=t(()=>((e=o)=>`{elements.state.${e.type}.borderColor.primary}`)()),$=t(()=>((e=o)=>`{elements.state.${e.type}.backgroundColor.primary}`)()),v=t(()=>((e=o)=>`{elements.state.${e.type}.color.tertiary}`)()),r=x(n.open),h=()=>{r.value=!r.value,i("update:open",r.value)},V=t(()=>n.icon===!1?"":n.icon===!0?`type:${n.type}`:n.icon),o=n,{$pinceau:B}=N(o,void 0,{_yV0_borderColor:_,_m5N_backgroundColor:m,_Y56_color:y,_Nt6_color:C,_ViE_backgroundColor:f,_6mW_backgroundColor:b,_x5W_backgroundColor:g,_SyV_borderColor:k,_B7z_backgroundColor:$,_sVV_color:v});return(e,A)=>{const u=P,p=O;return d(),S("div",{class:E(["disclosure",[s.type,c(B)]])},[a("button",{"aria-expanded":c(r),type:"button",class:"summary",onClick:h},[s.icon?(d(),D(u,{key:0,name:c(V),class:"disclosure-icon"},null,8,["name"])):I("",!0),a("span",U,[l(p,{use:e.$slots.summary,unwrap:"p"},null,8,["use"])]),a("span",X,[l(u,{name:"tabler:chevron-down"})])],8,R),W(a("div",j,[l(p,{use:e.$slots.content},null,8,["use"])],512),[[z,c(r)]])],2)}}});const H=Y(q,[["__scopeId","data-v-976d78ed"]]);export{H as default};