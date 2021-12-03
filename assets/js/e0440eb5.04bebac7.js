"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5794],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8806:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"release",title:"Release process",sidebar_label:"Release process"},s=void 0,c={unversionedId:"development/release",id:"development/release",isDocsHomePage:!1,title:"Release process",description:"The release process may be automated in the future.",source:"@site/docs/development/release.md",sourceDirName:"development",slug:"/development/release",permalink:"/docs/next/development/release",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/development/release.md",tags:[],version:"current",lastUpdatedBy:"Pierre Tholoniat",lastUpdatedAt:1638527765,formattedLastUpdatedAt:"12/3/2021",frontMatter:{id:"release",title:"Release process",sidebar_label:"Release process"},sidebar:"docs",previous:{title:"Documentation",permalink:"/docs/next/development/documentation"},next:{title:"Introduction",permalink:"/docs/next/upgrades/intro"}},p=[],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The release process may be automated in the future."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Checkout main"),(0,o.kt)("li",{parentName:"ul"},"Update the Hydra version in ",(0,o.kt)("inlineCode",{parentName:"li"},"hydra/__init__.py")),(0,o.kt)("li",{parentName:"ul"},"Update NEWS.md with towncrier"),(0,o.kt)("li",{parentName:"ul"},"Create a wheel and source dist for hydra-core: ",(0,o.kt)("inlineCode",{parentName:"li"},"python -m build")),(0,o.kt)("li",{parentName:"ul"},"Upload pip package: ",(0,o.kt)("inlineCode",{parentName:"li"},"python -m twine upload dist/*")),(0,o.kt)("li",{parentName:"ul"},"Update the link to the latest stable release in ",(0,o.kt)("inlineCode",{parentName:"li"},"website/docs/intro.md")),(0,o.kt)("li",{parentName:"ul"},"If you are creating a new release branch:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/versioning#tagging-a-new-version"},"tag a new versioned copy of the docs using docusaurus")),(0,o.kt)("li",{parentName:"ul"},"update ",(0,o.kt)("inlineCode",{parentName:"li"},"website/docusaurus.config.js")," with a pointer to the new release branch on github")))))}d.isMDXComponent=!0}}]);