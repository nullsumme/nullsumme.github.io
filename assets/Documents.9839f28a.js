import{g}from"./assets.699bda38.js";import{d as n,_ as i,h as a,i as e,k as d,l as h,q as s,F as x,G as v,v as c}from"./index.34b8515d.js";const y=n({name:"files-component",props:{folderName:String,files:String},components:{},setup(){return{getAssetPath:g}}}),b={class:"col-12 col-sm-12 col-xl"},$={class:"card h-100"},w={class:"card-body d-flex justify-content-center text-center flex-column p-8"},k={href:"#",class:"text-gray-800 text-hover-primary d-flex flex-column"},T={class:"symbol symbol-75px mb-6"},F=["src"],A=e("div",{class:"fs-5 fw-bold mb-2"},"Finance",-1),C=e("div",{class:"fs-7 fw-semobold text-gray-400 mt-auto"},"7 files",-1);function S(t,r,_,f,m,p){return d(),a("div",b,[e("div",$,[e("div",w,[e("a",k,[e("div",T,[e("img",{src:t.getAssetPath("/media/svg/files/folder-document.svg"),alt:""},null,8,F)]),A]),C])])])}const K=i(y,[["render",S]]),M=n({name:"file-component",props:{fileTitle:String,createdAt:String,fileType:String},components:{}}),P={class:"col-12 col-sm-12 col-xl"},R={class:"card h-100"},D={class:"card-body d-flex justify-content-center text-center flex-column p-8"},j={href:"#",class:"text-gray-800 text-hover-primary d-flex flex-column"},N={class:"symbol symbol-60px mb-6"},q=["src"],B={class:"fs-5 fw-bold mb-2"},U={class:"fs-7 fw-semobold text-gray-400 mt-auto"};function V(t,r,_,f,m,p){return d(),a("div",P,[e("div",R,[e("div",D,[e("a",j,[e("div",N,[e("img",{src:`media/svg/files/${t.fileType}.svg`,alt:""},null,8,q)]),e("div",B,h(t.fileTitle),1)]),e("div",U,h(t.createdAt),1)])])])}const I=i(M,[["render",V]]),E=n({name:"profile-documents",components:{KTFolder:K,KTFile:I},setup(){return{getAssetPath:g}}}),G={class:"d-flex flex-wrap flex-stack mb-6"},H=e("h3",{class:"fw-bold my-2"},[v(" My Documents "),e("span",{class:"fs-6 text-gray-400 fw-semobold ms-1"},"100+ resources")],-1),L={class:"d-flex my-2"},O={class:"d-flex align-items-center position-relative me-4"},z={class:"svg-icon svg-icon-3 position-absolute ms-3"},J=e("input",{type:"text",id:"kt_filter_search",class:"form-control form-control-white form-control-sm w-150px ps-9",placeholder:"Search"},null,-1),Q=e("a",{href:"#",class:"btn btn-primary btn-sm","data-bs-toggle":"tooltip",title:"Coming soon"}," File Manager ",-1),W={class:"row g-6 g-xl-9 mb-6 mb-xl-9"},X=e("div",{class:"col d-none d-xl-block"},null,-1),Y=e("div",{class:"col d-none d-xl-block"},null,-1),Z={class:"row g-6 g-xl-9 mb-6 mb-xl-9"},ee={class:"row g-6 g-xl-9 mb-6 mb-xl-9"},se=e("div",{class:"col d-none d-xl-block"},null,-1),te=e("div",{class:"col d-none d-xl-block"},null,-1),oe=e("div",{class:"col d-none d-xl-block"},null,-1);function le(t,r,_,f,m,p){const u=c("inline-svg"),l=c("KTFolder"),o=c("KTFile");return d(),a(x,null,[e("div",G,[H,e("div",L,[e("div",O,[e("span",z,[s(u,{src:t.getAssetPath("/media/icons/duotune/general/gen021.svg")},null,8,["src"])]),J]),Q])]),e("div",W,[s(l,{"folder-name":"Finance",files:"7"}),s(l,{"folder-name":"Customers",files:"3"}),s(l,{"folder-name":"CRM Project",files:"25"}),X,Y]),e("div",Z,[s(o,{"file-title":"Project Reqs..","file-type":"pdf","created-at":"3 days ago"}),s(o,{"file-title":"CRM App Docs..","file-type":"doc","created-at":"3 days ago"}),s(o,{"file-title":"User CRUD Styles","file-type":"css","created-at":"4 days ago"}),s(o,{"file-title":"Metronic Logo","file-type":"ai","created-at":"5 days ago"}),s(o,{"file-title":"Orders backup","file-type":"sql","created-at":"1 week ago"})]),e("div",ee,[s(o,{"file-title":"UTAIR CRM API Co..","file-type":"xml","created-at":"2 weeks ago"}),s(o,{"file-title":"Tower Hill App..","file-type":"tif","created-at":"3 weeks ago"}),se,te,oe])],64)}const ie=i(E,[["render",le]]);export{ie as default};
