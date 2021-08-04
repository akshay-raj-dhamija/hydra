(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5449],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=i,u=m["".concat(p,".").concat(h)]||m[h]||d[h]||r;return n?a.createElement(u,o(o({ref:t},s),{},{components:n})):a.createElement(u,o({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3899:function(e,t,n){"use strict";n.d(t,{Z:function(){return p},T:function(){return c}});var a=n(2122),i=n(7294),r=n(6742),o=n(2263),l=n(907);function p(e){return i.createElement(r.Z,(0,a.Z)({},e,{to:(t=e.to,p=(0,l.zu)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==p?void 0:p.name)?n:"current"]+t),target:"_blank"}));var t,n,p}function c(e){var t,n=null!=(t=e.text)?t:"Example";return i.createElement(p,e,i.createElement("span",null,"\xa0"),i.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},5168:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return h}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=n(3899),l=["components"],p={id:"search_path",title:"Config Search Path"},c=void 0,s={unversionedId:"advanced/search_path",id:"advanced/search_path",isDocsHomePage:!1,title:"Config Search Path",description:"The Config Search Path is a list of paths that Hydra searches in order to find configs. It is similar to",source:"@site/docs/advanced/search_path.md",sourceDirName:"advanced",slug:"/advanced/search_path",permalink:"/docs/next/advanced/search_path",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/search_path.md",version:"current",lastUpdatedBy:"Jasha10",lastUpdatedAt:1628114063,formattedLastUpdatedAt:"8/4/2021",frontMatter:{id:"search_path",title:"Config Search Path"},sidebar:"docs",previous:{title:"Compose API",permalink:"/docs/next/advanced/compose_api"},next:{title:"Plugins Overview",permalink:"/docs/next/advanced/plugins/overview"}},d=[],m={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Config Search Path is a list of paths that Hydra searches in order to find configs. It is similar to\nthe Python ",(0,r.kt)("inlineCode",{parentName:"p"},"PYTHONPATH"),". "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When a config is requested, The first matching config in the search path is used."),(0,r.kt)("li",{parentName:"ul"},"Each search path element has a schema prefix such as ",(0,r.kt)("inlineCode",{parentName:"li"},"file://")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"pkg://")," that corresponds to a ",(0,r.kt)("inlineCode",{parentName:"li"},"ConfigSourcePlugin"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file://")," points to a file system path. It can either be an absolute path or a relative path.\nRelative path will be resolved to absolute based on the current working dir. Path separator is ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," on all Operating\nSystems."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pkg://")," points to an importable Python module, with ",(0,r.kt)("inlineCode",{parentName:"li"},".")," being the separator. ",(0,r.kt)("inlineCode",{parentName:"li"},"__init__.py")," files are needed in\ndirectories for Python to treat them as packages.")))),(0,r.kt)("p",null,"You can inspect the search path and the configurations loaded by Hydra via the ",(0,r.kt)("inlineCode",{parentName:"p"},"--info")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ python my_app.py --info searchpath\n")),(0,r.kt)("p",null,"There are a few ways to modify the config search path, enabling Hydra to access configuration in\ndifferent locations.\nUse a combination of the methods described below:"),(0,r.kt)("h4",{id:"using-hydramain"},"Using ",(0,r.kt)("inlineCode",{parentName:"h4"},"@hydra.main()")),(0,r.kt)("p",null,"Using the  ",(0,r.kt)("inlineCode",{parentName:"p"},"config_path")," parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"@hydra.main()"),".  The ",(0,r.kt)("inlineCode",{parentName:"p"},"config_path")," is relative to location of the Python script."),(0,r.kt)("h4",{id:"overriding-hydrasearchpath-config"},"Overriding ",(0,r.kt)("inlineCode",{parentName:"h4"},"hydra.searchpath")," config"),(0,r.kt)(o.T,{text:"Example application",to:"examples/advanced/config_search_path",mdxType:"ExampleGithubLink"}),(0,r.kt)("p",null,"In some cases you may want to add multiple locations to the search path.\nFor example, an app may want to read the configs from an additional Python module or\nan additional directory on the file system.",(0,r.kt)("br",{parentName:"p"}),"\n","Configure this using ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra.searchpath")," in your primary config or your command line."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"hydra.searchpath can ",(0,r.kt)("strong",{parentName:"p"},"only")," be configured in the primary config. Attempting  to configure it in other configs will result in an error."))),(0,r.kt)("p",null,"In this example, we add a second config directory - ",(0,r.kt)("inlineCode",{parentName:"p"},"additional_conf"),", next to the first config directory:"),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--4"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 __init__.py\n\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 dataset\n\u2502\xa0\xa0     \u2514\u2500\u2500 cifar10.yaml\n\u251c\u2500\u2500 additonal_conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 __init__.py\n\u2502\xa0\xa0 \u2514\u2500\u2500 dataset\n\u2502\xa0\xa0     \u2514\u2500\u2500 imagenet.yaml\n\u2514\u2500\u2500 my_app.py\n"))),(0,r.kt)("div",{className:"col  col--8"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'},'\n@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\n\nif __name__ == "__main__":\n    my_app()\n')))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," is the primary config for ",(0,r.kt)("inlineCode",{parentName:"p"},"my_app.py"),", config groups ",(0,r.kt)("inlineCode",{parentName:"p"},"cifar10")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"imagenet")," are\nunder different folders.\nWe can add ",(0,r.kt)("inlineCode",{parentName:"p"},"additonal_conf")," to  ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra.searchpath")," for Hydra to discover ",(0,r.kt)("inlineCode",{parentName:"p"},"dataset/imagenet"),"."),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--7"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - dataset: cifar10\n\nhydra:\n  searchpath:\n    - pkg://additonal_conf\n    # You can also use file based schema:\n    # - file:///etc/my_app\n    # - file://${oc.env:HOME}/.my_app\n"))),(0,r.kt)("div",{className:"col  col--5"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py output"',title:'"my_app.py','output"':!0},"dataset:\n  name: cifar10\n  path: /datasets/cifar10\n\n\n\n\n\n\n")))),(0,r.kt)("p",null,"Overriding ",(0,r.kt)("inlineCode",{parentName:"p"},"dataset=imagenet")," from the commandline:"),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="command line override"',title:'"command',line:!0,'override"':!0},"python my_app.py dataset=imagenet\n\n\n"))),(0,r.kt)("div",{className:"col  col--6"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py output"',title:'"my_app.py','output"':!0},"dataset:\n  name: imagenet\n  path: /datasets/imagenet\n")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hydra.searchpath")," can be defined or overridden via the command line as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="command line override"',title:'"command',line:!0,'override"':!0},"python my_app.py 'hydra.searchpath=[pkg://additonal_conf]'\n")),(0,r.kt)("h4",{id:"overriding---config-dir-from-the-command-line"},"Overriding ",(0,r.kt)("inlineCode",{parentName:"h4"},"--config-dir")," from the command line"),(0,r.kt)("p",null,"This is a less flexible alternative to ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra.searchpath"),".\nSee this ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/advanced/hydra-command-line-flags"},"page")," for more info."),(0,r.kt)("h4",{id:"creating-a-searchpathplugin"},"Creating a ",(0,r.kt)("inlineCode",{parentName:"h4"},"SearchPathPlugin")),(0,r.kt)(o.T,{text:"ExampleSearchPathPlugin",to:"examples/plugins/example_searchpath_plugin/",mdxType:"ExampleGithubLink"}),(0,r.kt)("p",null,"Framework authors may want to add their configs to the search path automatically once their package is installed,\neliminating the need for any actions from the users.\nThis can be achieved using a ",(0,r.kt)("inlineCode",{parentName:"p"},"SearchPathPlugin"),". Check the example plugin linked above for more details."))}h.isMDXComponent=!0}}]);