
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as h,m as S,k as C,u as B,r as U,a as o,o as E,c as P,f as e,g as t,e as l,i as f,b as s,N as R,O as q,p as M,l as O,n as T,q as b}from"./index-04c83304.js";const p=a=>(M("data-v-64c6cf78"),a=a(),O(),a),j=p(()=>s("h2",null,"基本设置",-1)),z=p(()=>s("h2",null,"安全设置",-1)),A={class:"setting-list"},D={class:"item"},F=p(()=>s("div",{class:"content"},[s("div",{class:"title"}," 账户密码 ")],-1)),G={class:"action"},H=h({name:"PersonalSetting"}),g=h({...H,setup(a){const v=S();C();const c=B(),n=U({name:c.name,phoneNumber:c.phoneNumber}),y=()=>{v.push({name:"personalEditPassword"})},x=()=>{c.editBaseInfo(n.value).then(()=>{R({type:"success",message:"基本信息修改成功"})})};return(J,_)=>{const r=o("el-input"),u=o("el-form-item"),i=o("el-button"),V=o("el-form"),N=o("el-col"),w=o("el-row"),m=o("el-tab-pane"),k=o("el-tabs"),I=q;return E(),P("div",null,[e(I,null,{default:t(()=>[e(k,{"tab-position":"left",style:{height:"600px"}},{default:t(()=>[e(m,{label:"基本设置",class:"basic"},{default:t(()=>[j,e(w,{gutter:20},{default:t(()=>[e(N,{span:16},{default:t(()=>[e(V,{ref:"formRef",model:l(n),"label-width":"120px"},{default:t(()=>[e(u,{label:"名 称"},{default:t(()=>[e(r,{modelValue:l(n).name,"onUpdate:modelValue":_[0]||(_[0]=d=>l(n).name=d),placeholder:"请输入你的名称"},null,8,["modelValue"])]),_:1}),e(u,{label:"手机号"},{default:t(()=>[e(r,{modelValue:l(n).phoneNumber,"onUpdate:modelValue":_[1]||(_[1]=d=>l(n).phoneNumber=d),placeholder:"请输入你的手机号"},null,8,["modelValue"])]),_:1}),e(u,null,{default:t(()=>[e(i,{type:"primary",onClick:x},{default:t(()=>[f(" 保存 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1}),e(m,{label:"安全设置",class:"security"},{default:t(()=>[z,s("div",A,[s("div",D,[F,s("div",G,[e(i,{type:"primary",text:"",onClick:y},{default:t(()=>[f(" 修改 ")]),_:1})])])])]),_:1})]),_:1})]),_:1})])}}});typeof b=="function"&&b(g);const L=T(g,[["__scopeId","data-v-64c6cf78"]]);export{L as default};
//# sourceMappingURL=setting-99b073e2.js.map
