"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[506],{62352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=n(85893),i=n(11151);const a={custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_stream.ipynb",description:"Automated continual learning from new data.",source_notebook:"/notebook/agentchat_stream.ipynb",tags:["streaming","async","learning"],title:"Interactive LLM Agent Dealing with Data Stream"},o="Interactive LLM Agent Dealing with Data Stream",r={id:"notebooks/agentchat_stream",title:"Interactive LLM Agent Dealing with Data Stream",description:"Automated continual learning from new data.",source:"@site/docs/notebooks/agentchat_stream.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_stream",permalink:"/autogen/docs/notebooks/agentchat_stream",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_stream.ipynb",tags:[{label:"streaming",permalink:"/autogen/docs/tags/streaming"},{label:"async",permalink:"/autogen/docs/tags/async"},{label:"learning",permalink:"/autogen/docs/tags/learning"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_stream.ipynb",description:"Automated continual learning from new data.",source_notebook:"/notebook/agentchat_stream.ipynb",tags:["streaming","async","learning"],title:"Interactive LLM Agent Dealing with Data Stream"},sidebar:"notebooksSidebar",previous:{title:"SQL Agent for Spider text-to-SQL benchmark",permalink:"/autogen/docs/notebooks/agentchat_sql_spider"},next:{title:"WebSurferAgent",permalink:"/autogen/docs/notebooks/agentchat_surfer"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Set your API Endpoint",id:"set-your-api-endpoint",level:2},{value:"Example Task: Investment suggestion with realtime data",id:"example-task-investment-suggestion-with-realtime-data",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"interactive-llm-agent-dealing-with-data-stream",children:"Interactive LLM Agent Dealing with Data Stream"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://colab.research.google.com/github/ag2ai/ag2/blob/main/notebook/agentchat_stream.ipynb",children:(0,s.jsx)(t.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,s.jsx)(t.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/agentchat_stream.ipynb",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,s.jsxs)(t.p,{children:["AutoGen offers conversable agents powered by LLM, tool, or human, which\ncan be used to perform tasks collectively via automated chat. This\nframework allows tool use and human participation through multi-agent\nconversation. Please find documentation about this feature\n",(0,s.jsx)(t.a,{href:"https://ag2ai.github.io/autogen/docs/Use-Cases/agent_chat",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"In this notebook, we demonstrate how to use customized agents to\ncontinuously acquire news from the web and ask for investment\nsuggestions."}),"\n",(0,s.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(t.p,{children:["AutoGen requires ",(0,s.jsx)(t.code,{children:"Python>=3.8"}),". To run this notebook example, please\ninstall:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pip install autogen\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'# %pip install "autogen"\n'})}),"\n",(0,s.jsx)(t.h2,{id:"set-your-api-endpoint",children:"Set your API Endpoint"}),"\n",(0,s.jsxs)(t.p,{children:["The\n",(0,s.jsx)(t.a,{href:"https://ag2ai.github.io/autogen/docs/reference/oai/openai_utils#config_list_from_json",children:(0,s.jsx)(t.code,{children:"config_list_from_json"})}),"\nfunction loads a list of configurations from an environment variable or\na json file."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import asyncio\n\nimport autogen\n\nconfig_list = autogen.config_list_from_json("OAI_CONFIG_LIST")\n'})}),"\n",(0,s.jsx)(t.p,{children:"It first looks for environment variable \u201cOAI_CONFIG_LIST\u201d which needs to\nbe a valid json string. If that variable is not found, it then looks for\na json file named \u201cOAI_CONFIG_LIST\u201d. It filters the configs by models\n(you can filter by other keys as well). Only the models with matching\nnames are kept in the list based on the filter condition."}),"\n",(0,s.jsx)(t.p,{children:"The config list looks like the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"config_list = [\n    {\n        'model': 'gpt-4',\n        'api_key': '<your OpenAI API key here>',\n    },\n    {\n        'model': 'gpt-3.5-turbo',\n        'api_key': '<your Azure OpenAI API key here>',\n        'base_url': '<your Azure OpenAI API base here>',\n        'api_type': 'azure',\n        'api_version': '2024-02-01',\n    },\n    {\n        'model': 'gpt-3.5-turbo-16k',\n        'api_key': '<your Azure OpenAI API key here>',\n        'base_url': '<your Azure OpenAI API base here>',\n        'api_type': 'azure',\n        'api_version': '2024-02-01',\n    },\n]\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can set the value of config_list in any way you prefer. Please refer\nto this\n",(0,s.jsx)(t.a,{href:"https://github.com/ag2ai/ag2/blob/main/website/docs/topics/llm_configuration.ipynb",children:"notebook"}),"\nfor full code examples of the different methods."]}),"\n",(0,s.jsx)(t.h2,{id:"example-task-investment-suggestion-with-realtime-data",children:"Example Task: Investment suggestion with realtime data"}),"\n",(0,s.jsx)(t.p,{children:"We consider a scenario where news data are streamed from a source, and\nwe use an assistant agent to provide investment suggestions based on the\ndata continually."}),"\n",(0,s.jsx)(t.p,{children:"First, we use the following code to simulate the data stream process."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'def get_market_news(ind, ind_upper):\n    import json\n\n    import requests\n\n    # replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key\n    # url = \'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&sort=LATEST&limit=5&apikey=demo\'\n    # r = requests.get(url)\n    # data = r.json()\n    # with open(\'market_news_local.json\', \'r\') as file:\n    #     # Load JSON data from file\n    #     data = json.load(file)\n    data = {\n        "feed": [\n            {\n                "title": "Palantir CEO Says Our Generation\'s Atomic Bomb Could Be AI Weapon - And Arrive Sooner Than You Think - Palantir Technologies  ( NYSE:PLTR ) ",\n                "summary": "Christopher Nolan\'s blockbuster movie \\"Oppenheimer\\" has reignited the public discourse surrounding the United States\' use of an atomic bomb on Japan at the end of World War II.",\n                "overall_sentiment_score": 0.009687,\n            },\n            {\n                "title": \'3 "Hedge Fund Hotels" Pulling into Support\',\n                "summary": "Institutional quality stocks have several benefits including high-liquidity, low beta, and a long runway. Strategist Andrew Rocco breaks down what investors should look for and pitches 3 ideas.",\n                "banner_image": "https://staticx-tuner.zacks.com/images/articles/main/92/87.jpg",\n                "overall_sentiment_score": 0.219747,\n            },\n            {\n                "title": "PDFgear, Bringing a Completely-Free PDF Text Editing Feature",\n                "summary": "LOS ANGELES, July 26, 2023 /PRNewswire/ -- PDFgear, a leading provider of PDF solutions, announced a piece of exciting news for everyone who works extensively with PDF documents.",\n                "overall_sentiment_score": 0.360071,\n            },\n            {\n                "title": "Researchers Pitch \'Immunizing\' Images Against Deepfake Manipulation",\n                "summary": "A team at MIT says injecting tiny disruptive bits of code can cause distorted deepfake images.",\n                "overall_sentiment_score": -0.026894,\n            },\n            {\n                "title": "Nvidia wins again - plus two more takeaways from this week\'s mega-cap earnings",\n                "summary": "We made some key conclusions combing through quarterly results for Microsoft and Alphabet and listening to their conference calls with investors.",\n                "overall_sentiment_score": 0.235177,\n            },\n        ]\n    }\n    feeds = data["feed"][ind:ind_upper]\n    feeds_summary = "\\n".join(\n        [\n            f"News summary: {f[\'title\']}. {f[\'summary\']} overall_sentiment_score: {f[\'overall_sentiment_score\']}"\n            for f in feeds\n        ]\n    )\n    return feeds_summary\n\n\ndata = asyncio.Future()\n\n\nasync def add_stock_price_data():\n    # simulating the data stream\n    for i in range(0, 5, 1):\n        latest_news = get_market_news(i, i + 1)\n        if data.done():\n            data.result().append(latest_news)\n        else:\n            data.set_result([latest_news])\n        # print(data.result())\n        await asyncio.sleep(5)\n\n\ndata_task = asyncio.create_task(add_stock_price_data())\n'})}),"\n",(0,s.jsx)(t.p,{children:"Then, we construct agents. An assistant agent is created to answer the\nquestion using LLM. A UserProxyAgent is created to ask questions, and\nadd the new data in the conversation when they are available."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'# create an AssistantAgent instance named "assistant"\nassistant = autogen.AssistantAgent(\n    name="assistant",\n    llm_config={\n        "timeout": 600,\n        "cache_seed": 41,\n        "config_list": config_list,\n        "temperature": 0,\n    },\n    system_message="You are a financial expert.",\n)\n# create a UserProxyAgent instance named "user"\nuser_proxy = autogen.UserProxyAgent(\n    name="user",\n    human_input_mode="NEVER",\n    max_consecutive_auto_reply=5,\n    code_execution_config=False,\n    default_auto_reply=None,\n)\n\n\nasync def add_data_reply(recipient, messages, sender, config):\n    await asyncio.sleep(0.1)\n    data = config["news_stream"]\n    if data.done():\n        result = data.result()\n        if result:\n            news_str = "\\n".join(result)\n            result.clear()\n            return (\n                True,\n                f"Just got some latest market news. Merge your new suggestion with previous ones.\\n{news_str}",\n            )\n        return False, None\n\n\nuser_proxy.register_reply(autogen.AssistantAgent, add_data_reply, position=2, config={"news_stream": data})\n'})}),"\n",(0,s.jsxs)(t.p,{children:["We invoke the ",(0,s.jsx)(t.code,{children:"a_initiate_chat()"})," method of the user proxy agent to\nstart the conversation."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'await user_proxy.a_initiate_chat(  # noqa: F704\n    assistant,\n    message="""Give me investment suggestion in 3 bullet points.""",\n)\nwhile not data_task.done() and not data_task.cancelled():\n    reply = await user_proxy.a_generate_reply(sender=assistant)  # noqa: F704\n    if reply is not None:\n        await user_proxy.a_send(reply, assistant)  # noqa: F704\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"user (to assistant):\n\nGive me investment suggestion in 3 bullet points.\n\n--------------------------------------------------------------------------------\nassistant (to user):\n\n1. Diversify Your Portfolio: Don't put all your eggs in one basket. Spread your investments across a variety of asset classes such as stocks, bonds, real estate, and commodities. This can help to mitigate risk and potentially increase returns.\n\n2. Invest for the Long Term: Investing is not about making a quick buck, but about growing your wealth over time. Stick to a long-term investment strategy and avoid the temptation to engage in frequent buying and selling.\n\n3. Regularly Review Your Investments: The market is dynamic and constantly changing. Regularly review your investment portfolio to ensure it aligns with your financial goals and risk tolerance. Adjust your investments as necessary based on changes in your personal circumstances and market conditions.\n\n--------------------------------------------------------------------------------\nuser (to assistant):\n\nJust got some latest market news. Merge your new suggestion with previous ones.\nNews summary: Palantir CEO Says Our Generation's Atomic Bomb Could Be AI Weapon - And Arrive Sooner Than You Think - Palantir Technologies  ( NYSE:PLTR ) . Christopher Nolan's blockbuster movie \"Oppenheimer\" has reignited the public discourse surrounding the United States' use of an atomic bomb on Japan at the end of World War II. overall_sentiment_score: 0.009687\nNews summary: 3 \"Hedge Fund Hotels\" Pulling into Support. Institutional quality stocks have several benefits including high-liquidity, low beta, and a long runway. Strategist Andrew Rocco breaks down what investors should look for and pitches 3 ideas. overall_sentiment_score: 0.219747\n\n--------------------------------------------------------------------------------\nassistant (to user):\n\n1. Diversify Your Portfolio: Given the recent news about AI technology and its potential impact, consider investing in tech companies like Palantir Technologies that are at the forefront of AI development. However, remember to maintain a diversified portfolio across various sectors and asset classes to mitigate risk.\n\n2. Long-Term Investment Strategy: Despite the potential for rapid advancements in AI, it's important to maintain a long-term investment perspective. While these developments may bring short-term volatility, they could also present long-term growth opportunities.\n\n3. Regularly Review and Adjust Your Investments: With the news about \"Hedge Fund Hotels\" and their potential benefits, consider reviewing your portfolio to see if these high-liquidity, low beta stocks fit into your investment strategy. However, always adjust your investments based on your personal circumstances, risk tolerance, and market conditions. \n\n4. Invest in AI and Tech Stocks: Given the potential of AI as highlighted by Palantir's CEO, consider investing in companies that are leading in AI and other technological advancements. This could provide significant growth opportunities.\n\n5. Consider \"Hedge Fund Hotels\": The news suggests that these stocks have several benefits including high-liquidity, low beta, and a long runway. If these align with your investment goals, they could be a good addition to your portfolio.\n\n--------------------------------------------------------------------------------\nuser (to assistant):\n\nJust got some latest market news. Merge your new suggestion with previous ones.\nNews summary: PDFgear, Bringing a Completely-Free PDF Text Editing Feature. LOS ANGELES, July 26, 2023 /PRNewswire/ -- PDFgear, a leading provider of PDF solutions, announced a piece of exciting news for everyone who works extensively with PDF documents. overall_sentiment_score: 0.360071\n\n--------------------------------------------------------------------------------\nassistant (to user):\n\n1. Diversify Your Portfolio: With the latest news about PDFgear, consider investing in companies that provide digital solutions, as they are becoming increasingly important in our digital age. However, continue to maintain a diversified portfolio across various sectors and asset classes to mitigate risk.\n\n2. Long-Term Investment Strategy: The announcement from PDFgear could potentially lead to short-term gains, but remember to maintain a long-term investment perspective. The digital solutions sector is expected to grow in the long run, providing potential growth opportunities.\n\n3. Regularly Review and Adjust Your Investments: Given the news about PDFgear and its potential impact on the digital solutions sector, it's important to review your portfolio to see if it aligns with these new market trends. Adjust your investments based on your personal circumstances, risk tolerance, and market conditions.\n\n4. Invest in Digital Solutions: The news about PDFgear highlights the potential growth in the digital solutions sector. Consider investing in companies that are leading in this field, as they could provide significant growth opportunities.\n\n5. Consider Tech Stocks: With the continuous advancements in technology, tech stocks, including those in AI, digital solutions, and other tech sub-sectors, could be a good addition to your portfolio, given their potential for high growth.\n\n--------------------------------------------------------------------------------\nuser (to assistant):\n\nJust got some latest market news. Merge your new suggestion with previous ones.\nNews summary: Researchers Pitch 'Immunizing' Images Against Deepfake Manipulation. A team at MIT says injecting tiny disruptive bits of code can cause distorted deepfake images. overall_sentiment_score: -0.026894\n\n--------------------------------------------------------------------------------\nassistant (to user):\n\n1. Diversify Your Portfolio: The latest news about deepfake manipulation suggests potential growth in cybersecurity and AI sectors. Consider investing in companies that are working on these technologies, but continue to maintain a diversified portfolio across various sectors and asset classes to mitigate risk.\n\n2. Long-Term Investment Strategy: While the news about deepfake manipulation might cause short-term volatility in the tech sector, it's important to maintain a long-term investment perspective. The cybersecurity and AI sectors are expected to grow in the long run, providing potential growth opportunities.\n\n3. Regularly Review and Adjust Your Investments: Given the news about deepfake manipulation and its potential impact on the tech sector, it's important to review your portfolio to see if it aligns with these new market trends. Adjust your investments based on your personal circumstances, risk tolerance, and market conditions.\n\n4. Invest in Cybersecurity and AI: The news about deepfake manipulation highlights the potential growth in the cybersecurity and AI sectors. Consider investing in companies that are leading in these fields, as they could provide significant growth opportunities.\n\n5. Consider Tech Stocks: With the continuous advancements in technology, tech stocks, including those in AI, digital solutions, cybersecurity, and other tech sub-sectors, could be a good addition to your portfolio, given their potential for high growth.\n\n--------------------------------------------------------------------------------\nuser (to assistant):\n\nJust got some latest market news. Merge your new suggestion with previous ones.\nNews summary: Nvidia wins again - plus two more takeaways from this week's mega-cap earnings. We made some key conclusions combing through quarterly results for Microsoft and Alphabet and listening to their conference calls with investors. overall_sentiment_score: 0.235177\n\n--------------------------------------------------------------------------------\nassistant (to user):\n\n1. Diversify Your Portfolio: The latest news about Nvidia, Microsoft, and Alphabet suggests potential growth in the tech sector. Consider investing in these companies, but continue to maintain a diversified portfolio across various sectors and asset classes to mitigate risk.\n\n2. Long-Term Investment Strategy: While the news about these tech giants might cause short-term volatility, it's important to maintain a long-term investment perspective. The tech sector, particularly companies like Nvidia, Microsoft, and Alphabet, are expected to grow in the long run, providing potential growth opportunities.\n\n3. Regularly Review and Adjust Your Investments: Given the news about Nvidia, Microsoft, and Alphabet and their potential impact on the tech sector, it's important to review your portfolio to see if it aligns with these new market trends. Adjust your investments based on your personal circumstances, risk tolerance, and market conditions.\n\n4. Invest in Tech Giants: The news about Nvidia, Microsoft, and Alphabet highlights the potential growth in the tech sector. Consider investing in these tech giants, as they could provide significant growth opportunities.\n\n5. Consider Tech Stocks: With the continuous advancements in technology, tech stocks, including those in AI, digital solutions, cybersecurity, and other tech sub-sectors, could be a good addition to your portfolio, given their potential for high growth.\n\n--------------------------------------------------------------------------------\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);