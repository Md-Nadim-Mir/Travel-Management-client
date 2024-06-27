import { NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import {
  FaHillRockslide,
  FaHotel,
  FaPersonRunning,
  FaUsersGear,
} from "react-icons/fa6";
import { FcStatistics } from "react-icons/fc";
import { IoDocument, IoPersonCircle } from "react-icons/io5";
import { TbPackages } from "react-icons/tb";
import { CgLogOut } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className="xl:bg-[#FECACA]">
      <div className="dropdown xl:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3  shadow"
        >
          <div className="w-[300px]">
            {/* logo and title */}

            <div className=" bg-slate-300   py-2 flex flex-col  items-center">
              <div className="flex justify-center">
                <img
                  src={logo}
                  className="w-[50px] h-[50px] animate-bounce"
                  alt=""
                />
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
            <div className="bg-red-200 flex flex-col gap-y-6 text-base font-bold px-5 py-10">
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
                <TbPackages className="text-[#FFA500]" />
                <NavLink to="/dashboard/packages">Packages</NavLink>
              </div>

              {/* Blogs */}
              <div className=" flex pl-2 items-center gap-x-4">
                <IoDocument className="text-[#FFA500]" />
                <NavLink to="/dashboard/blogs">Blogs</NavLink>
              </div>

              {/* Upcoming Tour */}
              <div className=" flex pl-2 items-center gap-x-4">
                <FaPersonRunning className="text-[#FFA500]" />
                <NavLink to="/dashboard/upcoming-tour">Upcoming Tour</NavLink>
              </div>

              {/* profile */}
              <div className=" flex pl-2 items-center gap-x-4">
                <IoPersonCircle className="text-[#FFA500]" />
                <NavLink to="">Profile</NavLink>
              </div>

              {/* Logout */}
              <div className=" flex pl-2 items-center gap-x-4">
                <CgLogOut className="text-[#FFA500]" />
                <NavLink to="">Logout</NavLink>
              </div>
            </div>
          </div>
        </ul>
      </div>

      <div className="w-[300px] hidden xl:block">
        {/* logo and title */}

        <div className=" bg-slate-300   py-14 flex flex-col  items-center">
          <div className="flex justify-center">
            <img
              src={logo}
              className="w-[70px] h-[70px] animate-bounce"
              alt=""
            />
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
        <div className="bg-red-200 flex flex-col gap-y-6 text-base font-bold px-5 py-10">
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
            <TbPackages className="text-[#FFA500]" />
            <NavLink to="/dashboard/packages">Packages</NavLink>
          </div>

          {/* Blogs */}
          <div className=" flex pl-2 items-center gap-x-4">
            <IoDocument className="text-[#FFA500]" />
            <NavLink to="/dashboard/blogs">Blogs</NavLink>
          </div>

          {/* Upcoming Tour */}
          <div className=" flex pl-2 items-center gap-x-4">
            <FaPersonRunning className="text-[#FFA500]" />
            <NavLink to="/dashboard/upcoming-tour">Upcoming Tour</NavLink>
          </div>

          {/* profile */}
          <div className=" flex pl-2 items-center gap-x-4">
            <IoPersonCircle className="text-[#FFA500]" />
            <NavLink to="">Profile</NavLink>
          </div>

          {/* Logout */}
          <div className=" flex pl-2 items-center gap-x-4">
            <CgLogOut className="text-[#FFA500]" />
            <NavLink to="">Logout</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
