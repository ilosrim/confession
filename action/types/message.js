const {
  Composer,
  Marup
} = require('telegraf');
const {
  bot
} = require('../../core/bot');
const {
  admin,
  confission
} = require('../../config');

const composer = new Composer();

composer.on('text', ctx => {
  ctx.telegram.sendMessage(admin, ctx.message.text).then()
  ctx.telegram.sendMessage(confission, ctx.message.text).then()
})

bot.use(composer.middleware())