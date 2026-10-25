import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.teapotrouter.com/v1",
  apiKey: "sk-your-key",
});

const resp = await client.chat.completions.create({
  model: "gpt-6.1-sol",
  messages: [{ role: "user", content: "Hello, teapot!" }],
});
console.log(resp.choices[0].message.content);
