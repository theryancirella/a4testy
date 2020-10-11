(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},16:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(9),u=n.n(o),c=(n(15),n(16),n(7),n(1)),i=n.n(c),l=n(2),s=n(3),m=n(4),d=n(6),h=n(5),p=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={items:[]},r}return Object(m.a)(n,[{key:"getItems",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/items").then((function(e){return e.json()})).then((function(e){return t.setState({items:e})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this;fetch("/items").then((function(e){return e.json()})).then((function(t){return e.setState({items:t})}))}},{key:"addItem",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r,a=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=document.getElementById("userInput"),r=n.value,fetch("/addItem",{method:"POST",body:JSON.stringify({dream:r}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return a.getItems()})),n.value="",this.getItems();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"modifyItem",value:function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),""===document.getElementById("userInput").value?this.deleteItem(t._id):this.editItem(t._id),this.getItems();case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"editItem",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r,a=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=document.getElementById("userInput"),r=n.value,fetch("/edit",{method:"POST",body:JSON.stringify({dream:r,id:t}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return a.getItems()})),this.getItems();case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteItem",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var n=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/delete",{method:"POST",body:JSON.stringify({id:t}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return n.getItems()})),this.getItems();case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"logoutButton",value:function(){var e=document.getElementById("userInput");fetch("/logout",{method:"POST",body:JSON.stringify({logout:e.value}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("body",null,a.a.createElement("header",null,a.a.createElement("h1",null,"Virtual Shopping List")),a.a.createElement("main",null,a.a.createElement("label",null,"New Grocery Item",a.a.createElement("input",{name:"dream",type:"text",id:"userInput",maxlength:"100",required:!0,placeholder:"Type item here!"})),a.a.createElement("button",{type:"submit",id:"submit-dream",onClick:function(t){return e.addItem(t)}},"Add Item"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("section",{class:"dreams"},a.a.createElement("ul",{id:"dreams"},this.state.items.map((function(t){return a.a.createElement("li",{key:t._id,onClick:function(n){return e.modifyItem(t)}},t.dream)})))),"To edit item, enter replacement value in item box and click the list item to edit.",a.a.createElement("br",null),"To remove item, click a list item to remove with nothing in the item input box.",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("button",{id:"logout",onClick:function(t){return e.logoutButton()}},"Logout"))))}}]),n}(r.Component),f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(m.a)(n,[{key:"userLogin",value:function(e){var t=document.querySelector("#username"),n=document.querySelector("#password"),r=t.value,a=n.value;console.log("Username: "+r+" Password: "+a),t.value="",n.value="",fetch("/login",{method:"POST",body:JSON.stringify({username:r,password:a}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),0==e.length&&window.alert("Username or password is incorrect.")}))}},{key:"userCreate",value:function(e){var t=document.querySelector("#username"),n=document.querySelector("#password"),r=t.value,a=n.value;console.log("Username: "+r+" Password: "+a),fetch("/create",{method:"POST",body:JSON.stringify({username:r,password:a}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"Login"},a.a.createElement("body",null,a.a.createElement("h1",null,"Login"),a.a.createElement("p",null,"Enter your credentials or Create Account:"),a.a.createElement("label",{for:"username",class:"neededLabel"},"Username *"),a.a.createElement("input",{id:"username",type:"text",maxlength:"100",required:!0,placeholder:"Username"}),a.a.createElement("label",{for:"password",class:"neededLabel"},"Password *"),a.a.createElement("input",{id:"password",type:"text",maxlength:"100",required:!0,placeholder:"Password"}),a.a.createElement("br",null),"Password should be secure and unique to your account",a.a.createElement("br",null),a.a.createElement("br",null),"* Passwords and Usernames are case sensitive",a.a.createElement("br",null),a.a.createElement("button",{id:"create-button",onClick:function(t){return e.userCreate(t)}},"Create Account"),a.a.createElement("br",null),a.a.createElement("button",{id:"login-button",onClick:function(t){return e.userLogin(t)}},"Login"),a.a.createElement("br",null)))}}]),n}(r.Component);var v=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,null),a.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.198aeb86.chunk.js.map