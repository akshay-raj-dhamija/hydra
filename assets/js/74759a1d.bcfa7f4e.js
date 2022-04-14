"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3312],{3905:function(e,t,r){r.r(t),r.d(t,{MDXContext:function(){return l},MDXProvider:function(){return d},mdx:function(){return y},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){return function(t){var r=p(t.components);return n.createElement(e,i({},t,{components:r}))}},p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),d=o,m=s["".concat(a,".").concat(d)]||s[d]||f[d]||i;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91797:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={id:"intro",title:"Introduction",sidebar_label:"Introduction"},u=void 0,l={unversionedId:"experimental/intro",id:"version-1.1/experimental/intro",title:"Introduction",description:"Experimental features are new features in Hydra that are considered experimental because their API may have not yet",source:"@site/versioned_docs/version-1.1/experimental/intro.md",sourceDirName:"experimental",slug:"/experimental/intro",permalink:"/docs/experimental/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/experimental/intro.md",tags:[],version:"1.1",lastUpdatedBy:"P\xe1draig Brady",lastUpdatedAt:1649949010,formattedLastUpdatedAt:"4/14/2022",frontMatter:{id:"intro",title:"Introduction",sidebar_label:"Introduction"},sidebar:"version-1.1/docs",previous:{title:"Hydra in Unit Tests",permalink:"/docs/advanced/unit_testing"},next:{title:"Callbacks",permalink:"/docs/experimental/callbacks"}},s=[],p={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Experimental features are new features in Hydra that are considered experimental because their API may have not yet\nstabilized."),(0,i.mdx)("p",null,"Those features should all work, but code relying on them may break in future versions as they evolve.\nExperimental features are expected be promoted out of experimental once they deemed stable and complete enough."))}d.isMDXComponent=!0}}]);