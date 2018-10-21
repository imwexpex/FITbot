import {database, readUserData, updateUserData, writeUserData} from "../utils/firebase";
import {bot} from '../bot'
import {passwordInput, phoneInput, proceedAuth} from "../functions/proceedAuth";


export const msgHandler = async (msg) => {
    console.log("HANDLER", msg);
    const from = msg.from;
    const text = msg.text;
    const replyText = msg.reply.text;
    const data = await readUserData(from);


    switch (text) {
        case "/start":
            if (!data.val()) {
                await writeUserData(from, {loggedIn: false});
                proceedAuth(from, replyText);
            }
            else {
                console.log("You already started! Heh.");
            }
            break;

        default:
            if (!data.val().state.loggedIn && !data.val().state.phoneNumber) {
                phoneInput(msg, replyText);
            }
            else if (!data.val().state.loggedIn && !data.val().state.password) {
                passwordInput(msg, replyText)
            }
            else {
                replyText("Forward message to me, and i will post it to FITapp")
            }
            break;
    }
};
