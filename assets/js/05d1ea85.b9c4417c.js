"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[491],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3899:function(e,t,n){n.d(t,{Z:function(){return l},T:function(){return c}});var a=n(7462),i=n(7294),r=n(6742),s=n(2263),o=n(907);function l(e){return i.createElement(r.Z,(0,a.Z)({},e,{to:(t=e.to,l=(0,o.zu)(),(0,s.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==l?void 0:l.name)?n:"current"]+t),target:"_blank"}));var t,n,l}function c(e){var t,n=null!=(t=e.text)?t:"Example";return i.createElement(l,e,i.createElement("span",null,"\xa0"),i.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},4:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s=n(3899),o=["components"],l={id:"overview",title:"Instantiating objects with Hydra",sidebar_label:"Overview"},c=void 0,p={unversionedId:"advanced/instantiate_objects/overview",id:"version-1.1/advanced/instantiate_objects/overview",isDocsHomePage:!1,title:"Instantiating objects with Hydra",description:"One of the best ways to drive different behavior in an application is to instantiate different implementations of an interface.",source:"@site/versioned_docs/version-1.1/advanced/instantiate_objects/overview.md",sourceDirName:"advanced/instantiate_objects",slug:"/advanced/instantiate_objects/overview",permalink:"/docs/advanced/instantiate_objects/overview",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/advanced/instantiate_objects/overview.md",tags:[],version:"1.1",lastUpdatedBy:"Pierre Tholoniat",lastUpdatedAt:1638527765,formattedLastUpdatedAt:"12/3/2021",frontMatter:{id:"overview",title:"Instantiating objects with Hydra",sidebar_label:"Overview"},sidebar:"version-1.1/docs",previous:{title:"Packages",permalink:"/docs/advanced/overriding_packages"},next:{title:"Config files example",permalink:"/docs/advanced/instantiate_objects/config_files"}},d=[{value:"Simple usage",id:"simple-usage",children:[]},{value:"Recursive instantiation",id:"recursive-instantiation",children:[]},{value:"Disable recursive instantiation",id:"disable-recursive-instantiation",children:[]},{value:"Parameter conversion strategies",id:"parameter-conversion-strategies",children:[]}],m={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.T,{text:"Example applications",to:"examples/instantiate",mdxType:"ExampleGithubLink"}),(0,r.kt)("p",null,"One of the best ways to drive different behavior in an application is to instantiate different implementations of an interface.\nThe code using the instantiated object only knows the interface which remains constant, but the behavior\nis determined by the actual object instance."),(0,r.kt)("p",null,"Hydra provides ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra.utils.instantiate()")," (and its alias ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra.utils.call()"),") for instantiating objects and calling functions. Prefer ",(0,r.kt)("inlineCode",{parentName:"p"},"instantiate")," for creating objects and ",(0,r.kt)("inlineCode",{parentName:"p"},"call")," for invoking functions."),(0,r.kt)("p",null,"Call/instantiate supports:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Constructing an object by calling the ",(0,r.kt)("inlineCode",{parentName:"li"},"__init__")," method"),(0,r.kt)("li",{parentName:"ul"},"Calling functions, static functions, class methods and other callable global objects")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Instantiate API (Expand for details)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def instantiate(config: Any, *args: Any, **kwargs: Any) -> Any:\n    """\n    :param config: An config object describing what to call and what params to use.\n                   In addition to the parameters, the config must contain:\n                   _target_ : target class or callable name (str)\n                   And may contain:\n                   _args_: List-like of positional arguments to pass to the target\n                   _recursive_: Construct nested objects as well (bool).\n                                True by default.\n                                may be overridden via a _recursive_ key in\n                                the kwargs\n                   _convert_: Conversion strategy\n                        none    : Passed objects are DictConfig and ListConfig, default\n                        partial : Passed objects are converted to dict and list, with\n                                  the exception of Structured Configs (and their fields).\n                        all     : Passed objects are dicts, lists and primitives without\n                                  a trace of OmegaConf containers\n    :param args: Optional positional parameters pass-through\n    :param kwargs: Optional named parameters to override\n                   parameters in the config object. Parameters not present\n                   in the config objects are being passed as is to the target.\n                   IMPORTANT: dataclasses instances in kwargs are interpreted as config\n                              and cannot be used as passthrough\n    :return: if _target_ is a class name: the instantiated object\n             if _target_ is a callable: the return value of the call\n    """\n\n# Alias for instantiate\ncall = instantiate\n'))),(0,r.kt)("br",null),(0,r.kt)("p",null,"The config passed to these functions must have a key called ",(0,r.kt)("inlineCode",{parentName:"p"},"_target_"),", with the value of a fully qualified class name, class method, static method or callable.\nFor convenience, ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," config results in a ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Named arguments")," : Config fields (except reserved fields like ",(0,r.kt)("inlineCode",{parentName:"p"},"_target_"),") are passed as named arguments to the target.\nNamed arguments in the config can be overridden by passing named argument with the same name in the ",(0,r.kt)("inlineCode",{parentName:"p"},"instantiate()")," call-site."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Positional arguments")," : The config may contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"_args_")," field representing positional arguments to pass to the target.\nThe positional arguments can be overridden together by passing positional arguments in the ",(0,r.kt)("inlineCode",{parentName:"p"},"instantiate()")," call-site."),(0,r.kt)("h3",{id:"simple-usage"},"Simple usage"),(0,r.kt)("p",null,"Your application might have an Optimizer class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Example class"',title:'"Example','class"':!0},"class Optimizer:\n    algo: str\n    lr: float\n\n    def __init__(self, algo: str, lr: float) -> None:\n        self.algo = algo\n        self.lr = lr\n")),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Config"',title:'"Config"'},"optimizer:\n  _target_: my_app.Optimizer\n  algo: SGD\n  lr: 0.01\n\n\n\n\n"))),(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Instantiation"',title:'"Instantiation"'},"opt = instantiate(cfg.optimizer)\nprint(opt)\n# Optimizer(algo=SGD,lr=0.01)\n\n# override parameters on the call-site\nopt = instantiate(cfg.optimizer, lr=0.2)\nprint(opt)\n# Optimizer(algo=SGD,lr=0.2)\n")))),(0,r.kt)("h3",{id:"recursive-instantiation"},"Recursive instantiation"),(0,r.kt)("p",null,"Let's add a Dataset and a Trainer class. The trainer holds a Dataset and an Optimizer instances."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Additional classes"',title:'"Additional','classes"':!0},"class Dataset:\n    name: str\n    path: str\n\n    def __init__(self, name: str, path: str) -> None:\n        self.name = name\n        self.path = path\n\n\nclass Trainer:\n    def __init__(self, optimizer: Optimizer, dataset: Dataset) -> None:\n        self.optimizer = optimizer\n        self.dataset = dataset\n")),(0,r.kt)("p",null,"With the following config, you can instantiate the whole thing with a single call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example config"',title:'"Example','config"':!0},"trainer:\n  _target_: my_app.Trainer\n  optimizer:\n    _target_: my_app.Optimizer\n    algo: SGD\n    lr: 0.01\n  dataset:\n    _target_: my_app.Dataset\n    name: Imagenet\n    path: /datasets/imagenet\n")),(0,r.kt)("p",null,"Hydra will instantiate nested objects recursively by default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"trainer = instantiate(cfg.trainer)\nprint(trainer)\n# Trainer(\n#  optimizer=Optimizer(algo=SGD,lr=0.01),\n#  dataset=Dataset(name=Imagenet, path=/datasets/imagenet)\n# )\n")),(0,r.kt)("p",null,"You can override parameters for nested objects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'trainer = instantiate(\n    cfg.trainer,\n    optimizer={"lr": 0.3},\n    dataset={"name": "cifar10", "path": "/datasets/cifar10"},\n)\nprint(trainer)\n# Trainer(\n#   optimizer=Optimizer(algo=SGD,lr=0.3),\n#   dataset=Dataset(name=cifar10, path=/datasets/cifar10)\n# )\n')),(0,r.kt)("p",null,"Similarly, positional arguments of nested objects can be overridden:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'obj = instantiate(\n    cfg.object,\n    # pass 1 and 2 as positional arguments to the target object\n    1, 2,  \n    # pass 3 and 4 as positional arguments to a nested child object\n    child={"_args_": [3, 4]},\n)\n')),(0,r.kt)("h3",{id:"disable-recursive-instantiation"},"Disable recursive instantiation"),(0,r.kt)("p",null,"You can disable recursive instantiation by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"_recursive_")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," in the config node or in the call-site\nIn that case the Trainer object will receive an OmegaConf DictConfig for nested dataset and optimizer instead of the instantiated objects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"optimizer = instantiate(cfg.trainer, _recursive_=False)\nprint(optimizer)\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"Trainer(\n  optimizer={\n    '_target_': 'my_app.Optimizer', 'algo': 'SGD', 'lr': 0.01\n  },\n  dataset={\n    '_target_': 'my_app.Dataset', 'name': 'Imagenet', 'path': '/datasets/imagenet'\n  }\n)\n")),(0,r.kt)("h2",{id:"parameter-conversion-strategies"},"Parameter conversion strategies"),(0,r.kt)("p",null,"By default, the parameters passed to the target are either primitives (int, float, bool etc) or",(0,r.kt)("br",{parentName:"p"}),"\n","OmegaConf containers (DictConfig, ListConfig).\nOmegaConf containers have many advantages over primitive dicts and lists but in some cases\nit's desired to pass a real dicts and lists (for example, for performance reasons)."),(0,r.kt)("p",null,"You can change the parameter conversion strategy using the ",(0,r.kt)("inlineCode",{parentName:"p"},"_convert_")," parameter (in your config or the call-site).\nSupported values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"none")," : Default behavior, Use OmegaConf containers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"partial")," : Convert OmegaConf containers to dict and list, except Structured Configs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"all")," : Convert everything to primitive containers")),(0,r.kt)("p",null,"Note that the conversion strategy applies to all the parameters passed to the target."))}u.isMDXComponent=!0}}]);