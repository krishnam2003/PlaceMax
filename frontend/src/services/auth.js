import axios from "axios";

axios.defaults.withCredentials = true;

export const logout = async () => {
  return await axios.post("http://localhost:3001/auth/logout");
};
