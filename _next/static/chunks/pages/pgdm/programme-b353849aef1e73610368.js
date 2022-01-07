(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[323],{1093:function(e,t,s){"use strict";var r=s(5893),l=s(9008),n=s(1664);t.Z=function(e){var t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.default,{children:(0,r.jsxs)("title",{className:"capitalize",children:["SSIM - ",(t=e.title,t.toUpperCase())]})}),(0,r.jsxs)("div",{className:"relative h-[100px] sm:h-[150px] md:h-[200px] w-full bg-gray-800 flex items-center",children:[(0,r.jsx)("img",{className:"h-full opacity-30",src:e.src||"https://source.unsplash.com/1920x200/?education",alt:""}),(0,r.jsx)("div",{className:"absolute px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[120px]",children:(0,r.jsxs)("p",{className:"text-xl sm:text-2xl text-green-500 tracking-widest",children:[(0,r.jsx)(n.default,{href:"/",children:(0,r.jsx)("a",{className:"",children:"HOME"})}),"\xa0\xa0"," > ","\xa0\xa0",(0,r.jsx)("a",{className:"uppercase",children:e.title})]})})]})]})}},3402:function(e,t,s){"use strict";s.d(t,{HA:function(){return l},k8:function(){return n},OC:function(){return a},MJ:function(){return c},_N:function(){return i}});var r=s(5893),l=function(e){return(0,r.jsx)("div",{className:"flex flex-col items-center justify-center ".concat(e.className),children:e.children})},n=function(e){return(0,r.jsx)("div",{className:"mx-auto prose max-w-none md:w-5/6 px-6 text-justify ".concat(e.className),children:e.children})},a=function(e){return(0,r.jsxs)(l,{className:"mb-10 lg:flex-row ".concat(e.className),children:[(0,r.jsx)("img",{className:"order-1 lg:order-2 rounded-3xl h-[300px] w-full max-w-[400px] shadow-xl object-cover object-center ".concat(e.imgClassName),src:e.src,alt:e.alt}),(0,r.jsxs)("div",{className:"prose px-5 pt-8 lg:pt-0 text-justify order-2 lg:order-1 w-full lg:pr-12",children:[(0,r.jsx)("h3",{className:"italic text-center mt-0 ".concat(e.hClassName),children:e.title||""}),(0,r.jsx)("p",{className:"".concat(e.pClassName),children:e.children||""})]})]})},c=function(e){return(0,r.jsxs)(l,{className:"mb-10 lg:flex-row ".concat(e.className),children:[(0,r.jsx)("img",{className:"rounded-3xl h-[300px] w-full max-w-[400px] shadow-2xl object-cover object-center ".concat(e.imgClassName),src:e.src,alt:e.alt}),(0,r.jsxs)("div",{className:"prose px-5 pt-8 lg:pt-0 text-justify w-full lg:pl-12",children:[(0,r.jsx)("h3",{className:"italic text-center mt-0 ".concat(e.hClassName),children:e.title||""}),(0,r.jsx)("p",{className:"".concat(e.pClassName),children:e.children||""})]})]})},i=function(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"h-[150px] w-[150px] m-3 border-2 border-gray-300 rounded-2xl",children:(0,r.jsx)("img",{className:"object-contain p-1.5 w-full h-full",src:e.src||"https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e",alt:e.alt||"couldn't load"})})})}},3398:function(e,t,s){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var l=((r=s(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=l},6393:function(e,t,s){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(l.default.useContext(n.AmpStateContext))};var r,l=(r=s(7294))&&r.__esModule?r:{default:r},n=s(3398);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,s=void 0!==t&&t,r=e.hybrid,l=void 0!==r&&r,n=e.hasQuery,a=void 0!==n&&n;return s||l&&a}},2775:function(e,t,s){"use strict";var r=s(1682);function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}t.__esModule=!0,t.defaultHead=o,t.default=void 0;var n,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var s={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var n=r?Object.getOwnPropertyDescriptor(e,l):null;n&&(n.get||n.set)?Object.defineProperty(s,l,n):s[l]=e[l]}s.default=e,t&&t.set(e,s);return s}(s(7294)),c=(n=s(3244))&&n.__esModule?n:{default:n},i=s(3398),d=s(1165),x=s(6393);function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function o(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function j(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function u(e,t){return e.reduce((function(e,t){var s=a.default.Children.toArray(t.props.children);return e.concat(s)}),[]).reduce(j,[]).reverse().concat(o(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,s=new Set,r={};return function(l){var n=!0,a=!1;if(l.key&&"number"!==typeof l.key&&l.key.indexOf("$")>0){a=!0;var c=l.key.slice(l.key.indexOf("$")+1);e.has(c)?n=!1:e.add(c)}switch(l.type){case"title":case"base":t.has(l.type)?n=!1:t.add(l.type);break;case"meta":for(var i=0,d=m.length;i<d;i++){var x=m[i];if(l.props.hasOwnProperty(x))if("charSet"===x)s.has(x)?n=!1:s.add(x);else{var h=l.props[x],o=r[x]||new Set;"name"===x&&a||!o.has(h)?(o.add(h),r[x]=o):n=!1}}}return n}}()).reverse().map((function(e,s){var n=e.key||s;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,a.default.cloneElement(e,c)}return a.default.cloneElement(e,{key:n})}))}var p=function(e){var t=e.children,s=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(d.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:u,headManager:r,inAmpMode:(0,x.isInAmpMode)(s)},t)};t.default=p},3244:function(e,t,s){"use strict";var r=s(3115),l=s(2553),n=s(2012),a=(s(450),s(9807)),c=s(7690),i=s(9828);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=i(e);if(t){var l=i(this).constructor;s=Reflect.construct(r,arguments,l)}else s=r.apply(this,arguments);return c(this,s)}}t.__esModule=!0,t.default=void 0;var x=s(7294),h=function(e){a(s,e);var t=d(s);function s(e){var n;return l(this,s),(n=t.call(this,e))._hasHeadManager=void 0,n.emitChange=function(){n._hasHeadManager&&n.props.headManager.updateHead(n.props.reduceComponentsToState(r(n.props.headManager.mountedInstances),n.props))},n._hasHeadManager=n.props.headManager&&n.props.headManager.mountedInstances,n}return n(s,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),s}(x.Component);t.default=h},5850:function(e,t,s){"use strict";s.r(t);var r=s(5893),l=s(3402),n=s(1093);t.default=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z,{title:"Programme"}),(0,r.jsxs)(l.k8,{className:"pb-12 md:w-2/3",children:[(0,r.jsx)("h2",{className:"pt-12 text-left",children:"PGDM PROGRAM"}),(0,r.jsx)("blockquote",{className:"text-sm sm:text-base",children:"Our PGDM program, combined with SAP Training, is an innovative pursuit in management education. It combines skill-oriented qualifications in the field of management services including management research and thus adds to students\u2019 employability. We follow a practical and experimental learning approach coupled with interactive sessions and peer-to-peer feedback mechanism. Our main aim is to be creative and keep innovating the age-old activity of imparting education, thereby revolutionizing the way you learn and assimilate information. With more focus on practical aspects of education, we ensure that students are ready to face the market and succeed. Our mentorship program helps each individual learner connect with corporate mentors and gain greater exposure to multiple levels of expertise and knowledge."}),(0,r.jsx)("h2",{className:"text-left",children:"PROGRAM HIGHLIGHTS"}),(0,r.jsxs)("p",{className:"pl-2 text-left text-xs sm:text-base",children:[(0,r.jsx)("li",{children:"A pragmatic approach to learning through case studies"}),(0,r.jsx)("li",{children:"Specialized Personality Development Programs"}),(0,r.jsx)("li",{children:"Field Training and Practical coaching using Live Projects"}),(0,r.jsx)("li",{children:"Imparting essential Business Communication Skills"}),(0,r.jsx)("li",{children:"Workshops and seminars by leading industry experts"}),(0,r.jsx)("li",{children:"Strong Alumni Network with global reach"})]}),(0,r.jsx)("h2",{className:"py-4 text-left",children:"PGDM PROGRAM STRUCTURE"}),(0,r.jsxs)("div",{className:"flex flex-wrap justify-center lg:justify-start",children:[(0,r.jsxs)("div",{className:"w-full sm:w-4/5 lg:w-1/2 lg:p-5 lg:border-l-2 lg:border-t-2 lg:border-r-2 lg:border-gray-300",children:[(0,r.jsx)("h3",{className:"pl-12 text-left italic",children:"TRIMESTER I"}),(0,r.jsxs)("table",{className:"",children:[(0,r.jsx)("thead",{className:"text-left",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"text-left w-[70px] sm:w-[110px] lg:w-[70px] xl:w-[110px]",children:(0,r.jsx)("strong",{children:"Code"})}),(0,r.jsx)("th",{children:(0,r.jsx)("strong",{children:"Subject Name"})}),(0,r.jsx)("th",{className:"text-right",children:(0,r.jsx)("strong",{children:"Credits"})})]})}),(0,r.jsxs)("tbody",{className:"text-left",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG101"}),(0,r.jsx)("td",{children:"Operations Management I"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG102"}),(0,r.jsx)("td",{children:"Corporate Accounting"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG103"}),(0,r.jsx)("td",{children:"Organization Behavior"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG104"}),(0,r.jsx)("td",{children:"Marketing Management I"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG105"}),(0,r.jsx)("td",{children:"Quantitative Techniques I"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG106"}),(0,r.jsx)("td",{children:"Managerial Economics"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Total Credits"})}),(0,r.jsx)("td",{className:"text-right",children:(0,r.jsx)("strong",{children:"18"})})]})]})]})]}),(0,r.jsxs)("div",{className:"w-full sm:w-4/5 lg:w-1/2 lg:p-5 lg:border-t-2 lg:border-r-2 lg:border-gray-300",children:[(0,r.jsx)("h3",{className:"pl-12 text-left italic",children:"TRIMESTER II"}),(0,r.jsxs)("table",{className:"",children:[(0,r.jsx)("thead",{className:"text-left",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"text-left w-[70px] sm:w-[110px] lg:w-[70px] xl:w-[110px]",children:(0,r.jsx)("strong",{children:"Code"})}),(0,r.jsx)("th",{children:(0,r.jsx)("strong",{children:"Subject Name"})}),(0,r.jsx)("th",{className:"text-right",children:(0,r.jsx)("strong",{children:"Credits"})})]})}),(0,r.jsxs)("tbody",{className:"text-left",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG201"}),(0,r.jsx)("td",{children:"Supply Chain Management"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG202"}),(0,r.jsx)("td",{children:"Financial Management I"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG203"}),(0,r.jsx)("td",{children:"Managerial Accounting & Control II"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG204"}),(0,r.jsx)("td",{children:"Business Communication"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG205"}),(0,r.jsx)("td",{children:"Macro Economics"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG206"}),(0,r.jsx)("td",{children:"MQuantitative Techniques II"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Total Credits"})}),(0,r.jsx)("td",{className:"text-right",children:(0,r.jsx)("strong",{children:"18"})})]})]})]})]}),(0,r.jsxs)("div",{className:"w-full sm:w-4/5 lg:w-1/2 lg:p-5 lg:border-l-2 lg:border-t-2 lg:border-r-2 lg:border-gray-300",children:[" ",(0,r.jsx)("h3",{className:"pl-12 text-left italic",children:"TRIMESTER III"}),(0,r.jsxs)("table",{className:"",children:[(0,r.jsx)("thead",{className:"text-left",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"text-left w-[70px] sm:w-[110px] lg:w-[70px] xl:w-[110px]",children:(0,r.jsx)("strong",{children:"Code"})}),(0,r.jsx)("th",{children:(0,r.jsx)("strong",{children:"Subject Name"})}),(0,r.jsx)("th",{className:"text-right",children:(0,r.jsx)("strong",{children:"Credits"})})]})}),(0,r.jsxs)("tbody",{className:"text-left",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG301"}),(0,r.jsx)("td",{children:"Management Information System"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG302"}),(0,r.jsx)("td",{children:"Financial Management II"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG303"}),(0,r.jsx)("td",{children:"Marketing Management II"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG304"}),(0,r.jsx)("td",{children:"Operations Management II"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG305"}),(0,r.jsx)("td",{children:"Human Resource Management"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG306"}),(0,r.jsx)("td",{children:"Research Methodology"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Total Credits"})}),(0,r.jsx)("td",{className:"text-right",children:(0,r.jsx)("strong",{children:"18"})})]})]})]})]}),(0,r.jsxs)("div",{className:"w-full sm:w-4/5 lg:w-1/2 lg:p-5 lg:border-t-2 lg:border-r-2 lg:border-gray-300",children:[" ",(0,r.jsx)("h3",{className:"pl-12 text-left italic",children:"TRIMESTER IV"}),(0,r.jsxs)("table",{className:"",children:[(0,r.jsx)("thead",{className:"text-left",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"text-left w-[70px] sm:w-[110px] lg:w-[70px] xl:w-[110px]",children:(0,r.jsx)("strong",{children:"Code"})}),(0,r.jsx)("th",{children:(0,r.jsx)("strong",{children:"Subject Name"})}),(0,r.jsx)("th",{className:"text-right",children:(0,r.jsx)("strong",{children:"Credits"})})]})}),(0,r.jsxs)("tbody",{className:"text-left",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PGC401"}),(0,r.jsx)("td",{children:"Business Environment"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Specialization I"})}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG401/SC"}),(0,r.jsx)("td",{children:"Elective 1.1"}),(0,r.jsx)("td",{className:"text-right",children:"5"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG402/SC"}),(0,r.jsx)("td",{children:"Elective 1.2"}),(0,r.jsx)("td",{className:"text-right",children:"5"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Specialization II"})}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG401/SC"}),(0,r.jsx)("td",{children:"Elective 2.1"}),(0,r.jsx)("td",{className:"text-right",children:"5"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG402/SC"}),(0,r.jsx)("td",{children:"Elective 2.2"}),(0,r.jsx)("td",{className:"text-right",children:"5"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Total Credits"})}),(0,r.jsx)("td",{className:"text-right",children:(0,r.jsx)("strong",{children:"23"})})]})]})]})]}),(0,r.jsxs)("div",{className:"w-full sm:w-4/5 lg:w-1/2 lg:p-5 lg:border-l-2 lg:border-t-2 lg:border-r-2 lg:border-gray-300",children:[" ",(0,r.jsx)("h3",{className:"pl-12 text-left italic",children:"TRIMESTER V"}),(0,r.jsxs)("table",{className:"",children:[(0,r.jsx)("thead",{className:"text-left",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"text-left w-[70px] sm:w-[110px] lg:w-[70px] xl:w-[110px]",children:(0,r.jsx)("strong",{children:"Code"})}),(0,r.jsx)("th",{children:(0,r.jsx)("strong",{children:"Subject Name"})}),(0,r.jsx)("th",{className:"text-right",children:(0,r.jsx)("strong",{children:"Credits"})})]})}),(0,r.jsxs)("tbody",{className:"text-left",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PGC501"}),(0,r.jsx)("td",{children:"Strategic Management"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Specialization I"})}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG501/SC"}),(0,r.jsx)("td",{children:"Elective 1.1"}),(0,r.jsx)("td",{className:"text-right",children:"5"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG502/SC"}),(0,r.jsx)("td",{children:"Elective 1.2"}),(0,r.jsx)("td",{className:"text-right",children:"5"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Specialization II"})}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG501/SC"}),(0,r.jsx)("td",{children:"Elective 2.1"}),(0,r.jsx)("td",{className:"text-right",children:"5"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG502/SC"}),(0,r.jsx)("td",{children:"Elective 2.2"}),(0,r.jsx)("td",{className:"text-right",children:"5"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Total Credits"})}),(0,r.jsx)("td",{className:"text-right",children:(0,r.jsx)("strong",{children:"23"})})]})]})]})]}),(0,r.jsxs)("div",{className:"w-full sm:w-4/5 lg:w-1/2 lg:p-5 lg:border-t-2 lg:border-r-2 lg:border-gray-300 lg:border-b-2 mb-[-2px]",children:[(0,r.jsx)("h3",{className:"pl-12 text-left italic",children:"TRIMESTER VI"}),(0,r.jsxs)("table",{className:"",children:[(0,r.jsx)("thead",{className:"text-left",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"text-left w-[70px] sm:w-[110px] lg:w-[70px] xl:w-[110px]",children:(0,r.jsx)("strong",{children:"Code"})}),(0,r.jsx)("th",{children:(0,r.jsx)("strong",{children:"Subject Name"})}),(0,r.jsx)("th",{className:"text-right",children:(0,r.jsx)("strong",{children:"Credits"})})]})}),(0,r.jsxs)("tbody",{className:"text-left",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PGC601"}),(0,r.jsx)("td",{children:"Corporate Governance & CSR"}),(0,r.jsx)("td",{className:"text-right",children:"3"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Specialization I"})}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG601/SC"}),(0,r.jsx)("td",{children:"Elective 1.1"}),(0,r.jsx)("td",{className:"text-right",children:"5"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Specialization II"})}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PG601/SC"}),(0,r.jsx)("td",{children:"Elective 2.1"}),(0,r.jsx)("td",{className:"text-right",children:"5"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Project report and Viva Voce"}),(0,r.jsx)("td",{className:"text-right",children:"6"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Total Credits"})}),(0,r.jsx)("td",{className:"text-right",children:(0,r.jsx)("strong",{children:"19"})})]})]})]})]}),(0,r.jsxs)("div",{className:"w-full sm:w-4/5 lg:w-1/2 lg:p-5 lg:border-l-2 lg:border-t-2 lg:border-r-2 lg:border-gray-300 lg:border-b-2",children:[" ",(0,r.jsx)("h3",{className:"pl-12 text-left italic",children:"INTERNSHIPS"}),(0,r.jsxs)("table",{className:"",children:[(0,r.jsx)("thead",{className:"text-left",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"text-left w-[70px] sm:w-[110px] lg:w-[70px] xl:w-[110px]",children:(0,r.jsx)("strong",{children:"Code"})}),(0,r.jsx)("th",{children:(0,r.jsx)("strong",{children:"Subject Name"})}),(0,r.jsx)("th",{className:"text-right",children:(0,r.jsx)("strong",{children:"Credits"})})]})}),(0,r.jsxs)("tbody",{className:"text-left",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PGIW01"}),(0,r.jsx)("td",{children:"Winter Internship"}),(0,r.jsx)("td",{className:"text-right",children:"2"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"text-left",children:"PGIS01"}),(0,r.jsx)("td",{children:"Summer Internship"}),(0,r.jsx)("td",{className:"text-right",children:"4"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Total Credits"})}),(0,r.jsx)("td",{className:"text-right",children:(0,r.jsx)("strong",{children:"6"})})]})]})]})]})]})]})]})}},2682:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pgdm/programme",function(){return s(5850)}])},9008:function(e,t,s){e.exports=s(2775)},8164:function(e,t,s){var r=s(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,s){var r=s(8164),l=s(7381),n=s(3585),a=s(5725);e.exports=function(e){return r(e)||l(e)||n(e)||a()}}},function(e){e.O(0,[774,888,179],(function(){return t=2682,e(e.s=t);var t}));var t=e.O();_N_E=t}]);