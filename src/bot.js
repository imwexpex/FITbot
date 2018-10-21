import TeleBot from 'telebot';
import {msgHandler} from "./handlers/msgHandler";
import {forwardHandler} from "./handlers/forwardHandler";

export const bot = new TeleBot('TOKEN');

bot.on('text', (msg) => {
    msgHandler(msg);
});
bot.on('forward', (msg) => {
    forwardHandler(msg);
});


bot.start();
