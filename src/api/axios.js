import axios from "axios";

const instance = axios.create({
  baseURL: "https://marina-backender.org.kg/api/",
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

export const emailSend = async (token) => {
  try {
    const response = await instance.get("/users/confirm-email/${token}");
    return response.data;
  } catch (error) {
    console.log("Confirmation email failed", error);
    throw error;
  }
};

export default instance;
