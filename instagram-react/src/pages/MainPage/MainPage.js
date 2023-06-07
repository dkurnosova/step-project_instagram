/* eslint-disable react-hooks/exhaustive-deps */
import PostsList from "../../components/PostsList/PostsList";
import Preloader from "../../components/Preloder/Preloader";
import SubscribersList from "../../components/SubscribersList/SubscribersList";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import getUsersByIdArray from "../../assets/getUsersByIdArray";
import getUsersNotByIdArray from "../../assets/getUsersNotByIdArray";

const MainPage = () => {
   const authorizedUser = useSelector((store) => store.users.authorizedUser);
   const [subscriptions, setSubscriptions] = useState([]);
   const [recommendations, setRecommendations] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const getData = async () => {
         if (authorizedUser.subscriptions.length !== 0) {
            const subscriptions = await getUsersByIdArray(authorizedUser.subscriptions);
            setSubscriptions(subscriptions);
         }
         const recommendations = await getUsersNotByIdArray([...authorizedUser.subscriptions, authorizedUser._id]);
         setRecommendations(recommendations);
         setIsLoading(false);
      };
      getData();
   }, []);

   return (
      <>
         {isLoading ? (
            <Preloader />
         ) : (
            <>
               <header className="header">
                  <img src="./img/logo.png" alt="logo" />
               </header>
               <main className="main-page">
                  <PostsList />
                  <section>
                     {subscriptions.length !== 0 && <SubscribersList userArray={subscriptions} />}
                     {recommendations.length !== 0 && (
                        <SubscribersList userArray={recommendations} isRecommend={true} />
                     )}
                  </section>
               </main>
            </>
         )}
      </>
   );
};

export default MainPage;
