import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

axios.interceptors.request.use(
  (request) => {
    const token = JSON.parse(window.localStorage.getItem("currentUser"));
    request.headers.Autorization = `Bearer ${token}`;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    const token = JSON.parse(window.localStorage.getItem("currentUser"));
    response.headers.Autorization = `Bearer ${token}`;
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const loginUser = async () => {
  const response = await axios.post("/api/login");
  return response.data;
};

export const registerUser = async () => {
  const response = await axios.post("/api/register");
  return response.data;
};
