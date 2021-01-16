/** Import Axios pour le call API**/
import axios from "axios";

/** Import React **/
import React from "react";

/** Import KEY API **/
import keyApi from '../Api/KeyAPI';

/** Constante **/
const url_end =     `api_key=${keyApi.themoviedb}&language=en-US&page=1`;
const url =         "https://api.themoviedb.org/3/";

const callAPI = axios.create({
    baseURL: url,
    timeout: 1000,
});

async function callTheMovieDbAPI(endpoint) {
    try {
        const res = await callAPI.get(endpoint + url_end);
        return res;
    } catch (err) {
        console.log(err.message + "\nAPI conection failed");
    }
}

/** Call Api par la liste des personnes en tendance  **/
export async function getMostPopular() {
    return await callTheMovieDbAPI(`person/popular?`);
};