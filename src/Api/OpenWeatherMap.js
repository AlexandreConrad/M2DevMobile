/** Import Axios pour le call API**/
import axios from "axios";

/** Import React **/
import React from "react";

/** Import KEY API **/
import keyApi from '../Api/KeyAPI';

/** Constante **/
const url_end =     `&units=metric&lang=fr&appid=${keyApi.weatherMap}`;
const url =         "https://api.openweathermap.org/data/2.5";

const callAPI = axios.create({
    baseURL: url,
    timeout: 1000,
});

async function callOpenWeatherMapAPI(endpoint) {
    try {
        const res = await callAPI.get(endpoint + url_end);
        return res;
    } catch (err) {
        console.log(err.message + "\nAPI conection failed");
    }
}

/** Call API Avec l'id de la ville **/
export async function getWeatherByID(id) {
    return await callOpenWeatherMapAPI(`/weather?id=${id}`);
};

/** Call Api par nom de ville **/
export async function getWeatherByCityName(cityName) {
    return await callOpenWeatherMapAPI(`/find?q=${cityName}`);
};