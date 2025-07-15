import asyncio
from dotenv import load_dotenv
from llm.llm_agent import run_agent

load_dotenv()


async def main():
    await run_agent("Compare the price of gpt-4o and DeepSeek-V3")


asyncio.run(main())