import axios from "axios";
import { Navigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "http://139.59.159.246:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const register = async (data) => {
  try {
    const response = await instance.post("/users/register/");
    Navigate("/loggedin");
    return response.data;
  } catch (error) {
    console.log("Login failed", error);
  }
};

export const login = async (data) => {
  try {
    const response = await instance.post("/users/login", data);
    Navigate("/welcome");
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error);
  }
};

export default instance;
