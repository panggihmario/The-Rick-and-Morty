import axios from "axios";
const BASE_URL = 'https://rickandmortyapi.com/api/'
/** Create Axios instance */
const axiosInstance = () =>
  axios.create({
    baseURL: BASE_URL,
    timeout: 10 * 1000,
    headers: {
      "Content-Type": `application/json`,
    },
  });
/** setup axios instance with http method GET */
export const fetchApi = function (payload) {
  return axiosInstance().get(payload.url, {
    params : {
      ...payload.params
    }
  })
}