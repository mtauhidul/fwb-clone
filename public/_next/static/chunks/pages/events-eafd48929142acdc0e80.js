_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[33],{"6FTQ":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"8rE2":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("6FTQ");function c(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},rON6:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return b}));var r=n("nKUr"),c=n("z7pX"),a=n("q1tI"),i=n("CafY"),s=n("508+"),o=n("W5Ki"),u=n("YFqc"),d=n.n(u),b=!0;t.default=function(e){var t=e.data,n=e.events,u=e.eventCities,b=t.site,l=t.page,p=Object(a.useState)(Object(c.a)(n)),f=p[0],j=p[1],m=Object(a.useState)(Object(c.a)(u)),O=(m[0],m[1]),h=Object(o.b)(),v=(h.connect,h.loggedIn,Object(a.useRef)(Object(c.a)(u)));return Object(r.jsxs)(i.a,{site:b,page:l,gradient:!1,children:[Object(r.jsx)("div",{className:"pad-top bg-pink",children:Object(r.jsx)(d.a,{href:"/events/archive",children:Object(r.jsxs)("a",{className:"p-4 text-center block animate-pulse uppercase",children:[Object(r.jsx)("span",{className:"text-black",children:"NEW!"})," Event Recording Archive"]})})}),Object(r.jsx)("div",{className:"fade-gradient  flex items-center",children:Object(r.jsx)("div",{className:"pt-2 px-4 md:px-8",children:Object(r.jsx)("h1",{children:"Events"})})}),Object(r.jsxs)("div",{className:"mx-4 md:mx-8 mt-4 md:mt-8 border-b pb-4 md:pb-8",children:[Object(r.jsx)("div",{className:"block pb-2 md:pb-0 md:inline-block opacity-50 pr-4",children:"FILTER:"}),u.map((function(e,t){return Object(r.jsx)(s.f,{label:e,onChange:function(e,t){return function(e,t){var r=v.current,c=r.indexOf(e);t?-1===c&&r.push(e):c>-1&&r.splice(c,1),v.current=r,O(r);var a=[];n.forEach((function(e){-1!==r.indexOf(e.city)&&a.push(e)})),j(a)}(e,t)}},t)}))]}),Object(r.jsx)("div",{className:"w-full px-4 md:px-8",children:f&&0!==f.length?f.map((function(e,t){return Object(r.jsx)(s.b,{eventData:e},t)})):Object(r.jsx)("div",{className:"p-8 text-center uppercase",children:"No events match those filters"})})]})}},tQ09:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events",function(){return n("rON6")}])},z7pX:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("6FTQ");var c=n("8rE2");function a(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["tQ09",0,1,7,8,2,3,4,5,9,16]]]);