"use strict";(self["webpackChunks018"]=self["webpackChunks018"]||[]).push([[623,8188],{623:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"user-edit"},[t("Modal",{attrs:{title:e.title,width:"90",draggable:"","mask-closable":"0"==e.type,"ok-text":"确认提交"},on:{"on-ok":e.submit},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("Row",{attrs:{gutter:16,justify:"center"}},[t("div",{staticClass:"info-title"},[t("span",{directives:[{name:"show",rawName:"v-show",value:"2"!=e.type,expression:"type!='2'"}]},[e._v("登录账号"+e._s(e.form.username)+"（唯一标识"+e._s(e.form.id)+"） ")]),t("Icon",{directives:[{name:"show",rawName:"v-show",value:-1==e.form.status,expression:"form.status==-1"}],staticStyle:{"margin-left":"10px",cursor:"pointer"},attrs:{type:"md-lock",size:"18"}})],1)]),t("Form",{ref:"form",attrs:{model:e.form,rules:e.formValidate,"label-position":"top"}},["2"==e.type?t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{span:"12"}},[t("FormItem",{staticStyle:{width:"100%"},attrs:{label:"登录账号",prop:"username"}},[t("Input",{attrs:{autocomplete:"off",maxlength:16},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{staticStyle:{width:"100%"},attrs:{label:"密码",prop:"password"}},[t("SetPassword",{on:{"on-change":e.changePass},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1)],1):e._e(),t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{span:"12"}},[t("FormItem",{staticStyle:{width:"100%"},attrs:{label:"用户名",prop:"nickname"}},[t("Input",{model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{staticStyle:{width:"100%"},attrs:{label:"邮箱",prop:"email"}},[t("Input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1)],1),t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{span:"12"}},[t("FormItem",{staticStyle:{width:"100%"},attrs:{label:"手机号",prop:"mobile"}},[t("Input",{model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{staticStyle:{width:"100%"},attrs:{label:"性别"}},[t("dict",{attrs:{dict:"sex",transfer:"",clearable:"",placeholder:"选择性别"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}})],1)],1)],1),t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{span:"12"}},[t("FormItem",{staticStyle:{width:"100%"},attrs:{label:"所属部门"}},[t("department-tree-choose",{ref:"depTree",on:{"on-change":e.handleSelectDepTree}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{staticStyle:{width:"100%"},attrs:{label:"用户类型"}},[t("Select",{attrs:{placeholder:"请选择用户类型"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[t("Option",{attrs:{value:0}},[e._v("普通用户")]),t("Option",{attrs:{value:1}},[e._v("管理员")])],1)],1)],1)],1),t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{span:"12"}},[t("FormItem",{staticStyle:{width:"100%"},attrs:{label:"头像"}},[t("upload-pic-input",{model:{value:e.form.avatar,callback:function(t){e.$set(e.form,"avatar",t)},expression:"form.avatar"}})],1)],1),t("Col",{attrs:{span:"12"}},[t("FormItem",{staticStyle:{width:"100%"},attrs:{label:"角色",prop:"roleIds"}},[t("Select",{attrs:{multiple:""},model:{value:e.form.roleIds,callback:function(t){e.$set(e.form,"roleIds",t)},expression:"form.roleIds"}},e._l(e.roleList,(function(a){return t("Option",{key:a.id,attrs:{value:a.id,label:a.name}},[t("span",{staticStyle:{"margin-right":"10px"}},[e._v(e._s(a.name))]),t("span",{staticStyle:{color:"#ccc"}},[e._v(e._s(a.description))])])})),1)],1)],1)],1)],1)],1)],1)},r=[],i=a(5894),l=a(6551),n=a(4339),o=a(6413),u=a(7204),d=a(8188);const c={name:"user",components:{departmentTreeChoose:n["default"],uploadPicInput:o["default"],SetPassword:u["default"],dict:d["default"]},props:{value:{type:Boolean,default:!1},data:{type:Object},type:{type:String,default:"0"}},data(){return{visible:this.value,title:"",passColor:"",submitLoading:!1,form:{addressArray:[]},formValidate:{username:[{required:!0,message:"请输入登录账号",trigger:"blur"},{validator:l.rV,trigger:"blur"}],nickname:[{required:!0,message:"请输入用户名",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:l.gG,trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:l.uo,trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址"},{type:"email",message:"邮箱格式不正确"}]},roleList:[]}},methods:{init(){this.getRoleList()},getRoleList(){(0,i.pC)().then((e=>{e.success&&(this.roleList=e.result)}))},handleSelectDepTree(e){this.form.departmentId=e},changeAddress(e){this.form.address=JSON.stringify(this.form.addressArray)},changePass(e,t,a){this.form.passStrength=a},submit(){this.$refs.form.validate((e=>{e&&("1"==this.type?(this.submitLoading=!0,(0,i.uz)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.$emit("on-submit",!0),this.visible=!1)}))):(this.submitLoading=!0,(0,i.cn)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.$emit("on-submit",!0),this.visible=!1)}))))}))},setCurrentValue(e){if(e!==this.visible){if("1"==this.type?this.title="编辑":"2"==this.type?this.title="添加":this.title="详情",this.$refs.form.resetFields(),"0"==this.type||"1"==this.type){let e=this.data;e.address?e.addressArray=JSON.parse(e.address):e.addressArray=[],this.$refs.depTree.setData(e.departmentId,e.departmentTitle);let t=[];e.roles.forEach((function(e){t.push(e.id)})),e.roleIds=t,delete e.roles,delete e.permissions,"弱"==e.passStrength?this.passColor="#ed3f14":"中"==e.passStrength?this.passColor="#faad14":"强"==e.passStrength&&(this.passColor="#52c41a"),this.form=e}else this.$refs.depTree.setData("",""),this.form={type:0,sex:"",addressArray:[]};this.visible=e}}},watch:{value(e){this.setCurrentValue(e)},visible(e){this.$emit("input",e)}},mounted(){this.init()}},h=c;var p=a(1001),m=(0,p.Z)(h,s,r,!1,null,null,null);const g=m.exports},4339:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var s=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{display:"flex"}},[t("Input",{staticStyle:{"margin-right":"10px"},attrs:{readonly:"",placeholder:e.placeholder,clearable:e.clearable},on:{"on-clear":e.clearSelect},model:{value:e.departmentTitle,callback:function(t){e.departmentTitle=t},expression:"departmentTitle"}}),t("Poptip",{attrs:{transfer:"",trigger:"click",placement:"right",title:"选择部门",width:"250"}},[t("Button",{attrs:{icon:"md-list"}},[e._v("选择部门")]),t("div",{attrs:{slot:"content"},slot:"content"},[t("Input",{attrs:{suffix:"ios-search",placeholder:"输入部门名搜索",clearable:""},on:{"on-change":e.searchDep},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}}),t("div",{staticClass:"dep-tree-bar"},[t("Tree",{attrs:{data:e.dataDep,"load-data":e.loadData,multiple:e.multiple},on:{"on-select-change":e.selectTree}}),e.depLoading?t("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)],1)],1)],1)])},r=[],i=a(7877);const l={name:"departmentTreeChoose",props:{multiple:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},placeholder:{type:String,default:"点击选择部门"}},data(){return{depLoading:!1,departmentTitle:"",searchKey:"",dataDep:[],selectDep:[],departmentId:[]}},methods:{initDepartmentData(){(0,i.E5)().then((e=>{e.success&&(e.result.forEach((function(e){e.isParent&&(e.loading=!1,e.children=[]),-1==e.status&&(e.title="[已禁用] "+e.title,e.disabled=!0)})),this.dataDep=e.result)}))},loadData(e,t){(0,i.G8)({parentId:e.id}).then((e=>{e.success&&(e.result.forEach((function(e){e.isParent&&(e.loading=!1,e.children=[]),-1==e.status&&(e.title="[已禁用] "+e.title,e.disabled=!0)})),t(e.result))}))},searchDep(){this.searchKey?(this.depLoading=!0,(0,i.N8)({title:this.searchKey}).then((e=>{this.depLoading=!1,e.success&&(e.result.forEach((function(e){-1==e.status&&(e.title="[已禁用] "+e.title,e.disabled=!0)})),this.dataDep=e.result)}))):this.initDepartmentData()},selectTree(e){let t=[],a="";e.forEach((e=>{t.push(e.id),a=""==a?e.title:a+"、"+e.title})),this.departmentId=t,this.departmentTitle=a,this.multiple?this.$emit("on-change",this.departmentId):this.$emit("on-change",this.departmentId[0])},clearSelect(){this.departmentId=[],this.departmentTitle="",this.initDepartmentData(),this.multiple?this.$emit("on-change",[]):this.$emit("on-change",""),this.$emit("on-clear")},setData(e,t){this.departmentTitle=t,this.multiple?this.departmentId=e:(this.departmentId=[],this.departmentId.push(e)),this.$emit("on-change",this.departmentId)}},mounted(){this.initDepartmentData()}},n=l;var o=a(1001),u=(0,o.Z)(n,s,r,!1,null,null,null);const d=u.exports},8188:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var s=function(){var e=this,t=e._self._c;return t("div",[t("Select",{attrs:{size:e.size,loading:e.loading,placeholder:e.placeholder,multiple:e.multiple,disabled:e.disabled,filterable:e.filterable,transfer:e.transfer,clearable:e.clearable,placement:e.placement,"transfer-class-name":e.transferClassName,prefix:e.prefix,"max-tag-count":e.maxTagCount,"max-tag-placeholder":e.maxTagPlaceholder},on:{"on-change":e.handleChange,"on-query-change":e.handleQueryChange,"on-clear":e.handleClear,"on-open-change":e.handleOpenChange,"on-select":e.handleSelect},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},e._l(e.dictData,(function(a,s){return t("Option",{key:s,attrs:{value:a.value}},[e._v(e._s(a.title))])})),1)],1)},r=[],i=a(7877);const l={name:"dict",props:{value:"",dict:String,placeholder:{type:String,default:"请选择"},placement:{type:String,default:"bottom-start"},size:String,multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},transfer:{type:Boolean,default:!1},transferClassName:String,prefix:String,maxTagCount:Number,maxTagPlaceholder:Function,clearable:{type:Boolean,default:!0}},data(){return{currentValue:this.value,dictData:[],loading:!1}},methods:{getData(e){this.loading=!0,(0,i.i3)(e).then((e=>{this.loading=!1,e.success&&(this.dictData=e.result)}))},handleChange(e){this.$emit("input",e),this.$emit("on-change",e)},handleQueryChange(e){this.$emit("on-query-change",e)},handleClear(){this.$emit("on-clear","")},handleOpenChange(e){this.$emit("on-open-change",e)},handleSelect(e){this.$emit("on-select",e)},setCurrentValue(e){e!==this.currentValue&&(this.currentValue=e,this.$emit("on-change",this.currentValue))}},watch:{value(e){this.setCurrentValue(e)},dict(e){this.getData(e)}},mounted(){this.getData(this.dict)}},n=l;var o=a(1001),u=(0,o.Z)(n,s,r,!1,null,null,null);const d=u.exports},7204:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"set-password"},[t("Poptip",{attrs:{transfer:"",trigger:"focus",placement:"right",width:"250"}},[t("Input",{attrs:{type:"password",password:"",maxlength:e.maxlength,size:e.size,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly},on:{"on-change":e.handleChange},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}}),t("div",{class:e.tipStyle,attrs:{slot:"content"},slot:"content"},[t("div",{staticClass:"words"},[e._v("强度 : "+e._s(e.strength))]),t("Progress",{staticStyle:{margin:"13px 0"},attrs:{percent:e.strengthValue,status:e.progressStatus,"hide-info":""}})],1)],1)],1)},r=[];const i={name:"setPassword",props:{value:String,size:String,placeholder:{type:String,default:"请输入密码，长度为6-20个字符"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},maxlength:{type:Number,default:20}},data(){return{currentValue:this.value,tipStyle:"password-tip-none",strengthValue:0,progressStatus:"normal",strength:"无",grade:0}},methods:{checkStrengthValue(e){let t=0;return/\d/.test(e)&&t++,/[a-z]/.test(e)&&t++,/[A-Z]/.test(e)&&t++,/\W/.test(e)&&t++,e.length>=10&&t++,this.grade=t,t},strengthChange(){if(!this.currentValue)return this.tipStyle="password-tip-none",this.strength="无",void(this.strengthValue=0);let e=this.checkStrengthValue(this.currentValue);e<=1?(this.progressStatus="wrong",this.tipStyle="password-tip-weak",this.strength="弱",this.strengthValue=33):e>=2&&e<=4?(this.progressStatus="normal",this.tipStyle="password-tip-middle",this.strength="中",this.strengthValue=66):(this.progressStatus="success",this.tipStyle="password-tip-strong",this.strength="强",this.strengthValue=100)},handleChange(e){this.strengthChange(),this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue,this.grade,this.strength)},setCurrentValue(e){e!==this.currentValue&&(this.currentValue=e,this.strengthChange(),this.$emit("on-change",this.currentValue,this.grade,this.strength))}},watch:{value(e){this.setCurrentValue(e)}}},l=i;var n=a(1001),o=(0,n.Z)(l,s,r,!1,null,null,null);const u=o.exports},6413:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{display:"flex"}},[t("Input",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:e.placeholder,size:e.size,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxlength,icon:"md-eye"},on:{"on-change":e.handleChange},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},[t("Poptip",{staticStyle:{width:"17px",cursor:"pointer"},attrs:{slot:"append",transfer:"",trigger:"hover",title:"图片预览",placement:"right",width:"350"},slot:"append"},[t("Button",{attrs:{type:"primary",icon:"md-eye"}}),t("div",{attrs:{slot:"content"},slot:"content"},[t("img",{directives:[{name:"show",rawName:"v-show",value:e.currentValue,expression:"currentValue"}],staticStyle:{width:"100%",margin:"0 auto",display:"block",cursor:"zoom-in"},attrs:{src:e.currentValue},on:{click:e.viewImage}}),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.currentValue,expression:"!currentValue"}]},[e._v("无效的图片链接")]),t("a",{directives:[{name:"show",rawName:"v-show",value:e.currentValue,expression:"currentValue"}],staticStyle:{"margin-top":"5px","text-align":"right",display:"block"},on:{click:e.viewImage}},[e._v("查看大图")])])],1)],1),t("Upload",{attrs:{action:e.uploadFileUrl,headers:e.accessToken,"on-success":e.handleSuccess,"on-error":e.handleError,format:e.format,accept:e.accept,"max-size":1024*e.maxSize,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.beforeUpload,"show-upload-list":!1}},[t("Button",{attrs:{loading:e.loading,size:e.size,disabled:e.disabled,icon:e.icon}},[e._v("上传图片")])],1)],1)])},r=[],i=a(1949),l=a.n(i),n=a(7877);const o={name:"uploadPicInput",props:{value:String,size:String,placeholder:{type:String,default:"可输入图片链接"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},maxlength:Number,icon:{type:String,default:"ios-cloud-upload-outline"},maxSize:{type:Number,default:5},accept:{type:String,default:".jpg, .jpeg, .png, .gif"}},computed:{format(){if(this.accept){let e=[];return this.accept.split(",").forEach((t=>{e.push(t.replace(".","").replace(" ",""))})),e}return[]}},data(){return{accessToken:{},currentValue:this.value,loading:!1,uploadFileUrl:n.cT}},methods:{init(){this.accessToken={accessToken:this.getStore("accessToken")}},viewImage(){let e=new Image;e.src=this.currentValue;let t=new(l())(e,{hidden:function(){t.destroy()}});t.show()},handleFormatError(e){this.loading=!1,this.$Notice.warning({title:"不支持的文件格式",desc:"所选文件‘ "+e.name+" ’格式不正确, 请选择 "+this.accept+" 格式文件"})},handleMaxSize(e){this.loading=!1,this.$Notice.warning({title:"文件大小过大",desc:"所选文件‘ "+e.name+" ’大小过大, 不得超过 "+this.maxSize+"M."})},beforeUpload(){return this.loading=!0,!0},handleSuccess(e,t){this.loading=!1,e.success?(this.currentValue=e.result,this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)):this.$Message.error(e.message)},handleError(e,t,a){this.loading=!1,this.$Message.error(e.toString())},handleChange(e){this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)},setCurrentValue(e){e!==this.currentValue&&(this.currentValue=e,this.$emit("on-change",this.currentValue))}},watch:{value(e){this.setCurrentValue(e)}},mounted(){this.init()}},u=o;var d=a(1001),c=(0,d.Z)(u,s,r,!1,null,null,null);const h=c.exports},6551:(e,t,a)=>{a.d(t,{gG:()=>i,rV:()=>s,uo:()=>r});const s=(e,t,a)=>{var s=/^[a-zA-Z0-9_\u4e00-\u9fa5]{1,16}$/;t.length>16?a(new Error("长度不能超过16个字符")):s.test(t)?a():a(new Error("仅支持大小写英文、中文和下划线_"))},r=(e,t,a)=>{t.length<6?a(new Error("密码长度不得小于6位")):a()},i=(e,t,a)=>{var s=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;s.test(t)?a():a(new Error("手机号格式错误"))}},5894:(e,t,a)=>{a.d(t,{B9:()=>l,Dx:()=>i,M7:()=>u,Vp:()=>o,cn:()=>c,h8:()=>n,lE:()=>r,pC:()=>d,uz:()=>h});var s=a(7184);const r=e=>(0,s.A_)("/user/getUserList",e),i=e=>(0,s.j0)("/user/enable",e),l=e=>(0,s.j0)("/user/disable",e),n=e=>(0,s.j0)("/user/delByIds",e),o=e=>(0,s.oZ)("/user/importData",e),u=e=>(0,s.j0)("/user/resetPass",e),d=e=>(0,s.A_)("/role/getAllList",e),c=e=>(0,s.j0)("/user/admin/add",e),h=e=>(0,s.j0)("/user/admin/edit",e)}}]);