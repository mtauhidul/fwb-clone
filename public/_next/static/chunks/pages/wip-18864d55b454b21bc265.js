_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[55],{"6FTQ":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"8rE2":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("6FTQ");function i(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},Ioti:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("nKUr");function i(e){var t=e.authors,n=e.transparent,i=void 0!==n&&n,a=e.small,o=void 0!==a&&a;return t?t.map((function(e,n){return Object(r.jsxs)("div",{className:"".concat(i?"bg-gray":"bg-grayLight"," rounded-full ").concat(o?"text-sm":"text-lg"," pr-4 flex items-center ").concat(t.length>1?"mr-2":null," mb-2 ").concat(!e.picture&&"pl-4"," whitespace-nowrap"),children:[e.picture&&Object(r.jsx)("div",{style:{backgroundImage:"url(".concat(e.picture,")")},className:"wip-author ".concat(o&&"wip-author-small")})," ",e.name]},n)})):null}},LjBY:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return A}));var r=n("nKUr"),i=n("q1tI"),a=n.n(i),o=n("YFqc"),c=n.n(o),s=n("3bEZ"),l=n("xvhg"),u=function(){return"hapxpp"};function d(){var e=a.a.useState({width:void 0,height:void 0}),t=Object(l.a)(e,2),n=t[0],r=t[1];return a.a.useEffect((function(){var e=function(){r({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}var p="left",h="reverse",f="top left",b=function(e){var t=a.a.useState(0),n=Object(l.a)(t,2),i=n[0],o=n[1],c=a.a.useState(0),s=Object(l.a)(c,2),b=s[0],m=s[1],v=a.a.useState(!1),j=Object(l.a)(v,2),w=j[0],g=j[1],O=a.a.useMemo(u,[]),x=d(),y=a.a.useCallback((function(e){if(e){var t=parseInt(window.getComputedStyle(e.parentNode).height.slice(0,-2)),n=parseInt(window.getComputedStyle(e.parentNode).width.slice(0,-2));parseInt(window.getComputedStyle(e).fontSize.slice(0,-2));o(t),m(n)}}),[x]),_=e.speed||5,N=e.cssNamespace||"react-css-marquee",S=e.reverse?h:p,V=e.vertical&&!e.flip?"rotate(90deg)":e.vertical&&e.flip?"rotate(-90deg)":"rotate(0deg)",k=(e.vertical?i:b)/_/10,I=e.vertical&&!e.flip?"translateX(5%)":e.vertical&&e.flip?"translateX(-".concat(i,"px)"):"translateX(0)",C=e.vertical&&!e.flip?"":e.vertical&&e.flip?f:"",E=e.vertical?"".concat(i,"px"):"".concat(b,"px"),M=e.spacing||4,R=e.text||"REACT CSS MARQUEE",A="".concat(R).concat(" ".repeat(M)).repeat((e.vertical?i:b)/(M+R.length)/6),z=function(t){if(e.hoverStop){var n="mouseenter"===t.type;g(n)}};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("style",{children:"\n            @keyframes ".concat(N,"__animation-").concat(O," {\n              0% {\n                transform: translateX(0%);\n              }\n              100% {\n                transform: translateX(-100%);\n              }\n            }\n\n            .").concat(N,"__wrapper-").concat(O," { \n              box-sizing: border-box;\n              user-select: none;\n            }\n\n            .").concat(N,"__rotation-").concat(O," {\n              transform: ").concat(V," ").concat(I,";\n              transform-origin: ").concat(C,";\n              will-change: transform;\n              pointer-events: none;\n            }\n\n            .").concat(N,"__container-").concat(O," {\n              height: ").concat("auto",";\n              width: ").concat(E,";\n              display: flex;\n              flex-flow: row nowrap;\n              backface-visibility: hidden;\n              perspective: 1000px;\n              overflow: hidden;\n              font-size: 16px;\n              pointer-events: none;            \n            }\n\n            .").concat(N,"__text-").concat(O," {\n              align-self: center;\n              text-rendering: optimizeLegibility;\n              transform: translateZ(0);\n              animation-name: ").concat(N,"__animation-").concat(O,";\n              animation-timing-function: linear;\n              animation-iteration-count: infinite;\n              animation-direction: ").concat(S,";\n              animation-duration: ").concat(k,"s;\n              animation-play-state: ").concat(w?"paused":"initial",";\n              white-space: pre;\n              will-change: transform;\n              pointer-events: none;\n            }\n          ")}),Object(r.jsx)("div",{ref:y,onMouseEnter:z,onMouseOut:z,className:"".concat(N,"__wrapper-").concat(O," ").concat(N,"__wrapper"),children:Object(r.jsx)("div",{className:"".concat(N,"__rotation-").concat(O),children:Object(r.jsxs)("div",{className:"".concat(N,"__container-").concat(O," ").concat(N,"__container"),children:[Object(r.jsx)("div",{className:"".concat(N,"__text-").concat(O," ").concat(N,"__text"),dangerouslySetInnerHTML:{__html:A}}),Object(r.jsx)("div",{className:"".concat(N,"__text-").concat(O," ").concat(N,"__text"),dangerouslySetInnerHTML:{__html:A}})]})})})]})},m=n("CafY"),v=n("Vvt1"),j=n.n(v),w=n("NsJf"),g=n("Ioti");function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=new Map,_=new WeakMap,N=0,S=void 0;function V(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(_.has(n)||(N+=1,_.set(n,N.toString())),_.get(n)):"0":e[t]);var n})).toString()}function k(e,t,n,r){if(void 0===n&&(n={}),void 0===r&&(r=S),"undefined"===typeof window.IntersectionObserver&&void 0!==r){var i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var a=function(e){var t=V(e),n=y.get(t);if(!n){var r,i=new Map,a=new IntersectionObserver((function(t){t.forEach((function(t){var n,a=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=a),null==(n=i.get(t.target))||n.forEach((function(e){e(a,t)}))}))}),e);r=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:i},y.set(t,n)}return n}(n),o=a.id,c=a.observer,s=a.elements,l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(t),c.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(s.delete(e),c.unobserve(e)),0===s.size&&(c.disconnect(),y.delete(o))}}var I=["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function C(e){return"function"!==typeof e.children}var E=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),C(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,x(t,n);var a=r.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,i=e.trackVisibility,a=e.delay,o=e.fallbackInView;this._unobserveCb=k(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:a},o)}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!C(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var r=this.props,a=r.children,o=r.as,c=r.tag,s=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(r,I);return i.createElement(o||c||"div",O({ref:this.handleNode},s),a)},r}(i.Component);E.displayName="InView",E.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var M=j()((function(){return Promise.all([n.e(12),n.e(11),n.e(64)]).then(n.bind(null,"/4on"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["/4on"]},modules:["wip/index.js -> @components/canvas/Feature"]}}),R=function(e){var t=e.data;return Object(r.jsx)("div",{className:"",children:Object(r.jsx)(c.a,{href:"/wip/".concat(t.slug),children:Object(r.jsx)("a",{className:"wip-list-item-outer",children:Object(r.jsxs)("div",{className:"wip-home-list-item relative",children:[t.title,Object(r.jsx)("div",{className:"wip-home-list-item-by",children:Object(r.jsx)(g.a,{authors:t.authors,transparent:!0,small:!0})}),Object(r.jsx)("p",{className:"pt-2 normal-case",children:t.summary}),Object(r.jsx)("button",{className:"wip-button wip-button-small",children:"Read"})]})})})})},A=!0;t.default=function(e){var t=e.featured,n=e.data,a=e.posts,o=e.authors,l=n.site,u=n.page,p=Object(i.useState)(!1),h=p[0],f=p[1],v=d(),j=v.width,g=v.height,O=function(e){var t=void 0===e?{}:e,n=t.threshold,r=t.delay,a=t.trackVisibility,o=t.rootMargin,c=t.root,s=t.triggerOnce,l=t.skip,u=t.initialInView,d=t.fallbackInView,p=i.useRef(),h=i.useState({inView:!!u}),f=h[0],b=h[1],m=i.useCallback((function(e){void 0!==p.current&&(p.current(),p.current=void 0),l||e&&(p.current=k(e,(function(e,t){b({inView:e,entry:t}),t.isIntersecting&&s&&p.current&&(p.current(),p.current=void 0)}),{root:c,rootMargin:o,threshold:n,trackVisibility:a,delay:r},d))}),[Array.isArray(n)?n.toString():n,c,o,s,l,a,d,r]);Object(i.useEffect)((function(){p.current||!f.entry||s||l||b({inView:!!u})}));var v=[m,f.inView,f.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}(),x=O.ref,y=O.inView;return Object(i.useEffect)((function(){f(j<720)}),[j,g]),console.log("featured",t),Object(r.jsxs)(m.a,{site:l,page:u,join:!0,gradient:!1,children:[Object(r.jsx)("div",{className:"wip-categories-sub",children:Object(r.jsx)(w.a,{authors:o})}),Object(r.jsx)("div",{className:"wip-home-outer",children:Object(r.jsxs)("div",{className:"wip-home",children:[Object(r.jsxs)("div",{className:"wip-home-featured ".concat(y?"":"wip-home-featured-stuck"),children:[t&&Object(r.jsx)(M,{image:s.a.image(t.featureImage).width(1024).height(1365).url(),spine:s.a.image(t.featureSpine).width(103).height(1365).url(),title:""}),t&&Object(r.jsx)("div",{className:"wip-home-featured-title",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"uppercase text-2xl md:text-6xl",children:t.title}),Object(r.jsx)(c.a,{href:"/wip/".concat(t.slug),children:Object(r.jsx)("a",{className:"wip-button",children:"Read"})})]})}),h?Object(r.jsx)("div",{className:"wip-mobile-wide",children:Object(r.jsx)(b,{cssNamespace:"horizontal",text:"WORKS <span>in</span> PROGRESS"})}):Object(r.jsx)(b,{vertical:!0,cssNamespace:"vertical",size:4,text:"WORKS <span>in</span> PROGRESS"})]}),Object(r.jsx)("div",{className:"wip-home-list",children:Object(r.jsxs)("div",{className:"h-full",children:[Object(r.jsx)("div",{className:"wip-home-list-title",children:Object(r.jsx)("img",{src:"/images/works-in-progress.svg",className:"w-full my-8"})}),a.map((function(e,t){return Object(r.jsx)(R,{data:e},t)}))]})})]})}),Object(r.jsx)("div",{ref:x,className:"wip-pitch",children:Object(r.jsx)(c.a,{href:"/wip/pitch",children:Object(r.jsx)("button",{className:"wip-button",children:"Write for WIP"})})})]})}},NsJf:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("nKUr"),i=n("YFqc"),a=n.n(i);function o(e){var t=e.authors;return Object(r.jsx)("div",{className:"wip-categories overflow-x-auto",children:Object(r.jsxs)("ul",{className:"flex items-center ",children:[Object(r.jsx)("li",{children:Object(r.jsx)(a.a,{href:"/wip",children:Object(r.jsx)("button",{className:"cursor-pointer",children:Object(r.jsx)("img",{src:"/images/fwb-wip.svg",className:"h-10 mr-6 ml-4 md:ml-0"})})})}),t.map((function(e,t){return"Cooper Turley"===e.name?null:Object(r.jsx)("li",{children:Object(r.jsx)(a.a,{href:"/wip/author/".concat(e.slug),children:Object(r.jsx)("a",{className:"uppercase whitespace-nowrap",children:e.name})})},t)}))]})})}},O5Sw:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wip",function(){return n("LjBY")}])},xvhg:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("8rE2");function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){i=!0,a=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["O5Sw",0,1,2,3,4,5]]]);