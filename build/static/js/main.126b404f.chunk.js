(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},48:function(e,t,a){e.exports=a(78)},57:function(e,t,a){},59:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(29),c=a.n(s),i=a(20),o=a(23),l=a(22),u=a(8),p=a(12),m=a(14),d=a(13),E=a(15),h=a(42),f=a.n(h),v=(a(57),function(e){function t(e){var a;return Object(u.a)(this,t),a=Object(m.a)(this,Object(d.a)(t).call(this,e)),t.validateAuthorization(e),a}return Object(E.a)(t,e),Object(p.a)(t,null,[{key:"validateAuthorization",value:function(e){var t=e.location.state&&e.location.state.isAuthorized;localStorage.getItem("user")||t||e.history.push("/login")}}]),t}(n.Component)),b=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleLogout=function(){localStorage.clear(),a.props.history.push("/login")},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("button",{onClick:this.handleLogout},"logout"),r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),t}(v),_=a(4),S=a(21),g=a(36);function O(e){var t=e.index,a=e.active;return t===a?"active":t<a?"completed":""}var y=function(e){for(var t=e.steps,a=e.active,n=[],s=1;s<=t;s++)n.push(r.a.createElement("li",{key:s,className:O({index:s,active:a})},r.a.createElement("span",null,"\xa0")));return r.a.createElement("ul",{className:"progress_bar"},n)};y.defaultProps={steps:2,active:1};var I=y,N=function(e){var t=e.children,a=e.type,n=e.className,s=e.onClick;return r.a.createElement("button",{type:a,className:"btn btn-default ".concat(n),onClick:s},t)};N.defaultProps={type:"text",className:"",onClick:function(){}};var R=N,T=function(e){var t=e.onUserSelection;return r.a.createElement("div",{className:"user_selection"},r.a.createElement("h2",{key:"heading",className:"btn_head"},"Are You"),r.a.createElement("div",{key:"form1",className:"step_form_col"},r.a.createElement("div",{className:"step_btn_wrapper cstm_button_wrapper"},r.a.createElement(R,{className:"cstm_btn ",onClick:function(){return t("role","journalist")}},"JOURNALIST"),r.a.createElement(R,{className:"cstm_btn mgrt0",onClick:function(){return t("role","pr")}},"PR"))))},j=new function e(){var t=this;Object(u.a)(this,e),this.ValidationService={messages:{},emailExpr:new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),linkExpr:new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/),required:function(e,t,a){return t.trim().length<1&&(this.messages.hasOwnProperty(e)&&this.messages[e].hasOwnProperty("required")?this.messages[e].required:"This field is required")},requiredArray:function(e,t,a){return t.length<1&&(this.messages.hasOwnProperty(e)&&this.messages[e].hasOwnProperty("requiredArray")?this.messages[e].requiredArray:"This field is required")},validEmail:function(e,t,a){return!this.emailExpr.test(t)&&(this.messages.hasOwnProperty(e)&&this.messages[e].hasOwnProperty("validEmail")?this.messages[e].validEmail:"Invalid email")},validLink:function(e,t,a){return""!==t&&!this.linkExpr.test(t)&&(this.messages.hasOwnProperty(e)&&this.messages[e].hasOwnProperty("validLink")?this.messages[e].validLink:"Invalid Link")},minLength:function(e,t,a){return!!(t.trim()&&t.trim().length<a)&&(this.messages.hasOwnProperty(e)&&this.messages[e].hasOwnProperty("minLength")?this.messages[e].minLength:"This field must be minimum ".concat(a," characters"))},validate:function(e,t){var a=this;this.messages=t||{};var n={},r=[];return"email"===e.type&&(e.validEmail=!0),Object.keys(e).forEach(function(t){(r=a.check(t,e[t].value,e[t].rules)).length>0&&(n[t]=r)}),Object.keys(n).length<1?null:n},check:function(e,t,a){var n=this;return Object.keys(a).map(function(r){var s=n[r](e,t,a[r]);return s||!1}).filter(function(e){return e})}},this.SignUpStep2Validation=function(e){var a=e.email,n=void 0===a?"":a,r=e.password,s=void 0===r?"":r,c=e.fullName,i=void 0===c?"":c;return t.ValidationService.validate({fullName:{value:i,rules:{required:!0}},email:{value:n,rules:{required:!0,validEmail:!0}},password:{value:s,rules:{required:!0,minLength:8}}})},this.SignUpStep3Validation=function(e){var a=e.outlet,n=void 0===a?"":a,r=e.position,s=void 0===r?"":r,c=e.twitter,i=void 0===c?"":c,o=e.company,l=void 0===o?"":o,u=e.linkedIn,p=void 0===u?"":u,m=e.role,d=void 0===m?"":m,E={position:{value:s,rules:{required:!0}},twitter:{value:i,rules:{validLink:!0}}};return t.isJournalist(d)?E.outlet={value:n,rules:{required:!0}}:(E.company={value:l,rules:{required:!0}},E.linkedIn={value:p,rules:{validLink:!0}}),t.ValidationService.validate(E)},this.SignUpStep4Validation=function(e){var a=e.topics,n=void 0===a?[]:a;return t.ValidationService.validate({topics:{value:n,rules:{requiredArray:!0}}})},this.loginValidation=function(e){var a=e.username,n=void 0===a?"":a,r=e.password,s=void 0===r?"":r;return t.ValidationService.validate({username:{value:n,rules:{required:!0}},password:{value:s,rules:{required:!0,minLength:8}}})},this.isSuccessInApi=function(e){return"SUCCESS"===e},this.isErrorInApi=function(e){return"ERROR"===e},this.getItemFromSession=function(e){return JSON.parse(localStorage.getItem(e))},this.isJournalist=function(e){return"journalist"===e},this.isPr=function(e){return"pr"===e},this.isEmptyObject=function(e){return 0===Object.entries(e).length&&e.constructor===Object}},w=function(e){var t=e.onSubmit,a=e.onBack,n=e.onChange,s=e.email,c=e.password,i=e.fullName,l=e.signup,u=l.code,p=l.message;return[r.a.createElement("h2",{key:"heading"},"Sign Up"),r.a.createElement("div",{key:"form1",className:"step_form_col"},r.a.createElement("div",{className:"custom_field"},r.a.createElement("input",{type:"text",name:"fullName",id:"fullName",value:i,placeholder:"Jane Appleseed",onChange:n}),r.a.createElement("label",{htmlFor:"fullName"},"Full Name")),r.a.createElement("div",{className:"custom_field"},r.a.createElement("input",{type:"email",name:"email",id:"email",value:s,placeholder:"JaneAppleseed@gmail.com",onChange:n}),r.a.createElement("label",{htmlFor:"email"},"Email Id")),r.a.createElement("div",{className:"custom_field"},r.a.createElement("input",{type:"password",name:"password",value:c,id:"password",placeholder:"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",onChange:n}),r.a.createElement("label",{htmlFor:"password"},"Password")),j.isErrorInApi(u)&&p.non_field_errors&&r.a.createElement("div",{className:"error"},p.non_field_errors.map(function(e,t){return r.a.createElement("p",{key:t},e)})),r.a.createElement("div",{className:"step_btn_wrapper"},r.a.createElement(R,{className:"white_bg_btn",onClick:a},"Back"),r.a.createElement(R,{className:"green_bg_btn",onClick:t},"Next"))),r.a.createElement("p",{key:"login",className:"text-center"},"Already have an account?",r.a.createElement("span",null,r.a.createElement(o.b,{to:"/login"},"Login")))]},C=a(32),A=function(e){var t=e.onSubmit,a=(e.onBack,e.onChange),n=e.outlet,s=e.company,c=e.position,i=e.twitter,o=e.linkedIn,l=e.signup,u=e.prProfile,p=e.error,m=(Object(C.a)(e,["onSubmit","onBack","onChange","outlet","company","position","twitter","linkedIn","signup","prProfile","error"]),l.data),d=u.code,E=u.message;return[r.a.createElement("div",{key:"form2",className:"step_form_col"},r.a.createElement("h2",{className:"mbot30"},"Tell us a little about yourself"),j.isJournalist(m.role)?r.a.createElement("div",null,r.a.createElement("div",{className:"full_widt"},r.a.createElement("h3",null,"Which outlets do you write for?"),r.a.createElement("div",{className:"custom_field"},r.a.createElement("input",{type:"text",name:"outlet",value:n,id:"outlet",placeholder:"Outlet Name",onChange:a}),r.a.createElement("label",{htmlFor:"outlet"},"Outlet"))),p&&p.outlet&&r.a.createElement("div",{className:"error"},p.outlet.map(function(e,t){return r.a.createElement("p",{key:t},e)}))):r.a.createElement("div",null,r.a.createElement("div",{className:"full_widt"},r.a.createElement("h3",null,"What's your company name?"),r.a.createElement("div",{className:"custom_field"},r.a.createElement("input",{type:"text",name:"company",value:s,id:"company",placeholder:"Company Name",onChange:a}),r.a.createElement("label",{htmlFor:"company"},"Company"))),p&&p.company&&r.a.createElement("div",{className:"error"},p.company.map(function(e,t){return r.a.createElement("p",{key:t},e)}))),r.a.createElement("div",{className:"full_widt"},r.a.createElement("h3",null,"Whats your position?"),r.a.createElement("div",{className:"custom_field"},r.a.createElement("input",{type:"text",name:"position",value:c,id:"position",placeholder:"Position Name",onChange:a}),r.a.createElement("label",{htmlFor:"position"},"Position"))),p&&p.position&&r.a.createElement("div",{className:"error"},p.position.map(function(e,t){return r.a.createElement("p",{key:t},e)})),r.a.createElement("div",{className:"full_widt mbot_zero"},r.a.createElement("h3",null,"Add social media"),j.isPr(m.role)&&r.a.createElement("div",{className:"custom_field"},r.a.createElement("input",{type:"text",name:"linkedIn",value:o,id:"linkedIn",placeholder:"linkedIn Name",onChange:a}),r.a.createElement("label",{htmlFor:"linkedIn"},"LinkediIn")),p&&p.linkedIn&&r.a.createElement("div",{className:"error"},p.linkedIn.map(function(e,t){return r.a.createElement("p",{key:t},e)})),r.a.createElement("div",{className:"custom_field"},r.a.createElement("input",{type:"text",name:"twitter",value:i,id:"twitter",placeholder:"Twitter Name",onChange:a}),r.a.createElement("label",{htmlFor:"twitter"},"Twitter"))),p&&p.twitter&&r.a.createElement("div",{className:"error"},p.twitter.map(function(e,t){return r.a.createElement("p",{key:t},e)})),j.isErrorInApi(d)&&E.non_field_errors&&r.a.createElement("div",{className:"error"},E.non_field_errors.map(function(e,t){return r.a.createElement("p",{key:t},e)})),r.a.createElement("div",{className:"step_btn_wrapper"},r.a.createElement(R,{className:"green_bg_btn signup_btn_cntr",onClick:t},"Next")))]},L=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={val:"",box:a.props.boxes||[]},a.putInBox=function(e){var t=a.state.box,n=a.props.onSelect;if(!t.filter(function(t){return t===e}).length){var r=t;r.push(e),n(r),a.setState({box:t,boxes:r,val:""})}},a.setVal=function(e){(0,a.props.onChange)(e.target.value),a.setState({val:e.target.value})},a.onItemSelection=function(e){return a.putInBox(e)},a.onCreate=function(e){var t=a.props.onCreate;a.putInBox(e),t(e)},a.renderList=function(){var e=a.state,t=e.box,n=e.val,s=a.props.list,c=[];if(s.length&&s.map(function(e){!t.filter(function(t){return t===e.text}).length&&e.text&&e.text.toLowerCase().includes(n.toLowerCase())&&("create"!==e.text.toLowerCase().split(" ")[0]&&c.push(e.text));return null}),""!==n)return r.a.createElement("div",{className:"auto-selection-list"},r.a.createElement("ul",null,c.length?c.map(function(e,t){return r.a.createElement("li",{key:t,onClick:function(){return a.putInBox(e)}},r.a.createElement("span",null,e))}):r.a.createElement("li",null,r.a.createElement("span",{onClick:function(){return a.onCreate(n)}},"create"))))},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.box,a=e.val;return r.a.createElement("div",{className:"auto-selection"},r.a.createElement("div",{className:"custom_field"},r.a.createElement("input",{value:a,onChange:this.setVal,type:"text",name:"topics",autocomplete:"off",id:"topics",placeholder:"Enter Any Topic"}),r.a.createElement("label",{htmlFor:"topics"},"Topic"),this.renderList()),r.a.createElement("div",null),r.a.createElement("ul",{className:"topic_list"},t.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("span",null,e))})))}}]),t}(n.Component);L.defaultProps={list:[],onCreate:function(){},onChange:function(){},onSelect:function(){}};var x=L,k=function(e){var t=e.topics,a=e.onSubmit,n=e.onBack,s=e.onCreate,c=e.onTodoSelection,i=e.journalistProfile,o=e.journalistInterests,l=e.getJournalistInterests,u=e.error,p=i.code,m=i.message;return r.a.createElement("div",{className:"step_form_col"},r.a.createElement("h2",{className:"mbot30"},"What do you write about?"),r.a.createElement("div",{className:"full_widt mbot_zero"},r.a.createElement("h3",null,"Topic"),r.a.createElement(x,{list:o.data&&o.data.results,onCreate:s,onSelect:c,boxes:t,onChange:l})),u&&u.topics&&r.a.createElement("div",{className:"error"},u.topics.map(function(e,t){return r.a.createElement("p",{key:t},e)})),j.isErrorInApi(p)&&m.non_field_errors&&r.a.createElement("div",{className:"error"},m.non_field_errors.map(function(e,t){return r.a.createElement("p",{key:t},e)})),r.a.createElement("div",{className:"step_btn_wrapper"},r.a.createElement(R,{type:"submit",className:"white_bg_btn",onClick:n},"Back"),r.a.createElement(R,{type:"submit",className:"green_bg_btn",onClick:a},"Next")))},U=new function e(){Object(u.a)(this,e),this.PUBLIC_PATH="",this.URL="http://18.224.60.229:2312",this.SIGNUP_URL="/api/users/signup",this.LOGIN_URL="/api/users/log-in",this.CREATE_JOURNALIST_URL="/api/journalist/create-journalist",this.CREATE_PR_URL="/api/pr/create-pr-profile",this.SURVEY_PR_URL="/api/users/survey/5",this.SURVEY_JOR_URL="/api/users/survey/6",this.SURVEY_SUBMISSION_URL="/api/users/survey/answer",this.GET_JOURNALIST_INTERESTS_URL="/auto/interest-autocomplete",this.CREATE_JOURNALIST_INTEREST_URL="/api/users/interest/create",this.GET="get",this.POST="post"},P=U.PUBLIC_PATH,F=new function e(){Object(u.a)(this,e),this.LOGO=P+"/images/logo.svg",this.WHITE_LOGO=P+"/images/white_logo.svg"},G=function(e){var t=Object(g.a)({},e),a=t.step;return 1===a?r.a.createElement(T,t):2===a?r.a.createElement(w,t):3===a?r.a.createElement(A,t):r.a.createElement(k,t)},J=function(e){var t=Object(g.a)({},e),a=t.step;return r.a.createElement("div",{className:"form_section"},r.a.createElement("div",{className:"form_logo"},r.a.createElement("img",{src:F.WHITE_LOGO,alt:""})),r.a.createElement("div",{className:"form_wrapper"},1!==a&&r.a.createElement(I,{steps:4,active:a-1}),r.a.createElement(G,t)))},D=(a(59),function(e){function t(e){var a;return Object(u.a)(this,t),a=Object(m.a)(this,Object(d.a)(t).call(this,e)),t.validateAuthorization(e),a}return Object(E.a)(t,e),Object(p.a)(t,null,[{key:"validateAuthorization",value:function(e){localStorage.getItem("user")&&e.history.push("/")}}]),t}(n.Component)),V=a(10),q=a(26),Y=a(47),B={data:Object(_.a)({},j.getItemFromSession("user"))};var z={data:Object(_.a)({},j.getItemFromSession("user"))};var W={data:{}};var H={data:{}};var $={data:{}};var M={data:{}};var Z=Object(V.c)({signup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNUP_INITATED":return Object(_.a)({},e,{code:"uninitiated"});case"SIGNUP_STARTED":return Object(_.a)({},e,{code:"ongoing"});case"SIGNUP_SUCCESS":case"SIGNUP_FAILED":return Object(_.a)({},e,t.payload);default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_INITIATED":return Object(_.a)({},e,{code:"uninitiated"});case"LOGIN_STARTED":return Object(_.a)({},e,{code:"ongoing"});case"LOGIN_SUCCESS":case"LOGIN_FAILED":return Object(_.a)({},e,t.payload);default:return e}},journalistProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_JOURNALIST_PROFILE_INITIATED":return Object(_.a)({},e,{code:"uninitiated"});case"CREATE_JOURNALIST_PROFILE_STARTED":return Object(_.a)({},e,{code:"ongoing"});case"CREATE_JOURNALIST_PROFILE_SUCCESS":case"CREATE_JOURNALIST_PROFILE_FAILED":return Object(_.a)({},e,t.payload);default:return e}},prProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PR_PROFILE_INITIATED":return Object(_.a)({},e,{code:"uninitiated"});case"CREATE_PR_PROFILE_STARTED":return Object(_.a)({},e,{code:"ongoing"});case"CREATE_PR_PROFILE_SUCCESS":case"CREATE_PR_PROFILE_FAILED":return Object(_.a)({},e,t.payload);default:return e}},survey:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SURVEY_INITIATED":return Object(_.a)({},e,{code:"uninitiated"});case"GET_SURVEY_STARTED":return Object(_.a)({},e,{code:"ongoing"});case"GET_SURVEY_SUCCESS":case"GET_SURVEY_FAILED":return Object(_.a)({},e,t.payload);default:return e}},journalistInterests:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_JOURNALIST_INITIATED":return Object(_.a)({},e,{code:"uninitiated"});case"GET_JOURNALIST_STARTED":return Object(_.a)({},e,{code:"ongoing"});case"GET_JOURNALIST_SUCCESS":case"GET_JOURNALIST_FAILED":return Object(_.a)({},e,t.payload);default:return e}}}),Q={login:{},signup:{},journalistProfile:{},prProfile:{},survey:{},journalistInterests:{}},K=a(2),X=a.n(K),ee=a(5),te=a(24),ae=a(44),ne=a.n(ae),re=function(){var e=Object(te.a)(X.a.mark(function e(t){var a,n,r=arguments;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>1&&void 0!==r[1]?r[1]:"get",n=r.length>2?r[2]:void 0,e.abrupt("return",ne()("".concat(U.URL).concat(t),{method:a,body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json().then(function(t){return{json:t,response:e}})}).then(function(e){var t=e.json;return e.response.ok?t:Promise.reject(t)}).then(function(e){return e},function(e){return e}));case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),se=X.a.mark(function e(){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)("LOGIN",X.a.mark(function e(t){var a,n;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.b)({type:"LOGIN_STARTED"});case 2:return e.prev=2,e.next=5,re(U.LOGIN_URL,U.POST,t.payload);case 5:if(!(a=e.sent).token){e.next=15;break}return localStorage.setItem("token",a.token),(n=Object(_.a)({},a)).data=Object(_.a)({},n.data),e.next=12,Object(ee.b)({type:"LOGIN_SUCCESS",payload:{data:a,code:"SUCCESS"}});case 12:localStorage.setItem("user",JSON.stringify(n.data)),e.next=17;break;case 15:return e.next=17,Object(ee.b)({type:"LOGIN_FAILED",payload:{message:a,code:"ERROR"}});case 17:e.next=23;break;case 19:return e.prev=19,e.t0=e.catch(2),e.next=23,Object(ee.b)({type:"LOGIN_FAILED",payload:e.t0});case 23:case"end":return e.stop()}},e,null,[[2,19]])}));case 2:case"end":return e.stop()}},e)}),ce=X.a.mark(function e(){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)("SIGNUP",X.a.mark(function e(t){var a,n;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.b)({type:"SIGNUP_STARTED"});case 2:return e.prev=2,e.next=5,re(U.SIGNUP_URL,U.POST,t.payload);case 5:if("SUCCESS"!==(a=e.sent).code){e.next=12;break}return(n=Object(_.a)({},a)).data=Object(_.a)({},n.data,t.props),e.next=11,Object(ee.b)({type:"SIGNUP_SUCCESS",payload:n});case 11:localStorage.setItem("user",JSON.stringify(n.data));case 12:if(!a.status){e.next=15;break}return e.next=15,Object(ee.b)({type:"SIGNUP_FAILED",payload:a.status});case 15:e.next=21;break;case 17:return e.prev=17,e.t0=e.catch(2),e.next=21,Object(ee.b)({type:"SIGNUP_FAILED",payload:e.t0});case 21:case"end":return e.stop()}},e,null,[[2,17]])}));case 2:case"end":return e.stop()}},e)}),ie=X.a.mark(function e(){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)("CREATE_JOURNALIST_PROFILE",X.a.mark(function e(t){var a;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.b)({type:"CREATE_JOURNALIST_PROFILE_STARTED"});case 2:return e.prev=2,e.next=5,re(U.CREATE_JOURNALIST_URL,U.POST,t.payload);case 5:if("SUCCESS"!==(a=e.sent).code){e.next=9;break}return e.next=9,Object(ee.b)({type:"CREATE_JOURNALIST_PROFILE_SUCCESS",payload:a});case 9:if(!a.status){e.next=12;break}return e.next=12,Object(ee.b)({type:"CREATE_JOURNALIST_PROFILE_FAILED",payload:a.status});case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(2),e.next=18,Object(ee.b)({type:"CREATE_JOURNALIST_PROFILE_FAILED",payload:e.t0});case 18:case"end":return e.stop()}},e,null,[[2,14]])}));case 2:case"end":return e.stop()}},e)}),oe=X.a.mark(function e(){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)("CREATE_PR_PROFILE",X.a.mark(function e(t){var a;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.b)({type:"CREATE_PR_PROFILE_STARTED"});case 2:return e.prev=2,e.next=5,re(U.CREATE_PR_URL,U.POST,t.payload);case 5:if("SUCCESS"!==(a=e.sent).code){e.next=9;break}return e.next=9,Object(ee.b)({type:"CREATE_PR_PROFILE_SUCCESS",payload:a});case 9:if(!a.status){e.next=12;break}return e.next=12,Object(ee.b)({type:"CREATE_PR_PROFILE_FAILED",payload:a.status});case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(2),e.next=18,Object(ee.b)({type:"CREATE_PR_PROFILE_FAILED",payload:e.t0});case 18:case"end":return e.stop()}},e,null,[[2,14]])}));case 2:case"end":return e.stop()}},e)}),le=X.a.mark(function e(){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)("GET_PR_SURVEY",X.a.mark(function e(t){var a;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.b)({type:"SURVEY_STARTED"});case 2:return e.prev=2,e.next=5,re(U.SURVEY_PR_URL,U.GET,t.payload);case 5:return a=e.sent,e.next=8,Object(ee.b)({type:"GET_SURVEY_SUCCESS",payload:{CODE:"SUCCESS",data:a}});case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(2),e.next=14,Object(ee.b)({type:"GET_SURVEY_FAILED",payload:e.t0});case 14:case"end":return e.stop()}},e,null,[[2,10]])}));case 2:case"end":return e.stop()}},e)}),ue=X.a.mark(function e(){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)("GET_JOURNALIST_SURVEY",X.a.mark(function e(t){var a;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.b)({type:"SURVEY_STARTED"});case 2:return e.prev=2,e.next=5,re(U.SURVEY_JOR_URL,U.GET,t.payload);case 5:return a=e.sent,e.next=8,Object(ee.b)({type:"GET_SURVEY_SUCCESS",payload:{CODE:"SUCCESS",data:a}});case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(2),e.next=14,Object(ee.b)({type:"GET_SURVEY_FAILED",payload:e.t0});case 14:case"end":return e.stop()}},e,null,[[2,10]])}));case 2:case"end":return e.stop()}},e)}),pe=X.a.mark(function e(){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)("GET_JOURNALIST_INTERESTS",X.a.mark(function e(t){var a;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.b)({type:"GET_JOURNALIST_STARTED"});case 2:return e.prev=2,e.next=5,re("".concat(U.GET_JOURNALIST_INTERESTS_URL,"?q=").concat(t.payload),U.GET);case 5:return a=e.sent,e.next=8,Object(ee.b)({type:"GET_JOURNALIST_SUCCESS",payload:{code:"SUCCESS",data:a}});case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(2),e.next=14,Object(ee.b)({type:"GET_JOURNALIST_FAILED",payload:e.t0});case 14:case"end":return e.stop()}},e,null,[[2,10]])}));case 2:case"end":return e.stop()}},e)}),me=X.a.mark(function e(){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)("CREATE_JOURNALIST_INTEREST",X.a.mark(function e(t){var a;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re(U.CREATE_JOURNALIST_INTEREST_URL,U.POST,t.payload);case 3:if(!(a=e.sent)){e.next=7;break}return e.next=7,Object(ee.b)({type:"GET_JOURNALIST_INTERESTS",payload:a.name});case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),e.next=13,Object(ee.b)({type:"GET_JOURNALIST_FAILED",payload:e.t0});case 13:case"end":return e.stop()}},e,null,[[0,9]])}));case 2:case"end":return e.stop()}},e)}),de=X.a.mark(function e(){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.a)([se(),ce(),oe(),ie(),le(),ue(),pe(),me()]);case 2:case"end":return e.stop()}},e)}),Ee=a(45),he=a.n(Ee),fe=Object(Y.a)(),ve=Object(V.e)(function(e,t){return"LOGOUT"===t.type?Q:Z(e,t)},Object(V.a)(fe,he.a));fe.run(de);var be=ve,_e={message:{},data:{},code:""},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be.getState();return e.signup?e.signup:_e},ge=Object(q.a)(Se,function(e){return e.data.user_id}),Oe=(Object(q.a)(Se,function(e){return e.data.role}),Object(q.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be.getState();return e.journalistProfile?e.journalistProfile:_e},function(e){return e.data.code})),ye=(Object(q.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be.getState();return e.prProfile?e.prProfile:_e},function(e){return e.data.code}),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleSubmit=function(){var e=a.state,t=e.step,n=e.role,r=a.props,s=r.signUp,c=r.createPrProfile,i=r.createJournalistProfile;if(2===t)j.SignUpStep2Validation(a.state)||s(a.state);else if(3===t){var o=j.SignUpStep3Validation(a.state);o?a.setState({error:o}):j.isJournalist(n)?a.goToNextForm():c(a.state)}else if(4===t){var l=j.SignUpStep4Validation(a.state);l?a.setState({error:l}):i(a.state)}},a.goToNextForm=function(){return a.setState({step:a.state.step+1})},a.handleCancel=function(){a.setState({step:a.state.step-1})},a.handleChange=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a.handleRangeChange=function(e,t){a.setState(Object(S.a)({},e,t))},a.handleUserSelection=function(e,t){a.setState(Object(S.a)({},e,t),function(){localStorage.setItem("role",a.state.role)}),a.goToNextForm()},a.createInterest=function(e){(0,a.props.createInterest)(e)},a.handleTodoSelection=function(e){a.setState({topics:e})},a.state={step:1,pitches:25,relevant:25,responses:25,topics:[],role:a.getUserRole(e)},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"getUserRole",value:function(e){return e.signup.data&&e.signup.data.user_id?3:1}},{key:"render",value:function(){return r.a.createElement(J,Object.assign({},this.state,this.props,{onSubmit:this.handleSubmit,onBack:this.handleCancel,onChange:this.handleChange,onRangeChange:this.handleRangeChange,onUserSelection:this.handleUserSelection,onCreate:this.createInterest,onTodoSelection:this.handleTodoSelection}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.signup,n=e.prProfile,r=e.journalistProfile,s=t.step;return j.isSuccessInApi(a.code)&&2===s?{step:3}:((j.isSuccessInApi(n.code)&&3===s||j.isSuccessInApi(r.code)&&4===s)&&e.history.push({pathname:"/survey",state:{isAuthorized:!0}}),null)}}]),t}(D)),Ie=Object(i.b)(function(e){return Object(_.a)({},e)},function(e){return Object(V.b)({signUp:function(e){return{type:"SIGNUP",payload:{email:(t=e).email,password:t.password,full_name:t.fullName},props:{role:t.role}};var t},createPrProfile:function(e){return function(e){var t=e.position,a=e.company,n=e.linkedIn,r=e.twitter;return e.userId,{type:"CREATE_PR_PROFILE",payload:{user_id:ge(),company:a,position:t,linkedin_url:n||"",twitter_url:r||""}}}(e)},createJournalistProfile:function(e){return function(e){var t=e.position,a=e.outlet,n=e.topics,r=e.twitter,s="";return n.map(function(e){return s=""===s?e:s+","+e,null}),{type:"CREATE_JOURNALIST_PROFILE",payload:{user_id:ge(),outlet:a,position:t,topics:s,twitter_url:r||""}}}(e)},getJournalistInterests:function(e){return function(e){return{type:"GET_JOURNALIST_INTERESTS",payload:e}}(e)},createInterest:function(e){return function(e){return{type:"CREATE_JOURNALIST_INTEREST",payload:{name:e}}}(e)}},e)})(ye),Ne=function(e){var t=e.onSubmit,a=e.onChange,n=e.login,s=e.error,c=n.code,i=n.message;return r.a.createElement("div",{className:"form_section"},r.a.createElement("div",{className:"form_logo"},r.a.createElement("img",{src:F.WHITE_LOGO,alt:""})),r.a.createElement("div",{className:"form_wrapper"},r.a.createElement("h2",null,"Login"),r.a.createElement("div",{className:"step_form_col"},r.a.createElement("div",{className:"custom_field"},r.a.createElement("input",{type:"text",name:"username",id:"username",placeholder:"JaneAppleseed@gmail.com",onChange:a}),r.a.createElement("label",{htmlFor:"username"},"Email Id")),s&&s.username&&r.a.createElement("div",{className:"error"},s.username.map(function(e,t){return r.a.createElement("p",{key:t},e)})),r.a.createElement("div",{className:"custom_field"},r.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",onChange:a}),r.a.createElement("label",{htmlFor:"password"},"Password")),s&&s.password&&r.a.createElement("div",{className:"error"},s.password.map(function(e,t){return r.a.createElement("p",{key:t},e)})),j.isErrorInApi(c)&&i.non_field_errors&&r.a.createElement("div",{className:"error"},i.non_field_errors.map(function(e,t){return r.a.createElement("p",{key:t},e)})),r.a.createElement("div",{className:"step_btn_wrapper"},r.a.createElement(R,{className:"green_bg_btn btn_cntr",onClick:t},"Submit"))),r.a.createElement("p",{className:"text-center sign_up_marg"},"New user?",r.a.createElement("span",null,r.a.createElement(o.b,{to:"/signup"},"Signup")))))},Re=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(S.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=a.props.doLogin,t=j.loginValidation(a.state);t?a.setState({error:t}):(a.setState({error:null}),e(a.state))},a.state={},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(Ne,Object.assign({},this.state,this.props,{onChange:this.handleChange,onSubmit:this.handleSubmit}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.login;return j.isSuccessInApi(a.code)&&e.history.push({pathname:"/survey",state:{isAuthorized:!0}}),null}}]),t}(D),Te=Object(i.b)(function(e){return Object(_.a)({},e)},function(e){return Object(V.b)({doLogin:function(e){return{type:"LOGIN",payload:{username:(t=e).username,password:t.password}};var t}},e)})(Re),je=a(46),we=a.n(je),Ce=(a(76),function(e){var t=e.value,a=e.max,n=e.minValue,s=e.maxValue,c=e.onChange,i=e.className,o=e.step;return r.a.createElement("div",{className:i},r.a.createElement(we.a,{step:o,value:t,minValue:n,maxValue:s,maxLabel:a,onChange:c}))});Ce.defaultProps={step:0,className:"input_range",active:1,minValue:0,maxValue:10,value:0,onChange:function(){}};var Ae=Ce,Le=function(e){var t=e.onRangeChange,a=e.answers,n=e.id,s=Object(C.a)(e,["onRangeChange","answers","id"]);return r.a.createElement("div",{className:"slidecontainer"},r.a.createElement("p",null,s.text),r.a.createElement(Ae,{minValue:0,step:10,value:a[n].value,maxValue:40,onChange:function(e){return t(Object(_.a)({},s,{id:n,value:e}))}}),r.a.createElement("ul",{className:"range_list"},r.a.createElement("li",null,"0"),r.a.createElement("li",null,"1-10"),r.a.createElement("li",null,"11-20"),r.a.createElement("li",null,"21-30"),r.a.createElement("li",null,"40+")))},xe=function(e){var t=e.onBack,a=e.onSubmit,n=e.survey,s=e.answers,c=e.onRangeChange,i=n.data.questions||[];return r.a.createElement("div",{className:"form_section"},r.a.createElement("div",{className:"form_logo"},r.a.createElement("img",{src:F.WHITE_LOGO,alt:""})),r.a.createElement("div",{className:"form_wrapper"},r.a.createElement("div",{className:"step_form_col"},r.a.createElement("h2",null,"Just a few Questions"),i.map(function(e,t){return r.a.createElement(Le,Object.assign({key:t},e,{onRangeChange:c,answers:s}))}),r.a.createElement("div",{className:"step_btn_wrapper"},r.a.createElement(R,{type:"submit",className:"white_bg_btn",onClick:t},"Back"),r.a.createElement(R,{type:"submit",className:"green_bg_btn",onClick:a},"Finish")))))},ke=function(){var e=Object(te.a)(X.a.mark(function e(t){var a,n,r;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.answers,n={},Object.keys(a).map(function(e){return n["".concat(e)]="".concat(a[e].value," answer")}),r={user_id:ge(),question_answer:JSON.stringify(n)},e.abrupt("return",re(U.SURVEY_SUBMISSION_URL,U.POST,r));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Ue=function(e){var t=e.children,a=e.isLoading,n=e.className;return a?r.a.createElement("div",{className:n},"isLoading..."):t};Ue.defaultProps={isLoading:!0,className:""};var Pe=Ue,Fe=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={answers:{}},a.handleRangeChange=function(e){var t=a.state.answers;t[e.id].value=e.value,a.setState({answers:t})},a.handleCancel=function(){return a.props.history.push("/")},a.handleSubmit=Object(te.a)(X.a.mark(function e(){var t;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke(a.state);case 2:t=e.sent,j.isSuccessInApi(t.code)&&a.props.history.push("/");case 4:case"end":return e.stop()}},e)})),a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getSurvey)()}},{key:"render",value:function(){return r.a.createElement(Pe,{isLoading:j.isEmptyObject(this.props.survey.data)||!1},r.a.createElement(xe,Object.assign({},this.props,this.state,{onRangeChange:this.handleRangeChange,onSubmit:this.handleSubmit,onBack:this.handleCancel})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=t.answers,n=e.survey.data;if(j.isEmptyObject(a)&&n&&n.questions){var r={};return n.questions.map(function(e){return r[e.id]={id:e.id,value:0}}),{answers:r}}return null}}]),t}(v),Ge=Object(i.b)(function(e){return Object(_.a)({},e)},function(e){return Object(V.b)({getSurvey:function(e){return j.isSuccessInApi(Oe())?{type:"GET_JOURNALIST_SURVEY"}:{type:"GET_PR_SURVEY"}}},e)})(Fe),Je=function(e){return r.a.createElement(o.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:function(e){return r.a.createElement(b,e)}}),r.a.createElement(l.a,{exact:!0,path:"/signup",component:function(e){return r.a.createElement(Ie,e)}}),r.a.createElement(l.a,{exact:!0,path:"/login",component:function(e){return r.a.createElement(Te,e)}}),r.a.createElement(l.a,{exact:!0,path:"/survey",component:function(e){return r.a.createElement(Ge,e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(77);c.a.render(r.a.createElement(i.a,{store:be},r.a.createElement(Je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.126b404f.chunk.js.map