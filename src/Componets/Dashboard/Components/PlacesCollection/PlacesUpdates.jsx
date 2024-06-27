import swal from "sweetalert";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import SinglePlace from "./SinglePlace";

const PlacesUpdates = () => {
  // all places data loaded
  const loadedData = useLoaderData();

  const [places, setPlaces] = useState(loadedData);

  
  // Delete opearation

  const deleteFunction = (_id) => {
    fetch(`http://localhost:3000/places/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingPlaces = places.filter((place) => place._id !== _id);
          setPlaces(remainingPlaces);
          swal(" ", "Travel places deleted successfully", "success");
        }
      });
  };

  return (
    <div>
      
      <h1 className="text-2xl text-center text-[green] font-bold py-5 my-12">
        All Places Database Overview : {places.length}
      </h1>

      {/* table */}
      <div className="overflow-x-auto border-4 rounded mx-2 my-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {places.map((place, index) => (
              <SinglePlace
                index={index}
                key={place._id}
                place={place}
                deleteFunction={deleteFunction}
              ></SinglePlace>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlacesUpdates;
