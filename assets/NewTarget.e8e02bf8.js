import{g as y,a as M}from"./assets.efa26484.js";import{K as N}from"./Card.7a58d515.js";import{h as S}from"./dom.46d9497e.js";import{S as w}from"./sweetalert2.all.a27bbf1d.js";import{d as T,r as u,_ as x,h as g,i as e,q as t,w as l,aq as A,v as i,k as p,G as r,m as k,F as C}from"./index.8d320d67.js";const P=T({name:"new-target-modal",components:{},setup(){const a=u(null),s=u(null),c=u(!1),_=u({targetTitle:"",assign:"",dueDate:"",targetDetails:"",tags:["important","urgent"]}),b=u({targetTitle:[{required:!0,message:"Please input Activity name",trigger:"blur"}],assign:[{required:!0,message:"Please select Activity zone",trigger:"change"}],dueDate:[{required:!0,message:"Please select Activity zone",trigger:"change"}],tags:[{required:!0,message:"Please select Activity zone",trigger:"change"}]});return{targetData:_,submit:()=>{!a.value||a.value.validate(d=>{if(d)c.value=!0,setTimeout(()=>{c.value=!1,w.fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}).then(()=>{S(s.value)})},2e3);else return w.fire({text:"Sorry, looks like there are some errors detected, please try again.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}),!1})},loading:c,formRef:a,rules:b,newTargetModalRef:s,getAssetPath:y}}});const $={class:"modal fade",id:"kt_modal_new_target",ref:"newTargetModalRef",tabindex:"-1","aria-hidden":"true"},q={class:"modal-dialog modal-dialog-centered mw-650px"},B={class:"modal-content rounded"},K={class:"modal-header pb-0 border-0 justify-content-end"},U={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},O={class:"svg-icon svg-icon-1"},R={class:"modal-body scroll-y px-10 px-lg-15 pt-0 pb-15"},E=e("div",{class:"mb-13 text-center"},[e("h1",{class:"mb-3"},"Set First Target"),e("div",{class:"text-gray-400 fw-semobold fs-5"},[r(" If you need more info, please check "),e("a",{href:"#",class:"fw-bold link-primary"},"Project Guidelines"),r(". ")])],-1),I={class:"d-flex flex-column mb-8 fv-row"},F=e("label",{class:"d-flex align-items-center fs-6 fw-semobold mb-2"},[e("span",{class:"required"},"Target Title"),e("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Specify a target name for future usage and reference"})],-1),z={class:"row g-9 mb-8"},j={class:"col-md-6 fv-row"},G=e("label",{class:"required fs-6 fw-semobold mb-2"},"Assign",-1),W={class:"col-md-6 fv-row"},H=e("label",{class:"required fs-6 fw-semobold mb-2"},"Due Date",-1),L={class:"position-relative align-items-center"},J={class:"d-flex flex-column mb-8"},Q=e("label",{class:"fs-6 fw-semobold mb-2"},"Target Details",-1),X={class:"d-flex flex-column mb-8 fv-row"},Y=e("label",{class:"d-flex align-items-center fs-6 fw-semobold mb-2"},[e("span",{class:"required"},"Tags"),e("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Specify a target priorty"})],-1),Z=e("div",{class:"d-flex flex-stack mb-8"},[e("div",{class:"me-5"},[e("label",{class:"fs-6 fw-semobold"},"Adding Users by Team Members"),e("div",{class:"fs-7 fw-semobold text-gray-400"}," If you need more info, please check budget planning ")]),e("label",{class:"form-check form-switch form-check-custom form-check-solid"},[e("input",{class:"form-check-input",type:"checkbox",value:"1",checked:""}),e("span",{class:"form-check-label fw-semobold text-gray-400"}," Allowed ")])],-1),ee=e("div",{class:"mb-15 fv-row"},[e("div",{class:"d-flex flex-stack"},[e("div",{class:"fw-semobold me-5"},[e("label",{class:"fs-6"},"Notifications"),e("div",{class:"fs-7 text-gray-400"}," Allow Notifications by Phone or Email ")]),e("div",{class:"d-flex align-items-center"},[e("label",{class:"form-check form-check-custom form-check-solid me-10"},[e("input",{class:"form-check-input h-20px w-20px",type:"checkbox",name:"communication[]",value:"email",checked:""}),e("span",{class:"form-check-label fw-semobold"}," Email ")]),e("label",{class:"form-check form-check-custom form-check-solid"},[e("input",{class:"form-check-input h-20px w-20px",type:"checkbox",name:"communication[]",value:"phone"}),e("span",{class:"form-check-label fw-semobold"}," Phone ")])])])],-1),te={class:"text-center"},ae=e("button",{type:"reset",id:"kt_modal_new_target_cancel",class:"btn btn-light me-3"}," Cancel ",-1),se=["data-kt-indicator"],le={key:0,class:"indicator-label"},oe={class:"svg-icon svg-icon-3 ms-2 me-0"},ne={key:1,class:"indicator-progress"},re=e("span",{class:"spinner-border spinner-border-sm align-middle ms-2"},null,-1);function ie(a,s,c,_,b,h){const d=i("inline-svg"),f=i("el-input"),m=i("el-form-item"),o=i("el-option"),v=i("el-select"),D=i("el-date-picker"),V=i("el-form");return p(),g("div",$,[e("div",q,[e("div",B,[e("div",K,[e("div",U,[e("span",O,[t(d,{src:a.getAssetPath("media/icons/duotune/arrows/arr061.svg")},null,8,["src"])])])]),e("div",R,[t(V,{id:"kt_modal_new_target_form",onSubmit:s[5]||(s[5]=A(n=>a.submit(),["prevent"])),model:a.targetData,rules:a.rules,ref:"formRef",class:"form"},{default:l(()=>[E,e("div",I,[F,t(m,{prop:"targetTitle"},{default:l(()=>[t(f,{modelValue:a.targetData.targetTitle,"onUpdate:modelValue":s[0]||(s[0]=n=>a.targetData.targetTitle=n),placeholder:"Enter Target Title",name:"targetTitle"},null,8,["modelValue"])]),_:1})]),e("div",z,[e("div",j,[G,t(m,{prop:"assign"},{default:l(()=>[t(v,{modelValue:a.targetData.assign,"onUpdate:modelValue":s[1]||(s[1]=n=>a.targetData.assign=n),placeholder:"Select a Team Member",name:"assign",as:"select"},{default:l(()=>[t(o,{value:""},{default:l(()=>[r("Select user...")]),_:1}),t(o,{label:"Karina Clark",value:"1"},{default:l(()=>[r("Karina Clark")]),_:1}),t(o,{label:"Robert Doe",value:"2"},{default:l(()=>[r("Robert Doe")]),_:1}),t(o,{label:"Niel Owen",value:"3"},{default:l(()=>[r("Niel Owen")]),_:1}),t(o,{label:"Olivia Wild",value:"4"},{default:l(()=>[r("Olivia Wild")]),_:1}),t(o,{label:"Sean Bean",value:"5"},{default:l(()=>[r("Sean Bean")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),e("div",W,[H,e("div",L,[t(m,{prop:"dueDate"},{default:l(()=>[t(D,{modelValue:a.targetData.dueDate,"onUpdate:modelValue":s[2]||(s[2]=n=>a.targetData.dueDate=n),type:"date",placeholder:"Select a date",teleported:!1,"popper-class":"override-styles",name:"dueDate"},null,8,["modelValue"])]),_:1})])])]),e("div",J,[Q,t(m,{prop:"targetDetails"},{default:l(()=>[t(f,{modelValue:a.targetData.targetDetails,"onUpdate:modelValue":s[3]||(s[3]=n=>a.targetData.targetDetails=n),type:"textarea",rows:"3",name:"targetDetails",placeholder:"Type Target Details"},null,8,["modelValue"])]),_:1})]),e("div",X,[Y,t(m,{prop:"tags"},{default:l(()=>[t(v,{modelValue:a.targetData.tags,"onUpdate:modelValue":s[4]||(s[4]=n=>a.targetData.tags=n),multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"Choose tags for your target"},{default:l(()=>[t(o,{label:"Important",value:"important"}),t(o,{label:"Urgent",value:"urgent"}),t(o,{label:"High",value:"high"}),t(o,{label:"Low",value:"low"}),t(o,{label:"Medium",value:"medium"})]),_:1},8,["modelValue"])]),_:1})]),Z,ee,e("div",te,[ae,e("button",{"data-kt-indicator":a.loading?"on":null,class:"btn btn-lg btn-primary",type:"submit"},[a.loading?k("",!0):(p(),g("span",le,[r(" Submit "),e("span",oe,[t(d,{src:a.getAssetPath("media/icons/duotune/arrows/arr064.svg")},null,8,["src"])])])),a.loading?(p(),g("span",ne,[r(" Please wait... "),re])):k("",!0)],8,se)])]),_:1},8,["model","rules"])])])])],512)}const de=x(P,[["render",ie]]),ce=T({name:"new-target",components:{KTModalCard:N,KTNewTargetModal:de},setup(){return{getIllustrationsPath:M,getAssetPath:y}}});function me(a,s,c,_,b,h){const d=i("KTModalCard"),f=i("KTNewTargetModal");return p(),g(C,null,[t(d,{title:"New Target Modal Example",description:"Click on the below buttons to launch <br/>a new target example.",image:a.getIllustrationsPath("17.png"),"button-text":"Add New Target","modal-id":"kt_modal_new_target"},null,8,["image"]),t(f)],64)}const be=x(ce,[["render",me]]);export{be as default};
