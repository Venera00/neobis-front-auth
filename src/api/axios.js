import axios from "axios";

const instance = axios.create({
  baseURL: "http://139.59.159.246:8000/api/schema/swagger-ui/",
  headers: {
    "Content-Type": "application.json",
  },
});
