import{I as S,r as j,ab as kt,a5 as rt,ac as Ft,ad as W,N as Y,ae as Mt}from"./entry.abcf552f.js";const K=Math.min,F=Math.max,G=Math.round,U=Math.floor,D=t=>({x:t,y:t}),Vt={left:"right",right:"left",bottom:"top",top:"bottom"},Nt={start:"end",end:"start"};function dt(t,e,n){return F(t,K(e,n))}function tt(t,e){return typeof t=="function"?t(e):t}function M(t){return t.split("-")[0]}function et(t){return t.split("-")[1]}function yt(t){return t==="x"?"y":"x"}function vt(t){return t==="y"?"height":"width"}function nt(t){return["top","bottom"].includes(M(t))?"y":"x"}function bt(t){return yt(nt(t))}function Bt(t,e,n){n===void 0&&(n=!1);const o=et(t),i=bt(t),s=vt(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=J(r)),[r,J(r)]}function Wt(t){const e=J(t);return[st(t),e,st(e)]}function st(t){return t.replace(/start|end/g,e=>Nt[e])}function Ht(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function It(t,e,n,o){const i=et(t);let s=Ht(M(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(st)))),s}function J(t){return t.replace(/left|right|bottom|top/g,e=>Vt[e])}function _t(t){return{top:0,right:0,bottom:0,left:0,...t}}function zt(t){return typeof t!="number"?_t(t):{top:t,right:t,bottom:t,left:t}}function Q(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function mt(t,e,n){let{reference:o,floating:i}=t;const s=nt(e),r=bt(e),l=vt(r),a=M(e),c=s==="y",u=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,g=o[l]/2-i[l]/2;let f;switch(a){case"top":f={x:u,y:o.y-i.height};break;case"bottom":f={x:u,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:d};break;case"left":f={x:o.x-i.width,y:d};break;default:f={x:o.x,y:o.y}}switch(et(e)){case"start":f[r]-=g*(n&&c?-1:1);break;case"end":f[r]+=g*(n&&c?-1:1);break}return f}const $t=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,l=s.filter(Boolean),a=await(r.isRTL==null?void 0:r.isRTL(e));let c=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=mt(c,o,a),g=o,f={},m=0;for(let h=0;h<l.length;h++){const{name:x,fn:p}=l[h],{x:w,y:v,data:R,reset:b}=await p({x:u,y:d,initialPlacement:o,placement:g,strategy:i,middlewareData:f,rects:c,platform:r,elements:{reference:t,floating:e}});if(u=w??u,d=v??d,f={...f,[x]:{...f[x],...R}},b&&m<=50){m++,typeof b=="object"&&(b.placement&&(g=b.placement),b.rects&&(c=b.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:u,y:d}=mt(c,g,a)),h=-1;continue}}return{x:u,y:d,placement:g,strategy:i,middlewareData:f}};async function Rt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:g=!1,padding:f=0}=tt(e,t),m=zt(f),x=l[g?d==="floating"?"reference":"floating":d],p=Q(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(x)))==null||n?x:x.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:a})),w=d==="floating"?{...r.floating,x:o,y:i}:r.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),R=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},b=Q(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:v,strategy:a}):w);return{top:(p.top-b.top+m.top)/R.y,bottom:(b.bottom-p.bottom+m.bottom)/R.y,left:(p.left-b.left+m.left)/R.x,right:(b.right-p.right+m.right)/R.x}}const fe=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:i,rects:s,initialPlacement:r,platform:l,elements:a}=e,{mainAxis:c=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:m=!0,...h}=tt(t,e),x=M(o),p=M(r)===r,w=await(l.isRTL==null?void 0:l.isRTL(a.floating)),v=d||(p||!m?[J(r)]:Wt(r));!d&&f!=="none"&&v.push(...It(r,m,f,w));const R=[r,...v],b=await Rt(e,h),O=[];let y=((n=i.flip)==null?void 0:n.overflows)||[];if(c&&O.push(b[x]),u){const k=Bt(o,s,w);O.push(b[k[0]],b[k[1]])}if(y=[...y,{placement:o,overflows:O}],!O.every(k=>k<=0)){var _,z;const k=(((_=i.flip)==null?void 0:_.index)||0)+1,ut=R[k];if(ut)return{data:{index:k,overflows:y},reset:{placement:ut}};let $=(z=y.filter(N=>N.overflows[0]<=0).sort((N,B)=>N.overflows[1]-B.overflows[1])[0])==null?void 0:z.placement;if(!$)switch(g){case"bestFit":{var ft;const N=(ft=y.map(B=>[B.placement,B.overflows.filter(X=>X>0).reduce((X,Pt)=>X+Pt,0)]).sort((B,X)=>B[1]-X[1])[0])==null?void 0:ft[0];N&&($=N);break}case"initialPlacement":$=r;break}if(o!==$)return{reset:{placement:$}}}return{}}}};async function Xt(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=M(n),l=et(n),a=nt(n)==="y",c=["left","top"].includes(r)?-1:1,u=s&&a?-1:1,d=tt(e,t);let{mainAxis:g,crossAxis:f,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof m=="number"&&(f=l==="end"?m*-1:m),a?{x:f*u,y:g*c}:{x:g*c,y:f*u}}const ue=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await Xt(e,t);return{x:n+i.x,y:o+i.y,data:i}}}},de=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:x=>{let{x:p,y:w}=x;return{x:p,y:w}}},...a}=tt(t,e),c={x:n,y:o},u=await Rt(e,a),d=nt(M(i)),g=yt(d);let f=c[g],m=c[d];if(s){const x=g==="y"?"top":"left",p=g==="y"?"bottom":"right",w=f+u[x],v=f-u[p];f=dt(w,f,v)}if(r){const x=d==="y"?"top":"left",p=d==="y"?"bottom":"right",w=m+u[x],v=m-u[p];m=dt(w,m,v)}const h=l.fn({...e,[g]:f,[d]:m});return{...h,data:{x:h.x-n,y:h.y-o}}}}};function P(t){return At(t)?(t.nodeName||"").toLowerCase():"#document"}function A(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function L(t){var e;return(e=(At(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function At(t){return t instanceof Node||t instanceof A(t).Node}function T(t){return t instanceof Element||t instanceof A(t).Element}function E(t){return t instanceof HTMLElement||t instanceof A(t).HTMLElement}function pt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof A(t).ShadowRoot}function q(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=C(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function jt(t){return["table","td","th"].includes(P(t))}function lt(t){const e=ct(),n=C(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Yt(t){let e=I(t);for(;E(e)&&!ot(e);){if(lt(e))return e;e=I(e)}return null}function ct(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ot(t){return["html","body","#document"].includes(P(t))}function C(t){return A(t).getComputedStyle(t)}function it(t){return T(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function I(t){if(P(t)==="html")return t;const e=t.assignedSlot||t.parentNode||pt(t)&&t.host||L(t);return pt(e)?e.host:e}function Ct(t){const e=I(t);return ot(e)?t.ownerDocument?t.ownerDocument.body:t.body:E(e)&&q(e)?e:Ct(e)}function Z(t,e){var n;e===void 0&&(e=[]);const o=Ct(t),i=o===((n=t.ownerDocument)==null?void 0:n.body),s=A(o);return i?e.concat(s,s.visualViewport||[],q(o)?o:[]):e.concat(o,Z(o))}function Ot(t){const e=C(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=E(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,l=G(n)!==s||G(o)!==r;return l&&(n=s,o=r),{width:n,height:o,$:l}}function at(t){return T(t)?t:t.contextElement}function H(t){const e=at(t);if(!E(e))return D(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Ot(e);let r=(s?G(n.width):n.width)/o,l=(s?G(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const qt=D(0);function Et(t){const e=A(t);return!ct()||!e.visualViewport?qt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ut(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==A(t)?!1:e}function V(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=at(t);let r=D(1);e&&(o?T(o)&&(r=H(o)):r=H(t));const l=Ut(s,n,o)?Et(s):D(0);let a=(i.left+l.x)/r.x,c=(i.top+l.y)/r.y,u=i.width/r.x,d=i.height/r.y;if(s){const g=A(s),f=o&&T(o)?A(o):o;let m=g.frameElement;for(;m&&o&&f!==g;){const h=H(m),x=m.getBoundingClientRect(),p=C(m),w=x.left+(m.clientLeft+parseFloat(p.paddingLeft))*h.x,v=x.top+(m.clientTop+parseFloat(p.paddingTop))*h.y;a*=h.x,c*=h.y,u*=h.x,d*=h.y,a+=w,c+=v,m=A(m).frameElement}}return Q({width:u,height:d,x:a,y:c})}function Kt(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=E(n),s=L(n);if(n===s)return e;let r={scrollLeft:0,scrollTop:0},l=D(1);const a=D(0);if((i||!i&&o!=="fixed")&&((P(n)!=="body"||q(s))&&(r=it(n)),E(n))){const c=V(n);l=H(n),a.x=c.x+n.clientLeft,a.y=c.y+n.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-r.scrollLeft*l.x+a.x,y:e.y*l.y-r.scrollTop*l.y+a.y}}function Gt(t){return Array.from(t.getClientRects())}function Tt(t){return V(L(t)).left+it(t).scrollLeft}function Jt(t){const e=L(t),n=it(t),o=t.ownerDocument.body,i=F(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=F(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Tt(t);const l=-n.scrollTop;return C(o).direction==="rtl"&&(r+=F(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:l}}function Qt(t,e){const n=A(t),o=L(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,l=0,a=0;if(i){s=i.width,r=i.height;const c=ct();(!c||c&&e==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:s,height:r,x:l,y:a}}function Zt(t,e){const n=V(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=E(t)?H(t):D(1),r=t.clientWidth*s.x,l=t.clientHeight*s.y,a=i*s.x,c=o*s.y;return{width:r,height:l,x:a,y:c}}function gt(t,e,n){let o;if(e==="viewport")o=Qt(t,n);else if(e==="document")o=Jt(L(t));else if(T(e))o=Zt(e,n);else{const i=Et(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return Q(o)}function Lt(t,e){const n=I(t);return n===e||!T(n)||ot(n)?!1:C(n).position==="fixed"||Lt(n,e)}function te(t,e){const n=e.get(t);if(n)return n;let o=Z(t).filter(l=>T(l)&&P(l)!=="body"),i=null;const s=C(t).position==="fixed";let r=s?I(t):t;for(;T(r)&&!ot(r);){const l=C(r),a=lt(r);!a&&l.position==="fixed"&&(i=null),(s?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||q(r)&&!a&&Lt(t,r))?o=o.filter(u=>u!==r):i=l,r=I(r)}return e.set(t,o),o}function ee(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?te(e,this._c):[].concat(n),o],l=r[0],a=r.reduce((c,u)=>{const d=gt(e,u,i);return c.top=F(d.top,c.top),c.right=K(d.right,c.right),c.bottom=K(d.bottom,c.bottom),c.left=F(d.left,c.left),c},gt(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function ne(t){return Ot(t)}function oe(t,e,n){const o=E(e),i=L(e),s=n==="fixed",r=V(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const a=D(0);if(o||!o&&!s)if((P(e)!=="body"||q(i))&&(l=it(e)),o){const c=V(e,!0,s,e);a.x=c.x+e.clientLeft,a.y=c.y+e.clientTop}else i&&(a.x=Tt(i));return{x:r.left+l.scrollLeft-a.x,y:r.top+l.scrollTop-a.y,width:r.width,height:r.height}}function ht(t,e){return!E(t)||C(t).position==="fixed"?null:e?e(t):t.offsetParent}function St(t,e){const n=A(t);if(!E(t))return n;let o=ht(t,e);for(;o&&jt(o)&&C(o).position==="static";)o=ht(o,e);return o&&(P(o)==="html"||P(o)==="body"&&C(o).position==="static"&&!lt(o))?n:o||Yt(t)||n}const ie=async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||St,s=this.getDimensions;return{reference:oe(e,await i(n),o),floating:{x:0,y:0,...await s(n)}}};function re(t){return C(t).direction==="rtl"}const se={convertOffsetParentRelativeRectToViewportRelativeRect:Kt,getDocumentElement:L,getClippingRect:ee,getOffsetParent:St,getElementRects:ie,getClientRects:Gt,getDimensions:ne,getScale:H,isElement:T,isRTL:re};function le(t,e){let n=null,o;const i=L(t);function s(){clearTimeout(o),n&&n.disconnect(),n=null}function r(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),s();const{left:c,top:u,width:d,height:g}=t.getBoundingClientRect();if(l||e(),!d||!g)return;const f=U(u),m=U(i.clientWidth-(c+d)),h=U(i.clientHeight-(u+g)),x=U(c),w={rootMargin:-f+"px "+-m+"px "+-h+"px "+-x+"px",threshold:F(0,K(1,a))||1};let v=!0;function R(b){const O=b[0].intersectionRatio;if(O!==a){if(!v)return r();O?r(!1,O):o=setTimeout(()=>{r(!1,1e-7)},100)}v=!1}try{n=new IntersectionObserver(R,{...w,root:i.ownerDocument})}catch{n=new IntersectionObserver(R,w)}n.observe(t)}return r(!0),s}function me(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,c=at(t),u=i||s?[...c?Z(c):[],...Z(e)]:[];u.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),s&&p.addEventListener("resize",n)});const d=c&&l?le(c,n):null;let g=-1,f=null;r&&(f=new ResizeObserver(p=>{let[w]=p;w&&w.target===c&&f&&(f.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{f&&f.observe(e)})),n()}),c&&!a&&f.observe(c),f.observe(e));let m,h=a?V(t):null;a&&x();function x(){const p=V(t);h&&(p.x!==h.x||p.y!==h.y||p.width!==h.width||p.height!==h.height)&&n(),h=p,m=requestAnimationFrame(x)}return n(),()=>{u.forEach(p=>{i&&p.removeEventListener("scroll",n),s&&p.removeEventListener("resize",n)}),d&&d(),f&&f.disconnect(),f=null,a&&cancelAnimationFrame(m)}}const ce=(t,e,n)=>{const o=new Map,i={platform:se,...n},s={...i.platform,_c:o};return $t(t,e,{...i,platform:s})};function wt(t){var e;return(e=t==null?void 0:t.$el)!=null?e:t}function Dt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function xt(t,e){const n=Dt(t);return Math.round(e*n)/n}function pe(t,e,n){n===void 0&&(n={});const o=n.whileElementsMounted,i=S(()=>{var y;return(y=Y(n.open))!=null?y:!0}),s=S(()=>Y(n.middleware)),r=S(()=>{var y;return(y=Y(n.placement))!=null?y:"bottom"}),l=S(()=>{var y;return(y=Y(n.strategy))!=null?y:"absolute"}),a=S(()=>{var y;return(y=Y(n.transform))!=null?y:!0}),c=S(()=>wt(t.value)),u=S(()=>wt(e.value)),d=j(0),g=j(0),f=j(l.value),m=j(r.value),h=kt({}),x=j(!1),p=S(()=>{const y={position:f.value,left:"0",top:"0"};if(!u.value)return y;const _=xt(u.value,d.value),z=xt(u.value,g.value);return a.value?{...y,transform:"translate("+_+"px, "+z+"px)",...Dt(u.value)>=1.5&&{willChange:"transform"}}:{position:f.value,left:_+"px",top:z+"px"}});let w;function v(){c.value==null||u.value==null||ce(c.value,u.value,{middleware:s.value,placement:r.value,strategy:l.value}).then(y=>{d.value=y.x,g.value=y.y,f.value=y.strategy,m.value=y.placement,h.value=y.middlewareData,x.value=!0})}function R(){typeof w=="function"&&(w(),w=void 0)}function b(){if(R(),o===void 0){v();return}if(c.value!=null&&u.value!=null){w=o(c.value,u.value,v);return}}function O(){i.value||(x.value=!1)}return rt([s,r,l],v,{flush:"sync"}),rt([c,u],b,{flush:"sync"}),rt(i,O,{flush:"sync"}),Ft()&&Mt(R),{x:W(d),y:W(g),strategy:W(f),placement:W(m),middlewareData:W(h),isPositioned:W(x),floatingStyles:p,update:v}}export{me as a,fe as f,ue as o,de as s,pe as u};
