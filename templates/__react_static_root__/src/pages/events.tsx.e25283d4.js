(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{60:function(e,t,a){"use strict";a.r(t);var n=a(9),l=a.n(n),r=a(171),c=a.n(r),o=a(0),m=a.n(o),u=a(12);t.default=function(){var e=Object(u.useRouteData)().events,t=Object(o.useState)(""),a=l()(t,2),n=a[0],r=a[1],s=Object(o.useMemo)((function(){return(e||[]).filter((function(e){var t=(e.title||"").toLocaleLowerCase().includes(n.toLocaleLowerCase()),a=(e.catch||"").toLocaleLowerCase().includes(n.toLocaleLowerCase());return t||a}))}),[n]);return m.a.createElement("div",null,m.a.createElement("input",{className:"input is-normal",type:"text",placeholder:"Normal input",onChange:function(e){r(e.target.value)}}),m.a.createElement("p",null,"All events:"),m.a.createElement("ul",null,s.map((function(e){return m.a.createElement("div",{className:"box",key:e.event_id},m.a.createElement("article",{className:"media"},m.a.createElement("div",{className:"media-content"},m.a.createElement("div",{className:"content"},m.a.createElement("p",null,m.a.createElement("strong",null,e.hash_tag),m.a.createElement("small",null," in ",c()(e.started_at).format("YYYY/MM/DD HH:mm")," "),m.a.createElement("small",null,"~ ",c()(e.ended_at).format("HH:mm")),m.a.createElement("br",null),m.a.createElement("a",{href:e.event_url,target:"_blank",rel:"noopener noreferrer"},m.a.createElement("strong",null,e.title))," ","/ ",e.catch)))))}))))}}}]);