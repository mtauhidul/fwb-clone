_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{"6FTQ":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"8rE2":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("6FTQ");function c(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},UMiv:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/archive",function(){return n("Uzvw")}])},Uzvw:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return l}));var r=n("nKUr"),c=n("z7pX"),i=n("q1tI"),a=n("CafY"),o=n("508+"),s=n("W5Ki"),d=n("YFqc"),u=n.n(d),l=!0;t.default=function(e){var t=e.data,n=e.events,d=e.eventCities,l=t.site,b=t.page,f=Object(i.useState)(Object(c.a)(n)),j=f[0],p=(f[1],Object(i.useState)(Object(c.a)(d))),v=(p[0],p[1],Object(s.b)()),h=(v.connect,v.balance),w=v.loggedIn,O=(Object(i.useRef)(Object(c.a)(d)),Object(i.useState)(null)),m=O[0],x=O[1];return Object(i.useEffect)((function(){if(m)window.location="#"+encodeURIComponent(m.id);else if(window.location.hash)for(var e=decodeURIComponent(window.location.hash.replace("#","")),t=0;t<n.length;t++)if(e===n[t].id){x(n[t]);break}}),[m]),Object(i.useEffect)((function(){}),[]),Object(r.jsxs)(a.a,{site:l,page:b,gradient:!1,children:[Object(r.jsx)("div",{className:"fade-gradient pad-top",children:Object(r.jsx)("div",{className:"px-4 md:px-8 py-4 w-full",children:Object(r.jsx)(u.a,{href:"/events",children:Object(r.jsx)("button",{className:"uppercase border border-white rounded-full py-2 px-4 hover:bg-white hover:text-black transition-colors",children:"View All Events"})})})}),Object(r.jsx)("div",{className:"fade-gradient border-b pb-4",children:Object(r.jsx)("div",{className:"pt-2 px-4 md:px-8 w-full",children:Object(r.jsx)("h1",{children:"Archive"})})}),Object(r.jsx)("div",{className:"w-full px-4 md:px-8",children:h>=5?j&&0!==j.length?j.map((function(e,t){return Object(r.jsx)(o.c,{eventData:e,recording:!0,active:(null===m||void 0===m?void 0:m.id)===e.id,onShow:function(e){return x(e)}},t)})):Object(r.jsx)("div",{className:"p-8 text-center uppercase",children:"No events match those filters"}):w?Object(r.jsx)("div",{className:"pt-10 text-center",children:"You need at least 5 tokens to view recordings"}):Object(r.jsx)("div",{className:"pt-10 text-center",children:"You must log in with your wallet to view recordings"})}),m&&Object(r.jsx)(o.a,{show:m})]})}},z7pX:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("6FTQ");var c=n("8rE2");function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["UMiv",0,1,7,8,2,3,4,5,9,16]]]);