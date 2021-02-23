(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{46:function(e,t,n){e.exports=n(76)},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),l=n.n(c),u=n(2),o=n.n(u),s=n(5),i=n(3),m=n(24),p=n(4),f=n(40),b=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],l=n[1],u={display:c?"none":""},o={display:c?"":"none"},s=function(){l(!c)};return r.a.createElement("div",null,r.a.createElement("div",{style:u},r.a.createElement("button",{onClick:s},e.buttonLabel)),r.a.createElement("div",{style:o},e.children,r.a.createElement("button",{onClick:s},"cancel")))},d=n(12),v=n.n(d),g=null,h=function(e){g="bearer ".concat(e)},E={getAll:function(){return v.a.get("/api/blogs").then((function(e){return e.data}))},create:function(){var e=Object(s.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(n),a={headers:{Authorization:g}},e.next=4,v.a.post("/api/blogs",t,a);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),setToken:h,update:function(){var e=Object(s.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.put("".concat("/api/blogs","/").concat(t),n);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(s.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:g}},e.next=3,v.a.delete("".concat("/api/blogs","/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=n(41),O=n.n(w),j=n(43),y=n.n(j),k=function(e){var t=e.blog,n=e.setUpdate,a=e.blogs,c=e.setBlogs,l=e.setShowUserProfile,u=function(){var e=Object(s.a)(o.a.mark((function e(r){var l,u,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.id,r.preventDefault(),u=t.likes+1,s=Object(f.a)({},t,{likes:u}),e.next=6,E.update(t.id,s);case 6:c(a.map((function(e){return e.id!==l?e:s}))),n(Math.floor(100*Math.random()));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(s.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!window.confirm("Do you wante to Delete ".concat(t.title," ?"))){e.next=5;break}return e.next=4,E.remove(t.id);case 4:c(a.filter((function(e){return e.id!==t.id})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=t.user;return r.a.createElement("div",{style:{},className:"blog"},r.a.createElement("h2",null,t.title),r.a.createElement("span",{onClick:function(){return l(m)}},t.author),r.a.createElement(b,{buttonLabel:"view"},r.a.createElement("div",null,t.title," ",r.a.createElement("br",null)," ",t.url," ",r.a.createElement("br",null)," ",t.author," ",r.a.createElement("br",null)," likes: ",t.likes," ",r.a.createElement("br",null),r.a.createElement("button",{type:"submit",onClick:u},r.a.createElement(O.a,null)),r.a.createElement("button",{type:"submit",onClick:i},r.a.createElement(y.a,null)))))},x={login:function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,a=e.handlePasswordChange,c=e.username,l=e.password;return r.a.createElement("form",{className:"form",onSubmit:t},r.a.createElement("input",{value:c,placeholder:"Username",onChange:n}),r.a.createElement("input",{type:"password",placeholder:"Password",value:l,onChange:a}),r.a.createElement("button",{className:"button",type:"submit"},"Login"))},C=n(44),N=n.n(C),U=n(22),B=n.n(U),P=function(e){var t=e.showWhenVisible,n=e.setNewBlogVisible,a=e.newTitle,c=e.setNewTitle,l=e.newAuthor,u=e.setNewAuthor,o=e.newUrl,s=e.setNewUrl,i=e.addBlog;return r.a.createElement("div",null,r.a.createElement("div",{style:t},r.a.createElement("h1",null,"Create new Blog"),r.a.createElement("form",null,"title:",r.a.createElement("input",{type:"text",value:a,onChange:function(e){var t=e.target;return c(t.value)}}),r.a.createElement("br",null),"author:",r.a.createElement("input",{type:"text",value:l,onChange:function(e){var t=e.target;return u(t.value)}}),r.a.createElement("br",null),"Blog :",r.a.createElement("br",null),r.a.createElement("textarea",{value:o,onChange:function(e){var t=e.target;return s(t.value)},rows:"5",cols:"30"}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",onClick:i},r.a.createElement(N.a,null)),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",onClick:function(){return n(!1)}},r.a.createElement(B.a,null)))))},T={signin:function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/users",t);case 2:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getBlogs:function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat("/api/users","/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(e,t){var n=Object(a.useState)(""),c=Object(i.a)(n,2),l=c[0],u=c[1],m=Object(a.useState)(""),p=Object(i.a)(m,2),f=p[0],b=p[1],d=Object(a.useState)(""),v=Object(i.a)(d,2),g=v[0],h=v[1],E=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,T.signin({username:f,password:g,email:l});case 4:u(""),b(""),h(""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{className:"form"},r.a.createElement("h1",null,"Sign UP"),r.a.createElement("input",{type:"text",placeholder:"Email",value:l,onChange:function(e){var t=e.target;return u(t.value)}}),r.a.createElement("input",{type:"text",placeholder:"Username",value:f,onChange:function(e){var t=e.target;return b(t.value)}}),r.a.createElement("input",{type:"password",placeholder:"Password",value:g,onChange:function(e){var t=e.target;return h(t.value)}}),r.a.createElement("button",{className:"button",type:"submit",onClick:E},"Sign Up"))},D=function(e){var t=e.showUserProfile,n=e.getUsersBlogs,a=e.setShowUserProfile;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,t.username),r.a.createElement("br",null),console.log(n),r.a.createElement("button",{className:"button",onClick:function(){return a("")}},"Back"))},M=function(e){var t=e.message,n=e.status;return null===t?null:!1===n?r.a.createElement("div",{className:"error"},t):r.a.createElement("div",{className:"success"},t)},L=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),u=Object(i.a)(l,2),f=u[0],b=u[1],d=Object(a.useState)(!1),v=Object(i.a)(d,2),g=v[0],h=v[1],w=Object(a.useState)([]),O=Object(i.a)(w,2),j=O[0],y=O[1],C=Object(a.useState)(null),N=Object(i.a)(C,2),U=N[0],L=N[1],I=Object(a.useState)(""),J=Object(i.a)(I,2),V=J[0],W=J[1],z=Object(a.useState)(""),H=Object(i.a)(z,2),q=H[0],F=H[1],G=Object(a.useState)(null),K=Object(i.a)(G,2),Q=K[0],R=K[1],X=Object(a.useState)(""),Y=Object(i.a)(X,2),Z=Y[0],$=Y[1],_=Object(a.useState)(""),ee=Object(i.a)(_,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(""),re=Object(i.a)(ae,2),ce=re[0],le=re[1],ue=Object(a.useState)(!0),oe=Object(i.a)(ue,2),se=oe[0],ie=oe[1],me=Object(a.useState)(null),pe=Object(i.a)(me,2),fe=pe[0],be=pe[1],de=Object(a.useState)(""),ve=Object(i.a)(de,2),ge=ve[0],he=ve[1];Object(a.useEffect)((function(){E.getAll().then((function(e){return y(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);R(t),E.setToken(t.token)}}),[fe]);var Ee=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getBlogs(t.id);case 2:return n=e.sent,console.log(n),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),we=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,x.login({username:V,password:q});case 4:n=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(n)),E.setToken(n.token),R(n),W(""),F(""),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),ie(!1),L("Wrong credentials"),setTimeout((function(){L(null)}),5e3);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(s.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={user:Q,title:Z,author:ce,url:te,likes:0,id:Math.floor(101*Math.random())},a=Q.token,e.next=6,E.create(n,a);case 6:r=e.sent,y(j.concat(r)),ie(!0),L("A new Blog ".concat(Z," by ").concat(ce," was added.")),setTimeout((function(){L(null)}),5e3),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(1),L("".concat(e.t0)),console.log(e.t0),setTimeout((function(){L(null)}),3e3);case 18:le(""),$(""),ne(""),h(!1);case 22:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{window.localStorage.removeItem(Q),R(null),window.localStorage.clear()}catch(n){ie(!1),L("User doesn't exist or has already logged out"),setTimeout((function(){L(null)}),5e3)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return""!==ge?r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(m.b,{style:{padding:5},to:"/home"},"Home")),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/home"},r.a.createElement("div",{class:"container"},r.a.createElement(D,{showUserProfile:ge,getUserBlogs:Ee,setShowUserProfile:he}))))):r.a.createElement("div",null,null===Q?function(){var e={display:n?"none":""},t={display:n?"":"none"},a={display:f?"none":""},l={display:f?"":"none"};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:e},r.a.createElement("button",{className:"button",onClick:function(){c(!0),b(!1)}},"Log in")),r.a.createElement("div",{style:a},r.a.createElement("button",{className:"button",onClick:function(){b(!0),c(!1)}},"Sign in")),r.a.createElement("div",{style:l},r.a.createElement(A,{setStatus:ie,setErrorMessage:L})),r.a.createElement("div",{style:t},r.a.createElement(S,{username:V,password:q,handleUsernameChange:function(e){var t=e.target;return W(t.value)},handlePasswordChange:function(e){var t=e.target;return F(t.value)},handleSubmit:we}),r.a.createElement("button",{onClick:function(){return c(!1)}},r.a.createElement(B.a,null)),r.a.createElement(M,{status:se,message:U})))}():function(){var e={display:g?"none":""},t={display:g?"":"none"};return r.a.createElement("div",null,r.a.createElement(M,{status:se,message:U}),r.a.createElement("h1",null,"Blogs"),r.a.createElement("p",null,Q.username," logged in"),r.a.createElement("div",{style:e},r.a.createElement("button",{className:"button",onClick:function(){return h(!0)}},"New Blog")),r.a.createElement("div",{style:t},r.a.createElement(P,{showWhenVisible:t,setNewBlogVisible:h,newTitle:Z,setNewTitle:$,newAuthor:ce,setNewAuthor:le,newUrl:te,setNewUrl:ne,addBlog:Oe})),r.a.createElement("button",{className:"button",type:"button",onClick:je},"Logout"),j.map((function(e){return r.a.createElement(k,{key:e.id,blog:e,user:Q,setShowUserProfile:he,setUpdate:be,blogs:j,setBlogs:y,setStatus:ie,setErrorMessage:L})})))}())};l.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.2f242d23.chunk.js.map