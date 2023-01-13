import{g as m}from"./assets.699bda38.js";import{d as _,N as $,O as y,_ as f,h as r,i as s,q as e,M as k,v as c,k as d,G as n,w as v,F as x,j as w}from"./index.34b8515d.js";const S=_({name:"step-1",components:{Field:$,ErrorMessage:y},setup(){return{getAssetPath:m}}}),C={class:"w-100"},T=k('<div class="pb-10 pb-lg-15"><h2 class="fw-bold d-flex align-items-center text-dark"> Choose Account Type <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Billing is issued based on your selected account type"></i></h2><div class="text-gray-400 fw-semobold fs-6"> If you need more info, please check out <a href="#" class="link-primary fw-bold">Help Page</a>. </div></div>',1),E={class:"fv-row"},P={class:"row"},A={class:"col-lg-6"},N={class:"btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10",for:"kt_create_account_form_account_type_personal"},z={class:"svg-icon svg-icon-3x me-5"},M=s("span",{class:"d-block fw-semobold text-start"},[s("span",{class:"text-dark fw-bold d-block fs-4 mb-2"}," Personal Account "),s("span",{class:"text-gray-400 fw-semobold fs-6"},"If you need more info, please check it out")],-1),F={class:"col-lg-6"},D={class:"btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center",for:"kt_create_account_form_account_type_corporate"},I={class:"svg-icon svg-icon-3x me-5"},V=s("span",{class:"d-block fw-semobold text-start"},[s("span",{class:"text-dark fw-bold d-block fs-4 mb-2"},"Corporate Account"),s("span",{class:"text-gray-400 fw-semobold fs-6"},"Create corporate account to mane users")],-1);function q(a,p,u,h,b,g){const o=c("Field"),t=c("inline-svg"),l=c("ErrorMessage");return d(),r("div",C,[T,s("div",E,[s("div",P,[s("div",A,[e(o,{type:"radio",class:"btn-check",name:"accountType",value:"personal",id:"kt_create_account_form_account_type_personal"}),s("label",N,[s("span",z,[e(t,{src:a.getAssetPath("/media/icons/duotune/communication/com005.svg")},null,8,["src"])]),M])]),s("div",F,[e(o,{type:"radio",class:"btn-check",name:"accountType",value:"corporate",id:"kt_create_account_form_account_type_corporate"}),s("label",D,[s("span",I,[e(t,{src:a.getAssetPath("/media/icons/duotune/finance/fin006.svg")},null,8,["src"])]),V])]),e(l,{name:"accountType",class:"fv-plugins-message-container invalid-feedback"})])])])}const Be=f(S,[["render",q]]),B=_({name:"step-2",components:{Field:$,ErrorMessage:y},setup(){return{getAssetPath:m}}}),H={class:"w-100"},Y=s("div",{class:"pb-10 pb-lg-15"},[s("h2",{class:"fw-bold text-dark"},"Account Info"),s("div",{class:"text-gray-400 fw-semobold fs-6"},[n(" If you need more info, please check out "),s("a",{href:"#",class:"link-primary fw-bold"},"Help Page"),n(". ")])],-1),O={class:"mb-10 fv-row"},L=s("label",{class:"d-flex align-items-center form-label mb-3"},[n(" Specify Team Size "),s("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Provide your team size to help us setup your billing"})],-1),U={class:"row mb-2","data-kt-buttons":"true"},G={class:"col"},K=s("label",{class:"btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4",for:"accountTeamSize1"},[s("span",{class:"fw-bold fs-3"},"1-1")],-1),W={class:"col"},j=s("label",{class:"btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4",for:"accountTeamSize2"},[s("span",{class:"fw-bold fs-3"},"2-10")],-1),J={class:"col"},Q=s("label",{class:"btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4",for:"accountTeamSize3"},[s("span",{class:"fw-bold fs-3"},"10-50")],-1),R={class:"col"},X=s("label",{class:"btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4",for:"accountTeamSize4"},[s("span",{class:"fw-bold fs-3"},"50+")],-1),Z=s("div",{class:"form-text"}," Customers will see this shortened version of your statement descriptor ",-1),ss={class:"mb-10 fv-row"},es=s("label",{class:"form-label mb-3"},"Team Account Name",-1),os={class:"mb-0 fv-row"},ts=s("label",{class:"d-flex align-items-center form-label mb-5"},[n(" Select Account Plan "),s("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Monthly billing will be based on your account plan"})],-1),as={class:"mb-0"},cs={class:"d-flex flex-stack mb-5 cursor-pointer"},ns={class:"d-flex align-items-center me-2"},ls={class:"symbol symbol-50px me-6"},is={class:"symbol-label"},rs={class:"svg-icon svg-icon-1 svg-icon-gray-600"},ds=s("span",{class:"d-flex flex-column"},[s("span",{class:"fw-bold text-gray-800 text-hover-primary fs-5"},"Company Account"),s("span",{class:"fs-6 fw-semobold text-gray-400"},"Use images to enhance your post flow")],-1),ms={class:"form-check form-check-custom form-check-solid"},_s={class:"d-flex flex-stack mb-5 cursor-pointer"},fs={class:"d-flex align-items-center me-2"},ps={class:"symbol symbol-50px me-6"},us={class:"symbol-label"},hs={class:"svg-icon svg-icon-1 svg-icon-gray-600"},bs=s("span",{class:"d-flex flex-column"},[s("span",{class:"fw-bold text-gray-800 text-hover-primary fs-5"},"Developer Account"),s("span",{class:"fs-6 fw-semobold text-gray-400"},"Use images to your post time")],-1),gs={class:"form-check form-check-custom form-check-solid"},vs={class:"d-flex flex-stack mb-0 cursor-pointer"},$s={class:"d-flex align-items-center me-2"},ys={class:"symbol symbol-50px me-6"},xs={class:"symbol-label"},ws={class:"svg-icon svg-icon-1 svg-icon-gray-600"},ks=s("span",{class:"d-flex flex-column"},[s("span",{class:"fw-bold text-gray-800 text-hover-primary fs-5"},"Testing Account"),s("span",{class:"fs-6 fw-semobold text-gray-400"},"Use images to enhance time travel rivers")],-1),Ss={class:"form-check form-check-custom form-check-solid"};function Cs(a,p,u,h,b,g){const o=c("Field"),t=c("ErrorMessage"),l=c("inline-svg");return d(),r("div",H,[Y,s("div",O,[L,s("div",U,[s("div",G,[e(o,{type:"radio",class:"btn-check",id:"accountTeamSize1",name:"accountTeamSize",value:"1-1"}),K]),s("div",W,[e(o,{type:"radio",class:"btn-check",name:"accountTeamSize",id:"accountTeamSize2",value:"2-10"}),j]),s("div",J,[e(o,{type:"radio",class:"btn-check",name:"accountTeamSize",id:"accountTeamSize3",value:"10-50"}),Q]),s("div",R,[e(o,{type:"radio",class:"btn-check",name:"accountTeamSize",id:"accountTeamSize4",checked:"",value:"50+"}),X])]),Z]),s("div",ss,[es,e(o,{type:"text",class:"form-control form-control-lg form-control-solid",name:"accountName"}),e(t,{name:"accountName",class:"fv-plugins-message-container invalid-feedback"})]),s("div",os,[ts,s("div",as,[s("label",cs,[s("span",ns,[s("span",ls,[s("span",is,[s("span",rs,[e(l,{src:a.getAssetPath("/media/icons/duotune/finance/fin001.svg")},null,8,["src"])])])]),ds]),s("span",ms,[e(o,{class:"form-check-input",type:"radio",name:"accountPlan",value:"1"})])]),s("label",_s,[s("span",fs,[s("span",ps,[s("span",us,[s("span",hs,[e(l,{src:a.getAssetPath("/media/icons/duotune/graphs/gra006.svg")},null,8,["src"])])])]),bs]),s("span",gs,[e(o,{class:"form-check-input",type:"radio",checked:"",name:"accountPlan",value:"2"})])]),s("label",vs,[s("span",$s,[s("span",ys,[s("span",xs,[s("span",ws,[e(l,{src:a.getAssetPath("/media/icons/duotune/graphs/gra008.svg")},null,8,["src"])])])]),ks]),s("span",Ss,[e(o,{class:"form-check-input",type:"radio",name:"accountPlan",value:"3"})])])])])])}const He=f(B,[["render",Cs]]),Ts=_({name:"step-3",components:{Field:$,ErrorMessage:y},setup(){return{getAssetPath:m}}}),Es={class:"w-100"},Ps=s("div",{class:"pb-10 pb-lg-12"},[s("h2",{class:"fw-bold text-dark"},"Business Details"),s("div",{class:"text-gray-400 fw-semobold fs-6"},[n(" If you need more info, please check out "),s("a",{href:"#",class:"link-primary fw-bold"},"Help Page"),n(". ")])],-1),As={class:"fv-row mb-10"},Ns=s("label",{class:"form-label required"},"Business Name",-1),zs={class:"fv-row mb-10"},Ms=s("label",{class:"d-flex align-items-center form-label"},[s("span",{class:"required"},"Shortened Descriptor"),s("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"popover","data-bs-trigger":"hover","data-bs-html":"true"})],-1),Fs=s("div",{class:"form-text"}," Customers will see this shortened version of your statement descriptor ",-1),Ds={class:"fv-row mb-10"},Is=s("label",{class:"form-label required"},"Corporation Type",-1),Vs=s("option",null,null,-1),qs=s("option",{value:"1"},"S Corporation",-1),Bs=s("option",{value:"1"},"C Corporation",-1),Hs=s("option",{value:"2"},"Sole Proprietorship",-1),Ys=s("option",{value:"3"},"Non-profit",-1),Os=s("option",{value:"4"},"Limited Liability",-1),Ls=s("option",{value:"5"},"General Partnership",-1),Us={class:"fv-row mb-10"},Gs=s("label",{class:"form-label"},"Business Description",-1),Ks={class:"fv-row mb-0"},Ws=s("label",{class:"fs-6 fw-semobold form-label required"},"Contact Email",-1);function js(a,p,u,h,b,g){const o=c("Field"),t=c("ErrorMessage");return d(),r("div",Es,[Ps,s("div",As,[Ns,e(o,{name:"businessName",class:"form-control form-control-lg form-control-solid",value:"Keenthemes Inc."}),e(t,{name:"businessName",class:"fv-plugins-message-container invalid-feedback"})]),s("div",zs,[Ms,e(o,{name:"businessDescriptor",class:"form-control form-control-lg form-control-solid",value:"KEENTHEMES"}),e(t,{name:"businessDescriptor",class:"fv-plugins-message-container invalid-feedback"}),Fs]),s("div",Ds,[Is,e(o,{name:"businessType",class:"form-select form-select-lg form-select-solid","data-control":"select2","data-placeholder":"Select...","data-allow-clear":"true","data-hide-search":"true",as:"select"},{default:v(()=>[Vs,qs,Bs,Hs,Ys,Os,Ls]),_:1}),e(t,{name:"businessType",class:"fv-plugins-message-container invalid-feedback"})]),s("div",Us,[Gs,e(o,{type:"text",name:"businessDescription",class:"form-control form-control-lg form-control-solid",rows:"3"})]),s("div",Ks,[Ws,e(o,{name:"businessEmail",class:"form-control form-control-lg form-control-solid",value:"corp@support.com"}),e(t,{name:"businessEmail",class:"fv-plugins-message-container invalid-feedback"})])])}const Ye=f(Ts,[["render",js]]),Js=_({name:"step-4",components:{Field:$,ErrorMessage:y},setup(){return{getAssetPath:m}}}),Qs={class:"w-100"},Rs=s("div",{class:"pb-10 pb-lg-15"},[s("h2",{class:"fw-bold text-dark"},"Billing Details"),s("div",{class:"text-gray-400 fw-semobold fs-6"},[n(" If you need more info, please check out "),s("a",{href:"#",class:"text-primary fw-bold"},"Help Page"),n(". ")])],-1),Xs={class:"w-100"},Zs={class:"d-flex flex-column mb-7 fv-row"},se=s("label",{class:"d-flex align-items-center fs-6 fw-semobold form-label mb-2"},[s("span",{class:"required"},"Name On Card"),s("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Specify a card holder's name"})],-1),ee={class:"d-flex flex-column mb-7 fv-row"},oe=s("label",{class:"required fs-6 fw-semobold form-label mb-2"},"Card Number",-1),te={class:"position-relative"},ae={class:"position-absolute translate-middle-y top-50 end-0 me-5"},ce=["src"],ne=["src"],le=["src"],ie={class:"row mb-10"},re={class:"col-md-8 fv-row"},de=s("label",{class:"required fs-6 fw-semobold form-label mb-2"},"Expiration Date",-1),me={class:"row fv-row"},_e={class:"col-6"},fe=["label","value"],pe={class:"col-6"},ue=["label","value"],he={class:"col-md-4 fv-row"},be=s("label",{class:"d-flex align-items-center fs-6 fw-semobold form-label mb-2"},[s("span",{class:"required"},"CVV"),s("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Enter a card CVV code"})],-1),ge={class:"position-relative"},ve={class:"position-absolute translate-middle-y top-50 end-0 me-3"},$e={class:"svg-icon svg-icon-2hx"},ye={class:"d-flex flex-stack"},xe=s("div",{class:"me-5"},[s("label",{class:"fs-6 fw-semobold form-label"},"Save Card for further billing?"),s("div",{class:"fs-7 fw-semobold text-gray-400"}," If you need more info, please check budget planning ")],-1),we={class:"form-check form-switch form-check-custom form-check-solid"},ke=s("span",{class:"form-check-label fw-semobold text-gray-400"}," Save Card ",-1);function Se(a,p,u,h,b,g){const o=c("Field"),t=c("ErrorMessage"),l=c("inline-svg");return d(),r("div",Qs,[Rs,s("div",Xs,[s("div",Zs,[se,e(o,{type:"text",class:"form-control form-control-solid",placeholder:"",name:"nameOnCard"}),e(t,{class:"fv-plugins-message-container invalid-feedback",name:"nameOnCard"})]),s("div",ee,[oe,s("div",te,[e(o,{type:"text",class:"form-control form-control-solid",placeholder:"Enter card number",name:"cardNumber"}),e(t,{class:"fv-plugins-message-container invalid-feedback",name:"cardNumber"}),s("div",ae,[s("img",{src:a.getAssetPath("/media/svg/card-logos/visa.svg"),alt:"",class:"h-25px"},null,8,ce),s("img",{src:a.getAssetPath("/media/svg/card-logos/mastercard.svg"),alt:"",class:"h-25px"},null,8,ne),s("img",{src:a.getAssetPath("/media/svg/card-logos/american-express.svg"),alt:"",class:"h-25px"},null,8,le)])])]),s("div",ie,[s("div",re,[de,s("div",me,[s("div",_e,[e(o,{name:"cardExpiryMonth",class:"form-select form-select-solid select2-hidden-accessible",placeholder:"Month",as:"select"},{default:v(()=>[(d(),r(x,null,w(12,i=>s("option",{key:i,label:i.toString(),value:i},null,8,fe)),64))]),_:1}),e(t,{class:"fv-plugins-message-container invalid-feedback",name:"cardExpiryMonth"})]),s("div",pe,[e(o,{name:"cardExpiryYear",class:"form-select form-select-solid select2-hidden-accessible",placeholder:"Year",as:"select"},{default:v(()=>[(d(),r(x,null,w(10,i=>s("option",{key:i,label:(i+(new Date().getFullYear()-1)).toString(),value:i},null,8,ue)),64))]),_:1}),e(t,{class:"fv-plugins-message-container invalid-feedback",name:"cardExpiryYear"})])])]),s("div",he,[be,s("div",ge,[e(o,{type:"text",class:"form-control form-control-solid",minlength:"3",maxlength:"4",placeholder:"CVV",name:"cardCvv"}),e(t,{class:"fv-plugins-message-container invalid-feedback",name:"cardCvv"}),s("div",ve,[s("span",$e,[e(l,{src:a.getAssetPath("/media/icons/duotune/finance/fin002.svg")},null,8,["src"])])])])])]),s("div",ye,[xe,s("label",we,[e(o,{type:"checkbox",class:"form-check-input",name:"saveCard",value:"1"}),ke])])])])}const Oe=f(Js,[["render",Se]]),Ce=_({name:"step-5",components:{},setup(){return{getAssetPath:m}}}),Te={class:"w-100"},Ee={class:"pb-8 pb-lg-10"},Pe=s("h2",{class:"fw-bold text-dark"},"Your Are Done!",-1),Ae={class:"text-gray-400 fw-semobold fs-6"},Ne={class:"mb-0"},ze=s("div",{class:"fs-6 text-gray-600 mb-5"}," Writing headlines for blog posts is as much an art as it is a science and probably warrants its own post, but for all advise is with what works for your great & amazing audience. ",-1),Me={class:"notice d-flex bg-light-warning rounded border-warning border border-dashed p-6"},Fe={class:"svg-icon svg-icon-2tx svg-icon-warning me-4"},De=k('<div class="d-flex flex-stack flex-grow-1"><div class="fw-semobold"><h4 class="text-gray-800 fw-bold">We need your attention!</h4><div class="fs-6 text-gray-600"> To start using great tools, please, please <a href="#" class="fw-bold">Create Team Platform</a></div></div></div>',1);function Ie(a,p,u,h,b,g){const o=c("router-link"),t=c("inline-svg");return d(),r("div",Te,[s("div",Ee,[Pe,s("div",Ae,[n(" If you need more info, please "),e(o,{to:"/sign-in",class:"link-primary fw-bold"},{default:v(()=>[n("Sign In")]),_:1}),n(". ")])]),s("div",Ne,[ze,s("div",Me,[s("span",Fe,[e(t,{src:a.getAssetPath("/media/icons/duotune/general/gen044.svg")},null,8,["src"])]),De])])])}const Le=f(Ce,[["render",Ie]]);export{Be as S,He as a,Ye as b,Oe as c,Le as d};
