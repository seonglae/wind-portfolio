import{a2 as C,j as v,a3 as b,a4 as O,r as y,a5 as B,a6 as H,a7 as M,a as N,Z as R,a8 as _,a9 as E,N as S,aa as j,ab as z}from"./Aiz3QLd2.js";const x=s=>s==="defer"||s===!1;function I(...s){var m;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[e,u,a={}]=s;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof u!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=v(),p=u,g=()=>null,P=()=>t.isHydrating?t.payload.data[e]:t.static.data[e];a.server=a.server??!0,a.default=a.default??g,a.getCachedData=a.getCachedData??P,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??O.deep,a.dedupe=a.dedupe??"cancel";const d=()=>a.getCachedData(e,t)!=null;if(!t._asyncData[e]||!a.immediate){(m=t.payload._errors)[e]??(m[e]=null);const i=a.deep?y:B;t._asyncData[e]={data:i(a.getCachedData(e,t)??a.default()),pending:y(!d()),error:H(t.payload._errors,e),status:y("idle")}}const r={...t._asyncData[e]};r.refresh=r.execute=(i={})=>{if(t._asyncDataPromises[e]){if(x(i.dedupe??a.dedupe))return t._asyncDataPromises[e];t._asyncDataPromises[e].cancelled=!0}if((i._initial||t.isHydrating&&i._initial!==!1)&&d())return Promise.resolve(a.getCachedData(e,t));r.pending.value=!0,r.status.value="pending";const l=new Promise((c,o)=>{try{c(p(t))}catch(f){o(f)}}).then(async c=>{if(l.cancelled)return t._asyncDataPromises[e];let o=c;a.transform&&(o=await a.transform(c)),a.pick&&(o=T(o,a.pick)),t.payload.data[e]=o,r.data.value=o,r.error.value=null,r.status.value="success"}).catch(c=>{if(l.cancelled)return t._asyncDataPromises[e];r.error.value=E(c),r.data.value=S(a.default()),r.status.value="error"}).finally(()=>{l.cancelled||(r.pending.value=!1,delete t._asyncDataPromises[e])});return t._asyncDataPromises[e]=l,t._asyncDataPromises[e]},r.clear=()=>K(t,e);const D=()=>r.refresh({_initial:!0}),w=a.server!==!1&&t.payload.serverRendered;{const i=j();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const o=i._nuxtOnBeforeMountCbs;M(()=>{o.forEach(f=>{f()}),o.splice(0,o.length)}),N(()=>o.splice(0,o.length))}w&&t.isHydrating&&(r.error.value||d())?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):i&&(t.payload.serverRendered&&t.isHydrating||a.lazy)&&a.immediate?i._nuxtOnBeforeMountCbs.push(D):a.immediate&&D();const l=z();if(a.watch){const o=R(a.watch,()=>r.refresh());l&&_(o)}const c=t.hook("app:data:refresh",async o=>{(!o||o.includes(e))&&await r.refresh()});l&&_(c)}const h=Promise.resolve(t._asyncDataPromises[e]).then(()=>r);return Object.assign(h,r),h}async function U(s){await new Promise(e=>C(e));const n=s?b(s):void 0;await v().hooks.callHookParallel("app:data:refresh",n)}function K(s,n){n in s.payload.data&&(s.payload.data[n]=void 0),n in s.payload._errors&&(s.payload._errors[n]=null),s._asyncData[n]&&(s._asyncData[n].data.value=void 0,s._asyncData[n].error.value=null,s._asyncData[n].pending.value=!1,s._asyncData[n].status.value="idle"),n in s._asyncDataPromises&&(s._asyncDataPromises[n].cancelled=!0,s._asyncDataPromises[n]=void 0)}function T(s,n){const e={};for(const u of n)e[u]=s[u];return e}export{U as r,I as u};