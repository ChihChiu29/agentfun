import asyncio
from dotenv import load_dotenv
from browser_use.llm.llm_agent import run_agent

load_dotenv()


async def main():
    await run_agent("Find the current price of Bitcoin and summarize the news about it.")


asyncio.run(main())
