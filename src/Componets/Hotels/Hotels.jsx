
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import OneHotel from "./OneHotel";

const Hotels = () => {

  // load all places
  const hotels = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Travel | Hotels</title>
      </Helmet>
      <h1 className="text-center text-xl md:text-2xl font-bold mt-14 mb-20">
        Number of travel hotels : {hotels.length}
      </h1>

      {/* all places card design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 my-24">
        {hotels.map((hotel) => (
          <OneHotel key={hotel._id} hotel={hotel}></OneHotel>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
