/*
=========================================================
* Nodejs telegram bot template, created and manteined by: Seventty
=========================================================
* Main page: https://github.com/BotHouseZ/telegram-bot-generator
* Copyright©2022 Rainiery Valerio Gonzalez (https://seventty.netlify.app)
* Coded by: https://seventty.netlify.app
 =========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/*
 *This template is powered by Yagop node-telegram-bot-api's library
 *His main repository: https://github.com/yagop/node-telegram-bot-api
 */

import TelegramBot from "node-telegram-bot-api";
import config from "./../config/index.js";
import commands from "./../loaders/commands.js";

console.log(
  "\nNodejs telegram bot template, created and manteined by: Seventty"
);
console.log("Bot running on port", config.port);

async function startBot() {
  const bot = new TelegramBot(config.bot, { polling: true });
  commands(bot);

  bot.on("message", (message) => {
    console.log(message);
  });
}

startBot();
