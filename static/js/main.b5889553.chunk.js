(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(0),s=n.n(o),i=n(4),a=n.n(i),r=n(2),l=n(5),c=n(6),u=n(8),b=n(7),m=n(1),g=n.n(m),p=function(t){var e=t.goods,n=t.visibility;return s.a.createElement("ul",{className:g()({"good-list":!0,invisible:!n,visible:n})},e.map((function(t){return s.a.createElement("li",{key:t,className:"good-item"},t)})))},v=(n(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]);function _(t){return t.split(" ").join("")}var d=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={goods:[],isVisible:!1},t.showList=function(){t.setState((function(){return{goods:[].concat(v),isVisible:!0}}))},t.reverseList=function(){t.setState((function(t){return{goods:Object(r.a)(t.goods).reverse()}}))},t.sortAlphabetically=function(){t.setState((function(t){return{goods:Object(r.a)(t.goods).sort((function(t,e){return t.localeCompare(e)}))}}))},t.resetList=function(){t.setState({goods:[].concat(v)})},t.sortByLength=function(){t.setState((function(t){return{goods:Object(r.a)(t.goods).sort((function(t,e){return _(t).length-_(e).length}))}}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.isVisible;return s.a.createElement("div",{className:"App"},s.a.createElement("h1",{className:"App__title"},"Goods"),s.a.createElement("div",{className:"App__buttons buttons"},s.a.createElement("button",{type:"button",className:g()({buttons__button:!0,"buttons__button--green":!0,invisible:t,visible:!t}),onClick:this.showList},"Start"),s.a.createElement("button",{type:"button",className:g()({buttons__button:!0,"buttons__button--green":!0,invisible:!t,visible:t}),onClick:this.reverseList},"Reverse"),s.a.createElement("button",{type:"button",className:g()({buttons__button:!0,"buttons__button--yellow":!0,invisible:!t,visible:t}),onClick:this.sortAlphabetically},"Sort alphabetically"),s.a.createElement("button",{type:"button",className:g()({buttons__button:!0,"buttons__button--red":!0,invisible:!t,visible:t}),onClick:this.resetList},"Reset"),s.a.createElement("button",{type:"button",className:g()({buttons__button:!0,"buttons__button--magenta":!0,invisible:!t,visible:t}),onClick:this.sortByLength},"Sort by length")),s.a.createElement(p,{goods:this.state.goods,visibility:t}))}}]),n}(s.a.Component);a.a.render(s.a.createElement(d,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.b5889553.chunk.js.map