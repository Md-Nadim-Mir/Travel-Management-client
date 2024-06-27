import { useLoaderData } from "react-router-dom";

const PlacesDetails = () => {
  const loadPlace = useLoaderData();

  const { name, image, location, description ,date } = loadPlace;

  const str = description;
  const parts = str.split("#");


  return (
    <div className="pb-10">
      <h1 className="text-lg md:text-3xl font-extrabold mt-12 mb-2 mx-2">
        {name}
      </h1>
      <h1 className="mx-2 mb-2  font-semibold">{location}</h1>
      <h1 className="mx-2 mb-4  font-normal">Date : {date}</h1>

      <img src={image} className="w-full h-[60vh] rounded-xl px-2" alt="" />

      <h1 className="mx-2 mt-12 mb-4 text-lg md:text-2xl  font-bold">Reason to visit {name}</h1>


     {
        parts.map((part,index)=><li key={index} className="mx-2 mb-4  font-semibold px-5">{part}</li>)
     }

    </div>
  );
};

export default PlacesDetails;
