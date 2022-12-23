// axios default base url
import axios from "axios";

// instance of axios
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    Accepted: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
