// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   const isAuthenticated = document.cookie.includes("token");
  

//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;

import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import api_endpoints from "../utils/data.js"

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get(`${api_endpoints}/verify`, {
        withCredentials: true,
      })
      .then((res) => {
        setAuthenticated(res.data.status === true);
        setLoading(false);
      })
      .catch(() => {
        setAuthenticated(false);
        setLoading(false);
      });
  }, []);

  if (loading) return null; // or spinner

  return authenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
