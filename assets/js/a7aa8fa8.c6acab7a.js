"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1636],{57204:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(85893),r=t(11151);const i={sidebar_label:"function_utils",title:"function_utils"},a=void 0,l={id:"reference/function_utils",title:"function_utils",description:"get\\typed\\annotation",source:"@site/docs/reference/function_utils.md",sourceDirName:"reference",slug:"/reference/function_utils",permalink:"/autogen/docs/reference/function_utils",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/reference/function_utils.md",tags:[],version:"current",frontMatter:{sidebar_label:"function_utils",title:"function_utils"},sidebar:"referenceSideBar",previous:{title:"exception_utils",permalink:"/autogen/docs/reference/exception_utils"},next:{title:"graph_utils",permalink:"/autogen/docs/reference/graph_utils"}},o={},d=[{value:"get_typed_annotation",id:"get_typed_annotation",level:3},{value:"get_typed_signature",id:"get_typed_signature",level:3},{value:"get_typed_return_annotation",id:"get_typed_return_annotation",level:3},{value:"get_param_annotations",id:"get_param_annotations",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Function",id:"function",level:2},{value:"ToolFunction",id:"toolfunction",level:2},{value:"get_parameter_json_schema",id:"get_parameter_json_schema",level:3},{value:"get_required_params",id:"get_required_params",level:3},{value:"get_default_values",id:"get_default_values",level:3},{value:"get_parameters",id:"get_parameters",level:3},{value:"get_missing_annotations",id:"get_missing_annotations",level:3},{value:"get_function_schema",id:"get_function_schema",level:3},{value:"get_load_param_if_needed_function",id:"get_load_param_if_needed_function",level:3},{value:"load_basemodels_if_needed",id:"load_basemodels_if_needed",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"get_typed_annotation",children:"get_typed_annotation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_typed_annotation(annotation: Any, globalns: Dict[str, Any]) -> Any\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get the type annotation of a parameter."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"annotation"})," - The annotation of the parameter"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"globalns"})," - The global namespace of the function"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"The type annotation of the parameter"}),"\n",(0,s.jsx)(n.h3,{id:"get_typed_signature",children:"get_typed_signature"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_typed_signature(call: Callable[..., Any]) -> inspect.Signature\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get the signature of a function with type annotations."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"call"})," - The function to get the signature for"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"The signature of the function with type annotations"}),"\n",(0,s.jsx)(n.h3,{id:"get_typed_return_annotation",children:"get_typed_return_annotation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_typed_return_annotation(call: Callable[..., Any]) -> Any\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get the return annotation of a function."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"call"})," - The function to get the return annotation for"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"The return annotation of the function"}),"\n",(0,s.jsx)(n.h3,{id:"get_param_annotations",children:"get_param_annotations"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_param_annotations(\n    typed_signature: inspect.Signature\n) -> Dict[str, Union[Annotated[Type[Any], str], Type[Any]]]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get the type annotations of the parameters of a function"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"typed_signature"})," - The signature of the function with type annotations"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"A dictionary of the type annotations of the parameters of the function"}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Parameters(BaseModel)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Parameters of a function as defined by the OpenAI API"}),"\n",(0,s.jsx)(n.h2,{id:"function",children:"Function"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Function(BaseModel)\n"})}),"\n",(0,s.jsx)(n.p,{children:"A function as defined by the OpenAI API"}),"\n",(0,s.jsx)(n.h2,{id:"toolfunction",children:"ToolFunction"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class ToolFunction(BaseModel)\n"})}),"\n",(0,s.jsx)(n.p,{children:"A function under tool as defined by the OpenAI API."}),"\n",(0,s.jsx)(n.h3,{id:"get_parameter_json_schema",children:"get_parameter_json_schema"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_parameter_json_schema(\n        k: str, v: Any, default_values: Dict[str, Any]) -> JsonSchemaValue\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get a JSON schema for a parameter as defined by the OpenAI API"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"k"})," - The name of the parameter"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"v"})," - The type of the parameter"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"default_values"})," - The default values of the parameters of the function"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"A Pydanitc model for the parameter"}),"\n",(0,s.jsx)(n.h3,{id:"get_required_params",children:"get_required_params"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_required_params(typed_signature: inspect.Signature) -> List[str]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get the required parameters of a function"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"signature"})," - The signature of the function as returned by inspect.signature"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"A list of the required parameters of the function"}),"\n",(0,s.jsx)(n.h3,{id:"get_default_values",children:"get_default_values"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_default_values(typed_signature: inspect.Signature) -> Dict[str, Any]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get default values of parameters of a function"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"signature"})," - The signature of the function as returned by inspect.signature"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"A dictionary of the default values of the parameters of the function"}),"\n",(0,s.jsx)(n.h3,{id:"get_parameters",children:"get_parameters"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_parameters(required: List[str],\n                   param_annotations: Dict[str, Union[Annotated[Type[Any],\n                                                                str],\n                                                      Type[Any]]],\n                   default_values: Dict[str, Any]) -> Parameters\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get the parameters of a function as defined by the OpenAI API"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"required"})," - The required parameters of the function"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hints"})," - The type hints of the function as returned by typing.get_type_hints"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"A Pydantic model for the parameters of the function"}),"\n",(0,s.jsx)(n.h3,{id:"get_missing_annotations",children:"get_missing_annotations"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_missing_annotations(typed_signature: inspect.Signature,\n                            required: List[str]) -> Tuple[Set[str], Set[str]]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get the missing annotations of a function"}),"\n",(0,s.jsx)(n.p,{children:"Ignores the parameters with default values as they are not required to be annotated, but logs a warning."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"typed_signature"})," - The signature of the function with type annotations"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"required"})," - The required parameters of the function"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"A set of the missing annotations of the function"}),"\n",(0,s.jsx)(n.h3,{id:"get_function_schema",children:"get_function_schema"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_function_schema(f: Callable[..., Any],\n                        *,\n                        name: Optional[str] = None,\n                        description: str) -> Dict[str, Any]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get a JSON schema for a function as defined by the OpenAI API"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"f"})," - The function to get the JSON schema for"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," - The name of the function"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"description"})," - The description of the function"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"A JSON schema for the function"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Raises"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"TypeError"})," - If the function is not annotated"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Examples"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def f(a: Annotated[str, \"Parameter a\"], b: int = 2, c: Annotated[float, \"Parameter c\"] = 0.1) -> None:\n    pass\n\nget_function_schema(f, description=\"function f\")\n\n#   {'type': 'function',\n#    'function': {'description': 'function f',\n#        'name': 'f',\n#        'parameters': {'type': 'object',\n#           'properties': {'a': {'type': 'str', 'description': 'Parameter a'},\n#               'b': {'type': 'int', 'description': 'b'},\n#               'c': {'type': 'float', 'description': 'Parameter c'}},\n#           'required': ['a']}}}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"get_load_param_if_needed_function",children:"get_load_param_if_needed_function"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get_load_param_if_needed_function(\n    t: Any\n) -> Optional[Callable[[Dict[str, Any], Type[BaseModel]], BaseModel]]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get a function to load a parameter if it is a Pydantic model"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"t"})," - The type annotation of the parameter"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"A function to load the parameter if it is a Pydantic model, otherwise None"}),"\n",(0,s.jsx)(n.h3,{id:"load_basemodels_if_needed",children:"load_basemodels_if_needed"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def load_basemodels_if_needed(func: Callable[..., Any]) -> Callable[..., Any]\n"})}),"\n",(0,s.jsx)(n.p,{children:"A decorator to load the parameters of a function if they are Pydantic models"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"func"})," - The function with annotated parameters"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"A function that loads the parameters before calling the original function"})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var s=t(67294);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);