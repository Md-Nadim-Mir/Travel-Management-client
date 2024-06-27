import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const SingleHotelUpdate = () => {


    const singleHotelsDataLoad = useLoaderData();

  const { name, location, image, description,date, _id } = singleHotelsDataLoad;

  // navigate 
  const navigate = useNavigate();

  // <--------------- Places Data Updated ---------------->
  const handleHotels = async (e) => {
    e.preventDefault();

    const form = e.target;

    const hotelName = form.hotelName.value;
    const hotelImage = form.hotelImage.value;
    const hotelLocation = form.hotelLocation.value;
    const hotelDescription = form.hotelDescription.value;
    const postedDate = form.postedDate.value;

    const newHotel = {
      name: hotelName,
      image: hotelImage,
      location: hotelLocation,
      description: hotelDescription,
      date : postedDate
    };

    console.log(newHotel)

    // <-------------------  Post Method : New places added to database ------->
    fetch(`http://localhost:3000/hotels/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newHotel),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal(" ", " Update travel hotel information   successfully !", "success");
          form.reset();
          navigate('/dashboard/hotels-updates')
        }
      });
  };


    return (
        <div>
      <h1 className="text-2xl text-center text-[green] font-bold py-5">
        Update {name} information
      </h1>

      {/*  new hotel added */}
      <form
        onSubmit={handleHotels}
        className="border-4 rounded xl:mx-2 bg-slate-400 my-12 flex flex-col justify-center py-5 mx-2"
      >
        {/* travel hotel name  */}
        <div className="m-5 text-left">
          <h1 className="text-lg md:text-xl text-left font-bold py-2">
            Travel hotel name{" "}
          </h1>
          <input
            type="text"
            name="hotelName"
            id=""
            defaultValue={name}
            placeholder="Enter travel hotel name"
            className="font-bold w-full my-2 p-2 rounded"
            required
          />
        </div>

        {/* travel hotel image  */}
        <div className="m-5 text-left grid md:grid-cols-3 gap-2 ">
          <div className="">
            <h1 className="text-lg md:text-xl text-left font-bold py-2">
              Travel hotel image{" "}
            </h1>
            <input
              type="text"
              name="hotelImage"
              id=""
              defaultValue={image}
              className="w-full my-2 py-2 rounded"
              required
            />
          </div>

          {/* hotel location  */}
          <div className=" col-span-2">
            <h1 className="text-lg md:text-xl text-left font-bold py-2">
              Travel hotel location
            </h1>
            <input
              type="text"
              name="hotelLocation"
              id=""
              defaultValue={location}
              placeholder="Enter travel hotel location"
              className="font-bold w-full my-2 p-2 rounded"
              required
            />
          </div>
        </div>

        {/* travel  hotel description  */}
        <div className="m-5 text-left">
          <h1 className="text-lg md:text-xl text-left font-bold py-2">
            Travel hotel Description{" "}
          </h1>

          <textarea
            rows={5}
            name="hotelDescription"
            id=""
            defaultValue={description}
            placeholder="Write travel hotel description ........."
            className="font-bold w-full my-2 p-2 rounded"
            required
          ></textarea>
        </div>

        {/* submit button  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-5">
          {/* posted date */}
          <div className=" ">
            <h1 className="text-lg md:text-xl text-left font-bold py-2">
              Posted Date
            </h1>
            <input
              type="date"
              name="postedDate"
              id=""
              defaultValue={date}
              placeholder=""
              className="font-bold w-full my-2 p-2 rounded"
              required
            />
          </div>

          <div className=" flex items-end justify-center md:justify-end">
            <button
              type="submit"
              className="btn w-1/2 my-2 p-2 rounded font-extrabold text-base"
            >
              Update
            </button>
          </div>

        </div>


      </form>
    </div>
    );
};

export default SingleHotelUpdate;