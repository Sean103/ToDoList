(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(7),i=n.n(c),r=(n(14),n(1)),u=n(2),l=n(4),s=n(3),d=n(5),p=(n(15),n(16),n(17),function(t){function e(){return Object(r.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",defaultValue:this.props.content,onKeyPress:this.submit})}},{key:"submit",value:function(t){"Enter"===t.key&&this.props.onSubmit.call()}}]),e}(a.Component)),m=function(t){function e(){return Object(r.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,this.props.todo.title)}}]),e}(a.Component),b=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(l.a)(this,Object(s.a)(e).call(this,t))).state={newTodo:"test",todoList:[{id:1,title:"\u7b2c\u4e00\u4e2a\u5f85\u529e"},{id:2,title:"\u7b2c\u4e8c\u4e2a\u5f85\u529e"}]},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.state.todoList.map(function(t,e){return o.a.createElement("li",null,o.a.createElement(m,{todo:t}))});return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"\u6211\u7684\u5f85\u529e"),o.a.createElement("div",{className:"inputWrapper"},o.a.createElement(p,{content:this.state.newTodo,onSubmit:this.addTodo})),o.a.createElement("ol",null,t))}},{key:"addTodo",value:function(){console.log("\u6211\u5f97\u6dfb\u52a0\u4e00\u4e2a todo \u4e86")}}]),e}(a.Component);i.a.render(o.a.createElement(b,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.bac22ef2.chunk.js.map