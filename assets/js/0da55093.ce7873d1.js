"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[171],{74472:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=n(85893),s=n(11151);const l={sidebar_label:"openai_utils",title:"oai.openai_utils"},o=void 0,r={id:"reference/oai/openai_utils",title:"oai.openai_utils",description:"get\\_key",source:"@site/docs/reference/oai/openai_utils.md",sourceDirName:"reference/oai",slug:"/reference/oai/openai_utils",permalink:"/autogen/docs/reference/oai/openai_utils",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/reference/oai/openai_utils.md",tags:[],version:"current",frontMatter:{sidebar_label:"openai_utils",title:"oai.openai_utils"},sidebar:"referenceSideBar",previous:{title:"ollama",permalink:"/autogen/docs/reference/oai/ollama"},next:{title:"together",permalink:"/autogen/docs/reference/oai/together"}},a={},c=[{value:"get_key",id:"get_key",level:3},{value:"is_valid_api_key",id:"is_valid_api_key",level:3},{value:"get_config_list",id:"get_config_list",level:3},{value:"config_list_openai_aoai",id:"config_list_openai_aoai",level:3},{value:"config_list_from_models",id:"config_list_from_models",level:3},{value:"config_list_gpt4_gpt35",id:"config_list_gpt4_gpt35",level:3},{value:"filter_config",id:"filter_config",level:3},{value:"config_list_from_json",id:"config_list_from_json",level:3},{value:"get_config",id:"get_config",level:3},{value:"config_list_from_dotenv",id:"config_list_from_dotenv",level:3},{value:"retrieve_assistants_by_name",id:"retrieve_assistants_by_name",level:3},{value:"detect_gpt_assistant_api_version",id:"detect_gpt_assistant_api_version",level:3},{value:"create_gpt_vector_store",id:"create_gpt_vector_store",level:3},{value:"create_gpt_assistant",id:"create_gpt_assistant",level:3},{value:"update_gpt_assistant",id:"update_gpt_assistant",level:3}];function d(e){const i={code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h3,{id:"get_key",children:"get_key"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"def get_key(config: Dict[str, Any]) -> str\n"})}),"\n",(0,t.jsx)(i.p,{children:"Get a unique identifier of a configuration."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"config"})," ",(0,t.jsx)(i.em,{children:"dict or list"})," - A configuration."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"tuple"})," - A unique identifier which can be used as a key for a dict."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"is_valid_api_key",children:"is_valid_api_key"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"def is_valid_api_key(api_key: str) -> bool\n"})}),"\n",(0,t.jsx)(i.p,{children:'Determine if input is valid OpenAI API key. As of 2024-09-24 there\'s no official definition of the key structure\nso we will allow anything starting with "sk-" and having at least 48 alphanumeric (plus underscore and dash) characters.\nKeys are known to start with "sk-", "sk-proj", "sk-None", and "sk-svcaat"'}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"api_key"})," ",(0,t.jsx)(i.em,{children:"str"})," - An input string to be validated."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"bool"})," - A boolean that indicates if input is valid OpenAI API key."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"get_config_list",children:"get_config_list"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"def get_config_list(api_keys: List[str],\n                    base_urls: Optional[List[str]] = None,\n                    api_type: Optional[str] = None,\n                    api_version: Optional[str] = None) -> List[Dict[str, Any]]\n"})}),"\n",(0,t.jsx)(i.p,{children:"Get a list of configs for OpenAI API client."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"api_keys"})," ",(0,t.jsx)(i.em,{children:"list"})," - The api keys for openai api calls."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"base_urls"})," ",(0,t.jsx)(i.em,{children:"list, optional"})," - The api bases for openai api calls. If provided, should match the length of api_keys."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"api_type"})," ",(0,t.jsx)(i.em,{children:"str, optional"})," - The api type for openai api calls."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"api_version"})," ",(0,t.jsx)(i.em,{children:"str, optional"})," - The api version for openai api calls."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"list"})," - A list of configs for OepnAI API calls."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"# Define a list of API keys\napi_keys = ['key1', 'key2', 'key3']\n\n# Optionally, define a list of base URLs corresponding to each API key\nbase_urls = ['https://api.service1.com', 'https://api.service2.com', 'https://api.service3.com']\n\n# Optionally, define the API type and version if they are common for all keys\napi_type = 'azure'\napi_version = '2024-02-01'\n\n# Call the get_config_list function to get a list of configuration dictionaries\nconfig_list = get_config_list(api_keys, base_urls, api_type, api_version)\n"})}),"\n",(0,t.jsx)(i.h3,{id:"config_list_openai_aoai",children:"config_list_openai_aoai"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:'def config_list_openai_aoai(\n        key_file_path: Optional[str] = ".",\n        openai_api_key_file: Optional[str] = "key_openai.txt",\n        aoai_api_key_file: Optional[str] = "key_aoai.txt",\n        openai_api_base_file: Optional[str] = "base_openai.txt",\n        aoai_api_base_file: Optional[str] = "base_aoai.txt",\n        exclude: Optional[str] = None) -> List[Dict[str, Any]]\n'})}),"\n",(0,t.jsx)(i.p,{children:"Get a list of configs for OpenAI API client (including Azure or local model deployments that support OpenAI's chat completion API)."}),"\n",(0,t.jsx)(i.p,{children:"This function constructs configurations by reading API keys and base URLs from environment variables or text files.\nIt supports configurations for both OpenAI and Azure OpenAI services, allowing for the exclusion of one or the other.\nWhen text files are used, the environment variables will be overwritten.\nTo prevent text files from being used, set the corresponding file name to None.\nOr set key_file_path to None to disallow reading from text files."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"key_file_path"})," ",(0,t.jsx)(i.em,{children:"str, optional"})," - The directory path where the API key files are located. Defaults to the current directory."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"openai_api_key_file"})," ",(0,t.jsx)(i.em,{children:"str, optional"})," - The filename containing the OpenAI API key. Defaults to 'key_openai.txt'."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"aoai_api_key_file"})," ",(0,t.jsx)(i.em,{children:"str, optional"})," - The filename containing the Azure OpenAI API key. Defaults to 'key_aoai.txt'."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"openai_api_base_file"})," ",(0,t.jsx)(i.em,{children:"str, optional"})," - The filename containing the OpenAI API base URL. Defaults to 'base_openai.txt'."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"aoai_api_base_file"})," ",(0,t.jsx)(i.em,{children:"str, optional"})," - The filename containing the Azure OpenAI API base URL. Defaults to 'base_aoai.txt'."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"exclude"})," ",(0,t.jsx)(i.em,{children:"str, optional"})," - The API type to exclude from the configuration list. Can be 'openai' or 'aoai'. Defaults to None."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"List[Dict]"})," - A list of configuration dictionaries. Each dictionary contains keys for 'api_key',\nand optionally 'base_url', 'api_type', and 'api_version'."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Raises"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"FileNotFoundError"})," - If the specified key files are not found and the corresponding API key is not set in the environment variables."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(i.h1,{id:"to-generate-configurations-excluding-azure-openai",children:"To generate configurations excluding Azure OpenAI:"}),"\n",(0,t.jsx)(i.p,{children:"configs = config_list_openai_aoai(exclude='aoai')"}),"\n",(0,t.jsx)(i.p,{children:"File samples:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"key_aoai.txt"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"aoai-12345abcdef67890ghijklmnopqr\naoai-09876zyxwvuts54321fedcba\n"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"base_aoai.txt"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"https://api.azure.com/v1\nhttps://api.azure2.com/v1\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Notes"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The function checks for API keys and base URLs in the following environment variables: 'OPENAI_API_KEY', 'AZURE_OPENAI_API_KEY',\n'OPENAI_API_BASE' and 'AZURE_OPENAI_API_BASE'. If these are not found, it attempts to read from the specified files in the\n'key_file_path' directory."}),"\n",(0,t.jsx)(i.li,{children:"The API version for Azure configurations is set to DEFAULT_AZURE_API_VERSION by default."}),"\n",(0,t.jsx)(i.li,{children:"If 'exclude' is set to 'openai', only Azure OpenAI configurations are returned, and vice versa."}),"\n",(0,t.jsx)(i.li,{children:"The function assumes that the API keys and base URLs in the environment variables are separated by new lines if there are\nmultiple entries."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"config_list_from_models",children:"config_list_from_models"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:'def config_list_from_models(\n        key_file_path: Optional[str] = ".",\n        openai_api_key_file: Optional[str] = "key_openai.txt",\n        aoai_api_key_file: Optional[str] = "key_aoai.txt",\n        aoai_api_base_file: Optional[str] = "base_aoai.txt",\n        exclude: Optional[str] = None,\n        model_list: Optional[List[str]] = None) -> List[Dict[str, Any]]\n'})}),"\n",(0,t.jsx)(i.p,{children:"Get a list of configs for API calls with models specified in the model list."}),"\n",(0,t.jsxs)(i.p,{children:["This function extends ",(0,t.jsx)(i.code,{children:"config_list_openai_aoai"})," by allowing to clone its' out for each of the models provided.\nEach configuration will have a 'model' key with the model name as its value. This is particularly useful when\nall endpoints have same set of models."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"key_file_path"})," ",(0,t.jsx)(i.em,{children:"str, optional"})," - The path to the key files."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"openai_api_key_file"})," ",(0,t.jsx)(i.em,{children:"str, optional"})," - The file name of the OpenAI API key."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"aoai_api_key_file"})," ",(0,t.jsx)(i.em,{children:"str, optional"})," - The file name of the Azure OpenAI API key."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"aoai_api_base_file"})," ",(0,t.jsx)(i.em,{children:"str, optional"})," - The file name of the Azure OpenAI API base."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"exclude"})," ",(0,t.jsx)(i.em,{children:"str, optional"}),' - The API type to exclude, "openai" or "aoai".']}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"model_list"})," ",(0,t.jsx)(i.em,{children:"list, optional"})," - The list of model names to include in the configs."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"list"})," - A list of configs for OpenAI API calls, each including model information."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"# Define the path where the API key files are located\nkey_file_path = '/path/to/key/files'\n\n# Define the file names for the OpenAI and Azure OpenAI API keys and bases\nopenai_api_key_file = 'key_openai.txt'\naoai_api_key_file = 'key_aoai.txt'\naoai_api_base_file = 'base_aoai.txt'\n\n# Define the list of models for which to create configurations\nmodel_list = ['gpt-4', 'gpt-3.5-turbo']\n\n# Call the function to get a list of configuration dictionaries\nconfig_list = config_list_from_models(\n    key_file_path=key_file_path,\n    openai_api_key_file=openai_api_key_file,\n    aoai_api_key_file=aoai_api_key_file,\n    aoai_api_base_file=aoai_api_base_file,\n    model_list=model_list\n)\n\n# The `config_list` will contain configurations for the specified models, for example:\n# [\n#     {'api_key': '...', 'base_url': 'https://api.openai.com', 'model': 'gpt-4'},\n#     {'api_key': '...', 'base_url': 'https://api.openai.com', 'model': 'gpt-3.5-turbo'}\n# ]\n"})}),"\n",(0,t.jsx)(i.h3,{id:"config_list_gpt4_gpt35",children:"config_list_gpt4_gpt35"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:'def config_list_gpt4_gpt35(\n        key_file_path: Optional[str] = ".",\n        openai_api_key_file: Optional[str] = "key_openai.txt",\n        aoai_api_key_file: Optional[str] = "key_aoai.txt",\n        aoai_api_base_file: Optional[str] = "base_aoai.txt",\n        exclude: Optional[str] = None) -> List[Dict[str, Any]]\n'})}),"\n",(0,t.jsx)(i.p,{children:"Get a list of configs for 'gpt-4' followed by 'gpt-3.5-turbo' API calls."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"key_file_path"})," ",(0,t.jsx)(i.em,{children:"str, optional"})," - The path to the key files."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"openai_api_key_file"})," ",(0,t.jsx)(i.em,{children:"str, optional"})," - The file name of the openai api key."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"aoai_api_key_file"})," ",(0,t.jsx)(i.em,{children:"str, optional"})," - The file name of the azure openai api key."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"aoai_api_base_file"})," ",(0,t.jsx)(i.em,{children:"str, optional"})," - The file name of the azure openai api base."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"exclude"})," ",(0,t.jsx)(i.em,{children:"str, optional"}),' - The api type to exclude, "openai" or "aoai".']}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"list"})," - A list of configs for openai api calls."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"filter_config",children:"filter_config"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"def filter_config(config_list: List[Dict[str, Any]],\n                  filter_dict: Optional[Dict[str, Union[List[Union[str, None]],\n                                                        Set[Union[str,\n                                                                  None]]]]],\n                  exclude: bool = False) -> List[Dict[str, Any]]\n"})}),"\n",(0,t.jsxs)(i.p,{children:["This function filters ",(0,t.jsx)(i.code,{children:"config_list"})," by checking each configuration dictionary against the criteria specified in\n",(0,t.jsx)(i.code,{children:"filter_dict"}),". A configuration dictionary is retained if for every key in ",(0,t.jsx)(i.code,{children:"filter_dict"}),", see example below."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"config_list"})," ",(0,t.jsx)(i.em,{children:"list of dict"})," - A list of configuration dictionaries to be filtered."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"filter_dict"})," ",(0,t.jsx)(i.em,{children:"dict"})," - A dictionary representing the filter criteria, where each key is a\nfield name to check within the configuration dictionaries, and the\ncorresponding value is a list of acceptable values for that field.\nIf the configuration's field's value is not a list, then a match occurs\nwhen it is found in the list of acceptable values. If the configuration's\nfield's value is a list, then a match occurs if there is a non-empty\nintersection with the acceptable values."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"exclude"})," ",(0,t.jsx)(i.em,{children:"bool"})," - If False (the default value), configs that match the filter will be included in the returned\nlist. If True, configs that match the filter will be excluded in the returned list."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(i.p,{children:["list of dict: A list of configuration dictionaries that meet all the criteria specified\nin ",(0,t.jsx)(i.code,{children:"filter_dict"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"```python\n# Example configuration list with various models and API types\nconfigs = [\n    {'model': 'gpt-3.5-turbo'},\n    {'model': 'gpt-4'},\n    {'model': 'gpt-3.5-turbo', 'api_type': 'azure'},\n    {'model': 'gpt-3.5-turbo', 'tags': ['gpt35_turbo', 'gpt-35-turbo']},\n]\n# Define filter criteria to select configurations for the 'gpt-3.5-turbo' model\n# that are also using the 'azure' API type\nfilter_criteria = {\n    'model': ['gpt-3.5-turbo'],  # Only accept configurations for 'gpt-3.5-turbo'\n    'api_type': ['azure']       # Only accept configurations for 'azure' API type\n}\n# Apply the filter to the configuration list\nfiltered_configs = filter_config(configs, filter_criteria)\n# The resulting `filtered_configs` will be:\n# [{'model': 'gpt-3.5-turbo', 'api_type': 'azure', ...}]\n# Define a filter to select a given tag\nfilter_criteria = {\n    'tags': ['gpt35_turbo'],\n}\n# Apply the filter to the configuration list\nfiltered_configs = filter_config(configs, filter_criteria)\n# The resulting `filtered_configs` will be:\n# [{'model': 'gpt-3.5-turbo', 'tags': ['gpt35_turbo', 'gpt-35-turbo']}]\n```\n"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Notes"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["If ",(0,t.jsx)(i.code,{children:"filter_dict"})," is empty or None, no filtering is applied and ",(0,t.jsx)(i.code,{children:"config_list"})," is returned as is."]}),"\n",(0,t.jsxs)(i.li,{children:["If a configuration dictionary in ",(0,t.jsx)(i.code,{children:"config_list"})," does not contain a key specified in ",(0,t.jsx)(i.code,{children:"filter_dict"}),",\nit is considered a non-match and is excluded from the result."]}),"\n",(0,t.jsxs)(i.li,{children:["If the list of acceptable values for a key in ",(0,t.jsx)(i.code,{children:"filter_dict"})," includes None, then configuration\ndictionaries that do not have that key will also be considered a match."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"config_list_from_json",children:"config_list_from_json"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:'def config_list_from_json(\n    env_or_file: str,\n    file_location: Optional[str] = "",\n    filter_dict: Optional[Dict[str, Union[List[Union[str, None]],\n                                          Set[Union[str, None]]]]] = None\n) -> List[Dict[str, Any]]\n'})}),"\n",(0,t.jsx)(i.p,{children:"Retrieves a list of API configurations from a JSON stored in an environment variable or a file."}),"\n",(0,t.jsxs)(i.p,{children:["This function attempts to parse JSON data from the given ",(0,t.jsx)(i.code,{children:"env_or_file"})," parameter. If ",(0,t.jsx)(i.code,{children:"env_or_file"})," is an\nenvironment variable containing JSON data, it will be used directly. Otherwise, it is assumed to be a filename,\nand the function will attempt to read the file from the specified ",(0,t.jsx)(i.code,{children:"file_location"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"filter_dict"})," parameter allows for filtering the configurations based on specified criteria. Each key in the\n",(0,t.jsx)(i.code,{children:"filter_dict"})," corresponds to a field in the configuration dictionaries, and the associated value is a list or set\nof acceptable values for that field. If a field is missing in a configuration and ",(0,t.jsx)(i.code,{children:"None"})," is included in the list\nof acceptable values for that field, the configuration will still be considered a match."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"env_or_file"})," ",(0,t.jsx)(i.em,{children:"str"})," - The name of the environment variable, the filename, or the environment variable of the filename\nthat containing the JSON data."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"file_location"})," ",(0,t.jsx)(i.em,{children:"str, optional"})," - The directory path where the file is located, if ",(0,t.jsx)(i.code,{children:"env_or_file"})," is a filename."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"filter_dict"})," ",(0,t.jsx)(i.em,{children:"dict, optional"})," - A dictionary specifying the filtering criteria for the configurations, with\nkeys representing field names and values being lists or sets of acceptable values for those fields."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:'# Suppose we have an environment variable \'CONFIG_JSON\' with the following content:\n# \'[{"model": "gpt-3.5-turbo", "api_type": "azure"}, {"model": "gpt-4"}]\'\n\n# We can retrieve a filtered list of configurations like this:\nfilter_criteria = {"model": ["gpt-3.5-turbo"]}\nconfigs = config_list_from_json(\'CONFIG_JSON\', filter_dict=filter_criteria)\n# The \'configs\' variable will now contain only the configurations that match the filter criteria.\n'})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"List[Dict]"})," - A list of configuration dictionaries that match the filtering criteria specified in ",(0,t.jsx)(i.code,{children:"filter_dict"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Raises"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"FileNotFoundError"})," - if env_or_file is neither found as an environment variable nor a file"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"get_config",children:"get_config"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"def get_config(api_key: Optional[str],\n               base_url: Optional[str] = None,\n               api_type: Optional[str] = None,\n               api_version: Optional[str] = None) -> Dict[str, Any]\n"})}),"\n",(0,t.jsx)(i.p,{children:"Constructs a configuration dictionary for a single model with the provided API configurations."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:'config = get_config(\n    api_key="sk-abcdef1234567890",\n    base_url="https://api.openai.com",\n    api_version="v1"\n)\n# The \'config\' variable will now contain:\n# {\n#     "api_key": "sk-abcdef1234567890",\n#     "base_url": "https://api.openai.com",\n#     "api_version": "v1"\n# }\n'})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"api_key"})," ",(0,t.jsx)(i.em,{children:"str"})," - The API key for authenticating API requests."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"base_url"})," ",(0,t.jsx)(i.em,{children:"Optional[str]"})," - The base URL of the API. If not provided, defaults to None."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"api_type"})," ",(0,t.jsx)(i.em,{children:"Optional[str]"})," - The type of API. If not provided, defaults to None."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"api_version"})," ",(0,t.jsx)(i.em,{children:"Optional[str]"})," - The version of the API. If not provided, defaults to None."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Dict"})," - A dictionary containing the provided API configurations."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"config_list_from_dotenv",children:"config_list_from_dotenv"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"def config_list_from_dotenv(\n    dotenv_file_path: Optional[str] = None,\n    model_api_key_map: Optional[Dict[str, Any]] = None,\n    filter_dict: Optional[Dict[str, Union[List[Union[str, None]],\n                                          Set[Union[str, None]]]]] = None\n) -> List[Dict[str, Union[str, Set[str]]]]\n"})}),"\n",(0,t.jsx)(i.p,{children:"Load API configurations from a specified .env file or environment variables and construct a list of configurations."}),"\n",(0,t.jsx)(i.p,{children:"This function will:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Load API keys from a provided .env file or from existing environment variables."}),"\n",(0,t.jsx)(i.li,{children:"Create a configuration dictionary for each model using the API keys and additional configurations."}),"\n",(0,t.jsx)(i.li,{children:"Filter and return the configurations based on provided filters."}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["model_api_key_map will default to ",(0,t.jsx)(i.code,{children:'{"gpt-4": "OPENAI_API_KEY", "gpt-3.5-turbo": "OPENAI_API_KEY"}'})," if none"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"dotenv_file_path"})," ",(0,t.jsx)(i.em,{children:"str, optional"})," - The path to the .env file. Defaults to None."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"model_api_key_map"})," ",(0,t.jsx)(i.em,{children:"str/dict, optional"})," - A dictionary mapping models to their API key configurations.\nIf a string is provided as configuration, it is considered as an environment\nvariable name storing the API key.\nIf a dict is provided, it should contain at least 'api_key_env_var' key,\nand optionally other API configurations like 'base_url', 'api_type', and 'api_version'.\nDefaults to a basic map with 'gpt-4' and 'gpt-3.5-turbo' mapped to 'OPENAI_API_KEY'."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"filter_dict"})," ",(0,t.jsx)(i.em,{children:"dict, optional"})," - A dictionary containing the models to be loaded.\nContaining a 'model' key mapped to a set of model names to be loaded.\nDefaults to None, which loads all found configurations."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(i.p,{children:"List[Dict[str, Union[str, Set[str]]]]: A list of configuration dictionaries for each model."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Raises"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"FileNotFoundError"})," - If the specified .env file does not exist."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"TypeError"})," - If an unsupported type of configuration is provided in model_api_key_map."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"retrieve_assistants_by_name",children:"retrieve_assistants_by_name"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"def retrieve_assistants_by_name(client: OpenAI, name: str) -> List[Assistant]\n"})}),"\n",(0,t.jsx)(i.p,{children:"Return the assistants with the given name from OAI assistant API"}),"\n",(0,t.jsx)(i.h3,{id:"detect_gpt_assistant_api_version",children:"detect_gpt_assistant_api_version"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"def detect_gpt_assistant_api_version() -> str\n"})}),"\n",(0,t.jsx)(i.p,{children:"Detect the openai assistant API version"}),"\n",(0,t.jsx)(i.h3,{id:"create_gpt_vector_store",children:"create_gpt_vector_store"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"def create_gpt_vector_store(client: OpenAI, name: str,\n                            fild_ids: List[str]) -> Any\n"})}),"\n",(0,t.jsx)(i.p,{children:"Create a openai vector store for gpt assistant"}),"\n",(0,t.jsx)(i.h3,{id:"create_gpt_assistant",children:"create_gpt_assistant"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"def create_gpt_assistant(client: OpenAI, name: str, instructions: str,\n                         model: str, assistant_config: Dict[str,\n                                                            Any]) -> Assistant\n"})}),"\n",(0,t.jsx)(i.p,{children:"Create a openai gpt assistant"}),"\n",(0,t.jsx)(i.h3,{id:"update_gpt_assistant",children:"update_gpt_assistant"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"def update_gpt_assistant(client: OpenAI, assistant_id: str,\n                         assistant_config: Dict[str, Any]) -> Assistant\n"})}),"\n",(0,t.jsx)(i.p,{children:"Update openai gpt assistant"})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>o});var t=n(67294);const s={},l=t.createContext(s);function o(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);