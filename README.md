# Teapot Router Config — Claude Code / OpenAI SDK 接入模板

给 [Teapot Router](https://teapotrouter.com)（AI API 网关）的配置模板合集：**改一行环境变量，Claude Code 和 OpenAI SDK 同时接入**。

## 这是什么

Teapot Router 是面向开发者的 AI API 网关（gateway / 中转）：

- **双协议**：Claude Code（Anthropic 协议）和 OpenAI SDK（`/v1`）走同一个 key
- **按量计费**：价格表公开挂在[官网](https://teapotrouter.com/#ledger)，余额按 token 扣
- **key 管理**：后台随时吊销 / 重建，团队可发子 key + 额度 + 审计日志

## 不想自己搭中转服务？

上面的模板就是为 [Teapot Router](https://teapotrouter.com) 准备的——它是 **claude-relay-service 这类自建方案的托管版**：注册即用，无需自己维护服务器、渠道和支付；Claude Code + OpenAI SDK 双协议一个 Key，按量计费、价格公开（[价格表](https://teapotrouter.com/#ledger)），企业功能（组织授权发 Key / 审计日志）内置。

自建适合喜欢折腾的人；只想稳定用模型的话，托管版更省心。

## Claude Code（二选一）

**方式 A：环境变量**

```bash
export ANTHROPIC_BASE_URL="https://api.teapotrouter.com"
export ANTHROPIC_AUTH_TOKEN="sk-你的key"
```

**方式 B：settings.json**

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.teapotrouter.com",
    "ANTHROPIC_AUTH_TOKEN": "sk-你的key"
  }
}
```

见 [claude-code/](./claude-code/) 目录。

## OpenAI SDK

Python / Node.js 只改 `base_url`：

```python
from openai import OpenAI
client = OpenAI(base_url="https://api.teapotrouter.com/v1", api_key="sk-你的key")
```

见 [openai-sdk/](./openai-sdk/) 目录。

## 快速开始（3 步）

1. [注册](https://teapotrouter.com/zh/register) → 工作台建一个 key（自动带 `sk-` 前缀）
2. 复制上面的环境变量 / base_url 模板
3. 用官方 SDK 或 `claude` 命令照常调用

## 更多

- 六篇接入指南（注册 → 首次调用，含排错）：https://teapotrouter.com/zh/docs
- 价格表（实时）：https://teapotrouter.com/#ledger
- 有一个 HTTP 418 的茶壶彩蛋：https://teapotrouter.com/zh/418

## License

MIT（模板部分随意取用）
