import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import UserPage from "./pages/UserPage/UserPage";

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<MainPage />} />
         <Route path="/:userId" element={<UserPage />} />
      </Routes>
   );
};

export default AppRoutes;
