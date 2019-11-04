(this["webpackJsonplogin-page"]=this["webpackJsonplogin-page"]||[]).push([[0],{24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),l=a.n(s),i=(a(29),a(8)),o=a(9),c=a(11),m=a(10),d=a(5),u=a(12),h=(a(30),a(13)),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={email:"",password:"",messageEmail:"",messagePassword:""},a.handleEmail=a.handleEmail.bind(Object(d.a)(a)),a.handlePassword=a.handlePassword.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleEmail",value:function(e){this.setState({email:e.target.value,messageEmail:""})}},{key:"handlePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(){var e=this;""===this.state.email?this.setState({messageEmail:"Please fill out these fields"}):""===this.state.password?this.setState({messagePassword:"Please fill out these fields"}):fetch("http://localhost:8080/login",{method:"POST",body:JSON.stringify({email:this.state.email,password:this.state.password}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){!0===t.error?("Invalid password"===t.message&&e.setState({messagePassword:t.message,messageEmail:"",formError:!0}),"User does not exist"===t.message&&e.setState({messageEmail:t.message,messagePassword:""})):(t.admin&&e.props.setUsers(t.users),e.props.changeState(),e.props.setUser(t.user),e.props.history.push("/welcome"))})).catch((function(e){return console.error("Error:",e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"main-container"},r.a.createElement("div",{id:"login-container"},r.a.createElement("label",{id:"label-id",htmlFor:"uname"},"Username"),r.a.createElement("input",{onChange:this.handleEmail,className:"input-field",type:"email",placeholder:"Enter email",name:"email",required:!0}),r.a.createElement("div",{className:"errorHandle"},this.state.messageEmail),r.a.createElement("label",{id:"label-id",htmlFor:"uname"},"Password"),r.a.createElement("input",{onChange:this.handlePassword,className:"input-field",type:"password",placeholder:"Enter Password",name:"password",required:!0}),r.a.createElement("div",{className:"errorHandle"},this.state.messagePassword),r.a.createElement("div",{className:"btn-container-two"},r.a.createElement("button",{id:"login-user",type:"submit",onClick:function(){return e.handleLogin()}},"Login"),r.a.createElement("div",{id:"btn-contain"},r.a.createElement("label",{id:"labelsecond",htmlFor:"newuser"},"New User"),r.a.createElement("button",{id:"register-btn",type:"submit"},r.a.createElement(h.b,{to:"/register"},"Register"))))))}}]),t}(r.a.Component),g=a(23),E=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,f=function(e){var t=!0;return Object.values(e).forEach((function(e){e.length>0&&(t=!1)})),t},b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleSumbit=function(e){e.preventDefault(),f(a.state.formErrors)?(console.log("--submitting--\n        firstName: ".concat(a.state.firstName,"\n        lastName: ").concat(a.state.lastName,"\n        email: ").concat(a.state.email,"\n        password: ").concat(a.state.password,"\n        ")),fetch("http://localhost:8080/register",{method:"POST",body:JSON.stringify({firstName:a.state.firstName,lastName:a.state.lastName,email:a.state.email,password:a.state.password,admin:a.state.admin}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("Success:",console.log(e)),a.props.history.push("/login")})).catch((function(e){return console.error("Error:",e)}))):console.log("Form invalid")},a.handleChange=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value,s=a.state.formErrors;switch(n){case"firstName":s.firstName=0===r.length?"Field required":r.length<3?"minimum 3 characters required":"";break;case"lastName":s.lastName=0===r.length?"Field required":r.length<3?"minimum 3 characters required":"";break;case"email":s.email=0===r.length?"Field required":E.test(r)&&r.length>0?"":"Invalid email";break;case"password":s.password=0===r.length?"Field required":r.length<6?"minimum 6 characters required":""}a.setState(Object(g.a)({formErrors:s},n,r))},a.state={firstName:"",lastName:"",email:"",password:"",admin:"",formErrors:{firstName:"*Field Required",lastName:"*Field Required",email:"*Field Required",password:"*Field Required"}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.formErrors;return r.a.createElement("div",{id:"main-container"},r.a.createElement("div",{id:"login-container"},r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{id:"label-id",htmlFor:"firstname"},"First name"),r.a.createElement("input",{onChange:this.handleChange,className:"input-field",type:"text",placeholder:"Enter Username",name:"firstName",required:"required"}),e.firstName.length>0&&r.a.createElement("span",{className:"formErrors"},e.firstName)),r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{id:"label-id",htmlFor:"lastName"},"Last name"),r.a.createElement("input",{onChange:this.handleChange,className:"input-field",type:"text",placeholder:"Enter Lastname",name:"lastName",required:"required"}),e.lastName.length>0&&r.a.createElement("span",{className:"formErrors"},e.lastName)),r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{id:"label-id",htmlFor:"email"},"email"),r.a.createElement("input",{onChange:this.handleChange,className:"input-field",type:"email",placeholder:"Enter your email",name:"email",required:"required"}),e.email.length>0&&r.a.createElement("span",{className:"formErrors"},e.email)),r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{id:"label-id",htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.handleChange,className:"input-field",type:"password",placeholder:"Enter Password",name:"password",required:"required"}),e.password.length>0&&r.a.createElement("span",{className:"formErrors"},e.password)),r.a.createElement("div",{className:"btn-container"},r.a.createElement("button",{id:"login-btn",type:"submit",onClick:this.handleSumbit},"Register"))))}}]),t}(r.a.Component),v=a(6);var N=function(e){function t(e){var t=e.target.value;fetch("http://localhost:8080/admin/add",{method:"POST",body:JSON.stringify({email:t}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){n(t)})).catch((function(e){return console.error("Error:",e)}))}function a(e){var t=e.target.value;fetch("http://localhost:8080/admin/remove",{method:"POST",body:JSON.stringify({email:t}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){n(t)})).catch((function(e){return console.error("Error:",e)}))}function n(t){var a=e.users,n=a.findIndex((function(e){return e.email===t}));a[n].admin=!a[n].admin,e.setUsers(a)}return r.a.createElement(r.a.Fragment,null,e.loggedIn?r.a.createElement("div",{className:"welcome-page"},r.a.createElement("h1",{id:"welcome-msg"},"Welcome to NOBROKER,"," ",e.user.firstName+" "+e.user.lastName),r.a.createElement("div",{id:"btn-container"},r.a.createElement("button",{id:"logout-btn",type:"submit",onClick:function(){e.changeState()}},"Logout")),e.user.admin?r.a.createElement("div",{id:"table-container"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",{id:"header"},r.a.createElement("th",null,"First name"),r.a.createElement("th",null,"Last name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Add admin")),e.users.map((function(e,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",null,e.firstName),r.a.createElement("td",null,e.lastName),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.admin?r.a.createElement("button",{id:"make-admin-btn",value:e.email,onClick:a},"remove"):r.a.createElement("button",{id:"make-admin-btn",value:e.email,onClick:t},"add")))}))))):""):r.a.createElement(v.a,{to:"/login"}))},w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={loggedIn:!1,admin:null,users:null,user:null},a.changeState=a.changeState.bind(Object(d.a)(a)),a.setUsers=a.setUsers.bind(Object(d.a)(a)),a.setUser=a.setUser.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"changeState",value:function(){this.setState((function(e){return{loggedIn:!e.loggedIn}}))}},{key:"setUsers",value:function(e){this.setState({users:e})}},{key:"setUser",value:function(e){this.setState({user:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(v.b,{exact:!0,path:"/",render:function(t){return r.a.createElement(p,Object.assign({},t,{setUsers:function(t){return e.setUsers(t)},setUser:function(t){return e.setUser(t)},changeState:e.changeState}))}}),r.a.createElement(v.b,{path:"/Login",render:function(t){return r.a.createElement(p,Object.assign({},t,{setUsers:function(t){return e.setUsers(t)},setUser:function(t){return e.setUser(t)},changeState:e.changeState}))}}),r.a.createElement(v.b,{path:"/register",component:b}),r.a.createElement(v.b,{path:"/Welcome",render:function(t){return r.a.createElement(N,Object.assign({},t,{changeState:e.changeState,loggedIn:e.state.loggedIn,user:e.state.user,users:e.state.users,setUsers:function(t){return e.setUsers(t)}}))}}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.f8c61685.chunk.js.map