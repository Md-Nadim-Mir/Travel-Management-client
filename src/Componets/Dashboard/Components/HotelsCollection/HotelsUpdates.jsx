import swal from "sweetalert";
import SingleHotel from "./SingleHotel";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const HotelsUpdates = () => {


  // all hotels data loaded
  const loadedData = useLoaderData();

  const [hotels, setHotels] = useState(loadedData);

  
  // Delete opearation

  const deleteFunction = (_id) => {
    fetch(`http://localhost:3000/hotels/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingPlaces = hotels.filter((place) => hotel._id !== _id);
          setHotels(remainingPlaces);
          swal(" ", "Travel places deleted successfully", "success");
        }
      });
  };
 

  return (

    <div>
      
    <h1 className="text-2xl text-center text-[green] font-bold py-5 my-12">
      All Places Database Overview : {hotels.length}
    </h1>

    {/* table */}
    <div className="overflow-x-auto border-4 rounded mx-2 my-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="border-4 shadow-2xl text-base font-extrabold text-black">
            <th className="border-4 shadow-xl">No</th>
            <th className="border-4 shadow-xl">Image</th>
            <th className="border-4 shadow-xl">Name</th>
            <th className="border-4 shadow-xl">Location</th>
            <th className="border-4 shadow-xl">Post Date</th>
            <th className="border-4 shadow-xl">Actions</th>
          </tr>
        </thead>

        <tbody>
          {hotels.map((hotel, index) => (
            <SingleHotel
              index={index}
              key={hotel._id}
              hotel={hotels}
              deleteFunction={deleteFunction}
            ></SingleHotel>
          ))}
        </tbody>
      </table>
    </div>
  </div>
   
  );
};

export default HotelsUpdates;
