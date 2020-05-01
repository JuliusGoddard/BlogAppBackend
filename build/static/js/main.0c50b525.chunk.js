(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{70:function(e,t,n){e.exports=n(98)},98:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),l=n.n(c),u=n(6),o=n.n(u),i=n(8),s=n(18),m=n(15),d=n(23),p=n.n(d),f="/api/blogs",v=null,E={getAll:function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(f);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createNew:function(){var e=Object(i.a)(o.a.mark((function e(t,n,a){var r,c,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:v}},c={author:t,title:n,url:a,likes:0},e.next=4,p.a.post(f,c,r);case 4:return l=e.sent,e.abrupt("return",l.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),setToken:function(e){v="bearer ".concat(e)},addLike:function(e){return p.a.put("".concat(f,"/").concat(e.id),e).then((function(e){return e.data}))},deleteBlog:function(e){var t=p.a.delete("".concat(f,"/").concat(e));return t.includes("object")?null:t.then((function(e){return e.data}))},addComment:function(){var e=Object(i.a)(o.a.mark((function e(t,n){var a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:v}},r={comment:n},e.next=4,p.a.post("".concat(f,"/").concat(t,"/comments"),r,a);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},b=n(22),h=n(128),g=n(99),O=n(132),w=n(133),k=n(134),j=n(135),y=function(e){e.blog,e.title,e.author,e.url,e.likes;var t=Object(m.b)(),n=Object(m.c)((function(e){return e.blogs})),a=function(){var e=Object(i.a)(o.a.mark((function e(n,r,c,l,u){var i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={id:n,author:r,title:c,url:l,likes:u+1},e.next=3,E.addLike(i);case 3:s=e.sent,t(a(s));case 5:case"end":return e.stop()}}),e)})));return function(t,n,a,r,c){return e.apply(this,arguments)}}(),c=function(){var e=Object(i.a)(o.a.mark((function e(n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.deleteBlog(n);case 2:a=e.sent,t(c(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h2",null,"blogs"),r.a.createElement(h.a,{component:g.a},r.a.createElement(O.a,null,r.a.createElement(w.a,null,n.map((function(e){return r.a.createElement(k.a,{key:e.id},r.a.createElement(j.a,null,e.author," "),r.a.createElement(j.a,null,r.a.createElement(b.b,{to:"/blogs/".concat(e.id)}," ",e.title)),r.a.createElement(j.a,null,e.url," "),r.a.createElement(j.a,null,"likes: ",e.likes),r.a.createElement(j.a,null,r.a.createElement("button",{onClick:function(){return a(e.id,e.author,e.title,e.url,e.likes)}},"Like")),r.a.createElement(j.a,null,r.a.createElement("button",{onClick:function(){return c(e.id)}},"Delete")))}))))))},x=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/login");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S={login:function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAll:x},C=n(141),I=n(136),L=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,a=e.handlePasswordChange,c=e.username,l=e.password;return r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"username",r.a.createElement(C.a,{id:"username",value:c,onChange:n})),r.a.createElement("div",null,"password",r.a.createElement(C.a,{id:"password",type:"password",value:l,onChange:a})),r.a.createElement(I.a,{variant:"contained",id:"login-button",type:"submit"},"login")))},N=n(20),B=function(e){return function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getAll();case 2:n=e.sent,t({type:"INIT_BLOGS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_BLOG":return[].concat(Object(N.a)(e),[t.data]);case"INIT_BLOGS":return t.data;case"LIKE_BLOG":var n=t.data.id,a=e.map((function(e){return e.id===t.data.id?t.data:e}));return a;case"DELETE_BLOG":return e.filter((function(e){return e.id!==n}));case"ADD_COMMENT":var r=e.map((function(e){return e.id===t.data.id?t.data:e}));return r;default:return e}},T=function(){var e=Object(m.b)(),t=r.a.createRef(),n=function(){var t=Object(i.a)(o.a.mark((function t(n){var a,r,c,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=n.target.title.value,r=n.target.author.value,c=n.target.url.value,n.target.title.value="",n.target.author.value="",n.target.url.value="",t.next=9,E.createNew(r,a,c);case 9:l=t.sent,e({type:"NEW_BLOG",data:l});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h2",null,"Create a new blogpost"),r.a.createElement("form",{onSubmit:n,ref:t},r.a.createElement("input",{id:"title",name:"title"}),r.a.createElement("input",{id:"author",name:"author"}),r.a.createElement("input",{id:"url",name:"url"}),r.a.createElement("button",{type:"submit"},"create")))},_=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),c=Object(s.a)(n,2),l=c[0],u=c[1],o={display:l?"none":""},i={display:l?"":"none"},m=function(){u(!l)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:m}})),r.a.createElement("div",null,r.a.createElement("div",{style:o},r.a.createElement("button",{onClick:m},e.buttonLabel)),r.a.createElement("div",{style:i,className:"togglableContent"},e.children,r.a.createElement("button",{onClick:m},"cancel")))})),U=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},D=function(){var e=Object(m.c)((function(e){return e.users}));return r.a.createElement("div",null,r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(b.b,{to:"/users/".concat(e.id)}," ",e.username)," ",e.blogs.length)}))))},G=n(27),R=function(){var e=Object(m.c)((function(e){return e.users})),t=Object(G.f)("/users/:id"),n=t?e.find((function(e){return e.id===t.params.id})):null;return console.log(e),n?r.a.createElement("div",null,r.a.createElement("h1",null,n.username)," ",r.a.createElement("h2",null,"Added Blogs"),r.a.createElement("ul",null,n.blogs.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.url),r.a.createElement("p",null,e.author),r.a.createElement("p",null,e.likes))})))):null},J=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.blogs})),n=Object(G.f)("/blogs/:id"),a=function(){var t=Object(i.a)(o.a.mark((function t(n){var r,c,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.target.comment.value,n.target.comment.value="",c=l.id,t.next=5,E.addComment(c,r);case 5:u=t.sent,e(a(u));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=Object(i.a)(o.a.mark((function t(n,a,r,l,u){var i,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i={id:n,author:a,title:r,url:l,likes:u+1},t.next=3,E.addLike(i);case 3:s=t.sent,e(c(s));case 5:case"end":return t.stop()}}),t)})));return function(e,n,a,r,c){return t.apply(this,arguments)}}(),l=n?t.find((function(e){return e.id===n.params.id})):null;return console.log(l),l?r.a.createElement("div",null,r.a.createElement("h2",null,"Blogs"),r.a.createElement("h2",null,l.title),r.a.createElement("p",null," URL: ",l.url),r.a.createElement("p",null," ","Likes: ",l.likes," ",r.a.createElement("button",{onClick:function(){return c(l.id,l.author,l.title,l.url,l.likes)}},"Like")),r.a.createElement("p",null," Added by: ",l.user.username),r.a.createElement("h2",null,"Comments"),r.a.createElement("form",{onSubmit:a},r.a.createElement("input",{id:"comment",name:"comment"}),r.a.createElement("button",null,"Add Comment")),r.a.createElement("ul",null,l.comments.map((function(e){return r.a.createElement("li",{key:e.id},e.comment)})))):null},W=n(137),M=n(138),z=n(139),K=n(140),P=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),u=Object(s.a)(l,2),d=u[0],p=u[1],f=Object(a.useState)(""),v=Object(s.a)(f,2),h=v[0],g=v[1],O=Object(a.useState)(null),w=Object(s.a)(O,2),k=w[0],j=w[1],x=Object(a.useState)(null),C=Object(s.a)(x,2),N=C[0],A=C[1],P=Object(a.useState)(!1),V=Object(s.a)(P,2),H=V[0],q=V[1],F=Object(m.b)();Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);j(t),E.setToken(t.token)}}),[]);var Q=function(e){Z.current.toggleVisibility(),E.create(e).then((function(e){c(n.concat(e))}))},X=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,S.login({username:d,password:h});case 4:n=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(n)),E.setToken(n.token),j(n),p(""),g(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),A("Wrong credentials"),setTimeout((function(){A(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){E.getAll().then((function(e){return F(B())}))}),[F]);var Y=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),window.localStorage.removeItem("loggedBlogappUser"),window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=r.a.createRef(),$={padding:5};return r.a.createElement(W.a,null,r.a.createElement(b.a,null,r.a.createElement(M.a,{position:"static"},r.a.createElement(z.a,null,r.a.createElement(K.a,{edge:"start",color:"inherit","aria-label":"menu"}),r.a.createElement(I.a,{color:"inherit"},r.a.createElement(b.b,{style:$,to:"/users"},"Users")),r.a.createElement(I.a,{color:"inherit"},r.a.createElement(b.b,{style:$,to:"/blogs"},"Blogs")),r.a.createElement(I.a,{color:"inherit"},k?r.a.createElement("em",null,k.username," logged in"):r.a.createElement(b.b,{style:$,to:"/login"},"login")))),r.a.createElement("div",null,r.a.createElement("h1",null,"Blogposts"),r.a.createElement(U,{message:N}),null===k?function(){var e={display:H?"none":""},t={display:H?"":"none"};return r.a.createElement("div",null,r.a.createElement("div",{style:e},r.a.createElement(I.a,{variant:"contained",onClick:function(){return q(!0)}},"log in")),r.a.createElement("div",{style:t},r.a.createElement(L,{username:d,password:h,handleUsernameChange:function(e){var t=e.target;return p(t.value)},handlePasswordChange:function(e){var t=e.target;return g(t.value)},handleSubmit:X}),r.a.createElement(I.a,{variant:"contained",onClick:function(){return q(!1)}},"cancel")))}():r.a.createElement("div",null,r.a.createElement("button",{onClick:Y},"logout")," ",r.a.createElement(_,{buttonLabel:"new post",ref:Z},r.a.createElement(T,{createBlog:Q}))),r.a.createElement(G.c,null,r.a.createElement(G.a,{path:"/blogs/:id"},r.a.createElement(J,null)),r.a.createElement(G.a,{path:"/blogs"},r.a.createElement(y,null))),r.a.createElement(G.c,null,r.a.createElement(G.a,{path:"/users/:id"},r.a.createElement(R,null)),r.a.createElement(G.a,{path:"/users"},r.a.createElement(D,null))))))},V=n(31),H=n(60),q=n(61),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_LOGIN":return t.data;case"SET_TOKEN":default:return e}},Q={getAll:function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return t.data;default:return e}},Y=Object(V.combineReducers)({blogs:A,login:F,users:X}),Z=Object(V.createStore)(Y,Object(q.composeWithDevTools)(Object(V.applyMiddleware)(H.a)));E.getAll().then((function(e){return Z.dispatch(B())})),S.getAll().then((function(e){return Z.dispatch(function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getAll();case 2:n=e.sent,t({type:"INIT_LOGIN",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),Q.getAll().then((function(e){return Z.dispatch(function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.getAll();case 2:n=e.sent,t({type:"INIT_USERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),l.a.render(r.a.createElement(m.a,{store:Z},r.a.createElement(P,null)),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.0c50b525.chunk.js.map