_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[43],{"0J57":function(e,t,n){"use strict";var r=n("nKUr"),i=n("q1tI"),s=n("mRtW");function c(e){var t=e.speed,n=void 0===t?.5:t,r=e.direction,s=void 0===r?"left":r,c=e.pauseOnHover,o=e.children,l=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(n=s[r])>=0||(i[n]=e[n]);return i}(e,["speed","direction","pauseOnHover","children"]),u=Object(i.useState)(1),d=u[0],b=u[1],h=a(),j=h[0],f=h[1],p=a(),m=p[0],v=p[1];return Object(i.useEffect)((function(){f&&v&&b(Math.ceil(f/v))}),[f,v]),Object(i.createElement)("div",Object.assign({ref:j,"data-marqy":"","data-direction":s,"data-pause-on-hover":c?"":null},l),Object(i.createElement)("div",{"data-marqy-inner":""},new Array(2).fill(0).map((function(e,t){return Object(i.createElement)("div",{key:t,"data-marqy-content":"",style:{animationDuration:(null!=v?v:0)*d/(100*n)+"s"}},new Array(d).fill(0).map((function(e,n){var r=0===t&&0===n;return Object(i.createElement)("div",{key:n,ref:r?m:null,"aria-hidden":!r||null,"data-marqy-item":""},o)})))}))))}function a(){var e=Object(i.useState)(0),t=e[0],n=e[1],r=Object(i.useState)(null),s=r[0],c=r[1],a=Object(i.useRef)(null),o=Object(i.useCallback)((function(){var e;return null==(e=a.current)?void 0:e.disconnect()}),[]),l=Object(i.useCallback)((function(){a.current=new ResizeObserver((function(e){return n(e[0].contentRect.width)})),s&&a.current.observe(s)}),[s]);return Object(i.useEffect)((function(){return l(),function(){return o()}}),[o,l]),[c,t]}n("TSYQ");var o=n("IOTo"),l=n("1KBa");t.a=function(e){var t=e.data,n=void 0===t?{}:t,a=(e.hasBorder,e.isUppercase,n.title),u=n.items,d=(n.isLarge,n.speed),b=n.reverse,h=n.pausable;if(null===u||void 0===u||!u.length)return null;var j=Object(i.useRef)(),f=Object(s.useIntersection)(j,{triggerOnce:!0,threshold:.1});return Object(r.jsxs)("div",{ref:j,className:"marquee-section",children:[a&&Object(r.jsx)("div",{className:"marquee-section--title",children:a}),Object(r.jsx)(c,{speed:d,direction:b?"right":"left",pauseOnHover:h,className:"marquee",children:Object(r.jsx)("div",{className:"marquee--item",children:u.map((function(e,t){switch(e._type){case"simple":return Object(r.jsx)("span",{className:"marquee--text",children:e.marqueeObj.url?Object(r.jsx)(l.a,{title:e.marqueeObj.title,link:e.marqueeObj.url}):e.marqueeObj.title},t);case"photo":return Object(r.jsx)("div",{className:"marquee--photo",style:{flex:e.photo.aspectRatio},children:Object(r.jsx)(o.a,{photo:e.photo,hasPlaceholder:!1,forceLoad:f})},t)}}))})})]})}},FuBc:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("nKUr"),i=n("vJKn"),s=n.n(i),c=n("rg98"),a=n("q1tI"),o=n("H/qo"),l=n.n(o);function u(e){var t=e.border,n=void 0===t||t,i=e.white,o=void 0!==i&&i,u=Object(a.useRef)(),d=Object(a.useState)(!1),b=d[0],h=d[1],j=function(){var e=Object(c.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!l.a.validate(u.current.value)){e.next=12;break}return e.next=4,fetch("https://manage.kmail-lists.com/ajax/subscriptions/subscribe",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Cache-Control":"no-cache"},body:new URLSearchParams({g:"Rv8VD8",email:u.current.value})}).then((function(e){return e.json()}));case 4:if((n=e.sent).success){e.next=9;break}throw new Error(n.errors[0]||"Something went wrong.");case 9:h(!0);case 10:e.next=13;break;case 12:u.current.focus();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return b?Object(r.jsx)("div",{className:"text-pink italic border-t border-black pt-4",children:"Thanks friend."}):Object(r.jsxs)("div",{className:n?"border-t pt-4":null,children:[Object(r.jsx)("div",{className:"pb-4 uppercase text-bold text-lg ".concat(o?"text-white":"text-black"),children:"Get FWB in your inbox:"}),Object(r.jsxs)("form",{className:"relative",onSubmit:j,children:[Object(r.jsx)("input",{ref:u,type:"text",className:"rounded-3xl w-full focus:border-pink active:border-pink focus:ring-0",placeholder:"your@email.com"}),Object(r.jsx)("button",{className:"absolute right-4 top-0 h-full flex justify-center items-center text-4xl hover:text-black-alpha transition-color",onClick:j,children:"\u2192"})]})]})}},Gytx:function(e,t){e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var s=Object.keys(e),c=Object.keys(t);if(s.length!==c.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),o=0;o<s.length;o++){var l=s[o];if(!a(l))return!1;var u=e[l],d=t[l];if(!1===(i=n?n.call(r,u,d,l):void 0)||void 0===i&&u!==d)return!1}return!0}},"H/qo":function(e,t,n){"use strict";var r=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!r.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},IOTo:function(e,t,n){"use strict";var r=n("nKUr"),i=n("cpVT"),s=n("dhJC"),c=n("q1tI"),a=n("mRtW"),o=n("TSYQ"),l=n.n(o),u=n("FWZJ"),d=n("VXtC");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){switch(e){case"intrinsic":case"fill":return"object-cover";case"contain":return"object-contain"}};t.a=function(e){var t,n=e.photo,i=e.width,o=e.height,b=e.srcSizes,f=void 0===b?[400,800,1e3]:b,p=e.sizes,m=void 0===p?"(min-width: 940px) 50vw, 100vw":p,v=e.layout,O=void 0===v?"intrinsic":v,g=e.quality,x=void 0===g?80:g,w=e.hasPlaceholder,y=void 0===w||w,k=e.showDetails,N=void 0!==k&&k,q=e.hasCitation,P=void 0!==q&&q,S=e.hasHoverIcon,_=void 0!==S&&S,E=e.hasHoverAction,I=e.title,R=e.subtitle,T=e.forceLoad,W=e.onLoad,B=e.className,F=Object(s.a)(e,["photo","width","height","srcSizes","sizes","layout","quality","hasPlaceholder","showDetails","hasCitation","hasHoverIcon","hasHoverAction","title","subtitle","forceLoad","onLoad","className"]);if(!n)return null;var A=Object(c.useRef)(),D=Object(c.useState)(!1),C=D[0],z=D[1],L=Object(a.useIntersection)(A,{once:!0,threshold:.1}),H="number"===typeof i&&"number"===typeof o?o/i*100:100/(n.customRatio||n.aspectRatio),J="intrinsic"===O?{paddingTop:"".concat(H,"%")}:null,K=Object(u.a)(n,h(h(h({},{width:i}),{height:o}),{quality:x})),M=Object(u.b)(n,h(h(h({},{srcSizes:f}),{aspect:H}),{quality:x}));return Object(c.useEffect)((function(){C&&W&&W()}),[C]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("figure",h(h({className:B||null},F),{},{children:[Object(r.jsxs)("div",{className:l()("ar",{"has-fill":"fill"===O||"contain"===O}),style:J,children:[Object(r.jsx)("picture",{children:Object(r.jsx)("img",{ref:A,width:i,height:o,src:T||L?K:null,srcSet:T||L?M:null,sizes:m,decoding:"async",onLoad:function(){requestAnimationFrame((function(){z(!0)}))},alt:n.alt||(null===(t=n.asset)||void 0===t?void 0:t.altText),className:l()(j(O),{"is-loaded":C})})}),y&&Object(r.jsx)("div",{className:l()("ar--placeholder",{"is-loaded":C}),children:Object(r.jsx)("img",{src:n.lqip,alt:"",role:"presentation"})})]}),_&&Object(r.jsxs)("div",{className:"photo-icon",children:[Object(r.jsx)(d.a,{name:_,id:n.id}),E&&Object(r.jsx)("span",{children:E})]}),P&&Object(r.jsx)("span",{className:"photo-citation","aria-label":"Photo Credits Index",children:n.index}),(I||R)&&Object(r.jsxs)("div",{className:"photo-header",children:[I&&Object(r.jsx)("div",{className:"photo-header--title",children:I}),R&&Object(r.jsx)("div",{className:"photo-header--subtitle",children:R})]})]})),N&&Object(r.jsxs)("div",{className:"photo-details",children:[n.caption&&Object(r.jsx)("div",{className:"photo-details--caption",children:n.caption}),n.credits&&Object(r.jsx)("div",{className:"photo-details--credits",children:n.credits})]})]})}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return x}));var r=n("nKUr"),i=n("cpVT"),s=n("q1tI"),c=n.n(s),a=(n("osSN"),n("YFqc")),o=n.n(a),l=n("jnpm"),u=n("1KBa");function d(e){var t=e.s,n=e.sec,i=e.credit;return Object(r.jsx)("div",{className:"".concat(i?null:"border-t"," uppercase py-4"),children:Object(r.jsx)(u.a,{className:"btn font-bold",title:n.title,link:n.link?n.link:null,page:n.page?n.page:null,hasArrows:!0})},t)}function b(e){var t=e.s,n=e.sec;return Object(r.jsxs)("div",{className:"border-t py-4 mt-4",children:[n.title&&Object(r.jsx)("h3",{className:"border-b pb-4 mb-4 uppercase",children:n.title}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:n.paragraph}}),n.component]},t)}function h(e){var t=e.title,n=e.dark,i=void 0===n||n,c=e.sections,a=void 0===c?null:c,o=e.links,u=void 0===o?null:o,h=e.hiddenSections,j=void 0===h?null:h,f=e.hiddenLinks,p=void 0===f?null:f,m=e.locked,v=void 0!==m&&m,O=e.expandable,g=void 0!==O&&O,x=e.angle,w=void 0===x?["5deg","-5deg"]:x,y=e.lockedAmount,k=void 0===y?null:y,N=e.credit,q=void 0!==N&&N,P=e.nftOwner,S=void 0===P?null:P,_=Object(s.useState)(!1),E=_[0],I=_[1];return Object(r.jsx)(l.a,{distance:w,children:Object(r.jsxs)("div",{className:"".concat(i?q?"bg-black-alpha text-white":"bg-black text-white":"bg-white text-black"," rounded-lg p-4 mb-8 relative"),children:[v&&Object(r.jsx)("div",{className:"home-locked",children:Object(r.jsx)("div",{children:k})}),Object(r.jsx)("div",{className:"font-medium text-3xl md:text-4xl uppercase",children:t}),g&&Object(r.jsx)("div",{className:"absolute right-4 top-4 w-12 h-12",children:Object(r.jsx)("button",{onClick:function(){return I((function(e){return!e}))},children:Object(r.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"transform duration-500 transition-transform\n\t\t\t\t\t\t\t\t\t".concat(E?"-rotate-45":"rotate-0"),children:[Object(r.jsx)("line",{x1:"52",y1:"8.74228e-08",x2:"52",y2:"100",stroke:"black",strokeWidth:"4"}),Object(r.jsx)("line",{x1:"100",y1:"52",x2:"-1.74846e-07",y2:"52",stroke:"black",strokeWidth:"4"})]})})}),a?a.map((function(e,t){return Object(r.jsx)(b,{sec:e},t)})):null,u?u.map((function(e,t){return Object(r.jsx)(d,{sec:e,credit:q},t)})):null,S?Object(r.jsx)(b,{sec:{paragraph:S}},"nft-owner"):null,Object(r.jsxs)("div",{className:"overflow-hidden transition-all duration-500 ".concat(E?"max-h-screen":"max-h-0"),children:[j?j.map((function(e,t){return Object(r.jsx)(b,{sec:e},t)})):null,p?p.map((function(e,t){return Object(r.jsx)(d,{sec:e},t)})):null]})]})})}var j=n("FuBc"),f=n("CafY"),p=n("20a2"),m=n("3bEZ"),v=n("Y26a"),O=n("0J57");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var x=!0;t.default=function(e){var t,n=e.data,a=n.site,l=n.page,u=Object(s.useState)({}),d=u[0],b=u[1],x=Object(p.useRouter)(),w=function(){var e;if("/"!==x.pathname)return(null===l||void 0===l||null===(e=l.seo)||void 0===e?void 0:e.background)||(null===a||void 0===a?void 0:a.seo.background);var t=l.bgNfts.map((function(e,t){return{title:e.title,artist:e.artist,link:e.link,image:m.a.image(e.image).url(),owner:e.owner}})),n=t[Math.floor(Math.random()*t.length)];n.url=n.image,b(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))};return Object(s.useEffect)((function(){return w()}),[]),d?Object(r.jsxs)(f.a,{site:a,page:l,bgImage:d,children:[Object(r.jsx)("div",{className:"fixed w-full z-90 uppercase",children:Object(r.jsx)(O.a,{data:{items:[{_type:"simple",marqueeObj:l.marquee}]}})}),Object(r.jsxs)("div",{className:"home-top",children:[Object(r.jsx)("div",{className:"home-top-logo",children:Object(r.jsx)("img",{src:"/images/fwb.svg",alt:"FWB",className:"w-full"})}),Object(r.jsx)("div",{className:"hidden lg:flex justify-center items-center w-1/4 pl-4",children:Object(r.jsx)(o.a,{href:"/join",children:Object(r.jsx)("button",{className:"join--button",children:"JOIN"})})}),Object(r.jsx)("div",{className:"hidden lg:flex justify-center items-center w-1/4 pl-4",children:Object(r.jsx)(o.a,{href:"https://swap.fwb.help",children:Object(r.jsx)("button",{className:"get--button",children:"GET $FWB"})})})]}),Object(r.jsxs)("div",{className:"home-logo",children:["Friends ",Object(r.jsx)("span",{children:"with"})," Benefits"]}),Object(r.jsxs)("div",{className:"w-full overflow-x-hidden lg:overflow-x-visible lg:w-1/3 absolute right-0 lg:right-8 top-1/2 lg:top-16 p-4",children:[Object(r.jsxs)("div",{className:"home-logo-mobile",children:["Friends ",Object(r.jsx)("span",{children:"with"})," Benefits"]}),Object(r.jsx)("div",{className:"mb-4 lg:hidden",children:Object(r.jsx)(o.a,{href:"/join",children:Object(r.jsx)("button",{className:"join--button",children:"JOIN"})})}),Object(r.jsx)("div",{className:"mb-4 lg:hidden",children:Object(r.jsx)(o.a,{href:"https://swap.fwb.help",children:Object(r.jsx)("button",{className:"get--button",children:"GET $FWB"})})}),Object(r.jsx)(h,{title:"About",dark:!1,angle:[0,0],sections:[{title:null,paragraph:"Friends With Benefits is a worldwide group of cultural creators, thinkers, and builders who convene digitally and IRL to collaboratively shape Web3's future.<br /><br />We hold $FWB tokens as a way to collectively fund and govern our community endeavors and co-own what we create together.",component:Object(r.jsx)(j.a,{})}],links:[{title:"Learn More",page:"/about"}]}),Object(r.jsx)(h,{title:"Join",sections:[{title:null,paragraph:"Learn about our benefits, see how to join, and get a sense of what it means to be a member of FWB."}],links:[{title:"Become a member",page:"/join"}]}),Object(r.jsx)(h,{title:"Opportunities",sections:[{title:null,paragraph:"Discover ways to collaborate more closely with our community, from open contributor roles to project grants, fellowships, and beyond."}],links:[{title:"View Opportunities",page:"/opportunities"}]}),Object(r.jsx)(h,{title:"Discord",locked:!0,lockedAmount:"75 $FWB",sections:[{title:null,paragraph:"The FWB Discord is where Web3 is evolving in real time, with channels for art, events, NFTs, governance,  job opportunities, trading crypto, and so much more."}],links:[{title:"Join The Conversation",link:"https://discord.gg/3jCyswsKFn"}]}),Object(r.jsx)(h,{title:"Works in Progress",sections:[{title:null,paragraph:"FWB's editorial platform publishes original writing on decentralized technology and the culture surrounding it."}],links:[{title:"Read WIP",link:"https://fwb.help/wip"}]}),Object(r.jsx)(h,{locked:!0,title:"Events",lockedAmount:"5 $FWB",sections:[{title:null,paragraph:"Whether online or IRL, join us for conversations, radio shows, afterparties, and local meetups."}],links:[{title:"See upcoming events",page:"/events"}]}),Object(r.jsx)(h,{title:"Press",sections:[{title:null,paragraph:"Learn more about what we\u2019re up to, as reported by\u2026"}],links:[{title:"New York Times",link:"https://www.nytimes.com/2022/03/02/technology/friends-with-benefits-crypto-dao.html"},{title:"New Yorker",link:"https://www.newyorker.com/culture/infinite-scroll/the-promise-of-daos-the-latest-craze-in-crypto"},{title:"Resident Advisor",link:"https://ra.co/features/3914"},{title:"Defiant",link:"https://anchor.fm/thedefiant/episodes/Weve-Been-Creating-Value-for-Instagram-and-TikTok-With-Very-Little-Actually-Accruing-to-Us-Trevor-McFedries-elu3v1"}]}),Object(r.jsx)(h,{credit:!0,links:[{title:"NFT Backdrop:  ".concat(d.title," by ").concat(d.artist),link:"".concat(d.link)}],nftOwner:'<strong class="uppercase font-bold">Owned by:</strong> '.concat(d.owner)}),(null===(t=a.footer)||void 0===t?void 0:t.items)&&Object(r.jsx)(v.a,{items:a.footer.items,className:"flex flex-wrap justify-center space-x-4 text-xs",hasCircle:!0})]})]}):Object(r.jsx)(c.a.Fragment,{})}},jnpm:function(e,t,n){"use strict";var r=n("nKUr"),i=n("q1tI"),s=n("V8Bd"),c=n("fkrX"),a=n("ATyU"),o=n("8wkZ");t.a=function(e){var t=e.key,n=e.distance,l=void 0===n?["5deg","-5deg"]:n,u=(e.rotate,e.innerClassName),d=e.className,b=void 0===d?null:d,h=e.children,j=Object(s.a)().scrollY,f=Object(i.useRef)(),p=Object(o.a)().height,m=Object(i.useState)(0),v=m[0],O=m[1],g=Object(i.useState)(0),x=g[0],w=g[1];Object(i.useEffect)((function(){if(f.current){var e=function(){var e=f.current;O(e.getBoundingClientRect().top+window.pageYOffset),w(e.offsetHeight)};return setTimeout((function(){return e()}),50),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[f]);var y=[Math.max(0,v-p),v+x],k=Object(c.a)(j,y,l,{clamp:!0});return Object(r.jsx)("div",{ref:f,className:b,children:Object(r.jsx)(a.a.div,{className:u||"",initial:{rotate:0},style:{rotate:k||0},children:h})},t)}},mRtW:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=n("q1tI"),a=s(n("Gytx"));t.useIntersection=function(e,t,n){void 0===t&&(t={});var s=t.defaultIntersecting,o=t.once,l=i(t,["defaultIntersecting","once"]),u=c.useRef(l),d=c.useState(!0===s),b=d[0],h=d[1],j=c.useRef(!1);return c.useEffect((function(){a.default(u.current,l)||(u.current=l)})),c.useEffect((function(){if(null!=e){var t=e instanceof Element?e:e.current;if(null!=t&&(!o||!j.current)){var i=new IntersectionObserver((function(e){var r=e[e.length-1];h(r.isIntersecting),null!=n&&n(r),r.isIntersecting&&(j.current=!0),o&&r.isIntersecting&&null!=t&&i.unobserve(t)}),r(r({},u.current),{root:null!=u.current.root?u.current.root.current:null}));return i.observe(t),function(){o&&j.current||null!=t&&i.unobserve(t)}}}}),[u.current,e]),b}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3,4,5,6,10,13]]]);