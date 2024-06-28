import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const SingleBlogUpdate = () => {

    const singleBlogsDataLoad = useLoaderData();

  const { name, writer, image, description,date, _id } = singleBlogsDataLoad;

  // navigate 
  const navigate = useNavigate();

  // <--------------- Places Data Updated ---------------->
  const handleBlogs = async (e) => {
    e.preventDefault();

    const form = e.target;

    const placeName = form.placeName.value;
    const placeImage = form.placeImage.value;
    const writer = form.writer.value;
    const placeDescription = form.placeDescription.value;
    const postedDate = form.postedDate.value;

    const newPlace = {
      name: placeName,
      image: placeImage,
      writer: writer,
      description: placeDescription,
      date : postedDate
    };

    console.log(newPlace)

    // <-------------------  Post Method : New places added to database ------->
    fetch(`http://localhost:3000/blogs/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlace),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal(" ", " Update travel blogs information   successfully !", "success");
          form.reset();
          navigate('/dashboard/places-blogs')
        }
      });
  };


    return (
        <div>
        <h1 className="text-2xl text-center text-[green] font-bold py-5">
          Update {name} information
        </h1>
  
        {/*  new blogs added */}
        <form
          onSubmit={handleBlogs}
          className="border-4 rounded xl:mx-2 bg-slate-400 my-12 flex flex-col justify-center py-5 mx-2"
        >
          {/* travel blogs name  */}
          <div className="m-5 text-left">
            <h1 className="text-lg md:text-xl text-left font-bold py-2">
              Travel blog name{" "}
            </h1>
            <input
              type="text"
              name="blogName"
              id=""
              defaultValue={name}
              className="font-bold w-full my-2 p-2 rounded"
              required
            />
          </div>
  
          {/* travel blog image  */}
          <div className="m-5 text-left grid md:grid-cols-3 gap-2 ">
            <div className="">
              <h1 className="text-lg md:text-xl text-left font-bold py-2">
                Travel blog image{" "}
              </h1>
              <input
                type="text"
                name="blogImage"
                id=""
                defaultValue={image}
                className="font-bold w-full my-2 p-2 rounded"
                required
              />
            </div>
  
            {/* place blog writer  */}
            <div className=" col-span-2">
              <h1 className="text-lg md:text-xl text-left font-bold py-2">
                Travel blog writer
              </h1>
              <input
                type="text"
                name="writer"
                id=""
                defaultValue={writer}
                className="font-bold w-full my-2 p-2 rounded"
                required
              />
            </div>
          </div>
  
          {/* travel blog description  */}
          <div className="m-5 text-left">
            <h1 className="text-lg md:text-xl text-left font-bold py-2">
              Travel blog Description{" "}
            </h1>
  
            <textarea
              rows={5}
              name="blogDescription"
              id=""
              defaultValue={description}
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

export default SingleBlogUpdate;