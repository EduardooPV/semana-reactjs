import axios from "axios";

export const key = "4a8382e5d3e269816053e54706c5733b101ba707";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4/",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
