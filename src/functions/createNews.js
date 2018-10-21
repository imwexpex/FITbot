import {fetchPost} from "../utils/API";
import {readUserData} from "../utils/firebase";

export const createNews = async (token, title, article, images) => {

    const response = await fetchPost('news.create', {
        token,
        title: title,
        message: article,
        images: images
    });
    console.log(response);
    const json = await response.json();

};
