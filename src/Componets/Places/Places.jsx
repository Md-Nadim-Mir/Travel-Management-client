import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import OnePlace from "./OnePlace";

const Places = () => {
  
  // load all places
  const loadPlaces = useLoaderData();
  const [places, setplaces] = useState(loadPlaces);
  

  return (
    <div>
      <Helmet>
        <title>Travel | Places</title>
      </Helmet>
      <h1 className="text-xl md:text-2xl font-bold mt-14 mb-8 text-[#FFA500]">
        Popular Places
      </h1>

      {/* all places card design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {places.map((place) => (
          <OnePlace key={place._id} place={place}></OnePlace>
        ))}
      </div>


    
    </div>
  );
};

export default Places;
