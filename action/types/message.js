const {
  Composer,
  Markup
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

  // const keyboard = Markup.inlineKeyboard([
  //   [Markup.button.callback("Ok", "acsept")],
  //   [Markup.button.callback("No", "decline")]
  // ])

  console.log(typeof keyboard);
  ctx.telegram.sendMessage(
    admin,
    `Text: ${ctx.message.text}`, {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{
              text: "✅",
              callback_data: `acsept_${ctx.message.text}`
            },
            {
              text: "❎",
              callback_data: `decline_${ctx.message.text}`
            }
          ]
        ]
      }
    }
  ).then()
});

composer.action(/acsept_(.+)/gi, ctx => {
  let match = ctx.match[1]
  ctx.telegram.sendMessage(confission, match).then()
  ctx.replyWithHTML(`The message: ${match} has been acsepted!`)
})
composer.action(/decline_(.+)/gi, ctx => {
  let match = ctx.match[1]
  ctx.replyWithHTML(`The message: ${match} has been declined!`).then
})

bot.use(composer.middleware())