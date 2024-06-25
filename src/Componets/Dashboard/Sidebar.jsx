import { NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import { FaHillRockslide, FaHotel, FaUsersGear } from "react-icons/fa6";
import { FcDocument, FcStatistics } from "react-icons/fc";
import { IoDocument } from "react-icons/io5";
import { TbPackages } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="border-b-2 border-r-4 w-[350px] ">
      {/* logo and title */}

      <div className=" bg-slate-300 border-b-2 mb-2  py-14 flex flex-col  items-center">
        <div className="flex justify-center">
          <img src={logo} className="w-[70px] h-[70px] animate-bounce" alt="" />
        </div>

        <NavLink
          to="/"
          className=" md:text-base font-bold animate-bounce hover:animate-none"
        >
          <span className="md:text-2xl text-[orange] font-extrabold">
            Travel.
          </span>
          <span className="md:text-2xl text-[#326fc5] font-extrabold animate-pulse">
            com
          </span>
        </NavLink>
      </div>

      {/* sidebar link */}
      <div className="flex flex-col gap-y-5 text-base font-bold px-5 py-12">

        {/* statistics */}
        <div className=" flex pl-2 items-center gap-x-4">
          <FcStatistics className="text-[#FFA500]" />
          <NavLink to="/dashboard/statistics">Statistics</NavLink>
        </div>


        {/* all users */}
        <div className=" flex pl-2 items-center gap-x-4">
          <FaUsersGear className="text-[#FFA500]" />
          <NavLink to="/dashboard/users">Users</NavLink>
        </div>

        {/* Travel Places */}
        <div className=" flex pl-2 items-center gap-x-4">
          <FaHillRockslide className="text-[#FFA500]" />
          <NavLink to="/dashboard/places">Places</NavLink>
        </div>

        {/* Hotels */}
        <div className=" flex pl-2 items-center gap-x-4">
          <FaHotel className="text-[#FFA500]" />
          <NavLink to="/dashboard/hotels">Hotels</NavLink>
        </div>

        {/* Travel Packages */}
        <div className=" flex pl-2 items-center gap-x-4">
          <TbPackages  className="text-[#FFA500]" />
          <NavLink to="/dashboard/packages">Packages</NavLink>
        </div>

        {/* Blogs */}
        <div className=" flex pl-2 items-center gap-x-4">
        <IoDocument  className="text-[#FFA500]" />
          <NavLink to="/dashboard/blogs">Blogs</NavLink>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
