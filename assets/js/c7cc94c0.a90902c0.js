"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9753],{9812:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(85893),o=t(11151);const a={custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/website/docs/topics/non-openai-models/cloud-cerebras.ipynb",source_notebook:"/website/docs/topics/non-openai-models/cloud-cerebras.ipynb",title:"Cerebras"},s="Cerebras",i={id:"topics/non-openai-models/cloud-cerebras",title:"Cerebras",description:"Open In Colab",source:"@site/docs/topics/non-openai-models/cloud-cerebras.mdx",sourceDirName:"topics/non-openai-models",slug:"/topics/non-openai-models/cloud-cerebras",permalink:"/autogen/docs/topics/non-openai-models/cloud-cerebras",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/topics/non-openai-models/cloud-cerebras.ipynb",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/website/docs/topics/non-openai-models/cloud-cerebras.ipynb",source_notebook:"/website/docs/topics/non-openai-models/cloud-cerebras.ipynb",title:"Cerebras"},sidebar:"docsSidebar",previous:{title:"Amazon Bedrock",permalink:"/autogen/docs/topics/non-openai-models/cloud-bedrock"},next:{title:"Cohere",permalink:"/autogen/docs/topics/non-openai-models/cloud-cohere"}},c={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Credentials",id:"credentials",level:2},{value:"API parameters",id:"api-parameters",level:2},{value:"Two-Agent Coding Example",id:"two-agent-coding-example",level:2},{value:"Tool Call Example",id:"tool-call-example",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"cerebras",children:"Cerebras"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://colab.research.google.com/github/ag2ai/ag2/blob/main/website/docs/topics/non-openai-models/cloud-cerebras.ipynb",children:(0,r.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,r.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/website/docs/topics/non-openai-models/cloud-cerebras.ipynb",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://cerebras.ai",children:"Cerebras"})," has developed the world\u2019s largest and\nfastest AI processor, the Wafer-Scale Engine-3 (WSE-3). Notably, the\nCS-3 system can run large language models like Llama-3.1-8B and\nLlama-3.1-70B at extremely fast speeds, making it an ideal platform for\ndemanding AI workloads."]}),"\n",(0,r.jsxs)(n.p,{children:["While it\u2019s technically possible to adapt AutoGen to work with Cerebras\u2019\nAPI by updating the ",(0,r.jsx)(n.code,{children:"base_url"}),", this approach may not fully account for\nminor differences in parameter support. Using this library will also\nallow for tracking of the API costs based on actual token usage."]}),"\n",(0,r.jsxs)(n.p,{children:["For more information about Cerebras Cloud, visit\n",(0,r.jsx)(n.a,{href:"https://cloud.cerebras.ai",children:"cloud.cerebras.ai"}),". Their API reference is\navailable at\n",(0,r.jsx)(n.a,{href:"https://inference-docs.cerebras.ai",children:"inference-docs.cerebras.ai"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.p,{children:["To use Cerebras with AutoGen, install the ",(0,r.jsx)(n.code,{children:"autogen[cerebras]"})," package."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'!pip install autogen["cerebras"]\n'})}),"\n",(0,r.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsxs)(n.p,{children:["Cerebras provides a number of models to use. See the list of ",(0,r.jsx)(n.a,{href:"https://inference-docs.cerebras.ai/introduction",children:"models\nhere"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["See the sample ",(0,r.jsx)(n.code,{children:"OAI_CONFIG_LIST"})," below showing how the Cerebras client\nclass is used by specifying the ",(0,r.jsx)(n.code,{children:"api_type"})," as ",(0,r.jsx)(n.code,{children:"cerebras"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'[\n    {\n        "model": "llama3.1-8b",\n        "api_key": "your Cerebras API Key goes here",\n        "api_type": "cerebras"\n    },\n    {\n        "model": "llama3.1-70b",\n        "api_key": "your Cerebras API Key goes here",\n        "api_type": "cerebras"\n    }\n]\n'})}),"\n",(0,r.jsx)(n.h2,{id:"credentials",children:"Credentials"}),"\n",(0,r.jsxs)(n.p,{children:["Get an API Key from ",(0,r.jsx)(n.a,{href:"https://cloud.cerebras.ai/",children:"cloud.cerebras.ai"})," and\nadd it to your environment variables:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'export CEREBRAS_API_KEY="your-api-key-here"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"api-parameters",children:"API parameters"}),"\n",(0,r.jsxs)(n.p,{children:["The following parameters can be added to your config for the Cerebras\nAPI. See ",(0,r.jsx)(n.a,{href:"https://inference-docs.cerebras.ai/api-reference/chat-completions",children:"this\nlink"}),"\nfor further information on them and their default values."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"max_tokens (null, integer >= 0)"}),"\n",(0,r.jsx)(n.li,{children:"seed (number)"}),"\n",(0,r.jsx)(n.li,{children:"stream (True or False)"}),"\n",(0,r.jsx)(n.li,{children:"temperature (number 0..1.5)"}),"\n",(0,r.jsx)(n.li,{children:"top_p (number)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'[\n    {\n        "model": "llama3.1-70b",\n        "api_key": "your Cerebras API Key goes here",\n        "api_type": "cerebras"\n        "max_tokens": 10000,\n        "seed": 1234,\n        "stream" True,\n        "temperature": 0.5,\n        "top_p": 0.2, # Note: It is recommended to set temperature or top_p but not both.\n    }\n]\n'})}),"\n",(0,r.jsx)(n.h2,{id:"two-agent-coding-example",children:"Two-Agent Coding Example"}),"\n",(0,r.jsx)(n.p,{children:"In this example, we run a two-agent chat with an AssistantAgent\n(primarily a coding agent) to generate code to count the number of prime\nnumbers between 1 and 10,000 and then it will be executed."}),"\n",(0,r.jsx)(n.p,{children:"We\u2019ll use Meta\u2019s LLama-3.1-70B model which is suitable for coding."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import os\n\nfrom autogen.oai.cerebras import CerebrasClient, calculate_cerebras_cost\n\nconfig_list = [{"model": "llama3.1-70b", "api_key": os.environ.get("CEREBRAS_API_KEY"), "api_type": "cerebras"}]\n'})}),"\n",(0,r.jsx)(n.p,{children:"Importantly, we have tweaked the system message so that the model\ndoesn\u2019t return the termination keyword, which we\u2019ve changed to FINISH,\nwith the code block."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from pathlib import Path\n\nfrom autogen import AssistantAgent, UserProxyAgent\nfrom autogen.coding import LocalCommandLineCodeExecutor\n\n# Setting up the code executor\nworkdir = Path("coding")\nworkdir.mkdir(exist_ok=True)\ncode_executor = LocalCommandLineCodeExecutor(work_dir=workdir)\n\n# Setting up the agents\n\n# The UserProxyAgent will execute the code that the AssistantAgent provides\nuser_proxy_agent = UserProxyAgent(\n    name="User",\n    code_execution_config={"executor": code_executor},\n    is_termination_msg=lambda msg: "FINISH" in msg.get("content"),\n)\n\nsystem_message = """You are a helpful AI assistant who writes code and the user executes it.\nSolve tasks using your coding and language skills.\nIn the following cases, suggest python code (in a python coding block) for the user to execute.\nSolve the task step by step if you need to. If a plan is not provided, explain your plan first. Be clear which step uses code, and which step uses your language skill.\nWhen using code, you must indicate the script type in the code block. The user cannot provide any other feedback or perform any other action beyond executing the code you suggest. The user can\'t modify your code. So do not suggest incomplete code which requires users to modify. Don\'t use a code block if it\'s not intended to be executed by the user.\nDon\'t include multiple code blocks in one response. Do not ask users to copy and paste the result. Instead, use \'print\' function for the output when relevant. Check the execution result returned by the user.\nIf the result indicates there is an error, fix the error and output the code again. Suggest the full code instead of partial code or code changes. If the error can\'t be fixed or if the task is not solved even after the code is executed successfully, analyze the problem, revisit your assumption, collect additional info you need, and think of a different approach to try.\nWhen you find an answer, verify the answer carefully. Include verifiable evidence in your response if possible.\nIMPORTANT: Wait for the user to execute your code and then you can reply with the word "FINISH". DO NOT OUTPUT "FINISH" after your code block."""\n\n# The AssistantAgent, using Llama-3.1-70B on Cerebras Inference, will take the coding request and return code\nassistant_agent = AssistantAgent(\n    name="Cerebras Assistant",\n    system_message=system_message,\n    llm_config={"config_list": config_list},\n)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# Start the chat, with the UserProxyAgent asking the AssistantAgent the message\nchat_result = user_proxy_agent.initiate_chat(\n    assistant_agent,\n    message="Provide code to count the number of prime numbers from 1 to 10000.",\n)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"User (to Cerebras Assistant):\n\nProvide code to count the number of prime numbers from 1 to 10000.\n\n--------------------------------------------------------------------------------\nCerebras Assistant (to User):\n\nTo count the number of prime numbers from 1 to 10000, we will utilize a simple algorithm that checks each number in the range to see if it is prime. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.\n\nHere's how we can do it using a Python script:\n\n```python\ndef count_primes(n):\n    primes = 0\n    for possiblePrime in range(2, n + 1):\n        # Assume number is prime until shown it is not. \n        isPrime = True\n        for num in range(2, int(possiblePrime ** 0.5) + 1):\n            if possiblePrime % num == 0:\n                isPrime = False\n                break\n        if isPrime:\n            primes += 1\n    return primes\n\n# Counting prime numbers from 1 to 10000\ncount = count_primes(10000)\nprint(count)\n```\n\nPlease execute this code. I will respond with \"FINISH\" after you provide the result.\n\n--------------------------------------------------------------------------------\nReplying as User. Provide feedback to Cerebras Assistant. Press enter to skip and use auto-reply, or type 'exit' to end the conversation:  \n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n"})}),"\n",(0,r.jsx)(n.h2,{id:"tool-call-example",children:"Tool Call Example"}),"\n",(0,r.jsx)(n.p,{children:"In this example, instead of writing code, we will show how Meta\u2019s\nLlama-3.1-70B model can perform parallel tool calling, where it\nrecommends calling more than one tool at a time."}),"\n",(0,r.jsx)(n.p,{children:"We\u2019ll use a simple travel agent assistant program where we have a couple\nof tools for weather and currency conversion."}),"\n",(0,r.jsxs)(n.p,{children:["We start by importing libraries and setting up our configuration to use\nLlama-3.1-70B and the ",(0,r.jsx)(n.code,{children:"cerebras"})," client class."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import json\nimport os\nfrom typing import Literal\n\nfrom typing_extensions import Annotated\n\nimport autogen\n\nconfig_list = [\n    {\n        "model": "llama3.1-70b",\n        "api_key": os.environ.get("CEREBRAS_API_KEY"),\n        "api_type": "cerebras",\n    }\n]\n'})}),"\n",(0,r.jsx)(n.p,{children:"Create our two agents."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# Create the agent for tool calling\nchatbot = autogen.AssistantAgent(\n    name="chatbot",\n    system_message="""\n        For currency exchange and weather forecasting tasks,\n        only use the functions you have been provided with.\n        When you summarize, make sure you\'ve considered ALL previous instructions.\n        Output \'HAVE FUN!\' when an answer has been provided.\n    """,\n    llm_config={"config_list": config_list},\n)\n\n# Note that we have changed the termination string to be "HAVE FUN!"\nuser_proxy = autogen.UserProxyAgent(\n    name="user_proxy",\n    is_termination_msg=lambda x: x.get("content", "") and "HAVE FUN!" in x.get("content", ""),\n    human_input_mode="NEVER",\n    max_consecutive_auto_reply=1,\n)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Create the two functions, annotating them so that those descriptions can\nbe passed through to the LLM."}),"\n",(0,r.jsxs)(n.p,{children:["We associate them with the agents using ",(0,r.jsx)(n.code,{children:"register_for_execution"})," for the\nuser_proxy so it can execute the function and ",(0,r.jsx)(n.code,{children:"register_for_llm"})," for the\nchatbot (powered by the LLM) so it can pass the function definitions to\nthe LLM."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# Currency Exchange function\n\nCurrencySymbol = Literal["USD", "EUR"]\n\n# Define our function that we expect to call\n\n\ndef exchange_rate(base_currency: CurrencySymbol, quote_currency: CurrencySymbol) -> float:\n    if base_currency == quote_currency:\n        return 1.0\n    elif base_currency == "USD" and quote_currency == "EUR":\n        return 1 / 1.1\n    elif base_currency == "EUR" and quote_currency == "USD":\n        return 1.1\n    else:\n        raise ValueError(f"Unknown currencies {base_currency}, {quote_currency}")\n\n\n# Register the function with the agent\n\n\n@user_proxy.register_for_execution()\n@chatbot.register_for_llm(description="Currency exchange calculator.")\ndef currency_calculator(\n    base_amount: Annotated[float, "Amount of currency in base_currency"],\n    base_currency: Annotated[CurrencySymbol, "Base currency"] = "USD",\n    quote_currency: Annotated[CurrencySymbol, "Quote currency"] = "EUR",\n) -> str:\n    quote_amount = exchange_rate(base_currency, quote_currency) * base_amount\n    return f"{format(quote_amount, \'.2f\')} {quote_currency}"\n\n\n# Weather function\n\n\n# Example function to make available to model\ndef get_current_weather(location, unit="fahrenheit"):\n    """Get the weather for some location"""\n    if "chicago" in location.lower():\n        return json.dumps({"location": "Chicago", "temperature": "13", "unit": unit})\n    elif "san francisco" in location.lower():\n        return json.dumps({"location": "San Francisco", "temperature": "55", "unit": unit})\n    elif "new york" in location.lower():\n        return json.dumps({"location": "New York", "temperature": "11", "unit": unit})\n    else:\n        return json.dumps({"location": location, "temperature": "unknown"})\n\n\n# Register the function with the agent\n\n\n@user_proxy.register_for_execution()\n@chatbot.register_for_llm(description="Weather forecast for US cities.")\ndef weather_forecast(\n    location: Annotated[str, "City name"],\n) -> str:\n    weather_details = get_current_weather(location=location)\n    weather = json.loads(weather_details)\n    return f"{weather[\'location\']} will be {weather[\'temperature\']} degrees {weather[\'unit\']}"\n'})}),"\n",(0,r.jsx)(n.p,{children:"We pass through our customer\u2019s message and run the chat."}),"\n",(0,r.jsx)(n.p,{children:"Finally, we ask the LLM to summarise the chat and print that out."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import time\n\nstart_time = time.time()\n\n# start the conversation\nres = user_proxy.initiate_chat(\n    chatbot,\n    message="What\'s the weather in New York and can you tell me how much is 123.45 EUR in USD so I can spend it on my holiday? Throw a few holiday tips in as well.",\n    summary_method="reflection_with_llm",\n)\n\nend_time = time.time()\n\nprint(f"LLM SUMMARY: {res.summary[\'content\']}\\n\\nDuration: {(end_time - start_time) * 1000}ms")\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'user_proxy (to chatbot):\n\nWhat\'s the weather in New York and can you tell me how much is 123.45 EUR in USD so I can spend it on my holiday? Throw a few holiday tips in as well.\n\n--------------------------------------------------------------------------------\nchatbot (to user_proxy):\n\n***** Suggested tool call (210f6ac6d): weather_forecast *****\nArguments: \n{"location": "New York"}\n*************************************************************\n***** Suggested tool call (3c00ac7d5): currency_calculator *****\nArguments: \n{"base_amount": 123.45, "base_currency": "EUR", "quote_currency": "USD"}\n****************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION weather_forecast...\n\n>>>>>>>> EXECUTING FUNCTION currency_calculator...\nuser_proxy (to chatbot):\n\nuser_proxy (to chatbot):\n\n***** Response from calling tool (210f6ac6d) *****\nNew York will be 11 degrees fahrenheit\n**************************************************\n\n--------------------------------------------------------------------------------\nuser_proxy (to chatbot):\n\n***** Response from calling tool (3c00ac7d5) *****\n135.80 USD\n**************************************************\n\n--------------------------------------------------------------------------------\nchatbot (to user_proxy):\n\nNew York will be 11 degrees fahrenheit.\n123.45 EUR is equivalent to 135.80 USD.\n \nFor a great holiday, explore the Statue of Liberty, take a walk through Central Park, or visit one of the many world-class museums. Also, you\'ll find great food ranging from bagels to fine dining experiences. HAVE FUN!\n\n--------------------------------------------------------------------------------\nLLM SUMMARY: New York will be 11 degrees fahrenheit. 123.45 EUR is equivalent to 135.80 USD. Explore the Statue of Liberty, walk through Central Park, or visit one of the many world-class museums for a great holiday in New York.\n\nDuration: 73.97937774658203ms\n'})}),"\n",(0,r.jsx)(n.p,{children:"We can see that the Cerebras Wafer-Scale Engine-3 (WSE-3) completed the\nquery in 74ms \u2013 faster than the blink of an eye!"})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(67294);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);