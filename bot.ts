import { Bot } from "grammy";
import { SocksProxyAgent } from "socks-proxy-agent";

let bot;
if (process.env.PROXY) {
  bot = new Bot(process.env.BOT_TOKEN, {
    client: {
      timeoutSeconds: 10,
      baseFetchConfig: {
        agent: new SocksProxyAgent(process.env.PROXY),
      },
    },
  });
} else {
  bot = new Bot(process.env.BOT_TOKEN);
}
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running.."));

bot.on("message", (ctx) => {
  console.log(ctx);
  ctx.reply("Got another message!");
});

export default bot;
