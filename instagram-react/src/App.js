/* eslint-disable react-hooks/exhaustive-deps */
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { getAuthorizedUserData } from "./store/slices/usersSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "./components/Preloder/Preloader";
import changeUserSubscribers from "./assets/changeUsersSubscribers";

function App() {
   const isLoading = useSelector((store) => store.users.isLoading);
   const { subscriptions, _id } = useSelector((store) => store.users.authorizedUser);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getAuthorizedUserData());
   }, []);

   useEffect(() => {
      if (_id) {
         const changeData = async () => {
            await changeUserSubscribers(_id, subscriptions);
         };
         changeData();
      }
   }, [subscriptions]);

   return (
      <BrowserRouter>
         {isLoading ? (
            <Preloader />
         ) : (
            <div className="App">
               <AppRoutes />
            </div>
         )}
      </BrowserRouter>
   );
}

export default App;
