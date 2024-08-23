const TelegramBot = require('node-telegram-bot-api');

// replace with your own token
const token = '7281919845:AAE7l6coIRSf8qEcFqw_JNYR_uAZr1B-2v8';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hello World!');
});


//specified commands
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome! How can I help you today?');
});
