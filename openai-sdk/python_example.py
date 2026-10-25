from openai import OpenAI

client = OpenAI(
    base_url="https://api.teapotrouter.com/v1",
    api_key="sk-你的key",
)

resp = client.chat.completions.create(
    model="gpt-6.1-sol",
    messages=[{"role": "user", "content": "Hello, teapot!"}],
)
print(resp.choices[0].message.content)
