import{g as f,a as w}from"./assets.efa26484.js";import{K as P}from"./Card.7a58d515.js";import{h as I}from"./dom.46d9497e.js";import{d as b,O as C,N as M,ap as x,r as c,_ as v,h as g,i as e,q as o,w as u,v as n,k as y,G as k,F as D}from"./index.8d320d67.js";import{c as K,a as m}from"./object.2ac17f8f.js";import{S as V}from"./sweetalert2.all.a27bbf1d.js";const S=b({name:"create-api-key-modal",components:{ErrorMessage:C,Field:M,VForm:x},setup(){const t=c(null),a=c(null),d=c(null),_=c({apiName:"",shortDescription:"",category:"",apiMethod:""}),p=K().shape({apiName:m().required().label("API name"),shortDescription:m().required().label("Description"),category:m().required().label("Category"),apiMethod:m().required().label("API method")});return{apiData:_,validationSchema:p,submit:()=>{!t.value||(t.value.disabled=!0,t.value.setAttribute("data-kt-indicator","on"),setTimeout(()=>{var s;t.value&&(t.value.disabled=!1,(s=t.value)==null||s.removeAttribute("data-kt-indicator")),V.fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}).then(()=>{I(d.value)})},2e3))},submitButtonRef:t,modalRef:a,createAPIKeyModalRef:d,getAssetPath:f}}}),N={class:"modal fade",id:"kt_modal_create_api_key",ref:"createAPIKeyModalRef",tabindex:"-1","aria-hidden":"true"},$={class:"modal-dialog modal-dialog-centered mw-650px"},F={class:"modal-content"},q={class:"modal-header",id:"kt_modal_create_api_key_header"},T=e("h2",null,"Create API Key",-1),B={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},R={class:"svg-icon svg-icon-1"},U={class:"modal-body py-10 px-lg-17"},E={class:"scroll-y me-n7 pe-7",id:"kt_modal_create_api_key_scroll","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto","data-kt-scroll-dependencies":"#kt_modal_create_api_key_header","data-kt-scroll-wrappers":"#kt_modal_create_api_key_scroll","data-kt-scroll-offset":"300px"},O={class:"notice d-flex bg-light-warning rounded border-warning border border-dashed mb-10 p-6"},Y={class:"svg-icon svg-icon-2tx svg-icon-warning me-4"},G=e("div",{class:"d-flex flex-stack flex-grow-1"},[e("div",{class:"fw-semobold"},[e("h4",{class:"text-gray-800 fw-bold"},"Please Note!"),e("div",{class:"fs-6 text-gray-600"},[k(" Adding new API key may afftect to your "),e("a",{href:"#"},"Affiliate Income")])])],-1),j={class:"mb-5 fv-row"},L=e("label",{class:"required fs-5 fw-semobold mb-2"},"API Name",-1),Q={class:"fv-plugins-message-container"},X={class:"fv-help-block"},z={class:"d-flex flex-column mb-5 fv-row"},H=e("label",{class:"required fs-5 fw-semobold mb-2"},"Short Description",-1),J={class:"fv-plugins-message-container"},W={class:"fv-help-block"},Z={class:"d-flex flex-column mb-10 fv-row"},ee=e("label",{class:"required fs-5 fw-semobold mb-2"},"Category",-1),te=e("option",{value:""},"Select a Category...",-1),oe=e("option",{value:"1"},"CRM",-1),ae=e("option",{value:"2"},"Project Alice",-1),se=e("option",{value:"3"},"Keenthemes",-1),le=e("option",{value:"4"},"General",-1),ie={class:"fv-plugins-message-container"},ne={class:"fv-help-block"},de={class:"mb-10"},re=e("div",{class:"mb-3"},[e("label",{class:"d-flex align-items-center fs-5 fw-semobold"},[e("span",{class:"required"},"Specify Your API Method"),e("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Your billing numbers will be calculated based on your API method"})]),e("div",{class:"fs-7 fw-semobold text-gray-400"}," If you need more info, please check budget planning ")],-1),ce={class:"fv-row"},me=e("option",{value:""},"Select a API method...",-1),_e=e("option",{value:"1"},"Open API",-1),pe=e("option",{value:"2"},"SQL Call",-1),ue=e("option",{value:"3"},"UI/UX",-1),he=e("option",{value:"4"},"Docs",-1),fe={class:"fv-plugins-message-container"},be={class:"fv-help-block"},ve={class:"modal-footer flex-center"},ge=e("button",{type:"reset",id:"kt_modal_create_api_key_cancel",class:"btn btn-light me-3"}," Discard ",-1),ye={ref:"submitButtonRef",type:"submit",id:"kt_modal_create_api_key_submit",class:"btn btn-primary"},ke=e("span",{class:"indicator-label"}," Submit ",-1),Ae=e("span",{class:"indicator-progress"},[k(" Please wait... "),e("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),we=[ke,Ae];function Pe(t,a,d,_,p,h){const s=n("inline-svg"),i=n("Field"),r=n("ErrorMessage"),A=n("VForm");return y(),g("div",N,[e("div",$,[e("div",F,[e("div",q,[T,e("div",B,[e("span",R,[o(s,{src:t.getAssetPath("media/icons/duotune/arrows/arr061.svg")},null,8,["src"])])])]),o(A,{id:"kt_modal_create_api_key_form",class:"form",onSubmit:t.submit,"validation-schema":t.validationSchema},{default:u(()=>[e("div",U,[e("div",E,[e("div",O,[e("span",Y,[o(s,{src:t.getAssetPath("media/icons/duotune/general/gen044.svg")},null,8,["src"])]),G]),e("div",j,[L,o(i,{type:"text",class:"form-control form-control-solid",placeholder:"Your API Name",name:"apiName",modelValue:t.apiData.apiName,"onUpdate:modelValue":a[0]||(a[0]=l=>t.apiData.apiName=l)},null,8,["modelValue"]),e("div",Q,[e("div",X,[o(r,{name:"apiName"})])])]),e("div",z,[H,o(i,{type:"text",class:"form-control form-control-solid",rows:"3",name:"shortDescription",placeholder:"Describe your API",modelValue:t.apiData.shortDescription,"onUpdate:modelValue":a[1]||(a[1]=l=>t.apiData.shortDescription=l)},null,8,["modelValue"]),e("div",J,[e("div",W,[o(r,{name:"shortDescription"})])])]),e("div",Z,[ee,o(i,{name:"category","data-control":"select2","data-hide-search":"true","data-placeholder":"Select a Category...",class:"form-select form-select-solid",as:"select",modelValue:t.apiData.category,"onUpdate:modelValue":a[2]||(a[2]=l=>t.apiData.category=l)},{default:u(()=>[te,oe,ae,se,le]),_:1},8,["modelValue"]),e("div",ie,[e("div",ne,[o(r,{name:"category"})])])]),e("div",de,[re,e("div",ce,[o(i,{name:"apiMethod","data-control":"select2","data-hide-search":"true","data-placeholder":"Select a Category...",class:"form-select form-select-solid",as:"select",modelValue:t.apiData.apiMethod,"onUpdate:modelValue":a[3]||(a[3]=l=>t.apiData.apiMethod=l)},{default:u(()=>[me,_e,pe,ue,he]),_:1},8,["modelValue"]),e("div",fe,[e("div",be,[o(r,{name:"apiMethod"})])])])])])]),e("div",ve,[ge,e("button",ye,we,512)])]),_:1},8,["onSubmit","validation-schema"])])])],512)}const Ie=v(S,[["render",Pe]]),Ce=b({name:"create-api-key",components:{KTModalCard:P,KTCreateAPIKeyModal:Ie},setup(){return{getIllustrationsPath:w,getAssetPath:f}}});function Me(t,a,d,_,p,h){const s=n("KTModalCard"),i=n("KTCreateAPIKeyModal");return y(),g(D,null,[o(s,{title:"Create API Key Modal Example",description:"Click on the below buttons to launch <br/>a new API Key creation example.",image:t.getIllustrationsPath("16.png"),"button-text":"Create API Key","modal-id":"kt_modal_create_api_key"},null,8,["image"]),o(i)],64)}const $e=v(Ce,[["render",Me]]);export{$e as default};
