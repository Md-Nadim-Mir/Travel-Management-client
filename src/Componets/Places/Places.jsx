import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import OnePlace from "./OnePlace";
import PlacesDetails from "./PlacesDetails";

const Places = () => {
  // load all places
  const loadPlaces = useLoaderData();
  const [places, setplaces] = useState(loadPlaces);
  const [singlePlaces,setSinglePlaces]=useState([]);

  const handleDetails = (_id)=>{

    fetch(`http://localhost:3000/places/${_id}`)
    .then(res=>res.json())
    .then(data=>setSinglePlaces(data))

  }

  

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
          <OnePlace key={place._id} place={place} handleDetails={handleDetails}></OnePlace>
        ))}
      </div>


      {/* single places data loaded */}
      {
        singlePlaces.map(place=><PlacesDetails key={place._id} place={place}></PlacesDetails>)
      }

    </div>
  );
};

export default Places;
