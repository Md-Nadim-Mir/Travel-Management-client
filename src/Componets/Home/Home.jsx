import { Helmet } from "react-helmet-async";
import Banner from "./Banner";





import Feedback from "../Review/Feedback";
import Hikings from "./Hikings";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Travel | Home</title>
            </Helmet>
            
            <Banner></Banner>
            
            <Feedback></Feedback>
            <Hikings></Hikings>
            
         
        </div>
    );
};

export default Home;