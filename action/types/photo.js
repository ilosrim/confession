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

composer.on('photo', ctx => {
  ctx.telegram.sendPhoto(admin, ctx.message.photo[0].file_id).then()
  ctx.telegram.sendPhoto(confission, ctx.message.photo[0].file_id).then()
})

bot.use(composer.middleware())