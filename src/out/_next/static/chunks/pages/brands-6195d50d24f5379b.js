(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[803],{7603:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(1413),a=t(7294),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},s=t(4263),o=function(e,n){return a.createElement(s.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};o.displayName="ArrowRightOutlined";var c=a.forwardRef(o)},5804:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/brands",function(){return t(1248)}])},7488:function(e,n,t){"use strict";var r=t(5893),a=t(7294),i=t(6066),s=t(3799),o=t(1664),c=t(7603),l=t(5675);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.Z=function(e){var n=e.brandCats,t=e.brands,u=n[0].parent,f=(0,a.useState)(u),h=f[0],b=f[1],v=(0,a.useState)(100),m=v[0],j=v[1],g=function(e,n){b(e),j(n)},p=t.filter((function(e){return e.categories.includes(h)})),_=p.length>4?4:p.length,x=p.length>4?3:p.length,w={dots:!1,infinite:!0,slidesToShow:_,slidesToScroll:1,autoplay:!0,speed:1e3,autoplaySpeed:2e3,nextArrow:(0,r.jsx)(s.F8,{}),prevArrow:(0,r.jsx)(s.Kf,{}),responsive:[{breakpoint:992,settings:{slidesToShow:x,slidesToScroll:2,infinite:!0}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]};return(0,r.jsx)("div",{className:"homeBrands top relative","data-aos":"zoom-in","data-aos-duration":"300",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"gold-title",children:(0,s.__)("Brands")}),(0,r.jsx)("div",{className:"sub-title",children:(0,s.__)("Our products")}),(0,r.jsxs)("div",{className:"catList",children:[(0,r.jsx)("div",{className:100===m?"active":"inactive",onClick:function(){return g(u,100)},children:(0,s.__)("All brands")}),n.map((function(e,n){var t=e.name,a=e.id;return(0,r.jsx)("div",{onClick:function(){return g(a,n)},className:n===m?"active":"inactive",children:t},n)}))]}),(0,r.jsx)(i.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}({},w,{className:"brandList",children:p.map((function(e,n){var t=(0,s.Yu)(e._embedded,"image");return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"brand-logo",children:(0,r.jsx)(l.default,{loader:function(){return e.acf.logo},src:e.acf.logo,alt:"logo",objectFit:"contain",objectPosition:"left",layout:"fill"})}),(0,r.jsx)(o.default,{href:"/brands/[brands]",as:"/brands/".concat(e.slug),children:(0,r.jsxs)("a",{className:"read-more-detail",children:[(0,s.__)("Read more")," ",(0,r.jsx)(c.Z,{})]})}),(0,r.jsx)("div",{className:"brand-image",children:(0,r.jsx)(l.default,{loader:function(){return t},src:t,alt:"brand",layout:"fill",objectFit:"cover"})})]},n)}))}))]})})}},1248:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return i}});var r=t(5893),a=(t(7294),t(7488)),i=!0;n.default=function(e){var n=e.childCats,t=e.data;return(0,r.jsx)(a.Z,{brandCats:n,brands:t})}}},function(e){e.O(0,[675,66,774,888,179],(function(){return n=5804,e(e.s=n);var n}));var n=e.O();_N_E=n}]);