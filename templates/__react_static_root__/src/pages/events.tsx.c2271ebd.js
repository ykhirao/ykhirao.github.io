(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14);t.default=function(){var e=Object(c.useRouteData)().events;return console.log(e),l.a.createElement("div",null,l.a.createElement("p",null,"All events:"),l.a.createElement("ul",null,e&&e.map&&e.map((function(e){return l.a.createElement("li",{key:e.event_id},e.started_at," ",l.a.createElement("a",{href:e.event_url},e.title," ",e.catch),e.hash_tag?" #".concat(e.hash_tag):"")}))))}}}]);