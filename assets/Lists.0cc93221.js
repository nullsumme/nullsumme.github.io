import{L as C}from"./Widget1.4d0833d4.js";import{g as e}from"./assets.699bda38.js";import{D as A}from"./Dropdown2.58dcc04a.js";import{d as _,r as x,_ as p,h as c,i as s,q as a,F as h,j as w,p as g,v as i,k as l,l as r,ai as D}from"./index.34b8515d.js";import{L as S,b as j,a as B}from"./Widget6.8a0b127c.js";import{D as y}from"./Dropdown3.7679d17c.js";import{L as F}from"./Widget5.2aeccd3c.js";import"./Dropdown1.53fceb7d.js";const I=_({name:"kt-widget-2",components:{Dropdown2:A},props:{widgetClasses:String},setup(){return{list:x([{avatar:e("/media/avatars/300-6.jpg"),name:"Emma Smith",description:"Project Manager"},{avatar:e("/media/avatars/300-5.jpg"),name:"Sean Bean",description:"PHP, SQLite, Artisan CLI"},{avatar:e("/media/avatars/300-11.jpg"),name:"Brian Cox",description:"PHP, SQLite, Artisan CLI"},{avatar:e("/media/avatars/300-9.jpg"),name:"Francis Mitcham",description:"PHP, SQLite, Artisan CLI"},{avatar:e("/media/avatars/300-23.jpg"),name:"Dan Wilson",description:"PHP, SQLite, Artisan CLI"}]),getAssetPath:e}}}),M={class:"card-header border-0"},E=s("h3",{class:"card-title fw-bold text-dark"},"Authors",-1),H={class:"card-toolbar"},Q={type:"button",class:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},R={class:"svg-icon svg-icon-2"},T={class:"card-body pt-2"},N={class:"symbol symbol-50px me-5"},V=["src"],z={class:"flex-grow-1"},G={href:"#",class:"text-dark fw-bold text-hover-primary fs-6"},J={class:"text-muted d-block fw-semobold"};function q(t,b,v,u,f,$){const d=i("inline-svg"),m=i("Dropdown2");return l(),c("div",{class:g(["card",t.widgetClasses])},[s("div",M,[E,s("div",H,[s("button",Q,[s("span",R,[a(d,{src:t.getAssetPath("/media/icons/duotune/general/gen024.svg")},null,8,["src"])])]),a(m)])]),s("div",T,[(l(!0),c(h,null,w(t.list,(o,n)=>(l(),c("div",{key:n,class:g([{"mb-7":t.list.length-1!==n},"d-flex align-items-center"])},[s("div",N,[s("img",{src:o.avatar,class:"",alt:""},null,8,V)]),s("div",z,[s("a",G,r(o.name),1),s("span",J,r(o.description),1)])],2))),128))])],2)}const U=p(I,[["render",q]]),K=_({name:"kt-widget-4",components:{Dropdown3:y},props:{widgetClasses:String},setup(){return{list:x([{image:e("/media/svg/brand-logos/plurk.svg"),title:"Top Authors",text:"Mark, Rowling, Esther",badge:"+82$"},{image:e("/media/svg/brand-logos/telegram.svg"),title:"Popular Authors",text:"Randy, Steve, Mike",badge:"+280$"},{image:e("/media/svg/brand-logos/vimeo.svg"),title:"New Users",text:"John, Pat, Jimmy",badge:"+4500$"},{image:e("/media/svg/brand-logos/bebo.svg"),title:"Active Customers",text:"Mark, Rowling, Esther",badge:"+4500$"},{image:e("/media/svg/brand-logos/kickstarter.svg"),title:"Bestseller Theme",text:"Disco, Retro, Sports",badge:"+4500$",space:""}]),getAssetPath:e}}}),O={class:"card-header border-0 pt-5"},X=s("h3",{class:"card-title align-items-start flex-column"},[s("span",{class:"card-label fw-bold text-dark"},"Trends"),s("span",{class:"text-muted mt-1 fw-semobold fs-7"},"Latest tech trends")],-1),Y={class:"card-toolbar"},Z={type:"button",class:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},ss={class:"svg-icon svg-icon-2"},ts={class:"card-body pt-5"},es={class:"symbol symbol-50px me-5"},os={class:"symbol-label"},as=["src"],is={class:"d-flex align-items-center flex-row-fluid flex-wrap"},ns={class:"flex-grow-1 me-2"},cs={href:"#",class:"text-gray-800 text-hover-primary fs-6 fw-bold"},ls={class:"text-muted fw-semobold d-block fs-7"},ds={class:"badge badge-light fw-bold my-2"};function rs(t,b,v,u,f,$){const d=i("inline-svg"),m=i("Dropdown3");return l(),c("div",{class:g(["card",t.widgetClasses])},[s("div",O,[X,s("div",Y,[s("button",Z,[s("span",ss,[a(d,{src:t.getAssetPath("/media/icons/duotune/general/gen024.svg")},null,8,["src"])])]),a(m)])]),s("div",ts,[(l(!0),c(h,null,w(t.list,(o,n)=>(l(),c("div",{key:n,class:g([{"mb-7":t.list.length-1!==n},"d-flex align-items-sm-center"])},[s("div",es,[s("span",os,[s("img",{src:o.image,class:"h-50 align-self-center",alt:""},null,8,as)])]),s("div",is,[s("div",ns,[s("a",cs,r(o.title),1),s("span",ls,r(o.text),1)]),s("span",ds,r(o.badge),1)])],2))),128))])],2)}const ms=p(K,[["render",rs]]),gs=_({name:"kt-widget-6",components:{Dropdown3:y},props:{widgetClasses:String},setup(){return{list:x([{image:e("/media/stock/600x400/img-17.jpg"),title:"Cup & Green",desc:"Visually stunning",rate:"4.2"},{image:e("/media/stock/600x400/img-17.jpg"),title:"Pink Patterns",desc:"Feminine all around",rate:"5.0"},{image:e("/media/stock/600x400/img-1.jpg"),title:"Abstract Art",desc:"The will to capture readers",rate:" 5.7"},{image:e("/media/stock/600x400/img-9.jpg"),title:"Desserts platter",desc:"Food trends & inspirations",rate:"3.7"}]),getAssetPath:e}}}),_s={class:"card-header align-items-center border-0 mt-4"},ps=s("h3",{class:"card-title align-items-start flex-column"},[s("span",{class:"fw-bold text-dark"},"Latest Products"),s("span",{class:"text-muted mt-1 fw-semobold fs-7"},"Gifts and more")],-1),hs={class:"card-toolbar"},bs={type:"button",class:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},vs={class:"svg-icon svg-icon-2"},us={class:"card-body pt-3"},fs={class:"symbol symbol-60px symbol-2by3 me-4"},$s={class:"d-flex flex-row-fluid align-items-center flex-wrap my-lg-0 me-2"},xs={class:"flex-grow-1 my-lg-0 my-2 me-2"},ws={href:"#",class:"text-gray-800 fw-bold text-hover-primary fs-6"},ys={class:"text-muted fw-semobold d-block pt-1"},ks={class:"d-flex align-items-center"},Ls={class:"me-6"},Ws=s("i",{class:"fa fa-star-half-alt me-1 text-warning fs-5"},null,-1),Ps={class:"text-gray-800 fw-bold"},Cs={href:"#",class:"btn btn-icon btn-light btn-sm border-0"},As={class:"svg-icon-2 svg-icon-primary"};function Ds(t,b,v,u,f,$){const d=i("inline-svg"),m=i("Dropdown3");return l(),c("div",{class:g([t.widgetClasses,"card"])},[s("div",_s,[ps,s("div",hs,[s("button",bs,[s("span",vs,[a(d,{src:t.getAssetPath("/media/icons/duotune/general/gen024.svg")},null,8,["src"])])]),a(m)])]),s("div",us,[(l(!0),c(h,null,w(t.list,(o,n)=>(l(),c("div",{key:n,class:g([{"mb-7":t.list.length-1!==n},"d-flex align-items-sm-center"])},[s("div",fs,[s("div",{class:"symbol-label",style:D({backgroundImage:`url(${o.image})`})},null,4)]),s("div",$s,[s("div",xs,[s("a",ws,r(o.title),1),s("span",ys,r(o.desc),1)]),s("div",ks,[s("div",Ls,[Ws,s("span",Ps,r(o.rate),1)]),s("a",Cs,[s("span",As,[a(d,{src:t.getAssetPath("/media/icons/duotune/arrows/arr064.svg")},null,8,["src"])])])])])],2))),128))])],2)}const Ss=p(gs,[["render",Ds]]),js=_({name:"widgets-lists",components:{ListsWidget1:C,ListsWidget2:U,ListsWidget3:S,ListsWidget4:ms,ListsWidget5:F,ListsWidget6:j,ListsWidget7:B,ListsWidget8:Ss}}),Bs={class:"row g-5 g-xl-8"},Fs={class:"col-xl-4"},Is={class:"col-xl-4"},Ms={class:"col-xl-4"},Es={class:"row g-5 g-xl-8"},Hs={class:"col-xl-4"},Qs={class:"col-xl-4"},Rs={class:"col-xl-4"},Ts={class:"row g-5 g-xl-8"},Ns={class:"col-xl-6"},Vs={class:"col-xl-6"};function zs(t,b,v,u,f,$){const d=i("ListsWidget1"),m=i("ListsWidget2"),o=i("ListsWidget3"),n=i("ListsWidget4"),k=i("ListsWidget5"),L=i("ListsWidget6"),W=i("ListsWidget7"),P=i("ListsWidget8");return l(),c(h,null,[s("div",Bs,[s("div",Fs,[a(d,{"widget-classes":"card-xl-stretch mb-xl-8"})]),s("div",Is,[a(m,{"widget-classes":"card-xl-stretch mb-xl-8"})]),s("div",Ms,[a(o,{"widget-classes":"card-xl-stretch mb-5 mb-xl-8"})])]),s("div",Es,[s("div",Hs,[a(n,{"widget-classes":"card-xl-stretch mb-xl-8"})]),s("div",Qs,[a(k,{"widget-classes":"card-xl-stretch mb-xl-8"})]),s("div",Rs,[a(L,{"widget-classes":"card-xl-stretch mb-5 mb-xl-8"})])]),s("div",Ts,[s("div",Ns,[a(W,{"widget-classes":"card-xl-stretch mb-xl-8"})]),s("div",Vs,[a(P,{"widget-classes":"card-xl-stretch mb-5 mb-xl-8"})])])],64)}const Zs=p(js,[["render",zs]]);export{Zs as default};
