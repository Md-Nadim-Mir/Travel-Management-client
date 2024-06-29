import { useLoaderData } from "react-router-dom";

const PackagesDetails = () => {
  const loadPackage = useLoaderData();

  const {
    placeName,
    placeImage,
    placeDescription,
    hotelName,
    hotelImage,
    hotelLoaction,
    hotelDescription,
    pirce,
    postedDate,
  } = loadPackage;

  // placeDescription convert
  const str1 = placeDescription;
  const parts1 = str1.split("#");

  // hotelDescription convert
  const str2 = hotelDescription;
  const parts2 = str2.split("#");

  return (
    <div>
      <h1 className="text-lg md:text-3xl font-extrabold mt-12 mb-2 mx-2">
        {placeName}
      </h1>

      {/* section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-12 mb-2 mx-2 border-2">
        <div className="col-span-2 w-full border ">
          <img src={placeImage} className="h-[60vh] w-full rounded" alt="" />
        </div>

        <div>
          {parts1.map((part1, index) => (
            <li key={index} className="mx-2 mb-4  font-semibold px-5">
              {part1}
            </li>
          ))}
        </div>
      </div>


      {/* section 3 */}
      <h1 className="text-lg md:text-3xl font-extrabold mt-12 mb-2 mx-2">
        {hotelName}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-12 mb-2 mx-2 border-2 p-1">
        
        <div className="border-2 col-span-2">
          {parts2.map((part2, index) => (
            <li key={index} className="mx-2 mb-4  font-semibold px-5">
              {part2}
            </li>
          ))}
        </div>

        <div className="col-span-2 w-full border ">
          <img src={hotelImage} className="h-[60vh] w-full rounded" alt="" />
        </div>

      </div>
    </div>
  );
};

export default PackagesDetails;
