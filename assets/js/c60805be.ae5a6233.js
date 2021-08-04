(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9764],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:e},l),{},{components:n})):r.createElement(m,i({ref:e},l))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1502:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={id:"structured_config",title:"Structured Configs example",sidebar_label:"Structured Configs example"},c=void 0,p={unversionedId:"patterns/instantiate_objects/structured_config",id:"version-1.0/patterns/instantiate_objects/structured_config",isDocsHomePage:!1,title:"Structured Configs example",description:"Example application",source:"@site/versioned_docs/version-1.0/patterns/instantiate_objects/structured_config.md",sourceDirName:"patterns/instantiate_objects",slug:"/patterns/instantiate_objects/structured_config",permalink:"/docs/1.0/patterns/instantiate_objects/structured_config",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/patterns/instantiate_objects/structured_config.md",version:"1.0",lastUpdatedBy:"Jasha10",lastUpdatedAt:1628114063,formattedLastUpdatedAt:"8/4/2021",frontMatter:{id:"structured_config",title:"Structured Configs example",sidebar_label:"Structured Configs example"},sidebar:"version-1.0/docs",previous:{title:"Config files example",permalink:"/docs/1.0/patterns/instantiate_objects/config_files"},next:{title:"Specializing configuration",permalink:"/docs/1.0/patterns/specializing_config"}},l=[],u={toc:l};function f(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/patterns/instantiate_structured_config/my_app.py"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),(0,a.kt)("p",null,"This example demonstrates the use of Structured Configs to instantiated objects."),(0,a.kt)("h4",{id:"example-usage"},"Example usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'},'class DBConnection:\n    def __init__(self, driver: str, host: str, port: int) -> None:\n        self.driver = driver\n        self.host = host\n        self.port = port\n\n    def connect(self) -> None:\n        print(f"{self.driver} connecting to {self.host}")\n\nclass MySQLConnection(DBConnection):\n    def __init__(self, driver: str, host: str, port: int) -> None:\n        super().__init__(driver=driver, host=host, port=port)\n\nclass PostgreSQLConnection(DBConnection):\n    def __init__(self, driver: str, host: str, port: int, timeout: int) -> None:\n        super().__init__(driver=driver, host=host, port=port)\n        self.timeout = timeout\n\n@dataclass\nclass DBConfig:\n    driver: str = MISSING\n    host: str = "localhost"\n    port: int = 80\n\n@dataclass\nclass MySQLConfig(DBConfig):\n    _target_: str = "my_app.MySQLConnection"\n    driver: str = "MySQL"\n    port: int = 1234\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n    _target_: str = "my_app.PostgreSQLConnection"\n    driver: str = "PostgreSQL"\n    port: int = 5678\n    timeout: int = 10\n\n@dataclass\nclass Config:\n    defaults: List[Any] = field(default_factory=lambda: [{"db": "mysql"}])\n    db: DBConfig = MISSING\n\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=Config)\ncs.store(group="db", name="mysql", node=MySQLConfig)\ncs.store(group="db", name="postgresql", node=PostGreSQLConfig)\n\n@hydra.main(config_name="config")\ndef my_app(cfg: Config) -> None:\n    connection = instantiate(cfg.db)\n    connection.connect()\n\nif __name__ == "__main__":\n    my_app()\n')),(0,a.kt)("h4",{id:"sample-output"},"Sample Output"),(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{className:"col col--6"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ python my_app.py\nMySQL connecting to localhost:1234\n"))),(0,a.kt)("div",{className:"col col--6"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ python my_app.py db=postgresql\nPostgreSQL connecting to localhost:5678\n")))))}f.isMDXComponent=!0}}]);