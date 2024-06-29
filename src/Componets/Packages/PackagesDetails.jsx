import { FaArrowsTurnRight } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const PackagesDetails = () => {
  const loadPackage = useLoaderData();

  const {
    placeName,
    placeImage,
    placeDescription,
    hotelName,
    hotelImage,
    hotelLocation,
    hotelDescription,
    price,
    postedDate,
  } = loadPackage;

  // placeDescription convert
  const str1 = placeDescription;
  const parts1 = str1.split("#");

  // hotelDescription convert
  const str2 = hotelDescription;
  const parts2 = str2.split("#");

  // handle Booking

  const handleBooking = () => {
    swal("", "Thank you , your booking is pending", "success");
  };

  return (
    <div>
      <h1 className="text-lg md:text-3xl font-extrabold mt-12 mb-2 mx-2">
        {placeName}
      </h1>
      <h1 className="text-lg  font-extrabold mt-12 mb-2 mx-2">
        Date: {postedDate}
      </h1>

      {/* section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-4  mt-12 mb-2 mx-2 ">
        <div className="col-span-2 w-full  ">
          <img src={placeImage} className="h-[60vh] w-full rounded" alt="" />
        </div>

        <div className="pl-20">

        <h1 className="text-lg  font-extrabold mt-2 mb-2 mx-2">
            Most tourist place
          </h1>

          {parts1.map((part1, index) => (
            <div
              key={index}
              className="p-3 mx-2  font-semibold px-5 flex  items-center  "
            >
              <FaArrowsTurnRight className="mr-2 text-lg font-bold " />{" "}
              <h1 className="font-semi-bold">{part1}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* section 3 */}
      <h1 className="text-lg md:text-3xl font-extrabold mt-12 mb-2 mx-2">
        {hotelName}
      </h1>
      <h1 className="text-lg md:text-xl font-bold mt-12 mb-2 mx-2">
        {hotelLocation}
      </h1>

      <div className="flex flex-col-reverse md:grid md:grid-cols-4 gap-2 mt-12 mb-2 mx-2  p-1  items-center">
        <div className=" col-span-2">
          

          {parts2.map((part1, index) => (
            <div
              key={index}
              className="p-3 mx-2   font-semibold px-5 flex  items-center  "
            >
              <FaArrowsTurnRight className="mr-2  text-lg font-bold " />{" "}
              <h1 className="font-semi-bold">{part1}</h1>
            </div>
          ))}

          <div className="grid grid-cols-3 justify-center gap-5 mt-2">
            <h1 className="btn col-span-2   mb-4  font-bold px-2">$ {price}</h1>
            <button
              onClick={handleBooking}
              className="btn btn-primary  mb-4  font-bold px-2"
            >
              Booking Now
            </button>
          </div>
        </div>

        <div className="col-span-2 w-full  ">
          <img src={hotelImage} className="h-full w-full rounded" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PackagesDetails;
