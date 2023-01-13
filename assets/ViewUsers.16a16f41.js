import{K as x}from"./Card.1471039e.js";import{g as a,a as y}from"./assets.699bda38.js";import{d,_ as p,h as t,i as e,q as c,F as _,j as w,G as r,M as k,v as m,k as o,p as M,l as n}from"./index.34b8515d.js";const $=d({name:"view-users-modal",components:{},setup(){return{users:[{avatar:a("/media/avatars/300-6.jpg"),name:"Emma Smith",email:"e.smith@kpmg.com.au",position:"Art Director",sales:"23,000"},{state:"danger",name:"Melody Macy",email:"melody@altbox.com",position:"Marketing Analytic",sales:"50,500"},{avatar:a("/media/avatars/300-1.jpg"),name:"Max Smith",email:"max@kt.com",position:"Software Enginer",sales:"75,900"},{avatar:a("/media/avatars/300-1.jpg"),name:"Sean Bean",email:"sean@dellito.com",position:"Web Developer",sales:"10,500"},{avatar:a("/media/avatars/300-25.jpg"),name:"Brian Cox",email:"brian@exchange.com",position:"UI/UX Designer",sales:"20,000"},{state:"warning",name:"Mikaela Collins",email:"mikaela@pexcom.com",position:"Head Of Marketing",sales:"9,300"},{avatar:a("/media/avatars/300-9.jpg"),name:"Francis Mitcham",email:"f.mitcham@kpmg.com.au",position:"Software Arcitect",sales:"15,000"},{state:"danger",name:"Olivia Wild",email:"olivia@corpmail.com",position:"System Admin",sales:"23,000"},{state:"info",name:"Neil Owen",email:"owen.neil@gmail.com",position:"Account Manager",sales:"45,000"},{avatar:a("/media/avatars/300-23.jpg"),name:"Dan Wilson",email:"dam@consilting.com",position:"Web Desinger",sales:"90,500"},{state:"danger",name:"Emma Bold",email:"emma@intenso.com",position:"Corporate Finance",sales:"5,000"},{avatar:a("/media/avatars/300-12.jpg"),name:"Ana Crown",email:"ana.cf@limtel.com",position:"Customer Relationship",sales:"70,000"},{state:"primary",name:"Robert Doe",email:"robert@benko.com",position:"Marketing Executive",sales:"45,500"}],getAssetPath:a}}}),C={class:"modal fade",id:"kt_modal_view_users",tabindex:"-1","aria-hidden":"true"},A={class:"modal-dialog mw-650px"},U={class:"modal-content"},j={class:"modal-header pb-0 border-0 justify-content-end"},V={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},S={class:"svg-icon svg-icon-1"},D={class:"modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15"},T=e("div",{class:"text-center mb-13"},[e("h1",{class:"mb-3"},"Browse Users"),e("div",{class:"text-gray-400 fw-semobold fs-5"},[r(" If you need more info, please check out our "),e("a",{href:"#",class:"link-primary fw-bold"},"Users Directory"),r(". ")])],-1),B={class:"mb-15"},K={class:"mh-375px scroll-y me-n7 pe-7"},E={class:"d-flex align-items-center"},I={class:"symbol symbol-35px symbol-circle"},N=["src"],P={class:"ms-6"},F={href:"#",class:"d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary"},W={class:"badge badge-light fs-8 fw-semobold ms-2"},O={class:"fw-semobold text-gray-400"},R={class:"d-flex"},q={class:"text-end"},z={class:"fs-5 fw-bold text-dark"},G=e("div",{class:"fs-7 text-muted"},"Sales",-1),H=k('<div class="d-flex justify-content-between"><div class="fw-semobold"><label class="fs-6">Adding Users by Team Members</label><div class="fs-7 text-gray-400"> If you need more info, please check budget planning </div></div><label class="form-check form-switch form-check-custom form-check-solid"><input class="form-check-input" type="checkbox" value="" checked><span class="form-check-label fw-semobold text-gray-400"> Allowed </span></label></div>',1);function L(i,h,v,b,f,g){const l=m("inline-svg");return o(),t("div",C,[e("div",A,[e("div",U,[e("div",j,[e("div",V,[e("span",S,[c(l,{src:i.getAssetPath("/media/icons/duotune/arrows/arr061.svg")},null,8,["src"])])])]),e("div",D,[T,e("div",B,[e("div",K,[(o(!0),t(_,null,w(i.users,(s,u)=>(o(),t("div",{key:u,class:"d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed"},[e("div",E,[e("div",I,[s.avatar?(o(),t("img",{key:0,alt:"Pic",src:s.avatar},null,8,N)):(o(),t("span",{key:1,class:M([`bg-light-${s.state} text-${s.state}`,"symbol-label fw-semobold"])},n(s.name.charAt(0)),3))]),e("div",P,[e("a",F,[r(n(s.name)+" ",1),e("span",W,n(s.position),1)]),e("div",O,n(s.email),1)])]),e("div",R,[e("div",q,[e("div",z," $"+n(s.sales),1),G])])]))),128))])]),H])])])])}const X=p($,[["render",L]]),J=d({name:"view-users",components:{KTModalCard:x,KTViewUsersModal:X},setup(){return{getIllustrationsPath:y}}});function Q(i,h,v,b,f,g){const l=m("KTModalCard"),s=m("KTViewUsersModal");return o(),t(_,null,[c(l,{title:"View Users Modal Example",description:"Click on the below buttons to launch <br/>user lists example.",image:i.getIllustrationsPath("10.png"),"button-text":"View Users","modal-id":"kt_modal_view_users"},null,8,["image"]),c(s)],64)}const se=p(J,[["render",Q]]);export{se as default};
