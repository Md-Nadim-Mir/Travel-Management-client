import { Helmet } from "react-helmet-async";
import { Form, NavLink, useLoaderData } from "react-router-dom";
import OneHotel from "./OneHotel";
import { useState } from "react";

const Hotels = () => {
  // load all places
  const hotels = useLoaderData([]);
  console.log(hotels);

  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className="font-serif">
      <Helmet>
        <title>Travel | Hotels</title>
      </Helmet>
      <h1 className="text-xl md:text-2xl font-bold mt-14 mb-8 text-[#FFA500] px-2 md:px-4">
        Popular Hotels
      </h1>

      <Form className="p-5">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="my-3 w-full border-4 rounded-md p-2   font-bold"
          placeholder="Search By Location .  Example : Dhaka , Bangladesh"
        ></input>
      </Form>

      {/* all places card design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-12  px-2 md:px-4">
        {hotels
          .filter((hotel) => {
            return search.toLowerCase() === ""
              ? hotel
              : hotel.location.toLowerCase().includes(search)}).map((hotel) => (<div key={hotel._id} className="card bg-base-100  shadow-xl">
                 <figure>
                    <img src={hotel.image} className="h-[50vh]" alt="Shoes" />
                  </figure>
              <div className="card-body">
                <h2 className="card-title">{hotel.name}</h2>
                <p>{hotel.location}</p>
                <div className="card-actions mt-4 justify-end">
                  <NavLink to={`/hotels/${hotel._id}`}>
                    <button className="btn bg-[orange] hover:bg-[#326FC5] text-white">
                      Visit Now
                    </button>
                  </NavLink>
                </div>
              </div>
           </div>
          ))}
      </div>
    </div>
  );
};

export default Hotels;
