
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as O}from"./index-74c80a46.js";import{_ as W}from"./index-c4dfb300.js";import{_ as X}from"./index.vue_vue_type_script_setup_true_name_SvgIcon_lang-dfa84782.js";import{a as Y}from"./index-6f858f68.js";import{bb as d,a$ as m}from"./user-e0b78c84.js";import{N as R}from"./index-8e5ec700.js";import{b as q}from"./route-block-83d24a4e.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";import{a3 as n,k as u,l as c,E as l,y as t,F as _,Y as b,x as g,C,m as I,B as v,Z as G}from"./runtime-core.esm-bundler-a63aef9e.js";import"./settings-9db32632.js";import"./index-c228ae8f.js";import"./vue-router-8228f7a0.js";import"./runtime-dom.esm-bundler-1ceaee55.js";const x={data(){return{columnFields:[],commentsData:{list:[],currPage:1,pageSize:20,total:0,totalPage:0},showEditDialog:!1,dialogTitle:"",dialogType:"",batchBtnEnable:!1,search:{pageSize:20,pageIndex:1,sortBy:"createTime",sortType:"desc",queryParams:{}},departmentTree:{},listProjects:[],listUsers:[],selectedRoles:[],confirmResultItems:[],selectedRows:[],editDetail:{},editFieldRules:{name:[{required:!0,message:"用户姓名必填",trigger:"blur"}],account:[{required:!0,message:"用户账号必填",trigger:"blur"}]}}},computed:{},mounted(){this.resetSearch(),this.getColumnFields(),this.loadUserList(),this.loadProjects(),this.loadConfirmResultItems(),this.loadDepartmentTree()},methods:{loadUserList(){d.get("server/user/getAllUserDetails").then(i=>{this.listUsers=i.data})},loadProjects(){d.get(`server/project/queryProjectInDept?deptId=${this.search.queryParams.departmentId}`).then(i=>{this.listProjects=i.data})},loadConfirmResultItems(){d.get("server/column/queryConfirmResultDictItems").then(i=>{this.confirmResultItems=i.data})},getColumnFields(){d.get("server/column/queryColumns").then(i=>{this.columnFields=i.data})},loadDepartmentTree(){d.get("server/dept/getDeptTree").then(i=>{this.departmentTree=i.data})},clickSearch(){d.post("/server/comment/queryComments",this.search).then(i=>{this.commentsData=i.data})},resetSearch(){this.search.queryParams={identifier:null,projectId:null,departmentId:null,commitUser:null,realConfirmUser:null,assignConfirmUser:null,confirmResult:null},this.clickSearch()},handleSizeChange(i){this.search.pageSize=i,this.clickSearch()},handleCurrentChange(i){this.search.pageIndex=i,this.clickSearch()},getSelectedRows(i){this.selectedRows=i,this.selectedRows&&this.selectedRows.length!==0?this.batchBtnEnable=!0:this.batchBtnEnable=!1},deleteSelection(i){R.confirm("确定要删除所选记录吗？此操作不可恢复！","Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{const r=[];for(let h=0;h<this.selectedRows.length;h++){const T=this.selectedRows[h];r.push(T.identifier)}d.get(`server/comment/deleteComments?identifiers=${r}`).then(h=>{h.code===0?m({type:"success",message:"删除成功"}):m({type:"error",message:`删除失败：${h.message}`}),this.clickSearch()})}).catch(()=>{})},deleteSingle(i){R.confirm("确定要删除此记录吗？此操作不可恢复！","Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{d.get(`server/comment/deleteComment?identifier=${i.identifier}`).then(r=>{r.code===0?m({type:"success",message:"删除成功"}):m({type:"error",message:`删除失败：${r.message}`}),this.clickSearch()})}).catch(()=>{})},viewSingle(i){d.get(`server/comment/initViewReqBody?identifier=${i.identifier}`).then(r=>{this.editDetail=r.data,this.dialogTitle="评审意见详情",this.dialogType="VIEW",this.showEditDialog=!0}).catch(r=>{m({type:"error",message:`编辑失败：${r}`})})},editSingle(i){d.get(`server/comment/initEditReqBody?identifier=${i.identifier}`).then(r=>{this.editDetail=r.data,this.dialogTitle="修改评审意见",this.dialogType="EDIT",this.showEditDialog=!0}).catch(r=>{m({type:"error",message:`编辑失败：${r.message}`})})},saveOperation(){this.$refs.editDetailForm.validate(i=>{if(!i)m({type:"error",message:"参数内容填写有误，请检查"});else{let r;if(this.dialogType==="CREATE")r="server/comment/createComment";else if(this.dialogType==="EDIT")r="server/comment/modifyComment";else if(this.dialogType==="CONFIRM")r="server/comment/confirmComment";else{m({type:"error",message:"请求操作类型不合法"});return}d.post(r,this.editDetail).then(h=>{h.code===0?(m({type:"success",message:"保存成功"}),this.showEditDialog=!1,this.clickSearch()):m({type:"error",message:`编辑失败：${h.message}`})})}})},cancelEditOperation(){this.showEditDialog=!1},create(){d.get("server/comment/initCreateReqBody").then(i=>{this.editDetail=i.data,this.dialogTitle="添加评审意见",this.dialogType="CREATE",this.showEditDialog=!0}).catch(i=>{m({type:"error",message:`编辑失败：${i}`})})},cancelCreateOperation(){this.showEditDialog=!1},confirmSingle(i){d.get(`server/comment/initConfirmReqBody?identifier=${i.identifier}`).then(r=>{this.editDetail=r.data,this.dialogTitle="评审意见确认",this.dialogType="CONFIRM",this.showEditDialog=!0}).catch(r=>{m({type:"error",message:`编辑失败：${r}`})})}}};const H={class:"button-group"},J={key:0},K={class:"dialog-footer"};function Q(i,r,h,T,a,s){const A=Y,D=n("el-option"),B=n("el-select"),p=n("el-form-item"),E=n("el-col"),S=n("el-row"),k=n("el-input"),z=n("el-tree-select"),F=X,w=n("el-icon"),f=n("el-button"),P=n("el-form"),M=W,U=O,V=n("el-table-column"),N=n("el-table"),j=n("el-pagination"),L=n("el-dialog");return u(),c("div",null,[l(A,{title:"全部评审数据",content:"本页面提供系统内全部评审数据的管理能力，供管理角色进行统一查看、维护操作。"}),l(U,{title:"搜索条件"},{default:t(()=>[l(M,null,{default:t(()=>[l(P,{model:a.search,size:"default","label-width":"120px"},{default:t(()=>[l(S,null,{default:t(()=>[l(E,{span:6},{default:t(()=>[l(p,{label:"检视人员"},{default:t(()=>[l(B,{modelValue:a.search.queryParams.commitUser,"onUpdate:modelValue":r[0]||(r[0]=e=>a.search.queryParams.commitUser=e),modelModifiers:{trim:!0},placeholder:"请输入姓名或账号查询",clearable:"",filterable:""},{default:t(()=>[(u(!0),c(_,null,b(a.listUsers,(e,o)=>(u(),g(D,{key:e.account,label:e.name,value:e.account},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(E,{span:6},{default:t(()=>[l(p,{label:"指派确认人员"},{default:t(()=>[l(B,{modelValue:a.search.queryParams.assignConfirmUser,"onUpdate:modelValue":r[1]||(r[1]=e=>a.search.queryParams.assignConfirmUser=e),modelModifiers:{trim:!0},placeholder:"请输入姓名或账号查询",clearable:"",filterable:""},{default:t(()=>[(u(!0),c(_,null,b(a.listUsers,(e,o)=>(u(),g(D,{key:e.account,label:e.name,value:e.account},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(E,{span:6},{default:t(()=>[l(p,{label:"实际确认人员"},{default:t(()=>[l(B,{modelValue:a.search.queryParams.realConfirmUser,"onUpdate:modelValue":r[2]||(r[2]=e=>a.search.queryParams.realConfirmUser=e),modelModifiers:{trim:!0},placeholder:"请输入姓名或账号查询",clearable:"",filterable:""},{default:t(()=>[(u(!0),c(_,null,b(a.listUsers,(e,o)=>(u(),g(D,{key:e.account,label:e.name,value:e.account},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(E,{span:6},{default:t(()=>[l(p,{label:"确认结果"},{default:t(()=>[l(B,{modelValue:a.search.queryParams.confirmResult,"onUpdate:modelValue":r[3]||(r[3]=e=>a.search.queryParams.confirmResult=e),modelModifiers:{trim:!0},placeholder:"输入评审意见的确认状态",clearable:""},{default:t(()=>[(u(!0),c(_,null,b(a.confirmResultItems,(e,o)=>(u(),g(D,{key:e.value,label:e.showName,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(S,null,{default:t(()=>[l(E,{span:6},{default:t(()=>[l(p,{label:"唯一ID"},{default:t(()=>[l(k,{modelValue:a.search.queryParams.identifier,"onUpdate:modelValue":r[4]||(r[4]=e=>a.search.queryParams.identifier=e),placeholder:"输入评审意见唯一ID进行查询",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(E,{span:6},{default:t(()=>[l(p,{label:"归属部门"},{default:t(()=>[l(z,{modelValue:a.search.queryParams.departmentId,"onUpdate:modelValue":r[5]||(r[5]=e=>a.search.queryParams.departmentId=e),data:a.departmentTree,"render-after-expand":!1,"check-strictly":"true",onChange:s.loadProjects},null,8,["modelValue","data","onChange"])]),_:1})]),_:1}),l(E,{span:6},{default:t(()=>[l(p,{label:"归属项目"},{default:t(()=>[l(B,{modelValue:a.search.queryParams.projectId,"onUpdate:modelValue":r[6]||(r[6]=e=>a.search.queryParams.projectId=e),modelModifiers:{trim:!0},placeholder:"请选择",clearable:"",filterable:""},{default:t(()=>[(u(!0),c(_,null,b(a.listProjects,(e,o)=>(u(),g(D,{key:e.id,label:e.projectName,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(p,null,{default:t(()=>[l(f,{type:"primary",onClick:s.clickSearch},{icon:t(()=>[l(w,null,{default:t(()=>[l(F,{name:"ep:search"})]),_:1})]),default:t(()=>[C(" 查询 ")]),_:1},8,["onClick"]),l(f,{onClick:s.resetSearch},{default:t(()=>[C(" 重置 ")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),l(U,null,{default:t(()=>[I("div",H,[l(f,{type:"primary",onClick:s.create},{icon:t(()=>[l(w,null,{default:t(()=>[l(F,{name:"ep:circle-plus"})]),_:1})]),default:t(()=>[C(" 新建 ")]),_:1},8,["onClick"]),l(f,{type:"danger",disabled:!a.batchBtnEnable,onClick:s.deleteSelection},{icon:t(()=>[l(w,null,{default:t(()=>[l(F,{name:"ep:delete"})]),_:1})]),default:t(()=>[C(" 删除所选 ")]),_:1},8,["disabled","onClick"])]),l(N,{border:"","highlight-current-row":"",data:a.commentsData.list,height:"100%",onSelectionChange:s.getSelectedRows},{default:t(()=>[l(V,{type:"selection",width:"55"}),(u(!0),c(_,null,b(a.columnFields,(e,o)=>(u(),c(_,null,[e.showInWebTable?(u(),g(V,{key:e.columnCode,prop:e.columnCode,label:e.showName,width:e.webTableColumnWidth,index:o},null,8,["prop","label","width","index"])):v("",!0)],64))),256)),l(V,{fixed:"right",label:"操作",width:"200"},{default:t(e=>[l(f,{link:"",type:"primary",size:"small",onClick:o=>s.viewSingle(e.row)},{default:t(()=>[C(" 查看 ")]),_:2},1032,["onClick"]),l(f,{link:"",type:"primary",size:"small",onClick:o=>s.editSingle(e.row)},{default:t(()=>[C(" 编辑 ")]),_:2},1032,["onClick"]),l(f,{link:"",type:"primary",size:"small",onClick:o=>s.confirmSingle(e.row)},{default:t(()=>[C(" 确认 ")]),_:2},1032,["onClick"]),l(f,{link:"",type:"danger",size:"small",onClick:o=>s.deleteSingle(e.row)},{default:t(()=>[C(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","onSelectionChange"]),l(j,{class:"pageination-style",background:"",layout:"total, sizes, prev, pager, next, jumper","page-size":a.commentsData.pageSize,total:a.commentsData.total,"current-page":a.commentsData.currPage,onSizeChange:s.handleSizeChange,onCurrentChange:s.handleCurrentChange},null,8,["page-size","total","current-page","onSizeChange","onCurrentChange"])]),_:1}),l(L,{modelValue:a.showEditDialog,"onUpdate:modelValue":r[7]||(r[7]=e=>a.showEditDialog=e),title:a.dialogTitle},G({default:t(()=>[l(P,{ref:"editDetailForm",model:a.editDetail,size:"default","label-width":"120px",rules:a.editFieldRules},{default:t(()=>[(u(!0),c(_,null,b(a.editDetail.fieldModelList,(e,o)=>(u(),c(_,null,[e.show?(u(),c("div",J,[e.inputType=="TEXT"?(u(),g(p,{key:0,label:e.showName},{default:t(()=>[l(k,{modelValue:a.editDetail.fieldModelList[o].valuePair.value,"onUpdate:modelValue":y=>a.editDetail.fieldModelList[o].valuePair.value=y,disabled:e.editable===!1},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1032,["label"])):v("",!0),e.inputType=="COMBO_BOX"?(u(),g(p,{key:1,label:e.showName},{default:t(()=>[l(B,{modelValue:a.editDetail.fieldModelList[o].valuePair,"onUpdate:modelValue":y=>a.editDetail.fieldModelList[o].valuePair=y,disabled:e.editable===!1,filterable:""},{default:t(()=>[(u(!0),c(_,null,b(e.enumValues,y=>(u(),g(D,{label:y.showName,value:y},null,8,["label","value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1032,["label"])):v("",!0),e.inputType=="TEXTAREA"?(u(),g(p,{key:2,label:e.showName},{default:t(()=>[l(k,{modelValue:a.editDetail.fieldModelList[o].valuePair.value,"onUpdate:modelValue":y=>a.editDetail.fieldModelList[o].valuePair.value=y,rows:5,disabled:e.editable===!1,type:"textarea"},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1032,["label"])):v("",!0)])):v("",!0)],64))),256))]),_:1},8,["model","rules"])]),_:2},[a.dialogType!=="VIEW"?{name:"footer",fn:t(()=>[I("span",K,[l(f,{onClick:s.cancelEditOperation},{default:t(()=>[C(" 取消 ")]),_:1},8,["onClick"]),l(f,{type:"primary",onClick:s.saveOperation},{default:t(()=>[C(" 保存 ")]),_:1},8,["onClick"])])]),key:"0"}:void 0]),1032,["modelValue","title"])])}typeof q=="function"&&q(x);const ce=Z(x,[["render",Q],["__scopeId","data-v-6efff764"]]);export{ce as default};
//# sourceMappingURL=allcomment-af23f703.js.map
