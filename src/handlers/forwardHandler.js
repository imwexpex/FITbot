import {readUserData} from "../utils/firebase";
import {articlePoster} from "../functions/articlePoster";

export const forwardHandler = async(msg) => {
    const from = msg.from;
    const text = msg.text;
    const replyText = msg.reply.text;
    const data = await readUserData(from);

    if (data.val().state.loggedIn){
        articlePoster(msg)
    }
    else {
        replyText("You are not logged in... BUG")
    }
};
