import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://codingtest.op.gg/api",
});

export default axiosInstance;
