(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{61:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n.n(r),o=n(0),c=n.n(o),u=n(14),i=n(11),l=n(54),s=n.n(l),f=n(53),m=n.n(f);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){var t=e.tags,n=e.showCount,r=e.minCount,a=e.setTags;if(null!=t&&t.map){var o=t.filter((function(e){return e.count>=(r||1)}));return c.a.createElement("div",{className:"field is-grouped is-grouped-multiline"},o.map((function(e){return c.a.createElement("div",{className:"control",key:e.key},c.a.createElement("div",{className:"tags has-addons"},c.a.createElement("a",{className:"tag is-link ".concat(e.selected?"":"is-light"),onClick:(r=e.key,function(){console.log(r);var e=m()(t),n=t.find((function(e){return e.key===r}));if(n){var o=e.indexOf(n);e.splice(o,1),e.push(y(y({},n),{},{selected:!n.selected})),e.sort((function(e,t){return t.count===e.count?e.key<t.key?-1:e.key>t.key?1:0:t.count-e.count}))}a(m()(e))})},e.key),n&&c.a.createElement("span",{className:"tag is-link is-light"},e.count)));var r})))}},g=function(e){var t=e.qiitaTags;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement("span",{className:"tag",key:e.name},e.name)})))};function v(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw o}}}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(){var e,t=(null===(e=Object(u.useRouteData)())||void 0===e?void 0:e.posts)||[],n=Object(o.useState)(t),r=a()(n,2),l=r[0],s=r[1],f=function(e){var t,n={},r=v(e);try{var a=function(){var r=t.value;n[r]=e.filter((function(e){return e==r})).length};for(r.s();!(t=r.n()).done;)a()}catch(o){r.e(o)}finally{r.f()}return Object.keys(n).map((function(e){return{key:e,count:n[e],selected:!1}})).sort((function(e,t){return t.count-e.count}))}(l.filter((function(e){return!!e})).flatMap((function(e){return e.tags})).map((function(e){return e.name})))||[],m=Object(o.useState)(f),p=a()(m,2),y=p[0],b=p[1];return Object(o.useEffect)((function(){var e=y.filter((function(e){return e.selected})).map((function(e){return e.key}));e.length?s(l.filter((function(t){return t.tags.some((function(t){return e.includes(t.name)}))}))):s(t)}),[y]),c.a.createElement("div",null,c.a.createElement(d,{tags:y,setTags:b,showCount:!0,minCount:3}),c.a.createElement("p",null,"All Posts:"),c.a.createElement("ul",null,l.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(i.Link,{to:"/posts/".concat(e.id,"/")},e.title),"👍 ",e.likes_count,c.a.createElement(g,{qiitaTags:e.tags}))}))))}}}]);