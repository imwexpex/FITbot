import {createNews} from "./createNews";
import {readUserData} from "../utils/firebase";
import {randomizeTitle} from "../utils/titleConstructor";


export const articlePoster = async(msg) => {
    const from = msg.from;
    let message = msg.text;
    const replyText = msg.reply.text;
    const data = await readUserData(from);
    const token = data.val().state.token;
    let title;
    const nIndex = msg.text.indexOf("\n");
    const date = new Date();

    if (nIndex === -1) {
        title = randomizeTitle;
        await createNews(token, title, message);
        replyText("Posted!\n" +
            "Please, dont forget to change title for this article in-App");
    }
    else {
        message = msg.text.slice(nIndex, msg.text.length);
        title = msg.text.slice(0, nIndex);
        await createNews(token, title, message);
        replyText("Posted!")
    }
};


