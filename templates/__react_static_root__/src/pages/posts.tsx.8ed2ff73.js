(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{60:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n.n(r),o=n(0),u=n.n(o),i=n(14),c=n(11),l=n(53),s=n.n(l),f=function(e){var t=e.tags,n=e.showCount,r=e.minCount,a=e.selectedTags,o=e.setSelectedTags;if(null!=t&&t.map){var i=t.filter((function(e){return e.count>=(r||1)}));return u.a.createElement("div",{className:"field is-grouped is-grouped-multiline"},i.map((function(e){return u.a.createElement("div",{className:"control",key:e.key},u.a.createElement("div",{className:"tags has-addons"},u.a.createElement("a",{className:"tag is-link",onClick:(t=e.key,function(){console.log(t);var e=s()(a),n=e.indexOf(t);-1===n?e.push(t):e.splice(n,1),o(s()(e))})},e.key),n&&u.a.createElement("span",{className:"tag is-link is-light"},e.count)));var t})))}},m=function(e){var t=e.qiitaTags;return u.a.createElement(u.a.Fragment,null,t.map((function(e){return u.a.createElement("span",{className:"tag",key:e.name},e.name)})))};function d(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){i=!0,o=e},f:function(){try{u||null==n.return||n.return()}finally{if(i)throw o}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(){var e,t=(null===(e=Object(i.useRouteData)())||void 0===e?void 0:e.posts)||[],n=function(e){var t,n={},r=d(e);try{var a=function(){var r=t.value;n[r]=e.filter((function(e){return e==r})).length};for(r.s();!(t=r.n()).done;)a()}catch(o){r.e(o)}finally{r.f()}return Object.keys(n).map((function(e){return{key:e,count:n[e]}})).sort((function(e,t){return t.count-e.count}))}(t.filter((function(e){return!!e})).flatMap((function(e){return e.tags})).map((function(e){return e.name})))||[],r=Object(o.useState)(t),l=a()(r,2),s=l[0],p=l[1],g=Object(o.useState)([]),v=a()(g,2),y=v[0],h=v[1];return Object(o.useEffect)((function(){y.length?p(t.filter((function(e){return e.tags.some((function(e){return y.includes(e.name)}))}))):p(t)}),[y]),u.a.createElement("div",null,u.a.createElement(f,{tags:n,showCount:!0,minCount:3,selectedTags:y,setSelectedTags:h}),u.a.createElement("p",null,"All Posts:"),u.a.createElement("ul",null,s.map((function(e){return u.a.createElement("li",{key:e.id},u.a.createElement(c.Link,{to:"/posts/".concat(e.id,"/")},e.title),"👍 ",e.likes_count,u.a.createElement(m,{qiitaTags:e.tags}))}))))}}}]);