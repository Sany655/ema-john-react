(this["webpackJsonpema-jhon-complicated"]=this["webpackJsonpema-jhon-complicated"]||[]).push([[0],{47:function(e,t,n){},50:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(5),r=n.n(c),i=n(37),s=n.n(i),a=(n(47),n(13)),j=n(11),o=n(8),l=n(28),u=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(l.b)(),s=new l.a;return Object(c.useEffect)((function(){Object(l.c)(i,(function(e){e&&r(e)}))}),[]),{user:n,signinUsingGoogle:function(){return Object(l.d)(i,s)},logout:function(){Object(l.e)(i).then((function(e){return r({})}))}}},b=n(3),d=Object(c.createContext)(),h=function(e){var t=e.children,n=u();return Object(b.jsx)(d.Provider,{value:n,children:t})},O=function(){return Object(c.useContext)(d)},x=n.p+"static/media/logo.0dd9a510.png";n(50);var p=function(){var e=O(),t=e.user,n=e.logout;return Object(b.jsxs)("header",{children:[Object(b.jsx)("img",{src:x,alt:"Logo"}),Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(a.b,{to:"/",children:"Shop"})}),Object(b.jsx)("li",{children:Object(b.jsx)(a.b,{to:"review",children:"Order Review"})}),Object(b.jsx)("li",{children:Object(b.jsx)(a.b,{to:"inventory",children:"Manage Inventory here"})}),t.uid?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("li",{children:t.displayName}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{onClick:n,children:"Logout"})})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("li",{children:Object(b.jsx)(a.b,{to:"login",children:"Login"})}),Object(b.jsx)("li",{children:Object(b.jsx)(a.b,{to:"register",children:"Register"})})]})]})})]})};var f=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h3",{style:{textAlign:"center"},children:"Developer is sleeping"})})},v=(n(55),function(){var e,t=O().signinUsingGoogle,n=Object(j.h)(),c=Object(j.g)(),r=(null===(e=n.state)||void 0===e?void 0:e.from)||"/";return Object(b.jsxs)("div",{className:"login",children:[Object(b.jsx)("h1",{children:"Please Login"}),Object(b.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(b.jsx)("input",{type:"email",placeholder:"Login"}),Object(b.jsx)("input",{type:"password",placeholder:"Password"}),Object(b.jsx)("button",{type:"submit",className:"btn",children:"Login"}),Object(b.jsx)(a.b,{to:"/register",children:"New user?"}),Object(b.jsxs)("button",{onClick:function(){t().then((function(e){c.push(r)}))},className:"btn",children:["Enter With Google ",Object(b.jsx)("i",{className:"fab fa-google"})]})]})]})});n(56);var m=function(){var e=Object(j.h)();return Object(b.jsxs)("div",{className:"notfound",children:[Object(b.jsx)("h1",{children:"404"}),Object(b.jsxs)("p",{children:["the url '",e.pathname,"' you looking for is not found"]})]})},g=function(){return localStorage.getItem("shopping_cart")},y=function(e){localStorage.setItem("shopping_cart",JSON.stringify(e))},N=function(){var e=g();return e?JSON.parse(e):{}},S=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){if(e.length){var t=N(),n=[],c=function(c){var r=e.find((function(e){return e.key===c}));r&&(r.quantity=t[c],n.push(r))};for(var r in t)c(r);i(n)}}),[e]),[r,i]},k=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("./fakeData/products.json").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),[n]},C=n.p+"static/media/giphy.46a86830.gif",w=n(17);n(57);var I=function(e){var t,n=0,c=0,r=Object(w.a)(e.cart);try{for(r.s();!(t=r.n()).done;){var i=t.value;i.quantity||(i.quantity=1),c+=i.quantity?i.price*i.quantity:i.price,n+=i.quantity}}catch(o){r.e(o)}finally{r.f()}var s=c>0?15:0,a=.1*(c+s),j=c+s+a;return Object(b.jsxs)("div",{className:"cart",children:[Object(b.jsx)("h3",{children:"Order summery"}),Object(b.jsxs)("p",{children:["Items ordered: ",n]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{children:"Total:"}),Object(b.jsx)("span",{children:c.toFixed(2)})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{children:"Shipping:"}),Object(b.jsx)("span",{children:s})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{children:"Tax:"}),Object(b.jsx)("span",{children:a.toFixed(2)})]}),Object(b.jsxs)("h3",{children:[Object(b.jsx)("span",{children:"Grand Total:"}),Object(b.jsx)("span",{children:j.toFixed(2)})]})]}),e.children]})};var P=function(){var e=k(),t=Object(o.a)(e,1)[0],n=S(t),c=Object(o.a)(n,1)[0],r=Object(j.g)();return Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:C,style:{width:"350px",height:"250px",display:"block",margin:"auto"},alt:""}),Object(b.jsx)(I,{cart:c,children:Object(b.jsx)("button",{className:"btn",onClick:function(){return r.push("/")},children:"Shop more"})})]})},F=n(20),q=n(42),E=["children"],L=function(e){var t=e.children,n=Object(q.a)(e,E),c=O().user;return Object(b.jsx)(j.b,Object(F.a)(Object(F.a)({},n),{},{render:function(e){var n=e.location;return c.uid?t:Object(b.jsx)(j.a,{to:{pathname:"/login",state:{from:n}}})}}))},T=(n(58),function(){return Object(b.jsxs)("div",{className:"register",children:[Object(b.jsx)("h1",{children:"Please Register"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"text",placeholder:"Name"}),Object(b.jsx)("input",{type:"email",placeholder:"Email"}),Object(b.jsx)("input",{type:"password",placeholder:"Password"}),Object(b.jsx)("button",{type:"submit",className:"btn",children:"Register"}),Object(b.jsx)(a.b,{to:"/login",children:"Alredy have an account?"}),Object(b.jsxs)("button",{className:"btn",children:["Enter With Google ",Object(b.jsx)("i",{className:"fab fa-google"})]})]})]})});n(59);var D=function(){var e=Object(j.g)(),t=k(),n=Object(o.a)(t,1)[0],c=S(n),r=Object(o.a)(c,2),i=r[0],s=r[1],a=function(e){s(i.filter((function(t){return t.key!==e}))),function(e){var t=g();if(t){var n=JSON.parse(t);delete n[e],y(n)}}(e)};return Object(b.jsxs)("div",{className:"review",children:[Object(b.jsx)("div",{children:i.map((function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsxs)("p",{children:["Price : ",e.price]}),Object(b.jsxs)("p",{children:["Quantity : ",e.quantity]}),Object(b.jsxs)("p",{children:["Total Price : ",e.quantity*e.price]}),Object(b.jsx)("button",{className:"btn",onClick:function(){return a(e.key)},children:"Remove"})]},t)}))}),Object(b.jsx)(I,{cart:i,children:Object(b.jsx)("button",{className:"btn",onClick:function(){e.push("/shipping")},children:"Proceed To Shipping"})})]})},G=n(21);n(60);var R=function(e){var t=e.product,n=t.img,c=t.name,r=t.seller,i=t.price,s=t.features,a=t.stock,j=t.star;return Object(b.jsxs)("div",{className:"product",children:[Object(b.jsx)("img",{src:n,alt:""}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:c}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["By: ",r]}),Object(b.jsxs)("p",{children:["$",i]}),Object(b.jsxs)("p",{children:["Only ",a," left in stock - order soon"]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:j/5}),Object(b.jsx)("h4",{children:"Featurs"}),Object(b.jsx)("ul",{children:s.map((function(e,t){return Object(b.jsxs)("li",{children:[e.description,": ",e.value]},t)}))})]})]}),Object(b.jsx)("button",{className:"btn",onClick:function(){return e.handleAddToCart(e.product)},children:"\ud83d\uded2 add to cart"})]})]})};n(61);var A=function(){var e=Object(j.g)(),t=r.a.useState([]),n=Object(o.a)(t,2),c=n[0],i=n[1],s=r.a.useState([]),a=Object(o.a)(s,2),l=a[0],u=a[1],d=r.a.useState([]),h=Object(o.a)(d,2),O=h[0],x=h[1];r.a.useEffect((function(){fetch("./fakeData/products.json").then((function(e){return e.json()})).then((function(e){u(e),x(e)}))}),[]),r.a.useEffect((function(){if(l.length){var e=N(),t=[],n=function(n){var c=l.find((function(e){return e.key===n}));c&&(c.quantity=e[n],t.push(c))};for(var c in e)n(c);i(t)}}),[l]);var p=function(e){var t;!function(e){var t=g(),n={};if(t)if((n=JSON.parse(t))[e]){var c=n[e]+1;n[e]=c}else n[e]=1;else n[e]=1;y(n)}(e.key);var n=c.find((function(t){return t.key===e.key}));n?(t=c.filter((function(t){return t.key!==e.key})),n.quantity+=1,t=[].concat(Object(G.a)(t),[n])):t=[].concat(Object(G.a)(c),[e]),i(t)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("header",{children:Object(b.jsx)("form",{children:Object(b.jsx)("input",{type:"text",placeholder:"type here to search",onChange:function(e){return t=e.target.value,void x(l.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})));var t}})})}),Object(b.jsxs)("main",{children:[Object(b.jsx)("section",{children:O.map((function(e,t){return Object(b.jsx)(R,{product:e,handleAddToCart:p},t)}))}),Object(b.jsx)("section",{children:Object(b.jsx)(I,{cart:c,children:Object(b.jsx)("button",{className:"btn",onClick:function(){return e.push("/review")},children:"Review your order"})})})]})]})},J=n(40),B={apiKey:"AIzaSyBG6OxyEYKcbYILPdRTr-qwIAbzY7hxWUw",authDomain:"ema-john-complicated.firebaseapp.com",projectId:"ema-john-complicated",storageBucket:"ema-john-complicated.appspot.com",messagingSenderId:"143638968687",appId:"1:143638968687:web:0dcd8d5e3d434b43d6509a",measurementId:"G-SF9MQPR9GD"},M=function(){Object(J.a)(B)},U=(n(62),function(){var e=O().user,t=Object(c.useState)({name:e.displayName,email:e.email,address:e.address,phone:e.phone}),n=Object(o.a)(t,2),r=n[0],i=n[1];return Object(b.jsxs)("div",{className:"shipping",children:[Object(b.jsx)("h1",{children:"Shipping"}),Object(b.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(b.jsx)("input",{type:"text",value:r.name,onChange:function(e){return i(Object(F.a)(Object(F.a)({},r),{},{name:e.target.value}))},placeholder:"Name"}),Object(b.jsx)("input",{type:"email",value:r.email,onChange:function(e){return i(Object(F.a)(Object(F.a)({},r),{},{email:e.target.value}))},placeholder:"Email"}),Object(b.jsx)("input",{type:"address",value:r.address,onChange:function(e){return i(Object(F.a)(Object(F.a)({},r),{},{address:e.target.value}))},placeholder:"Address"}),Object(b.jsx)("input",{type:"phone",value:r.phone,onChange:function(e){return i(Object(F.a)(Object(F.a)({},r),{},{phone:e.target.value}))},placeholder:"Phone"}),Object(b.jsx)("button",{className:"btn",children:"Submit"})]})]})});M();var W=function(){return Object(b.jsx)(h,{children:Object(b.jsxs)(a.a,{children:[Object(b.jsx)(p,{}),Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.b,{exact:!0,path:"/",children:Object(b.jsx)(A,{})}),Object(b.jsx)(j.b,{path:"/login",children:Object(b.jsx)(v,{})}),Object(b.jsx)(j.b,{path:"/register",children:Object(b.jsx)(T,{})}),Object(b.jsx)(j.b,{path:"/review",children:Object(b.jsx)(D,{})}),Object(b.jsx)(L,{path:"/inventory",children:Object(b.jsx)(f,{})}),Object(b.jsx)(L,{path:"/shipping",children:Object(b.jsx)(U,{})}),Object(b.jsx)(L,{path:"/order",children:Object(b.jsx)(P,{})}),Object(b.jsx)(j.b,{path:"*",children:Object(b.jsx)(m,{})})]})]})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(W,{})}),document.getElementById("root")),Y()}},[[63,1,2]]]);
//# sourceMappingURL=main.86d3b943.chunk.js.map