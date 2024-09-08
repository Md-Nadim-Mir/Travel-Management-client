import { useState } from "react";
import CustomShapeBarChart from "./CustomShapeBarChart";
import PieChartWithCustomizedLabel from "./PieChartWithCustomizedLabel";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import StatisticUserBookingInfo from "./StatisticUserBookingInfo";

const Statistics = () => {
  // users length find
  const [user, setUser] = useState([]);

  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((users) => setUser(users));

  // users lenth end

  // places length find
  const [place, setPlace] = useState([]);

  fetch("http://localhost:3000/places")
    .then((res) => res.json())
    .then((places) => setPlace(places));

  // places lenth end

  // hotels length find
  const [hotel, setHotel] = useState([]);

  fetch("http://localhost:3000/hotels")
    .then((res) => res.json())
    .then((hotels) => setHotel(hotels));

  // hotels lenth end

  // packages length find
  const [packaged, setPackage] = useState([]);

  fetch("http://localhost:3000/packages")
    .then((res) => res.json())
    .then((packages) => setPackage(packages));

  // packages lenth end

  // blogs length find
  const [blog, setBlog] = useState([]);

  fetch("http://localhost:3000/blogs")
    .then((res) => res.json())
    .then((blogs) => setBlog(blogs));

  // blogs lenth end



  // booking length find
  const bookingData = useLoaderData();
  const [booking, setBooking] = useState(bookingData);


  // Delete opearation

  const deleteFunction = (_id) => {
    fetch(`http://localhost:3000/bookings/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingPackages = booking.filter((booked) => booked._id !== _id);
          setBooking(remainingPackages);
          swal(" ", "Booking request canceled", "success");
        }
      });

    };


    //  <--------------  update function ------------------->

  const updateFunction = (_id,updateInfo)=>{
    console.log(_id,updateInfo);

    fetch(`http://localhost:3000/bookings/${_id}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(updateInfo)
    })
    .then(res=>res.json())
    .then((data)=>{
         console.log(data);

         if(data.modifiedCount > 0){
          
            // const remainingBooking = booking.filter(booked=>booked._id !== _id);
            // setBooking(remainingBooking);

            swal('','Booking Requested accepted','success')

         }
    })
}

  
  return (
    <div>
      <h1 className="text-center pt-5 font-bold text-md md:text-3xl text-[#870c50dc]">
        Statistics Reports
      </h1>

      {/* chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between my-20">
        <CustomShapeBarChart></CustomShapeBarChart>
        <PieChartWithCustomizedLabel></PieChartWithCustomizedLabel>
      </div>

      {/* custom statistics */}

      <div className="border-4 border-[#FF00D3] mx-5 rounded-lg shadow-2xl my-16">
        <div className="grid grid-cols-3 border-b border-[#0fd420] mx-2">
          {/* users */}
          <div className="border-r-2 border-red-400  my-5 ">
            <div className="text-md md:text-xl  font-bold">Total Users</div>
            <h1 className="text-[blue] text-3xl font-extrabold mt-2 animate-bounce ">
              {user.length}
            </h1>
          </div>

          {/* places */}
          <div className="border-r-2 border-red-400  my-5 ">
            <div className="text-md md:text-xl  font-bold">Total Places</div>
            <h1 className="text-[blue] text-3xl font-extrabold mt-2 animate-bounce">
              {place.length}
            </h1>
          </div>

          {/* Hotels */}
          <div className="my-5 ">
            <div className="text-md md:text-xl  font-bold">Total Hotels</div>
            <h1 className="text-[blue] text-3xl font-extrabold mt-2 animate-bounce">
              {hotel.length}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-3 mx-2">
          {/* Packages */}
          <div className="border-r-2 border-red-400  my-5 ">
            <div className="text-md md:text-xl  font-bold">Total Packages</div>
            <h1 className="text-[blue] text-3xl font-extrabold mt-2 animate-bounce">
              {packaged.length}
            </h1>
          </div>

          {/* Blogs */}
          <div className="border-r-2 border-red-400 my-5 ">
            <div className="text-md md:text-xl  font-bold">Total Blogs</div>
            <h1 className="text-[blue] text-3xl font-extrabold mt-2 animate-bounce">
              {blog.length}
            </h1>
          </div>

          {/* Bookings */}
          <div className="my-5 ">
            <div className="text-md md:text-xl  font-bold">Total Bookings</div>
            <h1 className="text-[blue] text-3xl font-extrabold mt-2 animate-bounce">
              {booking.length}
            </h1>
          </div>
        </div>
      </div>


      {/*  Booking requsts Table create */}

       <div>
           
        <h1 className="text-center text-3xl font-bold my-10">
          Booking History :{booking.length}
        </h1>

        <div className="overflow-x-auto border-4 rounded mx-2 my-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="border-4 shadow-2xl text-base font-extrabold text-black">
                <th className="border-4 shadow-xl">No</th>
                <th className="border-4 shadow-xl">Place Image</th>
                <th className="border-4 shadow-xl">Place Name</th>
                <th className="border-4 shadow-xl">Price</th>
                <th className="border-4 shadow-xl">Hotel Image</th>
                <th className="border-4 shadow-xl">Hotel Name</th>
                <th className="border-4 shadow-xl">Hotel Location</th>
                <th className="border-4 shadow-xl">Post Date</th>
                <th className="border-4 shadow-xl">Status</th>
                <th className="border-4 shadow-xl">Actions</th>
              </tr>
            </thead>

            <tbody>
              {booking.map((booked, index) => (
                <StatisticUserBookingInfo
                  index={index}
                  key={booked._id}
                  booked={booked}
                  deleteFunction={deleteFunction}
                  updateFunction={updateFunction}
                ></StatisticUserBookingInfo>
              ))}
            </tbody>
          </table>
        </div>

       </div>

     
    </div>
  );
};

export default Statistics;
