module.exports = {
    mainMenu: {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'חשיש💚', callback_data: 'btnHash' },
                    { text: 'קנאביס👽', callback_data: 'btnWeed' },
                ],
                [{ text: 'פתח שיחה😎', callback_data: 'btnContact' }],
                // /* Also, we can have URL buttons. */
                // [{ text: 'Open in browser', url: 'telegraf.js.org' }],
            ],
        },
    },
};
