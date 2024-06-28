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
      <h1 className="text-center text-xl md:text-2xl font-bold mt-14 mb-20">
        Number of travel places : {places.length}
      </h1>

      {/* all places card design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 my-24">
        {places.map((place) => (
          <OnePlace key={place._id} place={place}></OnePlace>
        ))}
      </div>


    
    </div>
  );
};

export default Places;
