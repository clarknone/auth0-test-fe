import axios from "axios";


axios.defaults.baseURL = "http://localhost:8000";

export default function setToken(token?: string) {
  axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : null;
}
