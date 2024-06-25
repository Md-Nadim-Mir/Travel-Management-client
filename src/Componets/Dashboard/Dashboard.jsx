import { Helmet } from "react-helmet-async";


const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>Travel | Dashboard</title>
            </Helmet>
             <h1 className="text-center text-3xl font-bold">This is our Dashboard</h1>
        </div>
    );
};

export default Dashboard;