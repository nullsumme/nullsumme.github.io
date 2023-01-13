import{g as f}from"./assets.efa26484.js";import{U as $}from"./UserAccountMenu.ea81016b.js";import{d as _,_ as h,h as v,i as t,q as n,w as s,M as x,v as d,k as y,G as r,r as p,p as c,l as o}from"./index.8d320d67.js";import{D as P}from"./KTDataTable.1439b29e.js";const S=_({name:"kt-details",components:{UserMenu:$},setup(){return{getAssetPath:f}}}),D={class:"card card-flush pt-3 mb-5 mb-xl-10"},A={class:"card-header"},I=t("div",{class:"card-title"},[t("h2",{class:"fw-bold"},"Product Details")],-1),M={class:"card-toolbar"},N={class:"card-body pt-3"},B={class:"mb-10"},V=t("h5",{class:"mb-4"},"Billing Address:",-1),E={class:"d-flex flex-wrap py-5"},F={class:"flex-equal me-5"},C={class:"table fs-6 fw-semobold gs-0 gy-2 gx-2 m-0"},O=t("td",{class:"text-gray-400 min-w-175px w-175px"},"Bill to:",-1),U={class:"text-gray-800 min-w-200px"},Y=t("tr",null,[t("td",{class:"text-gray-400"},"Customer Name:"),t("td",{class:"text-gray-800"},"Emma Smith")],-1),j=t("tr",null,[t("td",{class:"text-gray-400"},"Address:"),t("td",{class:"text-gray-800"}," Floor 10, 101 Avenue of the Light Square, New York, NY, 10050. ")],-1),L=t("tr",null,[t("td",{class:"text-gray-400"},"Phone:"),t("td",{class:"text-gray-800"},"(555) 555-1234")],-1),H=x('<div class="flex-equal"><table class="table fs-6 fw-semobold gs-0 gy-2 gx-2 m-0"><tr><td class="text-gray-400 min-w-175px w-175px"> Subscribed Product: </td><td class="text-gray-800 min-w-200px"><a href="#" class="text-gray-800 text-hover-primary">Basic Bundle</a></td></tr><tr><td class="text-gray-400">Subscription Fees:</td><td class="text-gray-800">$149.99 / Year</td></tr><tr><td class="text-gray-400">Billing method:</td><td class="text-gray-800">Annually</td></tr><tr><td class="text-gray-400">Currency:</td><td class="text-gray-800">USD - US Dollar</td></tr></table></div>',1),J={class:"mb-0"},T=t("h5",{class:"mb-4"},"Subscribed Products:",-1),q={class:"table-responsive"},z={class:"table align-middle table-row-dashed fs-6 gy-4 mb-0"},G=t("thead",null,[t("tr",{class:"border-bottom border-gray-200 text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0"},[t("th",{class:"min-w-150px"},"Product"),t("th",{class:"min-w-125px"},"Subscription ID"),t("th",{class:"min-w-125px"},"Qty"),t("th",{class:"min-w-125px"},"Total"),t("th",{class:"text-end min-w-70px"},"Actions")])],-1),Q={class:"fw-semobold text-gray-800"},R=t("td",null,[t("label",{class:"w-150px"},"Basic Bundle"),t("div",{class:"fw-normal text-gray-600"},"Basic yearly bundle")],-1),K=t("td",null,[t("span",{class:"badge badge-light-danger"},"sub_4567_8765")],-1),W=t("td",null,"1",-1),X=t("td",null,"$149.99 / Year",-1),Z={class:"text-end"},tt={href:"#",class:"btn btn-icon btn-active-light-primary w-30px h-30px","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end"},et={class:"svg-icon svg-icon-3"},st=t("td",null,[t("label",{class:"w-150px"},"Pro Bundle"),t("div",{class:"fw-normal text-gray-400"},"Basic yearly bundle")],-1),at=t("td",null,[t("span",{class:"badge badge-light-danger"},"sub_4567_3433")],-1),nt=t("td",null,"5",-1),ot=t("td",null,"$949.99 / Year",-1),rt={class:"text-end"},lt={href:"#",class:"btn btn-icon btn-active-light-primary w-30px h-30px","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end"},dt={class:"svg-icon svg-icon-3"};function ct(a,i,m,u,g,w){const l=d("router-link"),e=d("inline-svg"),b=d("UserMenu");return y(),v("div",D,[t("div",A,[I,t("div",M,[n(l,{to:"/subscriptions/add",class:"btn btn-light-primary"},{default:s(()=>[r("Update Product")]),_:1})])]),t("div",N,[t("div",B,[V,t("div",E,[t("div",F,[t("table",C,[t("tr",null,[O,t("td",U,[n(l,{to:"/subscriptions/view",class:"text-gray-800 text-hover-primary"},{default:s(()=>[r(" e.smith@kpmg.com.au")]),_:1})])]),Y,j,L])]),H])]),t("div",J,[T,t("div",q,[t("table",z,[G,t("tbody",Q,[t("tr",null,[R,K,W,X,t("td",Z,[t("a",tt,[t("span",et,[n(e,{src:a.getAssetPath("/media/icons/duotune/general/gen019.svg")},null,8,["src"])])]),n(b)])]),t("tr",null,[st,at,nt,ot,t("td",rt,[t("a",lt,[t("span",dt,[n(e,{src:a.getAssetPath("/media/icons/duotune/general/gen019.svg")},null,8,["src"])])]),n(b)])])])])])])])])}const it=h(S,[["render",ct]]),mt=_({name:"kt-events",components:{},setup(){return{getAssetPath:f}}}),ut={class:"card card-flush pt-3 mb-5 mb-xl-10"},gt=x('<div class="card-header"><div class="card-title"><h2>Recent Events</h2></div><div class="card-toolbar"><a href="#" class="btn btn-light-primary">View All Events</a></div></div><div class="card-body pt-0"><div class="table-responsive"><table class="table align-middle table-row-dashed fs-6 text-gray-600 fw-semobold gy-5" id="kt_table_customers_events"><tbody><tr><td class="min-w-400px"> Invoice <a href="#" class="fw-bold text-gray-800 text-hover-primary me-1">7786-3830</a>status has changed from <span class="badge badge-light-primary me-1">In Transit</span>to <span class="badge badge-light-success">Approved</span></td><td class="pe-0 text-gray-600 text-end min-w-200px"> 25 Oct 2021, 9:23 pm </td></tr><tr><td class="min-w-400px"> Invoice <a href="#" class="fw-bold text-gray-800 text-hover-primary me-1">9357-7929</a>status has changed from <span class="badge badge-light-info me-1">In Progress</span>to <span class="badge badge-light-primary">In Transit</span></td><td class="pe-0 text-gray-600 text-end min-w-200px"> 10 Mar 2021, 5:20 pm </td></tr><tr><td class="min-w-400px"><a href="#" class="fw-bold text-gray-800 text-hover-primary me-1">Brian Cox</a>has made payment to <a href="#" class="fw-bold text-gray-800 text-hover-primary">7277-8716</a></td><td class="pe-0 text-gray-600 text-end min-w-200px"> 10 Mar 2021, 5:20 pm </td></tr><tr><td class="min-w-400px"><a href="#" class="fw-bold text-gray-800 text-hover-primary me-1">Melody Macy</a>has made payment to <a href="#" class="fw-bold text-gray-800 text-hover-primary">2516-2975</a></td><td class="pe-0 text-gray-600 text-end min-w-200px"> 24 Jun 2021, 5:30 pm </td></tr><tr><td class="min-w-400px"> Invoice <a href="#" class="fw-bold text-gray-800 text-hover-primary me-1">4464-4371</a>is <span class="badge badge-light-info">In Progress</span></td><td class="pe-0 text-gray-600 text-end min-w-200px"> 21 Feb 2021, 5:30 pm </td></tr></tbody></table></div></div>',2),bt=[gt];function pt(a,i,m,u,g,w){return y(),v("div",ut,bt)}const _t=h(mt,[["render",pt]]),ht=_({name:"kt-invoices",props:{cardClasses:String},components:{Datatable:P},setup(){const a=p([{columnName:"Order id",columnLabel:"order",sortEnabled:!1},{columnName:"Amount",columnLabel:"amount",sortEnabled:!1},{columnName:"Status",columnLabel:"status",sortEnabled:!1},{columnName:"Date",columnLabel:"date",sortEnabled:!1},{columnName:"Invoice",columnLabel:"invoice",sortEnabled:!1}]),i=p([{date:"Nov 01, 2020",order:"102445788",details:"Darknight transparency  36 Icons Pack",color:"success",amount:"$38.00",status:{label:"Pending",state:"warning"}},{date:"Oct 24, 2020",order:"423445721",details:"Seller Fee",color:"danger",amount:"$-2.60",status:{label:"Pending",state:"warning"}},{date:"Oct 08, 2020",order:"312445984",details:"Cartoon Mobile Emoji Phone Pack",color:"success",amount:"$76.00",status:{label:"Pending",state:"warning"}},{date:"Sep 15, 2020",order:"312445984",details:"Iphone 12 Pro Mockup  Mega Bundle",color:"success",amount:"$5.00",status:{label:"Pending",state:"warning"}},{date:"May 30, 2020",order:"523445943",details:"Seller Fee",color:"danger",amount:"$-1.30",status:{label:"Pending",state:"warning"}},{date:"Apr 22, 2020",order:"231445943",details:"Parcel Shipping / Delivery Service App",color:"success",amount:"$204.00",status:{label:"Pending",state:"warning"}},{date:"Feb 09, 2020",order:"426445943",details:"Visual Design Illustration",color:"success",amount:"$31.00",status:{label:"Pending",state:"warning"}},{date:"Nov 01, 2020",order:"984445943",details:"Abstract Vusial Pack",color:"success",amount:"$52.00",status:{label:"Pending",state:"warning"}},{date:"Jan 04, 2020",order:"324442313",details:"Seller Fee",color:"danger",amount:"$-0.80",status:{label:"Pending",state:"warning"}}]),m=p([{date:"May 30, 2020",order:"523445943",details:"Seller Fee",color:"danger",amount:"$-1.30",status:{label:"Pending",state:"warning"}},{date:"Apr 22, 2020",order:"231445943",details:"Parcel Shipping / Delivery Service App",color:"success",amount:"$204.00",status:{label:"Pending",state:"warning"}},{date:"Feb 09, 2020",order:"426445943",details:"Visual Design Illustration",color:"success",amount:"$31.00",status:{label:"Pending",state:"warning"}},{date:"Nov 01, 2020",order:"984445943",details:"Abstract Vusial Pack",color:"success",amount:"$52.00",status:{label:"Pending",state:"warning"}},{date:"Jan 04, 2020",order:"324442313",details:"Seller Fee",color:"danger",amount:"$-0.80",status:{label:"Pending",state:"warning"}},{date:"Nov 01, 2020",order:"102445788",details:"Darknight transparency  36 Icons Pack",color:"success",amount:"$38.00",status:{label:"Pending",state:"warning"}},{date:"Oct 24, 2020",order:"423445721",details:"Seller Fee",color:"danger",amount:"$-2.60",status:{label:"Pending",state:"warning"}},{date:"Oct 08, 2020",order:"312445984",details:"Cartoon Mobile Emoji Phone Pack",color:"success",amount:"$76.00",status:{label:"Pending",state:"warning"}},{date:"Sep 15, 2020",order:"312445984",details:"Iphone 12 Pro Mockup  Mega Bundle",color:"success",amount:"$5.00",status:{label:"Pending",state:"warning"}}]),u=p([{date:"Feb 09, 2020",order:"426445943",details:"Visual Design Illustration",color:"success",amount:"$31.00",status:{label:"Successful",state:"success"}},{date:"Nov 01, 2020",order:"984445943",details:"Abstract Vusial Pack",color:"success",amount:"$52.00",status:{label:"Pending",state:"warning"}},{date:"Jan 04, 2020",order:"324442313",details:"Seller Fee",color:"danger",amount:"$-0.80",status:{label:"Pending",state:"warning"}},{date:"Sep 15, 2020",order:"312445984",details:"Iphone 12 Pro Mockup  Mega Bundle",color:"success",amount:"$5.00",status:{label:"Pending",state:"warning"}},{date:"Nov 01, 2020",order:"102445788",details:"Darknight transparency  36 Icons Pack",color:"success",amount:"$38.00",status:{label:"Pending",state:"warning"}},{date:"Oct 24, 2020",order:"423445721",details:"Seller Fee",color:"danger",amount:"$-2.60",status:{label:"Pending",state:"warning"}},{date:"Oct 08, 2020",order:"312445984",details:"Cartoon Mobile Emoji Phone Pack",color:"success",amount:"$76.00",status:{label:"Pending",state:"warning"}},{date:"May 30, 2020",order:"523445943",details:"Seller Fee",color:"danger",amount:"$-1.30",status:{label:"Pending",state:"warning"}},{date:"Apr 22, 2020",order:"231445943",details:"Parcel Shipping / Delivery Service App",color:"success",amount:"$204.00",status:{label:"Pending",state:"warning"}}]),g=p([{date:"Nov 01, 2020",order:"102445788",details:"Darknight transparency  36 Icons Pack",color:"success",amount:"$38.00",status:{label:"Pending",state:"warning"}},{date:"Oct 24, 2020",order:"423445721",details:"Seller Fee",color:"danger",amount:"$-2.60",status:{label:"Pending",state:"warning"}},{date:"Nov 01, 2020",order:"102445788",details:"Darknight transparency  36 Icons Pack",color:"success",amount:"$38.00",status:{label:"Pending",state:"warning"}},{date:"Oct 24, 2020",order:"423445721",details:"Seller Fee",color:"danger",amount:"$-2.60",status:{label:"Pending",state:"warning"}},{date:"Feb 09, 2020",order:"426445943",details:"Visual Design Illustration",color:"success",amount:"$31.00",status:{label:"Pending",state:"warning"}},{date:"Nov 01, 2020",order:"984445943",details:"Abstract Vusial Pack",color:"success",amount:"$52.00",status:{label:"Pending",state:"warning"}},{date:"Jan 04, 2020",order:"324442313",details:"Seller Fee",color:"danger",amount:"$-0.80",status:{label:"Pending",state:"warning"}},{date:"Oct 08, 2020",order:"312445984",details:"Cartoon Mobile Emoji Phone Pack",color:"success",amount:"$76.00",status:{label:"Pending",state:"warning"}},{date:"Oct 08, 2020",order:"312445984",details:"Cartoon Mobile Emoji Phone Pack",color:"success",amount:"$76.00",status:{label:"Pending",state:"warning"}}]);return{tableHeader:a,tableData1:i,tableData2:m,tableData3:u,tableData4:g}}}),vt=t("div",{class:"card-header border-0"},[t("div",{class:"card-title"},[t("h2",null,"Invoices")]),t("div",{class:"card-toolbar m-0"},[t("ul",{class:"nav nav-stretch fs-5 fw-semobold nav-line-tabs nav-line-tabs-2x border-transparent",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("a",{id:"kt_referrals_year_tab",class:"nav-link text-active-primary active","data-bs-toggle":"tab",role:"tab",href:"#kt_customer_details_invoices_1"}," This Year ")]),t("li",{class:"nav-item",role:"presentation"},[t("a",{id:"kt_referrals_2019_tab",class:"nav-link text-active-primary ms-3","data-bs-toggle":"tab",role:"tab",href:"#kt_customer_details_invoices_2"}," 2020 ")]),t("li",{class:"nav-item",role:"presentation"},[t("a",{id:"kt_referrals_2018_tab",class:"nav-link text-active-primary ms-3","data-bs-toggle":"tab",role:"tab",href:"#kt_customer_details_invoices_3"}," 2019 ")]),t("li",{class:"nav-item",role:"presentation"},[t("a",{id:"kt_referrals_2017_tab",class:"nav-link text-active-primary ms-3","data-bs-toggle":"tab",role:"tab",href:"#kt_customer_details_invoices_4"}," 2018 ")])])])],-1),yt={class:"card-body pt-0"},wt={id:"kt_referred_users_tab_content",class:"tab-content"},xt={id:"kt_customer_details_invoices_1",class:"py-0 tab-pane fade active show",role:"tabpanel"},ft=t("button",{class:"btn btn-sm btn-light btn-active-light-primary"}," Download ",-1),$t={id:"kt_customer_details_invoices_2",class:"py-0 tab-pane fade",role:"tabpanel"},kt=t("button",{class:"btn btn-sm btn-light btn-active-light-primary"}," Download ",-1),Pt={id:"kt_customer_details_invoices_3",class:"py-0 tab-pane fade",role:"tabpanel"},St=t("button",{class:"btn btn-sm btn-light btn-active-light-primary"}," Download ",-1),Dt={id:"kt_customer_details_invoices_4",class:"py-0 tab-pane fade",role:"tabpanel"},At=t("button",{class:"btn btn-sm btn-light btn-active-light-primary"}," Download ",-1);function It(a,i,m,u,g,w){const l=d("Datatable");return y(),v("div",{class:c(`card pt-2 ${a.cardClasses}`)},[vt,t("div",yt,[t("div",wt,[t("div",xt,[n(l,{header:a.tableHeader,data:a.tableData1,"items-per-page":5,"items-per-page-dropdown-enabled":!1},{order:s(({row:e})=>[r(o(e.order),1)]),amount:s(({row:e})=>[t("span",{class:c(`text-${e.color}`)},o(e.amount),3)]),status:s(({row:e})=>[t("span",{class:c(`badge badge-light-${e.status.state}`)},o(e.status.label),3)]),date:s(({row:e})=>[r(o(e.date),1)]),invoice:s(()=>[ft]),_:1},8,["header","data"])]),t("div",$t,[n(l,{header:a.tableHeader,data:a.tableData2,"items-per-page":5,"items-per-page-dropdown-enabled":!1},{order:s(({row:e})=>[r(o(e.order),1)]),amount:s(({row:e})=>[t("span",{class:c(`text-${e.color}`)},o(e.amount),3)]),status:s(({row:e})=>[t("span",{class:c(`badge badge-light-${e.status.state}`)},o(e.status.label),3)]),date:s(({row:e})=>[r(o(e.date),1)]),invoice:s(()=>[kt]),_:1},8,["header","data"])]),t("div",Pt,[n(l,{header:a.tableHeader,data:a.tableData3,"items-per-page":5,"items-per-page-dropdown-enabled":!1},{order:s(({row:e})=>[r(o(e.order),1)]),amount:s(({row:e})=>[t("span",{class:c(`text-${e.color}`)},o(e.amount),3)]),status:s(({row:e})=>[t("span",{class:c(`badge badge-light-${e.status.state}`)},o(e.status.label),3)]),date:s(({row:e})=>[r(o(e.date),1)]),invoice:s(()=>[St]),_:1},8,["header","data"])]),t("div",Dt,[n(l,{header:a.tableHeader,data:a.tableData4,"items-per-page":5,"items-per-page-dropdown-enabled":!1},{order:s(({row:e})=>[r(o(e.order),1)]),amount:s(({row:e})=>[t("span",{class:c(`text-${e.color}`)},o(e.amount),3)]),status:s(({row:e})=>[t("span",{class:c(`badge badge-light-${e.status.state}`)},o(e.status.label),3)]),date:s(({row:e})=>[r(o(e.date),1)]),invoice:s(()=>[At]),_:1},8,["header","data"])])])])],2)}const Mt=h(ht,[["render",It]]),Nt=_({name:"kt-summary",components:{UserMenu:$},setup(){return{getAssetPath:f}}}),Bt={class:"card card-flush mb-0",id:"kt_view_summary","data-kt-sticky":"true","data-kt-sticky-name":"view-subscription-summary","data-kt-sticky-offset":"{default: false, lg: '200px'}","data-kt-sticky-width":"{lg: '250px', xl: '300px'}","data-kt-sticky-left":"auto","data-kt-sticky-top":"150px","data-kt-sticky-animation":"false","data-kt-sticky-zindex":"95"},Vt={class:"card-header"},Et=t("div",{class:"card-title"},[t("h2",null,"Summary")],-1),Ft={class:"card-toolbar"},Ct={href:"#",class:"btn btn-sm btn-light btn-icon","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end"},Ot={class:"svg-icon svg-icon-3"},Ut={class:"card-body pt-0 fs-6"},Yt={class:"mb-7"},jt={class:"d-flex align-items-center"},Lt={class:"symbol symbol-60px symbol-circle me-3"},Ht=["src"],Jt=t("div",{class:"d-flex flex-column"},[t("a",{href:"#",class:"fs-4 fw-bold text-gray-900 text-hover-primary me-2"},"Sean Bean"),t("a",{href:"#",class:"fw-semobold text-gray-600 text-hover-primary"},"sean@dellito.com")],-1),Tt=x('<div class="separator separator-dashed mb-7"></div><div class="mb-7"><h5 class="mb-4">Product details</h5><div class="mb-0"><span class="badge badge-light-info me-2">Basic Bundle</span><span class="fw-semobold text-gray-600">$149.99 / Year</span></div></div><div class="separator separator-dashed mb-7"></div>',3),qt={class:"mb-10"},zt=t("h5",{class:"mb-4"},"Payment Details",-1),Gt={class:"mb-0"},Qt={class:"fw-semobold text-gray-600 d-flex align-items-center"},Rt=["src"],Kt=t("div",{class:"fw-semobold text-gray-600"},"Expires Dec 2024",-1),Wt=x('<div class="separator separator-dashed mb-7"></div><div class="mb-10"><h5 class="mb-4">Subscription Details</h5><table class="table fs-6 fw-semobold gs-0 gy-2 gx-2"><tr class=""><td class="text-gray-400">Subscription ID:</td><td class="text-gray-800">sub_4567_8765</td></tr><tr class=""><td class="text-gray-400">Started:</td><td class="text-gray-800">15 Apr 2021</td></tr><tr class=""><td class="text-gray-400">Status:</td><td><span class="badge badge-light-success">Active</span></td></tr><tr class=""><td class="text-gray-400">Next Invoice:</td><td class="text-gray-800">15 Apr 2022</td></tr></table></div>',2),Xt={class:"mb-0"};function Zt(a,i,m,u,g,w){const l=d("inline-svg"),e=d("UserMenu"),b=d("router-link");return y(),v("div",Bt,[t("div",Vt,[Et,t("div",Ft,[t("a",Ct,[t("span",Ot,[n(l,{src:a.getAssetPath("media/icons/duotune/general/gen052.svg")},null,8,["src"])])]),n(e)])]),t("div",Ut,[t("div",Yt,[t("div",jt,[t("div",Lt,[t("img",{alt:"Pic",src:a.getAssetPath("media/avatars/300-5.jpg")},null,8,Ht)]),Jt])]),Tt,t("div",qt,[zt,t("div",Gt,[t("div",Qt,[r(" Mastercard "),t("img",{src:a.getAssetPath("media/svg/card-logos/mastercard.svg"),class:"w-35px ms-2",alt:""},null,8,Rt)]),Kt])]),Wt,t("div",Xt,[n(b,{to:"/subscriptions/add",class:"btn btn-primary",id:"kt_subscriptions_create_button"},{default:s(()=>[r(" Edit Subscription ")]),_:1})])])])}const te=h(Nt,[["render",Zt]]),ee=_({name:"kt-view-subscription",components:{ViewDetails:it,Events:_t,Invoices:Mt,ViewSummary:te}}),se={class:"d-flex flex-column flex-lg-row"},ae={class:"flex-lg-row-fluid me-lg-15 order-2 order-lg-1 mb-10 mb-lg-0"},ne={class:"flex-column flex-lg-row-auto w-lg-250px w-xl-300px mb-10 order-1 order-lg-2"};function oe(a,i,m,u,g,w){const l=d("ViewDetails"),e=d("Events"),b=d("Invoices"),k=d("ViewSummary");return y(),v("div",se,[t("div",ae,[n(l),n(e),n(b)]),t("div",ne,[n(k)])])}const ie=h(ee,[["render",oe]]);export{ie as default};
