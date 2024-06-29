

const PackagesAdded = () => {

    const handleHotels=()=>{

    }


    return (
        <div>
        <h1 className="text-2xl text-center text-[green] font-bold py-5">
          New Packages Added
        </h1>
  
        {/*  new packages added */}
        <form
          onSubmit={handleHotels}
          className="border-4 rounded xl:mx-2 bg-slate-400 my-12 flex flex-col justify-center py-5 mx-2"
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

export default PackagesAdded;