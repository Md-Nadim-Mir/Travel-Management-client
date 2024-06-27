import { UploadImage } from "../Hook/UploadImage";

const PlacesUpdates = () => {

 

  // <--------------- Places Data Collected  ---------------->
  const handlePlaces = async(e) => {
    e.preventDefault();

    const form = e.target;

    const placeName = form.placeName.value;
    const placeImage = form.placeImage.files[0];
    const placeLocation=form.placeLocation.value;
    const placeDescription=form.placeDescription.value;


    // upload image
    const imageData = await UploadImage(placeImage);

    const realImage = imageData?.data?.url;

    const newPlace = { name: placeName, image : realImage , location : placeLocation , description : placeDescription};


    // <-------------------  Post Method : New places added to database ------->


  };

  return (
    <div>
      <h1 className="text-2xl text-center text-[green] font-bold py-5">
        New Travel Places Added
      </h1>

      {/*  new places added */}
      <form onSubmit={handlePlaces} className="border-4 rounded xl:mx-2 bg-slate-400 my-12 flex flex-col justify-center py-5 mx-2">

        {/* travel place name  */}
        <div className="m-5 text-left">
          <h1 className="text-lg md:text-xl text-left font-bold py-2">Travel place name </h1>
          <input  type="text" name="placeName" id="" className="font-bold w-full my-2 p-2 rounded" required />
        </div>


        {/* travel place image  */}
        <div className="m-5 text-left grid md:grid-cols-3 gap-2 ">
            
          <div className="">
             <h1 className="text-lg md:text-xl text-left font-bold py-2">Travel place image </h1>
             <input  type="file" name="placeImage" id="" className="w-full my-2 py-2 rounded" required />
          </div>

          {/* place location  */}
          <div className=" col-span-2">
             <h1 className="text-lg md:text-xl text-left font-bold py-2">Travel place location</h1>
             <input  type="text" name="placeLocation" id="" className="font-bold w-full my-2 p-2 rounded" required />
          </div>

        </div>

        {/* travel place name  */}
        <div className="m-5 text-left">
          <h1 className="text-lg md:text-xl text-left font-bold py-2">Travel place Description </h1>
         
          <textarea rows={5} name="placeDescription" id="" className="font-bold w-full my-2 p-2 rounded" required></textarea>
        </div>

        {/* submit button  */}
        <div className="flex justify-center">
           <button type="submit" className="btn w-1/4 my-2 p-2 rounded font-extrabold text-base">Post</button>
        </div>

       
      </form>
    </div>
  );
};

export default PlacesUpdates;
