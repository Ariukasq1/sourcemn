(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7603:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(1413),s=n(7294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},r=n(4263),l=function(e,t){return s.createElement(r.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:i}))};l.displayName="ArrowRightOutlined";var o=s.forwardRef(l)},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(490)}])},7488:function(e,t,n){"use strict";var a=n(5893),s=n(7294),i=n(6066),r=n(3799),l=n(1664),o=n(7603),c=n(5675);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.Z=function(e){var t=e.brandCats,n=e.brands,u=t[0].parent,f=(0,s.useState)(u),m=f[0],h=f[1],x=(0,s.useState)(100),j=x[0],v=x[1],b=function(e,t){h(e),v(t)},g=n.filter((function(e){return e.categories.includes(m)})),p=g.length>4?4:g.length,y=g.length>4?3:g.length,N={dots:!1,infinite:!0,slidesToShow:p,slidesToScroll:1,autoplay:!0,speed:1e3,autoplaySpeed:2e3,nextArrow:(0,a.jsx)(r.F8,{}),prevArrow:(0,a.jsx)(r.Kf,{}),responsive:[{breakpoint:992,settings:{slidesToShow:y,slidesToScroll:2,infinite:!0}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]};return(0,a.jsx)("div",{className:"homeBrands top relative","data-aos":"zoom-in","data-aos-duration":"300",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"gold-title",children:(0,r.__)("Brands")}),(0,a.jsx)("div",{className:"sub-title",children:(0,r.__)("Our products")}),(0,a.jsxs)("div",{className:"catList",children:[(0,a.jsx)("div",{className:100===j?"active":"inactive",onClick:function(){return b(u,100)},children:(0,r.__)("All brands")}),t.map((function(e,t){var n=e.name,s=e.id;return(0,a.jsx)("div",{onClick:function(){return b(s,t)},className:t===j?"active":"inactive",children:n},t)}))]}),(0,a.jsx)(i.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){d(e,t,n[t])}))}return e}({},N,{className:"brandList",children:g.map((function(e,t){var n=(0,r.Yu)(e._embedded,"image");return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"brand-logo",children:(0,a.jsx)(c.default,{loader:function(){return e.acf.logo},src:e.acf.logo,alt:"logo",objectFit:"contain",objectPosition:"left",layout:"fill"})}),(0,a.jsx)(l.default,{href:"/brands/[brands]",as:"/brands/".concat(e.slug),children:(0,a.jsxs)("a",{className:"read-more-detail",children:[(0,r.__)("Read more")," ",(0,a.jsx)(o.Z,{})]})}),(0,a.jsx)("div",{className:"brand-image",children:(0,a.jsx)(c.default,{loader:function(){return n},src:n,alt:"brand",layout:"fill",objectFit:"cover"})})]},t)}))}))]})})}},490:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return w},default:function(){return S}});var a=n(5893),s=n(7294),i=n(7536),r=n.n(i),l=void 0,o=function(e){var t=e.children,n=function(e){var t,n=document.getElementsByClassName("aos-init");for(t=0;t<n.length;t++)"leave"===e?n[t].classList.remove("aos-animate"):n[t].classList.add("aos-animate")},s=Array.from({length:10},(function(e,t){return"section".concat(t+1)}));return(0,a.jsx)(r(),{anchors:s,scrollingSpeed:1e3,render:function(){return t},responsiveWidth:992,navigation:!0,navigationPosition:"left",onLeave:function(e,t,a){n("leave")}.bind(l),afterLoad:function(e,t,a){n("afterLoad")}.bind(l),parallax:!0,scrollOverflow:!0})},c=n(7515),d=n(6066),u=n(5675);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){f(e,t,n[t])}))}return e}var h=function(e){var t=e.sliders;return(0,a.jsx)("div",{className:"home-slider top",children:(0,a.jsx)(d.Z,m({},{dots:!0,arrows:!1,infinite:!0,speed:1e3,autoplaySpeed:5e3,slidesToShow:1,slidesToScroll:1},{children:t.map((function(e,t){var n=e.acf,s=n.body,i=n.image,r=n.position_of_text;return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"home-slide",children:[(0,a.jsx)(u.default,{loader:function(){return i},src:i,alt:"slider",layout:"fill",objectFit:"cover",objectPosition:"center"}),(0,a.jsxs)("div",{className:"center"===r?"slide-text-center":"slide-text-right",children:[(0,a.jsx)("h1",{style:{color:s.font_color},children:s.text}),(0,a.jsx)("h2",{style:{color:s.font_color},children:s.description})]})]})},t)}))}))})},x=n(3799),j=n(1664),v=n(2337),b=n(6226);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){var t,n=e.capability,s=n.content,i=n._embedded,r=(0,x.Yu)(i,"image");return(0,a.jsxs)(v.Z,{className:"homeCapability top",children:[(0,a.jsx)(b.Z,{xxl:12,xl:12,lg:12,md:24,sm:24,xs:24,className:"simple-half-image",children:(0,a.jsx)(u.default,{loader:function(){return r},src:r,alt:"image",layout:"fill",objectFit:"cover",objectPosition:"center"})}),(0,a.jsx)(b.Z,(t={xxl:12,xl:12,lg:12,md:24},g(t,"md",24),g(t,"sm",24),g(t,"xs",24),g(t,"className","simple-half-text"),g(t,"data-aos","fade-up"),g(t,"children",(0,a.jsxs)("div",{className:"half-text-container",children:[(0,a.jsx)("div",{className:"gold-title",children:(0,x.__)("Capabilities")}),(0,a.jsx)("div",{className:"content",dangerouslySetInnerHTML:{__html:s.rendered}}),(0,a.jsx)(j.default,{href:"/capabilities",children:(0,a.jsx)("a",{className:"read-more-button",children:(0,x.__)("Read more")})})]})),t))]})},y=n(7603),N=function(e){var t=e.data,n=t[t.length-1],i=(0,s.useState)(n._embedded),r=i[0],l=i[1],o=(0,s.useState)(0),c=o[0],d=o[1],f=(0,s.useState)(n.content.rendered),m=f[0],h=f[1],g=(0,x.Yu)(r,"image");return(0,a.jsxs)(v.Z,{className:"homeIndustries top",children:[(0,a.jsx)(b.Z,{xxl:12,xl:12,lg:12,md:24,sm:24,xs:24,className:"industry-button",children:(0,a.jsxs)("div",{className:"half-text-container",children:[(0,a.jsx)("div",{className:"gold-title",children:(0,x.__)("Industries")}),t.slice(0).reverse().map((function(e,t){return(0,a.jsxs)("div",{onClick:function(){!function(e,t,n){l(e),h(t),d(n)}(e._embedded,e.content.rendered,t)},className:"big-buttons","data-aos":"fade-right","data-aos-easing":"ease-in","data-aos-delay":150*t,"data-aos-duration":"100","data-aos-offset":"300",style:{color:"".concat(t===c?"#00488d":"rgba(0, 0, 0, 0.7)")},children:[e.title.rendered,(0,a.jsx)(y.Z,{style:{display:"".concat(t===c?"inline-block":"none")}})]},t)})),(0,a.jsx)(j.default,{href:"/industries",children:(0,a.jsx)("div",{className:"read-more-button",children:(0,x.__)("Read more")})})]})}),(0,a.jsxs)(b.Z,{xxl:12,xl:12,lg:12,md:24,sm:24,xs:24,className:"simple-half-image",children:[(0,a.jsx)(u.default,{loader:function(){return g},src:g,alt:"image",layout:"fill"}),(0,a.jsx)("div",{className:"text",children:(0,a.jsx)("div",{className:"half-text-container","data-aos":"fade-up","data-aos-easing":"ease","data-aos-delay":"0",dangerouslySetInnerHTML:{__html:m}})})]})]})},_=n(7488),w=!0,S=function(e){var t=e.contact,n=e.sliders,s=e.capability,i=e.industries,r=e.brands,l=e.brandsCat;return(0,a.jsx)(o,{children:(0,a.jsxs)("div",{id:"fullpage",children:[(0,a.jsx)("div",{className:"section",children:(0,a.jsx)(h,{sliders:n})}),(0,a.jsx)("div",{className:"section",children:(0,a.jsx)(p,{capability:s})}),(0,a.jsx)("div",{className:"section",children:(0,a.jsx)(N,{data:i})}),(0,a.jsx)("div",{className:"section",children:(0,a.jsx)(_.Z,{brandCats:l,brands:r})}),(0,a.jsx)("div",{className:"section",children:(0,a.jsx)(c.Z,{contact:t})})]})})}}},function(e){e.O(0,[396,675,730,66,515,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);