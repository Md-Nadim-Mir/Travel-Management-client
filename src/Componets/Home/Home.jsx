import { Helmet } from "react-helmet-async";
import Banner from "./Banner";



import Feedback from "../Review/Feedback";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Travel | Home</title>
            </Helmet>
            <Banner></Banner>
            <Feedback></Feedback>
         
            
            
        </div>
    );
};

export default Home;