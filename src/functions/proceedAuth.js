import {readUserData, updateUserData, writeUserData} from "../utils/firebase";
import {fetchPost} from "../utils/API";

export const proceedAuth = (from, replyText) => {
    replyText("Welcome to FITapp-bot! Please, sign in to continue :) \n" +
        "Enter your phone number (Same as in FITapp)");

};
export const phoneInput = async (msg, replyText) => {

    await updateUserData(msg.from, "phoneNumber", msg.text);
    replyText("Got it! \n" +
        "Enter your password (Same too)")
};
export const passwordInput = async (msg, replyText) => {

    await updateUserData(msg.from, "password", msg.text);
    replyText("Trying to log you in...");

    logIn(msg.from, replyText);
};
export const logIn = async (from, replyText) => {
    const data = await readUserData(from);

    const user = await fetchPost('users.login', {
        "phone": data.val().state.phoneNumber,
        "password": data.val().state.password
    });

    const json = await user.json();

    if (json.result){
        await updateUserData(from, "loggedIn", true);
        await updateUserData(from, "token", json.result.token);
        replyText("Congratulations! Now you can forward message to me, and i will post it to FITapp")
    }
    else {
        await writeUserData(from, {loggedIn: false});
        replyText("Our server decline credentials you've entered. Please, try again!");
        await proceedAuth(from, replyText)
    }
};
