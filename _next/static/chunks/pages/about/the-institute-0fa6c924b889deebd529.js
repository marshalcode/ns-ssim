(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{1093:function(e,t,n){"use strict";var r=n(5893),a=n(9008),s=n(1664);t.Z=function(e){var t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{children:(0,r.jsxs)("title",{className:"capitalize",children:["SSIM - ",(t=e.title,t.toUpperCase())]})}),(0,r.jsxs)("div",{className:"relative h-[100px] sm:h-[150px] md:h-[200px] w-full bg-gray-800 flex items-center",children:[(0,r.jsx)("img",{className:"h-full opacity-30",src:e.src||"https://source.unsplash.com/1920x200/?education",alt:""}),(0,r.jsx)("div",{className:"absolute px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[120px]",children:(0,r.jsxs)("p",{className:"text-xl sm:text-2xl text-green-500 tracking-widest",children:[(0,r.jsx)(s.default,{href:"/",children:(0,r.jsx)("a",{className:"",children:"HOME"})}),"\xa0\xa0"," > ","\xa0\xa0",(0,r.jsx)("a",{className:"uppercase",children:e.title})]})})]})]})}},3402:function(e,t,n){"use strict";n.d(t,{HA:function(){return a},k8:function(){return s},OC:function(){return i},MJ:function(){return o},_N:function(){return c}});var r=n(5893),a=function(e){return(0,r.jsx)("div",{className:"flex flex-col items-center justify-center ".concat(e.className),children:e.children})},s=function(e){return(0,r.jsx)("div",{className:"mx-auto prose max-w-none md:w-5/6 px-6 text-justify ".concat(e.className),children:e.children})},i=function(e){return(0,r.jsxs)(a,{className:"mb-10 lg:flex-row ".concat(e.className),children:[(0,r.jsx)("img",{className:"order-1 lg:order-2 rounded-3xl h-[300px] w-full max-w-[400px] shadow-xl object-cover object-center ".concat(e.imgClassName),src:e.src,alt:e.alt}),(0,r.jsxs)("div",{className:"prose px-5 pt-8 lg:pt-0 text-justify order-2 lg:order-1 w-full lg:pr-12",children:[(0,r.jsx)("h3",{className:"italic text-center mt-0 ".concat(e.hClassName),children:e.title||""}),(0,r.jsx)("p",{className:"".concat(e.pClassName),children:e.children||""})]})]})},o=function(e){return(0,r.jsxs)(a,{className:"mb-10 lg:flex-row ".concat(e.className),children:[(0,r.jsx)("img",{className:"rounded-3xl h-[300px] w-full max-w-[400px] shadow-2xl object-cover object-center ".concat(e.imgClassName),src:e.src,alt:e.alt}),(0,r.jsxs)("div",{className:"prose px-5 pt-8 lg:pt-0 text-justify w-full lg:pl-12",children:[(0,r.jsx)("h3",{className:"italic text-center mt-0 ".concat(e.hClassName),children:e.title||""}),(0,r.jsx)("p",{className:"".concat(e.pClassName),children:e.children||""})]})]})},c=function(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"h-[150px] w-[150px] m-3 border-2 border-gray-300 rounded-2xl",children:(0,r.jsx)("img",{className:"object-contain p-1.5 w-full h-full",src:e.src||"https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e",alt:e.alt||"couldn't load"})})})}},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(s.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},s=n(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,s=e.hasQuery,i=void 0!==s&&s;return n||a&&i}},2775:function(e,t,n){"use strict";var r=n(1682);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var s,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=r?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),o=(s=n(3244))&&s.__esModule?s:{default:s},c=n(3398),l=n(1165),u=n(6393);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function h(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(h,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var s=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?s=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?s=!1:t.add(a.type);break;case"meta":for(var c=0,l=f.length;c<l;c++){var u=f[c];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?s=!1:n.add(u);else{var d=a.props[u],p=r[u]||new Set;"name"===u&&i||!p.has(d)?(p.add(d),r[u]=p):s=!1}}}return s}}()).reverse().map((function(e,n){var s=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,i.default.cloneElement(e,o)}return i.default.cloneElement(e,{key:s})}))}var x=function(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(l.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)};t.default=x},3244:function(e,t,n){"use strict";var r=n(3115),a=n(2553),s=n(2012),i=(n(450),n(9807)),o=n(7690),c=n(9828);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o(this,n)}}t.__esModule=!0,t.default=void 0;var u=n(7294),d=function(e){i(n,e);var t=l(n);function n(e){var s;return a(this,n),(s=t.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(r(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},236:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(1093),s=n(3402);t.default=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{title:"the institute"}),(0,r.jsxs)(s.k8,{className:"py-12",children:[(0,r.jsxs)(s.HA,{children:[(0,r.jsx)("img",{className:"rounded-3xl h-[400px] w-full max-w-[600px] object-cover object-center",src:"/images/The_Institute/7.jpeg",alt:""}),(0,r.jsxs)("blockquote",{children:["Sri Sukhmani Institute of Management is a premier Institute, set up under the Sri Sukhmani Group of Institutions in 2009. The Group was established more than 5 decades ago, in 1971, by Philanthropist-Educationist Prof. Avtar Singh and has since carved a niche for itself in the area of Management.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"At SSIM, we equip our students with knowledge, skills and confidence that are relevant to contemporary managerial practices. The institute strives to sharpen Management skills and produce managers of tomorrow who can meet the global demands in the field of management.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Sri Sukhmani Institute of Management has a beautiful campus, fully equipped with labs, library, AC classrooms, Wi-fi accessibility and other state-of-the-art infrastructure. We offer PGDM courses with specialization in Human Resources, Marketing, Finance, IT & Business Analytics, Entrepreneurship, Operations and Supply Chain Management. We focus on providing a cordial environment for the students to learn, experience, and experiment, covering all facets of professional education.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Our campus is located in Dwarka, Delhi and has state of the art infrastructure with all the facilities essential for conducive learning. It is easily accessible by road, rail or air with the airport being a mere 6 km away."]})]}),(0,r.jsx)("h1",{className:"pt-12 text-center",children:"Our Campus"})]}),(0,r.jsxs)("div",{className:"mx-auto md:w-5/6 px-6 pb-8",children:[(0,r.jsx)(s.MJ,{title:"Classroom",src:"/images/The_Institute/1.jpg",children:"The classrooms are aesthetically designed to provide a stimulating atmosphere, conducive to the all-round development of the students. The classrooms are fully air-conditioned and equipped with the latest facilities for presentations, with the modern audio-visual system, LCD projectors, computers, and the internet."}),(0,r.jsx)(s.OC,{title:"IT Lab",src:"/images/The_Institute/2.jpg",children:"The SSIM Institute has a well-equipped state of the art computer lab, with well-equipped systems of the latest technical configuration. The required legal softwares are also installed in each system. High-speed internet connectivity provides extended access to vast intellectual resources."}),(0,r.jsx)(s.MJ,{title:"Library",src:"/images/The_Institute/3.jpg",children:"SSIM Dwarka has a well-stocked library, replete with the latest and most sought after books, National Journals, International Journals & e-journals. We realize that the library and information systems play a pivotal role in the learning activities of students. Accordingly, we ensure that our library is kept updated with the latest information and learning tools."}),(0,r.jsx)(s.OC,{title:"Co-curricular Activities",src:"/images/The_Institute/4.jpg",children:"While you study at SSIM Dwarka, you will be actively encouraged to participate & engage in co-curricular activities. The institute organizes many social and sporting events throughout the year to develop holistic creativity."}),(0,r.jsx)(s.MJ,{title:"Cafeteria",src:"/images/The_Institute/5.jpg",children:"The institution has an ultra-modern canteen with an aesthetic sense of design and d\xe9cor which offers hygienic, wholesome and nutritious food at subsidized rates to satisfy different taste buds. Complete, planned food is served in neat, clean & hygienic surroundings."}),(0,r.jsx)(s.OC,{title:"Wi-Fi Enabled",src:"/images/The_Institute/6.jpg",children:"We have a State-of-the-Art, fully air-conditioned, Wifi campus with 24x7 high bandwidth internet connectivity. The IT lab consists of computers in interconnected local area networks. Our IT programs are regularly updated by incorporating the latest hardware/ software developments across the world."})]})]})}},4834:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/the-institute",function(){return n(236)}])},9008:function(e,t,n){e.exports=n(2775)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),a=n(7381),s=n(3585),i=n(5725);e.exports=function(e){return r(e)||a(e)||s(e)||i()}}},function(e){e.O(0,[774,888,179],(function(){return t=4834,e(e.s=t);var t}));var t=e.O();_N_E=t}]);