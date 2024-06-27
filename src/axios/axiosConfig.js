import axios from "axios";
const axiosBase = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: 'https://evangadi-forum-backend-1-yav4.onrender.com/api',
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosBase;
