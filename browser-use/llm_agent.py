import asyncio
from browser_use import Agent
from langchain_ollama import ChatOllama

async def run_agent(task: str):
    llm = ChatOllama(model="qwen3:8b", temperature=1.0, base_url="http://192.168.1.71:11434")

    agent = Agent(
        task=task,
        llm=llm,
    )
    await agent.run()


if __name__ == "__main__":
    asyncio.run(run_agent("What is the capital of France?"))
