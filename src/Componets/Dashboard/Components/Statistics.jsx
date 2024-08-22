import { useState } from "react";

const Statistics = () => {
  
  
  // users length find
  const [user, setUser] = useState([]);
 
  fetch('http://localhost:3000/users')
    .then((res) => res.json())
    .then((users) => setUser(users));

  // users lenth end 


  // places length find
  const [place, setPlace] = useState([]);

  
  fetch('http://localhost:3000/places')
    .then((res) => res.json())
    .then((places) => setPlace(places));

  // places lenth end 


  // hotels length find
  const [hotel, setHotel] = useState([]);

  
  fetch('http://localhost:3000/hotels')
    .then((res) => res.json())
    .then((hotels) => setHotel(hotels));

  // hotels lenth end 


  // packages length find
  const [packaged, setPackage] = useState([]);

  
  fetch('http://localhost:3000/packages')
    .then((res) => res.json())
    .then((packages) => setPackage(packages));

  // packages lenth end 


  // blogs length find
  const [blog, setBlog] = useState([]);

  
  fetch('http://localhost:3000/blogs')
    .then((res) => res.json())
    .then((blogs) => setBlog(blogs));

  // blogs lenth end 


  // booking length find
  const [booking, setBooking] = useState([]);

  
  fetch('http://localhost:3000/blogs')
    .then((res) => res.json())
    .then((bookings) => setBooking(bookings));

  // bookings lenth end 

  return (
    <div>
      <h1 className="text-center pt-5 font-bold text-md md:text-3xl text-[#870c50dc]">
        Statistics Reports
      </h1>


      {/* custom statistics */}

      <div className="border-4 border-[#FF00D3] mx-5 rounded-lg shadow-2xl my-16">

        <div className="grid grid-cols-3 border-b border-[#0fd420] mx-2">

          {/* users */}
          <div className="border-r-2 border-red-400  my-5 ">
            <div className="text-md md:text-xl  font-bold">
              Total Users
            </div>
            <h1 className="text-[blue] text-3xl font-extrabold mt-2 animate-bounce ">{user.length}</h1>
          </div>

          {/* places */}
          <div className="border-r-2 border-red-400  my-5 ">
            <div className="text-md md:text-xl  font-bold">
              Total Places
            </div>
            <h1 className="text-[blue] text-3xl font-extrabold mt-2 animate-bounce">{place.length}</h1>
          </div>

          {/* Hotels */}
          <div className="my-5 ">
            <div className="text-md md:text-xl  font-bold">
              Total Hotels
            </div>
            <h1 className="text-[blue] text-3xl font-extrabold mt-2 animate-bounce">{hotel.length}</h1>
          </div>

        </div>

        <div className="grid grid-cols-3 mx-2">

          {/* Packages */}
          <div className="border-r-2 border-red-400  my-5 ">
            <div className="text-md md:text-xl  font-bold">
              Total Packages
            </div>
            <h1 className="text-[blue] text-3xl font-extrabold mt-2 animate-bounce">{packaged.length}</h1>
          </div>

          {/* Blogs */}
          <div className="border-r-2 border-red-400 my-5 ">
            <div className="text-md md:text-xl  font-bold">
              Total Blogs
            </div>
            <h1 className="text-[blue] text-3xl font-extrabold mt-2 animate-bounce">{blog.length}</h1>
          </div>

          {/* Bookings */}
          <div className="my-5 ">
            <div className="text-md md:text-xl  font-bold">
              Total Bookings
            </div>
            <h1 className="text-[blue] text-3xl font-extrabold mt-2 animate-bounce">{booking.length}</h1>
          </div>

        </div>
       
      </div>
    </div>
  );
};

export default Statistics;
