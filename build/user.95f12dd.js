webpackJsonp([4],{1:function(e,t){e.exports=React},3:function(e,t){e.exports=ReactDOM},549:function(e,t,n){e.exports=n(550)},550:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),s=a(i),c=n(3),f=a(c),d=n(14),m=a(d),p=n(13),g=a(p),v=n(245),E=a(v);n(551);var w=n(16),y=a(w),b=n(249),h=a(b);n(251),n(252),n(253),h.default.use([b.Navigation,b.Pagination]);var N=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={headerType:"dark",starCount:0,forkCount:0,index:0,swiper:null},n}return o(t,e),u(t,[{key:"componentDidMount",value:function(){this.swiper=new h.default(".swiper-container",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})}},{key:"render",value:function(){var e=this.getLanguage(),t=this.state.headerType,n="normal"===t?"/img/hlogo_colorful.svg":"/img/hlogo_white.svg",a=E.default[e];return s.default.createElement("div",{className:"user-page"},s.default.createElement("section",{className:"top-section"},s.default.createElement(m.default,{currentKey:"user",type:t,logo:n,language:e,onLanguageChange:this.onLanguageChange})),s.default.createElement("section",{className:"ourusers-section"},s.default.createElement("h3",null,a.ourusers.title),s.default.createElement("div",{className:"button1-section"},s.default.createElement("div",{className:"overflow-section"},s.default.createElement("ul",null,a.ourusers.list.map(function(e,t){return s.default.createElement("li",{key:t},s.default.createElement("img",{src:e.img}))}))))),s.default.createElement("section",{className:"review-section"},s.default.createElement("h3",null,a.userreview.title),s.default.createElement("div",{className:"swiper-container"},s.default.createElement("div",{className:"swiper-wrapper"},a.userreview.list.map(function(e,t){return s.default.createElement("div",{key:t,className:"swiper-slide"},s.default.createElement("div",{className:"slide-content"},s.default.createElement("div",{className:"img-box"},s.default.createElement("img",{src:e.img})),s.default.createElement("div",{className:"name-section"},s.default.createElement("p",{className:"pr"},e.review," "),s.default.createElement("p",{className:"pn"},e.name," "))))})),s.default.createElement("div",{className:"swiper-button-next"}),s.default.createElement("div",{className:"swiper-button-prev"}),s.default.createElement("div",{className:"swiper-pagination"}))),s.default.createElement(y.default,{logo:"/img/ds_gray.svg",language:e}))}}]),t}(g.default);document.getElementById("root")&&f.default.render(s.default.createElement(N,null),document.getElementById("root")),t.default=N},551:function(e,t){}},[549]);