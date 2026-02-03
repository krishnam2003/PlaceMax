import { useNavigate } from "react-router-dom";
import { logout } from "../../services/auth.js";

const useLogout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return handleLogout;
};

export default useLogout;
