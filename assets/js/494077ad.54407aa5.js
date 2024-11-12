"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5194],{25565:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var c=t(85893),i=t(11151);const s={sidebar_label:"mongodb",title:"agentchat.contrib.vectordb.mongodb"},o=void 0,l={id:"reference/agentchat/contrib/vectordb/mongodb",title:"agentchat.contrib.vectordb.mongodb",description:"with\\id\\rename",source:"@site/docs/reference/agentchat/contrib/vectordb/mongodb.md",sourceDirName:"reference/agentchat/contrib/vectordb",slug:"/reference/agentchat/contrib/vectordb/mongodb",permalink:"/autogen/docs/reference/agentchat/contrib/vectordb/mongodb",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/reference/agentchat/contrib/vectordb/mongodb.md",tags:[],version:"current",frontMatter:{sidebar_label:"mongodb",title:"agentchat.contrib.vectordb.mongodb"},sidebar:"referenceSideBar",previous:{title:"chromadb",permalink:"/autogen/docs/reference/agentchat/contrib/vectordb/chromadb"},next:{title:"pgvectordb",permalink:"/autogen/docs/reference/agentchat/contrib/vectordb/pgvectordb"}},r={},d=[{value:"with_id_rename",id:"with_id_rename",level:3},{value:"MongoDBAtlasVectorDB",id:"mongodbatlasvectordb",level:2},{value:"__init__",id:"__init__",level:3},{value:"list_collections",id:"list_collections",level:3},{value:"create_collection",id:"create_collection",level:3},{value:"create_index_if_not_exists",id:"create_index_if_not_exists",level:3},{value:"get_collection",id:"get_collection",level:3},{value:"delete_collection",id:"delete_collection",level:3},{value:"create_vector_search_index",id:"create_vector_search_index",level:3},{value:"insert_docs",id:"insert_docs",level:3},{value:"update_docs",id:"update_docs",level:3},{value:"delete_docs",id:"delete_docs",level:3},{value:"get_docs_by_ids",id:"get_docs_by_ids",level:3},{value:"retrieve_docs",id:"retrieve_docs",level:3}];function a(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h3,{id:"with_id_rename",children:"with_id_rename"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def with_id_rename(docs: Iterable) -> List[Dict[str, Any]]\n"})}),"\n",(0,c.jsx)(n.p,{children:"Utility changes _id field from Collection into id for Document."}),"\n",(0,c.jsx)(n.h2,{id:"mongodbatlasvectordb",children:"MongoDBAtlasVectorDB"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"class MongoDBAtlasVectorDB(VectorDB)\n"})}),"\n",(0,c.jsx)(n.p,{children:"A Collection object for MongoDB."}),"\n",(0,c.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:'def __init__(connection_string: str = "",\n             database_name: str = "vector_db",\n             embedding_function: Callable = SentenceTransformer(\n                 "all-MiniLM-L6-v2").encode,\n             collection_name: str = None,\n             index_name: str = "vector_index",\n             overwrite: bool = False,\n             wait_until_index_ready: float = None,\n             wait_until_document_ready: float = None)\n'})}),"\n",(0,c.jsx)(n.p,{children:"Initialize the vector database."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"connection_string"})," - str | The MongoDB connection string to connect to. Default is ''."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"database_name"})," - str | The name of the database. Default is 'vector_db'."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"embedding_function"})," - Callable | The embedding function used to generate the vector representation."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection to create for this vector database\nDefaults to None"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"index_name"})," - str | Index name for the vector database, defaults to 'vector_index'"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"overwrite"})," - bool = False"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"wait_until_index_ready"})," - float | None | Blocking call to wait until the\ndatabase indexes are ready. None, the default, means no wait."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"wait_until_document_ready"})," - float | None | Blocking call to wait until the\ndatabase indexes are ready. None, the default, means no wait."]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"list_collections",children:"list_collections"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def list_collections()\n"})}),"\n",(0,c.jsx)(n.p,{children:"List the collections in the vector database."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,c.jsx)(n.p,{children:"List[str] | The list of collections."}),"\n",(0,c.jsx)(n.h3,{id:"create_collection",children:"create_collection"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def create_collection(collection_name: str,\n                      overwrite: bool = False,\n                      get_or_create: bool = True) -> Collection\n"})}),"\n",(0,c.jsx)(n.p,{children:"Create a collection in the vector database and create a vector search index in the collection."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"overwrite"})," - bool | Whether to overwrite the collection if it exists. Default is False."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"get_or_create"})," - bool | Whether to get or create the collection. Default is True"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"create_index_if_not_exists",children:"create_index_if_not_exists"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:'def create_index_if_not_exists(index_name: str = "vector_index",\n                               collection: Collection = None) -> None\n'})}),"\n",(0,c.jsx)(n.p,{children:"Creates a vector search index on the specified collection in MongoDB."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"MONGODB_INDEX"})," ",(0,c.jsx)(n.em,{children:"str, optional"}),' - The name of the vector search index to create. Defaults to "vector_search_index".']}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collection"})," ",(0,c.jsx)(n.em,{children:"Collection, optional"})," - The MongoDB collection to create the index on. Defaults to None."]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"get_collection",children:"get_collection"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def get_collection(collection_name: str = None) -> Collection\n"})}),"\n",(0,c.jsx)(n.p,{children:"Get the collection from the vector database."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None. If None, return the\ncurrent active collection."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,c.jsx)(n.p,{children:"Collection | The collection object."}),"\n",(0,c.jsx)(n.h3,{id:"delete_collection",children:"delete_collection"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def delete_collection(collection_name: str) -> None\n"})}),"\n",(0,c.jsx)(n.p,{children:"Delete the collection from the vector database."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection."]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"create_vector_search_index",children:"create_vector_search_index"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:'def create_vector_search_index(\n    collection: Collection,\n    index_name: Union[str, None] = "vector_index",\n    similarity: Literal["euclidean", "cosine",\n                        "dotProduct"] = "cosine") -> None\n'})}),"\n",(0,c.jsx)(n.p,{children:"Create a vector search index in the collection."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collection"})," - An existing Collection in the Atlas Database."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"index_name"})," - Vector Search Index name."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"similarity"})," - Algorithm used for measuring vector similarity."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"kwargs"})," - Additional keyword arguments."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,c.jsx)(n.p,{children:"None"}),"\n",(0,c.jsx)(n.h3,{id:"insert_docs",children:"insert_docs"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def insert_docs(docs: List[Document],\n                collection_name: str = None,\n                upsert: bool = False,\n                batch_size=DEFAULT_INSERT_BATCH_SIZE,\n                **kwargs) -> None\n"})}),"\n",(0,c.jsx)(n.p,{children:"Insert Documents and Vector Embeddings into the collection of the vector database."}),"\n",(0,c.jsx)(n.p,{children:"For large numbers of Documents, insertion is performed in batches."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"docs"})," - List[Document] | A list of documents. Each document is a TypedDict ",(0,c.jsx)(n.code,{children:"Document"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"upsert"})," - bool | Whether to update the document if it exists. Default is False."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"batch_size"})," - Number of documents to be inserted in each batch"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"update_docs",children:"update_docs"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def update_docs(docs: List[Document],\n                collection_name: str = None,\n                **kwargs: Any) -> None\n"})}),"\n",(0,c.jsx)(n.p,{children:"Update documents, including their embeddings, in the Collection."}),"\n",(0,c.jsx)(n.p,{children:"Optionally allow upsert as kwarg."}),"\n",(0,c.jsx)(n.p,{children:"Uses deepcopy to avoid changing docs."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"docs"})," - List[Document] | A list of documents."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"kwargs"})," - Any | Use upsert=True` to insert documents whose ids are not present in collection."]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"delete_docs",children:"delete_docs"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def delete_docs(ids: List[ItemID], collection_name: str = None, **kwargs)\n"})}),"\n",(0,c.jsx)(n.p,{children:"Delete documents from the collection of the vector database."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"ids"})," - List[ItemID] | A list of document ids. Each id is a typed ",(0,c.jsx)(n.code,{children:"ItemID"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"get_docs_by_ids",children:"get_docs_by_ids"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def get_docs_by_ids(ids: List[ItemID] = None,\n                    collection_name: str = None,\n                    include: List[str] = None,\n                    **kwargs) -> List[Document]\n"})}),"\n",(0,c.jsx)(n.p,{children:"Retrieve documents from the collection of the vector database based on the ids."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"ids"})," - List[ItemID] | A list of document ids. If None, will return all the documents. Default is None."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"include"}),' - List[str] | The fields to include.\nIf None, will include ["metadata", "content"], ids will always be included.\nBasically, use include to choose whether to include embedding and metadata']}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"kwargs"})," - dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,c.jsx)(n.p,{children:"List[Document] | The results."}),"\n",(0,c.jsx)(n.h3,{id:"retrieve_docs",children:"retrieve_docs"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def retrieve_docs(queries: List[str],\n                  collection_name: str = None,\n                  n_results: int = 10,\n                  distance_threshold: float = -1,\n                  **kwargs) -> QueryResults\n"})}),"\n",(0,c.jsx)(n.p,{children:"Retrieve documents from the collection of the vector database based on the queries."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"queries"})," - List[str] | A list of queries. Each query is a string."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"n_results"})," - int | The number of relevant documents to return. Default is 10."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"distance_threshold"})," - float | The threshold for the distance score, only distance smaller than it will be\nreturned. Don't filter with it if < 0. Default is -1."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"kwargs"})," - Dict | Additional keyword arguments. Ones of importance follow:"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"oversampling_factor"})," - int | This times n_results is 'ef' in the HNSW algorithm.\nIt determines the number of nearest neighbor candidates to consider during the search phase.\nA higher value leads to more accuracy, but is slower. Default is 10"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,c.jsx)(n.p,{children:"QueryResults | For each query string, a list of nearest documents and their scores."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var c=t(67294);const i={},s=c.createContext(i);function o(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);