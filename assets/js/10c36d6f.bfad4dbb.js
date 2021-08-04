(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2040],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return f},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?a.createElement(m,s(s({ref:t},f),{},{components:n})):a.createElement(m,s({ref:t},f))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3899:function(e,t,n){"use strict";n.d(t,{Z:function(){return l},T:function(){return c}});var a=n(2122),r=n(7294),o=n(6742),s=n(2263),i=n(907);function l(e){return r.createElement(o.Z,(0,a.Z)({},e,{to:(t=e.to,l=(0,i.zu)(),(0,s.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==l?void 0:l.name)?n:"current"]+t),target:"_blank"}));var t,n,l}function c(e){var t,n=null!=(t=e.text)?t:"Example";return r.createElement(l,e,r.createElement("span",null,"\xa0"),r.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},6877:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return f},toc:function(){return p},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),s=n(3899),i=["components"],l={id:"config_files",title:"Config files example",sidebar_label:"Config files example"},c=void 0,f={unversionedId:"advanced/instantiate_objects/config_files",id:"version-1.1/advanced/instantiate_objects/config_files",isDocsHomePage:!1,title:"Config files example",description:"This example demonstrates the use of config files to instantiated objects.",source:"@site/versioned_docs/version-1.1/advanced/instantiate_objects/config_files.md",sourceDirName:"advanced/instantiate_objects",slug:"/advanced/instantiate_objects/config_files",permalink:"/docs/advanced/instantiate_objects/config_files",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.1/advanced/instantiate_objects/config_files.md",version:"1.1",lastUpdatedBy:"Jasha10",lastUpdatedAt:1628114063,formattedLastUpdatedAt:"8/4/2021",frontMatter:{id:"config_files",title:"Config files example",sidebar_label:"Config files example"},sidebar:"version-1.1/docs",previous:{title:"Overview",permalink:"/docs/advanced/instantiate_objects/overview"},next:{title:"Structured Configs example",permalink:"/docs/advanced/instantiate_objects/structured_config"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.T,{text:"Example applications",to:"examples/instantiate",mdxType:"ExampleGithubLink"}),(0,o.kt)("p",null,"This example demonstrates the use of config files to instantiated objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class DBConnection:\n    def connect(self):\n        ...\n\nclass MySQLConnection(DBConnection):\n    def __init__(self, host: str, user: str, password: str) -> None:\n        self.host = host\n        self.user = user\n        self.password = password\n\n    def connect(self) -> None:\n        print(f"MySQL connecting to {self.host}")\n\n\nclass PostgreSQLConnection(DBConnection):\n    def __init__(self, host: str, user: str, password: str, database: str) -> None:\n        self.host = host\n        self.user = user\n        self.password = password\n        self.database = database\n\n    def connect(self) -> None:\n        print(f"PostgreSQL connecting to {self.host}")\n')),(0,o.kt)("p",null,"To support this, we can have a parallel config structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"conf/\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 mysql.yaml\n    \u2514\u2500\u2500 postgresql.yaml\n")),(0,o.kt)("p",null,"Config files:"),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'},"_target_: my_app.MySQLConnection\nhost: localhost\nuser: root\npassword: 1234\n\n"))),(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/postgresql.yaml"',title:'"db/postgresql.yaml"'},"_target_: my_app.PostgreSQLConnection\nhost: localhost\nuser: root\npassword: 1234\ndatabase: tutorial\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql\n")),(0,o.kt)("p",null,"With this, you can instantiate the object from the configuration with a single line of code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg):\n    connection = hydra.utils.instantiate(cfg.db)\n    connection.connect()\n')))}d.isMDXComponent=!0}}]);