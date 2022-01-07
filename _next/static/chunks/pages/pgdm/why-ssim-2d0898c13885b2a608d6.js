(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[941],{1093:function(e,t,r){"use strict";var n=r(5893),o=r(9008),a=r(1664);t.Z=function(e){var t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.default,{children:(0,n.jsxs)("title",{className:"capitalize",children:["SSIM - ",(t=e.title,t.toUpperCase())]})}),(0,n.jsxs)("div",{className:"relative h-[100px] sm:h-[150px] md:h-[200px] w-full bg-gray-800 flex items-center",children:[(0,n.jsx)("img",{className:"h-full opacity-30",src:e.src||"https://source.unsplash.com/1920x200/?education",alt:""}),(0,n.jsx)("div",{className:"absolute px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[120px]",children:(0,n.jsxs)("p",{className:"text-xl sm:text-2xl text-green-500 tracking-widest",children:[(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{className:"",children:"HOME"})}),"\xa0\xa0"," > ","\xa0\xa0",(0,n.jsx)("a",{className:"uppercase",children:e.title})]})})]})]})}},3398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},a=r(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},2775:function(e,t,r){"use strict";var n=r(1682);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),s=(a=r(3244))&&a.__esModule?a:{default:a},c=r(3398),u=r(1165),l=r(6393);function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var l=h[c];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?a=!1:r.add(l);else{var p=o.props[l],d=n[l]||new Set;"name"===l&&i||!d.has(p)?(d.add(p),n[l]=d):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:a})}))}var x=function(e){var t=e.children,r=(0,i.useContext)(c.AmpStateContext),n=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,l.isInAmpMode)(r)},t)};t.default=x},3244:function(e,t,r){"use strict";var n=r(3115),o=r(2553),a=r(2012),i=(r(450),r(9807)),s=r(7690),c=r(9828);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}t.__esModule=!0,t.default=void 0;var l=r(7294),p=function(e){i(r,e);var t=u(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=p},5675:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(1093),a=function(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"px-5 py-10 w-[250px] ".concat(e.classNam),children:(0,n.jsx)("div",{className:"flex flex-col pt-5 bg-blue-400 h-[200px] p-5 rounded-lg",children:(0,n.jsx)("p",{className:"text-xl font-semibold text-white",children:e.title})})})})};t.default=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{title:"Why ssim"}),(0,n.jsxs)("div",{className:"container flex flex-wrap justify-center px-5 py-20 mx-auto",children:[(0,n.jsx)(a,{color:"blue",title:"World Class Business School"}),(0,n.jsx)(a,{color:"blue",title:"100% PLACEMENT ASSISTANCE."}),(0,n.jsx)(a,{color:"blue",title:"Strong Alumni Network with Global Reach"}),(0,n.jsx)(a,{color:"blue",title:"120 Plus Days Live Coporate Exposure"}),(0,n.jsx)(a,{color:"blue",title:"Interactive discussions with leading CEOs & Business Managers"}),(0,n.jsx)(a,{color:"blue",title:"2 month's summer internship with leading corporates"}),(0,n.jsx)(a,{color:"blue",title:"Live Projects in leading Corporate."}),(0,n.jsx)(a,{color:"blue",title:"Winter Live Projects."}),(0,n.jsx)(a,{color:"blue",title:"ACADEMIC EXCELLENCE with case studies & research driven approach"}),(0,n.jsx)(a,{color:"blue",title:"Mentorship & Career Counseling"}),(0,n.jsx)(a,{color:"blue",title:"E- Teaching / Power Teaching (Video Lectures)"}),(0,n.jsx)(a,{color:"blue",title:"Industry Visits: Maruti Suzuki, Mother Dairy, Bisleri, Yakult etc."}),(0,n.jsx)(a,{color:"blue",title:"Air Conditioned Campus"}),(0,n.jsx)(a,{color:"blue",title:"International Study Tour"}),(0,n.jsx)(a,{color:"blue",title:"Paid Domestic Tour"}),(0,n.jsx)(a,{color:"blue",title:"Free Laptop"}),(0,n.jsx)(a,{color:"blue",title:"Assured Educational Loan"}),(0,n.jsx)(a,{color:"blue",title:"Excellence of 50 Years in Indian Industry, Education and Social Service"}),(0,n.jsx)(a,{color:"blue",title:"6 Pro Skill Enhancement Certificates Including Six Sigma & Digital Marketing"}),(0,n.jsx)(a,{color:"blue",title:"6 Pro Industry Ready Workshops i.e. NSE, SEBI & MIS etc"})]})]})}},3339:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pgdm/why-ssim",function(){return r(5675)}])},9008:function(e,t,r){e.exports=r(2775)},8164:function(e,t,r){var n=r(4360);e.exports=function(e){if(Array.isArray(e))return n(e)}},1682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,r){var n=r(8164),o=r(7381),a=r(3585),i=r(5725);e.exports=function(e){return n(e)||o(e)||a(e)||i()}}},function(e){e.O(0,[774,888,179],(function(){return t=3339,e(e.s=t);var t}));var t=e.O();_N_E=t}]);