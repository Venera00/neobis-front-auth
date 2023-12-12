import axios from "axios";

const instance = axios.create({
  baseURL: "http://139.59.159.246:8000/api/schema/swagger-ui/#/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const register = async (data) => {
  try {
    const response = await instance.post("/users/register/");
    return response.data;
  } catch (error) {
    console.log("Login failed", error);
  }
};

export const login = async (data) => {
  try {
    const response = await instance.post("/users/login", data);
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error);
  }
};

export default instance;
