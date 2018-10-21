import {createSHA3_256} from './createSHA3_256'
import fetch from 'node-fetch'

export const apiUrl = 'https://acedev.app:80/';

export const fetchPost = (call, params) => {

    const xHash = createSHA3_256(JSON.stringify(params));

    return fetch(apiUrl + call, {
        headers: {
            "Content-Type":"application/json",
            'X-Hash': xHash
        },
        body: JSON.stringify(params),
        method: 'post'
    })
};
