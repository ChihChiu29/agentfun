import asyncio
from browser_use import Agent
from browser_use.llm import ChatOllama

async def run_agent(task: str):
    llm = ChatOllama(model="qwen3:8b", temperature=1.0, base_url="http://192.168.1.71:11434")
    # print(llm.invoke([
    #     (
    #         "system",
    #         "You are a helpful assistant that translates English to French. Translate the user sentence.",
    #     ),
    #     ("human", "I love programming."),
    # ]))
    agent = Agent(
        task=task,
        llm=llm,
    )
    await agent.run()


if __name__ == "__main__":
    asyncio.run(run_agent("What is the capital of France?"))
