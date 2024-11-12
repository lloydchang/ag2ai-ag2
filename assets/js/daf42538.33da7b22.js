"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1032],{51486:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>i,contentTitle:()=>t,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(85893),s=n(11151);const r={sidebar_label:"cache_factory",title:"cache.cache_factory"},t=void 0,o={id:"reference/cache/cache_factory",title:"cache.cache_factory",description:"CacheFactory",source:"@site/docs/reference/cache/cache_factory.md",sourceDirName:"reference/cache",slug:"/reference/cache/cache_factory",permalink:"/autogen/docs/reference/cache/cache_factory",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/reference/cache/cache_factory.md",tags:[],version:"current",frontMatter:{sidebar_label:"cache_factory",title:"cache.cache_factory"},sidebar:"referenceSideBar",previous:{title:"cache",permalink:"/autogen/docs/reference/cache/"},next:{title:"cosmos_db_cache",permalink:"/autogen/docs/reference/cache/cosmos_db_cache"}},i={},d=[{value:"CacheFactory",id:"cachefactory",level:2},{value:"cache_factory",id:"cache_factory",level:3}];function h(e){const c={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.h2,{id:"cachefactory",children:"CacheFactory"}),"\n",(0,a.jsx)(c.pre,{children:(0,a.jsx)(c.code,{className:"language-python",children:"class CacheFactory()\n"})}),"\n",(0,a.jsx)(c.h3,{id:"cache_factory",children:"cache_factory"}),"\n",(0,a.jsx)(c.pre,{children:(0,a.jsx)(c.code,{className:"language-python",children:'@staticmethod\ndef cache_factory(\n        seed: Union[str, int],\n        redis_url: Optional[str] = None,\n        cache_path_root: str = ".cache",\n        cosmosdb_config: Optional[Dict[str, Any]] = None) -> AbstractCache\n'})}),"\n",(0,a.jsx)(c.p,{children:"Factory function for creating cache instances."}),"\n",(0,a.jsx)(c.p,{children:"This function decides whether to create a RedisCache, DiskCache, or CosmosDBCache instance\nbased on the provided parameters. If RedisCache is available and a redis_url is provided,\na RedisCache instance is created. If connection_string, database_id, and container_id\nare provided, a CosmosDBCache is created. Otherwise, a DiskCache instance is used."}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.strong,{children:"Arguments"}),":"]}),"\n",(0,a.jsxs)(c.ul,{children:["\n",(0,a.jsxs)(c.li,{children:[(0,a.jsx)(c.code,{children:"seed"})," ",(0,a.jsx)(c.em,{children:"Union[str, int]"})," - Used as a seed or namespace for the cache."]}),"\n",(0,a.jsxs)(c.li,{children:[(0,a.jsx)(c.code,{children:"redis_url"})," ",(0,a.jsx)(c.em,{children:"Optional[str]"})," - URL for the Redis server."]}),"\n",(0,a.jsxs)(c.li,{children:[(0,a.jsx)(c.code,{children:"cache_path_root"})," ",(0,a.jsx)(c.em,{children:"str"})," - Root path for the disk cache."]}),"\n",(0,a.jsxs)(c.li,{children:[(0,a.jsx)(c.code,{children:"cosmosdb_config"})," ",(0,a.jsx)(c.em,{children:"Optional[Dict[str, str]]"})," - Dictionary containing 'connection_string',\n'database_id', and 'container_id' for Cosmos DB cache."]}),"\n"]}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.strong,{children:"Returns"}),":"]}),"\n",(0,a.jsx)(c.p,{children:"An instance of RedisCache, DiskCache, or CosmosDBCache."}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.strong,{children:"Examples"}),":"]}),"\n",(0,a.jsx)(c.p,{children:"Creating a Redis cache"}),"\n",(0,a.jsx)(c.pre,{children:(0,a.jsx)(c.code,{className:"language-python",children:'redis_cache = cache_factory("myseed", "redis://localhost:6379/0")\n'})}),"\n",(0,a.jsx)(c.p,{children:"Creating a Disk cache"}),"\n",(0,a.jsx)(c.pre,{children:(0,a.jsx)(c.code,{className:"language-python",children:'disk_cache = cache_factory("myseed", None)\n'})}),"\n",(0,a.jsx)(c.p,{children:"Creating a Cosmos DB cache:"}),"\n",(0,a.jsx)(c.pre,{children:(0,a.jsx)(c.code,{className:"language-python",children:'cosmos_cache = cache_factory("myseed", cosmosdb_config={\n        "connection_string": "your_connection_string",\n        "database_id": "your_database_id",\n        "container_id": "your_container_id"}\n    )\n'})})]})}function l(e={}){const{wrapper:c}={...(0,s.a)(),...e.components};return c?(0,a.jsx)(c,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,c,n)=>{n.d(c,{Z:()=>o,a:()=>t});var a=n(67294);const s={},r=a.createContext(s);function t(e){const c=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function o(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(r.Provider,{value:c},e.children)}}}]);