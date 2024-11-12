"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8799],{24757:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var t=s(85893),r=s(11151);const i={sidebar_label:"utils",title:"agentchat.contrib.vectordb.utils"},c=void 0,l={id:"reference/agentchat/contrib/vectordb/utils",title:"agentchat.contrib.vectordb.utils",description:"filter\\results\\by\\_distance",source:"@site/docs/reference/agentchat/contrib/vectordb/utils.md",sourceDirName:"reference/agentchat/contrib/vectordb",slug:"/reference/agentchat/contrib/vectordb/utils",permalink:"/autogen/docs/reference/agentchat/contrib/vectordb/utils",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/reference/agentchat/contrib/vectordb/utils.md",tags:[],version:"current",frontMatter:{sidebar_label:"utils",title:"agentchat.contrib.vectordb.utils"},sidebar:"referenceSideBar",previous:{title:"qdrant",permalink:"/autogen/docs/reference/agentchat/contrib/vectordb/qdrant"},next:{title:"agent_builder",permalink:"/autogen/docs/reference/agentchat/contrib/agent_builder"}},d={},o=[{value:"filter_results_by_distance",id:"filter_results_by_distance",level:3},{value:"chroma_results_to_query_results",id:"chroma_results_to_query_results",level:3}];function a(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"filter_results_by_distance",children:"filter_results_by_distance"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def filter_results_by_distance(results: QueryResults,\n                               distance_threshold: float = -1) -> QueryResults\n"})}),"\n",(0,t.jsx)(n.p,{children:"Filters results based on a distance threshold."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"results"})," - QueryResults | The query results. List[List[Tuple[Document, float]]]"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"distance_threshold"})," - The maximum distance allowed for results."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"QueryResults | A filtered results containing only distances smaller than the threshold."}),"\n",(0,t.jsx)(n.h3,{id:"chroma_results_to_query_results",children:"chroma_results_to_query_results"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def chroma_results_to_query_results(data_dict: Dict[str, List[List[Any]]],\n                                    special_key="distances") -> QueryResults\n'})}),"\n",(0,t.jsx)(n.p,{children:"Converts a dictionary with list-of-list values to a list of tuples."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data_dict"})," - A dictionary where keys map to lists of lists or None."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"special_key"})," - The key in the dictionary containing the special values\nfor each tuple."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"A list of tuples, where each tuple contains a sub-dictionary with\nsome keys from the original dictionary and the value from the\nspecial_key."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"data_dict = {"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'"key1s"'})," - [[1, 2, 3], [4, 5, 6], [7, 8, 9]],"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'"key2s"'}),' - [["a", "b", "c"], ["c", "d", "e"], ["e", "f", "g"]],']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'"key3s"'})," - None,"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'"key4s"'}),' - [["x", "y", "z"], ["1", "2", "3"], ["4", "5", "6"]],']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'"distances"'})," - [[0.1, 0.2, 0.3], [0.4, 0.5, 0.6], [0.7, 0.8, 0.9]],\n}"]}),"\n",(0,t.jsx)(n.p,{children:"results = [\n["}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'({"key1"'}),' - 1, "key2": "a", "key4": "x"}, 0.1),']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'({"key1"'}),' - 2, "key2": "b", "key4": "y"}, 0.2),']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'({"key1"'}),' - 3, "key2": "c", "key4": "z"}, 0.3),\n],\n[']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'({"key1"'}),' - 4, "key2": "c", "key4": "1"}, 0.4),']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'({"key1"'}),' - 5, "key2": "d", "key4": "2"}, 0.5),']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'({"key1"'}),' - 6, "key2": "e", "key4": "3"}, 0.6),\n],\n[']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'({"key1"'}),' - 7, "key2": "e", "key4": "4"}, 0.7),']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'({"key1"'}),' - 8, "key2": "f", "key4": "5"}, 0.8),']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'({"key1"'}),' - 9, "key2": "g", "key4": "6"}, 0.9),\n],\n]']}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>c});var t=s(67294);const r={},i=t.createContext(r);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);