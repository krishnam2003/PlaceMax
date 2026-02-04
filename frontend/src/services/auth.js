import axios from "axios";
import api_endpoints from "../utils/data.js"

axios.defaults.withCredentials = true;

export const logout = async () => {
  return await axios.post(`${api_endpoints}/logout`);
};
