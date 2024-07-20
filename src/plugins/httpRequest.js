import axios from "axios";
const BASE_URL = 'https://rickandmortyapi.com/api/'
const axiosInstance = () =>
  axios.create({
    baseURL: BASE_URL,
    timeout: 10 * 1000,
    headers: {
      "Content-Type": `application/json`,
    },
  });

export const fetchApi = function (payload) {
  return axiosInstance().get(payload.url, {
    params : {
      ...payload.params
    }
  })
}