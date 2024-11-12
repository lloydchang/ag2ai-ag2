"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1972],{25360:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var a=t(85893),o=t(11151);const i={custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_society_of_mind.ipynb",description:"Explore the demonstration of the SocietyOfMindAgent in the AutoGen library, which runs a group chat as an internal monologue, but appears to the external world as a single agent, offering a structured way to manage complex interactions among multiple agents and handle issues such as extracting responses from complex dialogues and dealing with context window constraints.",source_notebook:"/notebook/agentchat_society_of_mind.ipynb",tags:["orchestration","nested chat","group chat"],title:"SocietyOfMindAgent"},s="SocietyOfMindAgent",r={id:"notebooks/agentchat_society_of_mind",title:"SocietyOfMindAgent",description:"Explore the demonstration of the SocietyOfMindAgent in the AutoGen library, which runs a group chat as an internal monologue, but appears to the external world as a single agent, offering a structured way to manage complex interactions among multiple agents and handle issues such as extracting responses from complex dialogues and dealing with context window constraints.",source:"@site/docs/notebooks/agentchat_society_of_mind.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_society_of_mind",permalink:"/autogen/docs/notebooks/agentchat_society_of_mind",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_society_of_mind.ipynb",tags:[{label:"orchestration",permalink:"/autogen/docs/tags/orchestration"},{label:"nested chat",permalink:"/autogen/docs/tags/nested-chat"},{label:"group chat",permalink:"/autogen/docs/tags/group-chat"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_society_of_mind.ipynb",description:"Explore the demonstration of the SocietyOfMindAgent in the AutoGen library, which runs a group chat as an internal monologue, but appears to the external world as a single agent, offering a structured way to manage complex interactions among multiple agents and handle issues such as extracting responses from complex dialogues and dealing with context window constraints.",source_notebook:"/notebook/agentchat_society_of_mind.ipynb",tags:["orchestration","nested chat","group chat"],title:"SocietyOfMindAgent"},sidebar:"notebooksSidebar",previous:{title:"Auto Generated Agent Chat: Collaborative Task Solving with Coding and Planning Agent",permalink:"/autogen/docs/notebooks/agentchat_planning"},next:{title:"SQL Agent for Spider text-to-SQL benchmark",permalink:"/autogen/docs/notebooks/agentchat_sql_spider"}},c={},h=[{value:"Example Group Chat with Two Agents",id:"example-group-chat-with-two-agents",level:3},{value:"Construct the Inner-Monologue Agents",id:"construct-the-inner-monologue-agents",level:4},{value:"Construct and Run the SocietyOfMind Agent",id:"construct-and-run-the-societyofmind-agent",level:4},{value:"Remarks",id:"remarks",level:4}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"societyofmindagent",children:"SocietyOfMindAgent"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://colab.research.google.com/github/ag2ai/ag2/blob/main/notebook/agentchat_society_of_mind.ipynb",children:(0,a.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,a.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/agentchat_society_of_mind.ipynb",children:(0,a.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,a.jsxs)(n.p,{children:["TODO: reimplement the society of mind agent using ",(0,a.jsx)(n.code,{children:"register_nested_chat"}),"\nand move to the core library."]}),"\n",(0,a.jsx)(n.p,{children:"This notebook demonstrates the SocietyOfMindAgent, which runs a group\nchat as an internal monologue, but appears to the external world as a\nsingle agent. This confers three distinct advantages:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"It provides a clean way of producing a hierarchy of agents, hiding\ncomplexity as inner monologues."}),"\n",(0,a.jsx)(n.li,{children:"It provides a consistent way of extracting an answer from a lengthy\ngroup chat (normally, it is not clear which message is the final\nresponse, and the response itself may not always be formatted in a\nway that makes sense when extracted as a standalone message)."}),"\n",(0,a.jsx)(n.li,{children:"It provides a way of recovering when agents exceed their context\nwindow constraints (the inner monologue is protected by try-catch\nblocks)"}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{title:"Requirements",type:"info",children:[(0,a.jsxs)(n.p,{children:["Install ",(0,a.jsx)(n.code,{children:"autogen"}),":"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pip install autogen\n"})}),(0,a.jsxs)(n.p,{children:["For more information, please refer to the ",(0,a.jsx)(n.a,{href:"/docs/installation/",children:"installation guide"}),"."]})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import autogen  # noqa: E402\n\nllm_config = {\n    "timeout": 600,\n    "cache_seed": 44,  # change the seed for different trials\n    "config_list": autogen.config_list_from_json(\n        "OAI_CONFIG_LIST",\n        filter_dict={"model": ["gpt-4", "gpt-4-0613", "gpt-4-32k", "gpt-4-32k-0613", "gpt-4-1106-preview"]},\n    ),\n    "temperature": 0,\n}\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Learn more about configuring LLMs for agents ",(0,a.jsx)(n.a,{href:"/docs/topics/llm_configuration",children:"here"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"example-group-chat-with-two-agents",children:"Example Group Chat with Two Agents"}),"\n",(0,a.jsxs)(n.p,{children:["In this example, we will use an AssistantAgent and a UserProxy agent\n(configured for code execution) to work together to solve a problem.\nExecuting code requires ",(0,a.jsx)(n.em,{children:"at least"})," two conversation turns (one to write\nthe code, and one to execute the code). If the code fails, or needs\nfurther refinement, then additional turns may also be needed. We will\nthen wrap these agents in a SocietyOfMindAgent, hiding the internal\ndiscussion from other agents (though will still appear in the console),\nand ensuring that the response is suitable as a standalone message."]}),"\n",(0,a.jsx)(n.h4,{id:"construct-the-inner-monologue-agents",children:"Construct the Inner-Monologue Agents"}),"\n",(0,a.jsx)(n.p,{children:"We begin by constructing the inner-monologue agents. These are the\nagents that do that real work."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'assistant = autogen.AssistantAgent(\n    "inner-assistant",\n    llm_config=llm_config,\n    is_termination_msg=lambda x: x.get("content", "").find("TERMINATE") >= 0,\n)\n\ncode_interpreter = autogen.UserProxyAgent(\n    "inner-code-interpreter",\n    human_input_mode="NEVER",\n    code_execution_config={\n        "work_dir": "coding",\n        "use_docker": False,\n    },\n    default_auto_reply="",\n    is_termination_msg=lambda x: x.get("content", "").find("TERMINATE") >= 0,\n)\n\ngroupchat = autogen.GroupChat(\n    agents=[assistant, code_interpreter],\n    messages=[],\n    speaker_selection_method="round_robin",  # With two agents, this is equivalent to a 1:1 conversation.\n    allow_repeat_speaker=False,\n    max_round=8,\n)\n\nmanager = autogen.GroupChatManager(\n    groupchat=groupchat,\n    is_termination_msg=lambda x: x.get("content", "").find("TERMINATE") >= 0,\n    llm_config=llm_config,\n)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"construct-and-run-the-societyofmind-agent",children:"Construct and Run the SocietyOfMind Agent"}),"\n",(0,a.jsx)(n.p,{children:"We now wrap the inner group-chat with the SocietyOfMind Agent, and\ncreate a UserProxy to talk to it."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from autogen.agentchat.contrib.society_of_mind_agent import SocietyOfMindAgent  # noqa: E402\n\ntask = "On which days in 2024 was Microsoft Stock higher than $370?"\n\nsociety_of_mind_agent = SocietyOfMindAgent(\n    "society_of_mind",\n    chat_manager=manager,\n    llm_config=llm_config,\n)\n\nuser_proxy = autogen.UserProxyAgent(\n    "user_proxy",\n    human_input_mode="NEVER",\n    code_execution_config=False,\n    default_auto_reply="",\n    is_termination_msg=lambda x: True,\n)\n\nuser_proxy.initiate_chat(society_of_mind_agent, message=task)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'user_proxy (to society_of_mind):\n\nOn which days in 2024 was Microsoft Stock higher than $370?\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nsociety_of_mind (to chat_manager):\n\nOn which days in 2024 was Microsoft Stock higher than $370?\n\n--------------------------------------------------------------------------------\ninner-assistant (to chat_manager):\n\nTo find out on which days in 2024 Microsoft stock (MSFT) was higher than $370, we would typically need to access historical stock price data. This data can be obtained from financial data providers or APIs that offer stock market data.\n\nOne common way to access such data is by using the `yfinance` library in Python, which allows us to download historical stock prices from Yahoo Finance. However, since I cannot directly access the internet or external APIs, I will provide you with a Python script that you can run on your machine to fetch the data and determine on which days MSFT was higher than $370 in 2024.\n\nPlease install the `yfinance` library if you haven\'t already by running `pip install yfinance` in your terminal, and then run the following Python script:\n\n```python\n# filename: msft_stock_analysis.py\nimport yfinance as yf\nfrom datetime import datetime\n\n# Define the ticker symbol and the date range\nticker_symbol = "MSFT"\nstart_date = "2024-01-01"\nend_date = "2024-12-31"\n\n# Download the historical stock prices\nmsft_data = yf.download(ticker_symbol, start=start_date, end=end_date)\n\n# Filter the days where the stock price was higher than $370\ndays_higher_than_370 = msft_data[msft_data[\'Close\'] > 370]\n\n# Print the dates\nprint("Dates in 2024 when MSFT stock was higher than $370:")\nfor date in days_higher_than_370.index:\n    print(date.strftime(\'%Y-%m-%d\'))\n```\n\nThis script will download the historical data for Microsoft stock for the year 2024 and print out the dates when the closing price was higher than $370. Please run this script and provide me with the output.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING CODE BLOCK 0 (inferred language is python)...\ninner-code-interpreter (to chat_manager):\n\nexitcode: 1 (execution failed)\nCode output: \nTraceback (most recent call last):\n  File "msft_stock_analysis.py", line 2, in <module>\n    import yfinance as yf\nModuleNotFoundError: No module named \'yfinance\'\n\n\n--------------------------------------------------------------------------------\ninner-assistant (to chat_manager):\n\nThe error indicates that the `yfinance` module is not installed on your system. To resolve this, you need to install the `yfinance` library. Please run the following command in your terminal to install it:\n\n```sh\npip install yfinance\n```\n\nAfter you have installed `yfinance`, please try running the provided Python script again. If you encounter any further issues, please let me know.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING CODE BLOCK 0 (inferred language is sh)...\ninner-code-interpreter (to chat_manager):\n\nexitcode: 0 (execution succeeded)\nCode output: \nCollecting yfinance\n  Using cached yfinance-0.2.36-py2.py3-none-any.whl (72 kB)\nRequirement already satisfied: lxml>=4.9.1 in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from yfinance) (5.1.0)\nRequirement already satisfied: appdirs>=1.4.4 in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from yfinance) (1.4.4)\nRequirement already satisfied: pytz>=2022.5 in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from yfinance) (2023.3.post1)\nRequirement already satisfied: pandas>=1.3.0 in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from yfinance) (2.2.0)\nRequirement already satisfied: peewee>=3.16.2 in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from yfinance) (3.17.0)\nRequirement already satisfied: requests>=2.31 in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from yfinance) (2.31.0)\nRequirement already satisfied: beautifulsoup4>=4.11.1 in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from yfinance) (4.12.3)\nRequirement already satisfied: numpy>=1.16.5 in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from yfinance) (1.26.3)\nRequirement already satisfied: html5lib>=1.1 in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from yfinance) (1.1)\nRequirement already satisfied: frozendict>=2.3.4 in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from yfinance) (2.4.0)\nRequirement already satisfied: multitasking>=0.0.7 in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from yfinance) (0.0.11)\nRequirement already satisfied: soupsieve>1.2 in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from beautifulsoup4>=4.11.1->yfinance) (2.5)\nRequirement already satisfied: six>=1.9 in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from html5lib>=1.1->yfinance) (1.16.0)\nRequirement already satisfied: webencodings in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from html5lib>=1.1->yfinance) (0.5.1)\nRequirement already satisfied: python-dateutil>=2.8.2 in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from pandas>=1.3.0->yfinance) (2.8.2)\nRequirement already satisfied: tzdata>=2022.7 in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from pandas>=1.3.0->yfinance) (2023.4)\nRequirement already satisfied: certifi>=2017.4.17 in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from requests>=2.31->yfinance) (2023.11.17)\nRequirement already satisfied: charset-normalizer<4,>=2 in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from requests>=2.31->yfinance) (3.3.2)\nRequirement already satisfied: idna<4,>=2.5 in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from requests>=2.31->yfinance) (3.6)\nRequirement already satisfied: urllib3<3,>=1.21.1 in /home/afourney/repos/autogen/notebook/.venv/lib/python3.10/site-packages (from requests>=2.31->yfinance) (2.1.0)\nInstalling collected packages: yfinance\nSuccessfully installed yfinance-0.2.36\n\n\n--------------------------------------------------------------------------------\ninner-assistant (to chat_manager):\n\nIt seems that the `yfinance` library has been successfully installed. Now that the library is available, please run the previously provided Python script again to fetch the historical stock prices for Microsoft and determine on which days the stock was higher than $370 in 2024.\n\nHere is the script again for your convenience:\n\n```python\n# filename: msft_stock_analysis.py\nimport yfinance as yf\nfrom datetime import datetime\n\n# Define the ticker symbol and the date range\nticker_symbol = "MSFT"\nstart_date = "2024-01-01"\nend_date = "2024-12-31"\n\n# Download the historical stock prices\nmsft_data = yf.download(ticker_symbol, start=start_date, end=end_date)\n\n# Filter the days where the stock price was higher than $370\ndays_higher_than_370 = msft_data[msft_data[\'Close\'] > 370]\n\n# Print the dates\nprint("Dates in 2024 when MSFT stock was higher than $370:")\nfor date in days_higher_than_370.index:\n    print(date.strftime(\'%Y-%m-%d\'))\n```\n\nPlease execute this script and provide me with the output.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING CODE BLOCK 0 (inferred language is python)...\ninner-code-interpreter (to chat_manager):\n\nexitcode: 0 (execution succeeded)\nCode output: \nDates in 2024 when MSFT stock was higher than $370:\n2024-01-02\n2024-01-03\n2024-01-08\n2024-01-09\n2024-01-10\n2024-01-11\n2024-01-12\n2024-01-16\n2024-01-17\n2024-01-18\n2024-01-19\n\n\n--------------------------------------------------------------------------------\ninner-assistant (to chat_manager):\n\nThe output indicates that Microsoft stock (MSFT) was higher than $370 on the following days in 2024:\n\n- January 2, 2024\n- January 3, 2024\n- January 8, 2024\n- January 9, 2024\n- January 10, 2024\n- January 11, 2024\n- January 12, 2024\n- January 16, 2024\n- January 17, 2024\n- January 18, 2024\n- January 19, 2024\n\nPlease note that this list includes only the dates provided in the output and may not be exhaustive for the entire year of 2024. The script would have listed more dates if the stock price was higher than $370 on additional days beyond those listed.\n\nTERMINATE\n\n--------------------------------------------------------------------------------\nsociety_of_mind (to user_proxy):\n\nMicrosoft stock (MSFT) was higher than $370 on the following days in 2024:\n\n- January 2, 2024\n- January 3, 2024\n- January 8, 2024\n- January 9, 2024\n- January 10, 2024\n- January 11, 2024\n- January 12, 2024\n- January 16, 2024\n- January 17, 2024\n- January 18, 2024\n- January 19, 2024\n\n--------------------------------------------------------------------------------\n'})}),"\n",(0,a.jsx)(n.h4,{id:"remarks",children:"Remarks"}),"\n",(0,a.jsx)(n.p,{children:"There are a few things to notice about this output: - First, the\nuser_proxy sent only one message to the society_of_mind agent, and\nreceived only one message in response. As far as it is concerned, the\nsociety_of_mind agent is the only agent in the chat. - Second, the final\nresponse is formatted in a way that is standalone. Unlike the prior\nresponse, it makes no reference of a previous script or execution, and\nit lacks the TERMINATE keyword that ended the inner monologue."})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(67294);const o={},i=a.createContext(o);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);