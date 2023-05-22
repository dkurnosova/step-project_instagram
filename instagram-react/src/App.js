import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAsync } from "./store/slices/postsSlice";
import { getUsersAsync } from "./store/slices/usersSlice";

function App() {
  const usersIsLoading = useSelector((store) => store.users.isLoading);
  const postsIsLoading = useSelector((store) => store.posts.IsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
      try {
        dispatch(getPostsAsync());
        dispatch(getUsersAsync());
      } catch (err) {
        console.log(err);
    }
   }, [dispatch]);

   return (
      <>
         {usersIsLoading || postsIsLoading ? (
            <div className="preloader">
               <div className="loader"></div>
            </div>
         ) : (
            <BrowserRouter>
               <div className="App">
                  <AppRoutes />
               </div>
            </BrowserRouter>
         )}
      </>
   );
}

export default App;
