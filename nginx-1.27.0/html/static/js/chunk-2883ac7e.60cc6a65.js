(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2883ac7e"],{"612b":function(e,t,a){"use strict";a("bfc1")},"6c35":function(e,t,a){"use strict";a.r(t);a("a4d3"),a("e01a"),a("b0c0");var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"app-container"},[t("div",{staticClass:"role-operate"},[t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){e.showDialog=!0}}},[e._v("添加角色")])],1),t("el-table",{attrs:{data:e.list}},[t("el-table-column",{attrs:{prop:"name",align:"center",width:"200",label:"角色"},scopedSlots:e._u([{key:"default",fn:function(a){var i=a.row;return[i.isEdit?t("el-input",{attrs:{size:"mini"},model:{value:i.editRow.name,callback:function(t){e.$set(i.editRow,"name",t)},expression:"row.editRow.name"}}):t("span",[e._v(e._s(i.name))])]}}])}),t("el-table-column",{attrs:{prop:"state",align:"center",width:"200",label:"启用"},scopedSlots:e._u([{key:"default",fn:function(a){var i=a.row;return[i.isEdit?t("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:i.editRow.state,callback:function(t){e.$set(i.editRow,"state",t)},expression:"row.editRow.state"}}):t("span",[e._v(" "+e._s(1===i.state?"已启用":0===i.state?"未启用":"无")+" ")])]}}])}),t("el-table-column",{attrs:{prop:"description",align:"center",label:"描述"},scopedSlots:e._u([{key:"default",fn:function(a){var i=a.row;return[i.isEdit?t("el-input",{attrs:{size:"mini",type:"textarea"},model:{value:i.editRow.description,callback:function(t){e.$set(i.editRow,"description",t)},expression:"row.editRow.description"}}):t("span",[e._v(e._s(i.description))])]}}])}),t("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){var i=a.row;return[i.isEdit?[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.btnEditOK(i)}}},[e._v("确定")]),t("el-button",{attrs:{size:"mini"},on:{click:function(e){i.isEdit=!1}}},[e._v("取消")])]:[t("el-button",{attrs:{size:"mini",type:"text"}},[e._v("分配权限")]),t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){return e.btnEditRow(i)}}},[e._v("编辑")]),t("el-popconfirm",{attrs:{title:"这是一段内容确定删除吗？"},on:{onConfirm:function(t){return e.confirmDel(i.id)}}},[t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{slot:"reference",size:"mini",type:"text"},slot:"reference"},[e._v("删除")])],1)]]}}])})],1),t("el-row",{staticStyle:{height:"60px"},attrs:{type:"flex",align:"middle",justify:"end"}},[t("el-pagination",{attrs:{"page-size":e.pageParams.pagesize,"current-page":e.pageParams.page,total:e.pageParams.total,layout:"prev, pager, next"},on:{"current-change":e.changePage}})],1)],1),t("el-dialog",{attrs:{width:"500px",title:"新增角色",visible:e.showDialog},on:{"update:visible":function(t){e.showDialog=t},close:e.btnCancel}},[t("el-form",{ref:"roleForm",attrs:{model:e.roleForm,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{prop:"name",label:"角色名称"}},[t("el-input",{staticStyle:{width:"300px"},attrs:{size:"mini"},model:{value:e.roleForm.name,callback:function(t){e.$set(e.roleForm,"name",t)},expression:"roleForm.name"}})],1),t("el-form-item",{attrs:{label:"启用",prop:"state"}},[t("el-switch",{attrs:{"active-value":1,"inactive-value":0,size:"mini"},model:{value:e.roleForm.state,callback:function(t){e.$set(e.roleForm,"state",t)},expression:"roleForm.state"}})],1),t("el-form-item",{attrs:{prop:"description",label:"角色描述"}},[t("el-input",{staticStyle:{width:"300px"},attrs:{type:"textarea",rows:3,size:"mini"},model:{value:e.roleForm.description,callback:function(t){e.$set(e.roleForm,"description",t)},expression:"roleForm.description"}})],1),t("el-form-item",[t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-col",{attrs:{span:12}},[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.btnOK}},[e._v("确定")]),t("el-button",{attrs:{size:"mini"},on:{click:e.btnCancel}},[e._v("取消")])],1)],1)],1)],1)],1)],1)},n=[],r=a("5530"),s=a("c7eb"),o=a("1da1"),c=(a("d3b7"),a("159b"),a("b775"));function l(e){return Object(c["a"])({url:"/sys/role",params:e})}function u(e){return Object(c["a"])({url:"/sys/role",method:"post",data:e})}function p(e){return Object(c["a"])({url:"/sys/role/".concat(e.id),method:"put",data:e})}function d(e){return Object(c["a"])({url:"/sys/role/".concat(e),method:"delete"})}var m={name:"Role",data:function(){return{list:[],showDialog:!1,pageParams:{page:1,pagesize:5,total:0},roleForm:{name:"",description:"",state:0},rules:{name:[{required:!0,message:"角色名称不能为空",trigger:"blur"}],description:[{required:!0,message:"角色描述不能为空",trigger:"blur"}]}}},created:function(){this.getRoleList()},methods:{getRoleList:function(){var e=this;return Object(o["a"])(Object(s["a"])().mark((function t(){var a,i,n;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l(e.pageParams);case 2:a=t.sent,i=a.rows,n=a.total,e.list=i,e.pageParams.total=n,e.list.forEach((function(t){e.$set(t,"isEdit",!1),e.$set(t,"editRow",{name:t.name,state:t.state,description:t.description})}));case 8:case"end":return t.stop()}}),t)})))()},changePage:function(e){this.pageParams.page=e,this.getRoleList()},btnOK:function(){var e=this;this.$refs.roleForm.validate(function(){var t=Object(o["a"])(Object(s["a"])().mark((function t(a){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=6;break}return t.next=3,u(e.roleForm);case 3:e.$message.success("新增角色成功"),e.getRoleList(),e.btnCancel();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},btnCancel:function(){this.$refs.roleForm.resetFields(),this.showDialog=!1},btnEditRow:function(e){e.isEdit=!0,e.editRow.name=e.name,e.editRow.state=e.state,e.editRow.description=e.description},btnEditOK:function(e){var t=this;return Object(o["a"])(Object(s["a"])().mark((function a(){return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.editRow.name||!e.editRow.description){a.next=7;break}return a.next=3,p(Object(r["a"])(Object(r["a"])({},e.editRow),{},{id:e.id}));case 3:t.$message.success("更新角色成功"),Object.assign(e,Object(r["a"])(Object(r["a"])({},e.editRow),{},{isEdit:!1})),a.next=8;break;case 7:t.$message.warning("角色和描述不能为空");case 8:case"end":return a.stop()}}),a)})))()},confirmDel:function(e){var t=this;return Object(o["a"])(Object(s["a"])().mark((function a(){return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,d(e);case 2:t.$message.success("删除角色成功"),1===t.list.length&&t.pageParams.page--,t.getRoleList();case 5:case"end":return a.stop()}}),a)})))()}}},f=m,b=(a("612b"),a("2877")),w=Object(b["a"])(f,i,n,!1,null,"07e92ee7",null);t["default"]=w.exports},bfc1:function(e,t,a){}}]);