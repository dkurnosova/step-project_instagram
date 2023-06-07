import "./Preloader.scss";

const Preloader = () => {
   return (
      <div data-testid="preloader" className="preloader">
         <div data-testid="loader" className="loader"></div>
      </div>
   );
};

export default Preloader;
