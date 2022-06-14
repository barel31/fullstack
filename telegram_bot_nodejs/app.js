require('dotenv').config();
const { Telegraf } = require('telegraf');
const fs = require('fs');
const { btnHash, btnWeed } = require('./btns_handler');
const { mainMenu } = require('./menu_handler');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('start', (ctx) => {
    ctx.replyWithPhoto({ source: fs.createReadStream('./images/logo.png') }, mainMenu);
});

// buttons handler
bot.action('btnHash', btnHash);
bot.action('btnWeed', btnWeed);

bot.command('menu', (ctx) => {
    ctx.replyWithPhoto({ source: fs.createReadStream('./images/logo.png') }, mainMenu);
});

bot.command('quit', (ctx) => {
    ctx.reply('Goodbye.');
    // ctx.telegram.leaveChat(ctx.message.chat.id);

    // Using context shortcut
    // ctx.leaveChat();
});

bot.on('text', (ctx) => {
    ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);

    // Using context shortcut
    // ctx.reply(`Hello ${ctx.state.role}`);
});

bot.on('callback_query', (ctx) => ctx.telegram.answerCbQuery(ctx.callbackQuery.id));

bot.on('inline_query', (ctx) => {
    const result = [];
    // Explicit usage
    ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result);
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
