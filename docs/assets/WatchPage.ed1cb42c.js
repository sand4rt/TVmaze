import{u as k,Q as x,t as W,_ as h,d as i,o as n,c as o,a as t,b as $,e as d,f as m,p as b,g as I,F as y,r as L,h as u,i as c,S as B,j as H,m as v,k as p,w as V,H as N,L as R}from"./index.24d49e1d.js";function T(a){function e(s){var g,l,S;const r=(g=s._embedded)==null?void 0:g.images.find(f=>f.type==="background");return{id:s.id.toString(),name:s.name,headerImage:(r==null?void 0:r.resolutions.original.url)||((l=s.image)==null?void 0:l.medium),rating:(S=s.rating)==null?void 0:S.average,summary:s.summary,genres:s.genres}}async function _(){const r=await(await W.getShowById(a,["images"])).json();return e(r)}return k([x.SHOW,a],_)}var C="/assets/Star.c9ea94a1.svg";const w=a=>(b("data-v-021ffb78"),a=a(),I(),a),F={key:0,class:"rating","aria-label":"Show rating"},G=w(()=>t("img",{class:"rating__image",src:C,alt:"Rating"},null,-1)),M={class:"rating__text"},Q=w(()=>t("span",null,"rating",-1)),j=i({__name:"WatchShowRating",props:{rating:null},setup(a){const e=a;return(_,s)=>e.rating?(n(),o("div",F,[G,t("span",M,[$(d(e.rating)+" ",1),Q])])):m("",!0)}});var z=h(j,[["__scopeId","data-v-021ffb78"]]);const P={key:0,"aria-label":"Show genres",class:"show-details__genres"},q=i({__name:"WatchShowGenres",props:{genres:null},setup(a){const e=a;return(_,s)=>e.genres.length?(n(),o("ul",P,[(n(!0),o(y,null,L(e.genres,r=>(n(),o("li",{class:"show__genre",key:r},d(r),1))),128))])):m("",!0)}});var D=h(q,[["__scopeId","data-v-85d8db06"]]);const E=["innerHTML"],K=i({__name:"WatchShowSummary",props:{summary:null},setup(a){const e=a;return(_,s)=>(n(),o("p",{class:"show-details__summary",innerHTML:e.summary},null,8,E))}});const O={class:"show-details"},A={class:"show-details__name"},J={class:"show-details__container"},U=i({__name:"WatchShow",props:{id:null,name:null,headerImage:null,rating:null,summary:null,genres:null},setup(a){const e=a;return(_,s)=>(n(),o(y,null,[t("figure",v(_.$attrs,{class:"show__heading"}),[u(H,{class:"heading__image",src:e.headerImage,fallback:c(B),alt:`Show ${e.name}`},null,8,["src","fallback","alt"])],16),t("section",O,[t("h1",A,d(e.name),1),t("div",null,[e.rating?(n(),p(z,{key:0,rating:e.rating},null,8,["rating"])):m("",!0),t("div",J,[u(K,{summary:e.summary},null,8,["summary"]),u(D,{genres:e.genres},null,8,["genres"])])])])],64))}});var X=h(U,[["__scopeId","data-v-12630022"]]);const Y={class:"watch-page"},ee=i({__name:"WatchPage",props:{id:null},setup(a){const e=a,{isLoading:_,data:s}=T(e.id);return(r,g)=>(n(),o(y,null,[u(c(N),null,{default:V(()=>{var l;return[t("title",null,d((l=c(s))==null?void 0:l.name)+" - TVmaze",1)]}),_:1}),t("main",Y,[c(_)?(n(),p(R,{key:0})):c(s)?(n(),p(X,v({key:1,class:"show-detail"},c(s)),null,16)):m("",!0)])],64))}});export{ee as default};