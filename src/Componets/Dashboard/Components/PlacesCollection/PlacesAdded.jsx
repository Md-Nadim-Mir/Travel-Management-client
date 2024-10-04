import swal from "sweetalert";
import { UploadImage } from "../Hook/UploadImage";

const PlacesAdded = () => {
  // <--------------- Places Data Collected  ---------------->
  const handlePlaces = async (e) => {
    e.preventDefault();

    const form = e.target;

    const placeName = form.placeName.value;
    const placeImage = form.placeImage.files[0];
    const placeLocation = form.placeLocation.value;
    const placeDescription = form.placeDescription.value;
    const postedDate = form.postedDate.value;

    // upload image
    const imageData = await UploadImage(placeImage);

    const realImage = imageData?.data?.url;

    const newPlace = {
      name: placeName,
      image: realImage,
      location: placeLocation,
      description: placeDescription,
      date : postedDate
    };

    // <-------------------  Post Method : New places added to database ------->
    fetch("http://localhost:3000/places", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlace),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal("", "New travel places added successfully !", "success");
        form.reset();
      });
  };

  return (
    <div className="font-serif">
      <h1 className="text-center text-[orange] text-xl md:text-3xl font-bold mt-16 mb-20">
        New Travel Places Added
      </h1>

      {/*  new places added */}
      <form
        onSubmit={handlePlaces}
        className="border-4 rounded xl:mx-2 bg-slate-300  flex flex-col justify-center py-5 mx-2 border-[#326FC5]"
      >
        {/* travel place name  */}
        <div className="m-5 text-left">
          <h1 className="text-lg md:text-xl text-left font-bold py-2">
            Travel place name{" "}
          </h1>
          <input
            type="text"
            name="placeName"
            id=""
            placeholder="Enter travel place name"
            className="font-bold w-full my-2 p-2 rounded"
            required
          />
        </div>

        {/* travel place image  */}
        <div className="m-5 text-left grid md:grid-cols-3 gap-2 ">
          <div className="">
            <h1 className="text-lg md:text-xl text-left font-bold py-2">
              Travel place image{" "}
            </h1>
            <input
              type="file"
              name="placeImage"
              id=""
              className="w-full my-2 py-2 rounded"
              required
            />
          </div>

          {/* place location  */}
          <div className=" col-span-2">
            <h1 className="text-lg md:text-xl text-left font-bold py-2">
              Travel place location
            </h1>
            <input
              type="text"
              name="placeLocation"
              id=""
              placeholder="Enter travel place location"
              className="font-bold w-full my-2 p-2 rounded"
              required
            />
          </div>
        </div>

        {/* travel place name  */}
        <div className="m-5 text-left">
          <h1 className="text-lg md:text-xl text-left font-bold py-2">
            Travel place Description{" "}
          </h1>

          <textarea
            rows={5}
            name="placeDescription"
            id=""
            placeholder="Write travel place description"
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
              className="btn w-1/2 my-2 p-2 rounded font-extrabold text-base  text-[white] bg-[orange] hover:bg-[#326FC5] border-none"
            >
              Post
            </button>
          </div>

        </div>


      </form>
    </div>
  );
};

export default PlacesAdded;
