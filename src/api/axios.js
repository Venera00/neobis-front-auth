import axios from "axios";

const instance = axios.create({
  baseURL: "http://139.59.159.246:8000",
  headers: {
    "Content-Type": "application.json",
  },
});
