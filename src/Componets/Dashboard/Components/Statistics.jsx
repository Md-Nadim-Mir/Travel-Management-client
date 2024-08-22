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

  return (
    <div>
      <h1 className="text-center pt-5 font-bold text-xl md:text-4xl text-[#870c50dc]">
        Statistics Reports
      </h1>

      {/* details */}
      <div className="stats shadow my-20">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>

      {/* custom statistics */}

      <div className="border-4 mx-5 rounded-lg shadow-2xl">
        <div className="grid grid-cols-3 border-b-2 mx-2">

          {/* users */}
          <div className="border-r-4  my-5 ">
            <div className="text-3xl font-bold">
              Total Users
            </div>
            <h1 className="text-[blue] text-2xl font-extrabold mt-2">{user.length}</h1>
          </div>

          {/* places */}
          <div className="border-r-4  my-5 ">
            <div className="text-3xl font-bold">
              Total Places
            </div>
            <h1 className="text-[blue] text-2xl font-extrabold mt-2">{place.length}</h1>
          </div>

          {/* Hotels */}
          <div className="my-5 ">
            <div className="text-3xl font-bold">
              Total Hotels
            </div>
            <h1 className="text-[blue] text-2xl font-extrabold mt-2">{hotel.length}</h1>
          </div>

        </div>
        <div className="grid grid-cols-3">
          <div className="border-r-4 my-2 font-bold">Total Packages</div>
          <div className="border-r-4 my-2 font-bold">Total Blogs</div>
          <div className="my-2 font-bold">Total Bookings</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
