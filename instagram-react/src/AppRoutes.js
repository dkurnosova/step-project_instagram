import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<MainPage />} />
         <Route path="/:username" element={<UserPage />} />
      </Routes>
   );
};

export default AppRoutes;