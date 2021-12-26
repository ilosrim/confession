const {
  Telegraf
} = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.launch().then();

module.exports = {
  bot
}