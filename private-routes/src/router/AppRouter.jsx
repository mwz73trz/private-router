import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PrivateRoute from "../router/PrivateRoute";
import PublicRoute from "../router/PublicRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Home />} />
      </Route>
      <Route path="login" element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
