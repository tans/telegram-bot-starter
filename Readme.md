# Telegram bot starter

一键部署到vercel

基于[grammy](https://grammy.dev), 支持本开发运行，设置代理

## 开发流程

本地运行脚本是 local.ts, 支持多种运行时包括bun, nodejs

1. 安装依赖 `bun install`
2. 设置参数 `cp env-example .env`
3. 设置命令行代理 `export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890`
4. 运行 `bun run local.ts`

## 部署到vercel

vercel是直接访问地址 /api/hook

1. fork本项目， 通过vercel 后台导入
2. 设置 BOT_TOKEN 的环境变量
3. 设置机器人的hook 地址 `https://api.telegram.org/${BOT_TOKEN}/setWebhook?url=https://***.vercel.app/api/hook`

通过以上流程即可部署成功，发送任何消息给机器人可以得到回复。

## 进一步开发

开发入口在 bot.ts 文件中
相关开发文档

框架文档
https://grammy.dev

官方接口文档
https://core.telegram.org/bots/api#available-methods
