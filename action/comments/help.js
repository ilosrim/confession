const {
  Composer
} = require('telegraf');
const {
  bot
} = require('../../core/bot');

const composer = new Composer()

composer.help(ctx => {
  ctx.replyWithHTML(
    `Ishlatish mumkin bo'lgan komandalar: \n` +
    `/start - <code>Botni ishga tushiradi\n</code>` +
    `/help - <code>Yordam</code>\n` +
    `<i>Menga xabar, rasm, video yoki musiqa yuboring, men uni kanalga joylayman</i>`
  ).then()
})

bot.use(composer.middleware())