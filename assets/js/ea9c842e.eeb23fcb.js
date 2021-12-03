"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8911],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7416:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"default_composition_order",title:"Changes to default composition order"},l=void 0,c={unversionedId:"upgrades/1.0_to_1.1/default_composition_order",id:"version-1.1/upgrades/1.0_to_1.1/default_composition_order",isDocsHomePage:!1,title:"Changes to default composition order",description:"Default composition order is changing in Hydra 1.1.",source:"@site/versioned_docs/version-1.1/upgrades/1.0_to_1.1/changes_to_default_composition_order.md",sourceDirName:"upgrades/1.0_to_1.1",slug:"/upgrades/1.0_to_1.1/default_composition_order",permalink:"/docs/upgrades/1.0_to_1.1/default_composition_order",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/upgrades/1.0_to_1.1/changes_to_default_composition_order.md",tags:[],version:"1.1",lastUpdatedBy:"Pierre Tholoniat",lastUpdatedAt:1638527765,formattedLastUpdatedAt:"12/3/2021",frontMatter:{id:"default_composition_order",title:"Changes to default composition order"},sidebar:"version-1.1/docs",previous:{title:"Changes to @hydra.main() and hydra.initialize()",permalink:"/docs/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path"},next:{title:"Defaults List Overrides",permalink:"/docs/upgrades/1.0_to_1.1/defaults_list_override"}},d=[{value:"Migration",id:"migration",children:[{value:"Primary config is a YAML file",id:"primary-config-is-a-yaml-file",children:[]},{value:"Primary config is a Structured Config",id:"primary-config-is-a-structured-config",children:[]},{value:"Primary config is a config file with a Structured Config schema",id:"primary-config-is-a-config-file-with-a-structured-config-schema",children:[]},{value:"Compatibility with both Hydra 1.0 and 1.1",id:"compatibility-with-both-hydra-10-and-11",children:[]}]}],u={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Default composition order is changing in Hydra 1.1."),(0,r.kt)("p",null,"For this example, let's assume the following two configs:"),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - foo: bar\n\nfoo:\n  x: 10\n"))),(0,r.kt)("div",{className:"col  col--6"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="foo/bar.yaml"',title:'"foo/bar.yaml"'},"# @package _group_\nx: 20\n\n\n\n")))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col"},(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},"Hydra 1.0"),", configs from the Defaults List are overriding ",(0,r.kt)("em",{parentName:"p"},"config.yaml"),", resulting in the following output:")),(0,r.kt)("div",{className:"col  col--4"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{2}","{2}":!0},"foo:\n  x: 20\n")))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col"},(0,r.kt)("p",null,"As of ",(0,r.kt)("strong",{parentName:"p"},"Hydra 1.1"),", ",(0,r.kt)("em",{parentName:"p"},"config.yaml")," is overriding configs from the Defaults List, resulting in the following output:")),(0,r.kt)("div",{className:"col  col--4"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{2}","{2}":!0},"foo:\n  x: 10\n")))),(0,r.kt)("h2",{id:"migration"},"Migration"),(0,r.kt)("p",null,"If your application uses ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra.main"),", the best way to verify that updating Hydra versions does not change your job configurations is to compare the output of ",(0,r.kt)("inlineCode",{parentName:"p"},"python my_app.py --cfg job")," on both the new and old Hydra versions. If your application uses the Compose API, please make sure you have comprehensive unit tests on the composed configuration."),(0,r.kt)("h3",{id:"primary-config-is-a-yaml-file"},"Primary config is a YAML file"),(0,r.kt)("p",null,"To ensure this change is not missed by people migrating from Hydra 1.0, Hydra 1.1 issues a warning if the Defaults List in the primary config is missing ",(0,r.kt)("inlineCode",{parentName:"p"},"_self_"),", and there are config values in addition to the Defaults List.",(0,r.kt)("br",{parentName:"p"}),"\n","To address the warning, add ",(0,r.kt)("inlineCode",{parentName:"p"},"_self_")," to the Defaults List of the primary config."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the new behavior works for your application, append ",(0,r.kt)("inlineCode",{parentName:"li"},"_self_")," to the end of the Defaults List."),(0,r.kt)("li",{parentName:"ul"},"If your application requires the previous behavior, insert ",(0,r.kt)("inlineCode",{parentName:"li"},"_self_")," as the first item in your Defaults List.")),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml" {2}',title:'"config.yaml"',"{2}":!0},"defaults:\n  - _self_\n  - foo: bar\n\nfoo:\n  x: 10\n"))),(0,r.kt)("div",{className:"col  col--6"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Output config"',title:'"Output','config"':!0},"foo:\n  x: 20\n\n\n\n\n")))),(0,r.kt)("p",null,"The Defaults List is described ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/defaults_list"},"here"),"."),(0,r.kt)("h3",{id:"primary-config-is-a-structured-config"},"Primary config is a Structured Config"),(0,r.kt)("p",null,"Structured Configs used as primary config may see changes as well.\nYou should add ",(0,r.kt)("inlineCode",{parentName:"p"},"_self_")," to the defaults list to indicate the composition order. In such cases you will typically want ",(0,r.kt)("inlineCode",{parentName:"p"},"_self_")," to be the first item in the defaults list. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"{3,14}","{3,14}":!0},'defaults = [\n    "_self_",\n    {"db": "mysql"}\n]\n\n@dataclass\nclass Config:\n    # this is unfortunately verbose due to @dataclass limitations\n    defaults: List[Any] = field(default_factory=lambda: defaults)\n\n    # Hydra will populate this field based on the defaults list\n    db: Any = MISSING\n')),(0,r.kt)("h3",{id:"primary-config-is-a-config-file-with-a-structured-config-schema"},"Primary config is a config file with a Structured Config schema"),(0,r.kt)("p",null,"If you use Structured Config as a schema for your primary config, be sure to add ",(0,r.kt)("inlineCode",{parentName:"p"},"_self_")," after the schema in the Defaults List, otherwise the schema will override the config instead of the other way around."),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--4"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'},'@dataclass\nclass Config:\n  host: str = "localhost"\n  port: int = 8080\n\ncs.store(name="base_config", \n         node=Config)\n'))),(0,r.kt)("div",{className:"col  col--4"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{3,5} title="config.yaml"',"{3,5}":!0,title:'"config.yaml"'},"defaults:\n - base_config  # schema\n - _self_       # after schema\n\nport: 3306\n\n\n"))),(0,r.kt)("div",{className:"col  col--4"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{2} title="Output config"',"{2}":!0,title:'"Output','config"':!0},"host: localhost # schema\nport: 3306      # config.yaml\n\n\n\n\n\n")))),(0,r.kt)("h3",{id:"compatibility-with-both-hydra-10-and-11"},"Compatibility with both Hydra 1.0 and 1.1"),(0,r.kt)("p",null,"If your config must be compatible with both Hydra 1.0 and 1.1, Insert ",(0,r.kt)("inlineCode",{parentName:"p"},"_self_")," as the first item in the Defaults List.\nHydra 1.0.7 (or newer releases in Hydra 1.0) ignores ",(0,r.kt)("inlineCode",{parentName:"p"},"_self_")," in the Defaults List and Hydra 1.1 will compose the same config as Hydra 1.0 if ",(0,r.kt)("inlineCode",{parentName:"p"},"_self_")," is the first item."))}p.isMDXComponent=!0}}]);