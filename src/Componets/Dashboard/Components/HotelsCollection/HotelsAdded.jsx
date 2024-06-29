import swal from "sweetalert";
import { UploadImage } from "../Hook/UploadImage";

const HotelsAdded = () => {
  // <--------------- Hotels Data Collected  ---------------->
  const handleHotels = async (e) => {
    e.preventDefault();

    const form = e.target;

    const hotelName = form.hotelName.value;
    const hotelImage = form.hotelImage.files[0];
    const hotelLocation = form.hotelLocation.value;
    const hotelDescription = form.hotelDescription.value;
    const postedDate = form.postedDate.value;

    // upload image
    const imageData = await UploadImage(hotelImage);

    const realImage = imageData?.data?.url;

    const newHotel = {
      name: hotelName,
      image: realImage,
      location: hotelLocation,
      description: hotelDescription,
      date: postedDate,
    };

    // <-------------------  Post Method : New hotel added to database ------->
    fetch("http://localhost:3000/hotels", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newHotel),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal("", "New hotel added successfully !", "success");
        form.reset();
      });
  };

  return (
    <div>
      <h1 className="text-2xl text-center text-[green] font-bold py-5">
        New Hotel Added
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
              type="file"
              name="hotelImage"
              id=""
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
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HotelsAdded;
