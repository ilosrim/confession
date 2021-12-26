const {
  Composer
} = require('telegraf');
const {
  bot
} = require('../../core/bot');

const composer = new Composer()

composer.start(ctx => {
  ctx.replyWithHTML(`Xurmatli ${ctx.from.first_name}, confession-ga xush kelibsiz!`)
})

bot.use(composer.middleware())