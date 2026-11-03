# Teapot Router Config — Claude Code / OpenAI SDK 接入模板

给 [Teapot Router](https://teapotrouter.com)（AI API 网关）的配置模板合集：**改一行环境变量，Claude Code 和 OpenAI SDK 同时接入**。

> The stability-first AI gateway for Claude Code and GPT — one key, both protocols, pay-as-you-go. **Credit never expires.**

## 这是什么

Teapot Router 是面向开发者的 AI API 网关（gateway / 中转）：

- **双协议**：Claude Code（Anthropic 协议）和 OpenAI SDK（`/v1`）走同一个 key；Codex CLI / Gemini CLI 等 OpenAI 兼容客户端同样适用
- **按量计费**：价格表公开挂在[官网价格账本](https://teapotrouter.com/#ledger)，另提供免登录机读接口 [`/api/pricing`](https://teapotrouter.com/api/pricing)（JSON），写脚本比价随便抓；目前 Claude opus / sonnet / haiku 系与 GPT 线路共 7 个模型在线，[每个模型都有独立价格页](https://teapotrouter.com/zh/docs/claude-code-pricing)
- **条款**：**余额永不过期**；支持退款（工单办理，按剩余余额退、赠送金额不退，手续费平台承担）；支持支付宝与国际卡，$1 起充
- **可对账**：每笔请求的成本 / token / 延迟在后台「用量记录」逐笔可查、可导出——钱花在哪看得见
- **key 管理**：后台随时吊销 / 重建，团队可发子 key + 独立额度 + 审计日志；多上游自动故障转移

## 不想自己搭中转服务？

上面的模板就是为 [Teapot Router](https://teapotrouter.com) 准备的——它是 **claude-relay-service 这类自建方案的托管版**：注册即用，无需自己维护服务器、渠道和支付。自建适合喜欢折腾的人；只想稳定用模型的话，托管版更省心。

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

- 全套接入文档（注册 → 建 Key → 首次调用 → 排错）：https://teapotrouter.com/zh/docs
- 实时服务状态（网关 / API 端点 / 官网，当次探测不编历史）：https://teapotrouter.com/zh/status
- [Claude Code 价格指南：订阅还是按量](https://teapotrouter.com/zh/docs/claude-code-pricing)
- 每模型价格页：如 [claude-opus-5-5](https://teapotrouter.com/zh/pricing/claude-opus-5-5)
- 名字与 logo 源自 HTTP 彩蛋 418 I'm a teapot 🫖
