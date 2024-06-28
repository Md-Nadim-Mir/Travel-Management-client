import { NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import {
  FaMagnifyingGlassPlus,
  FaPersonRunning,
  FaUsersGear,
} from "react-icons/fa6";
import { FcMultipleInputs, FcStatistics } from "react-icons/fc";
import { IoPersonCircle } from "react-icons/io5";
import { TbPackages } from "react-icons/tb";
import { CgLogOut } from "react-icons/cg";
import { MdAddLocationAlt } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { FaExchangeAlt } from "react-icons/fa";
import { TfiExchangeVertical } from "react-icons/tfi";

const Sidebar = () => {
  return (
    <div className="xl:bg-[#FECACA] ">
      <div className="dropdown xl:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost  mb-5">
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
          <div className="w-[200px]">
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
              {/* <----------------   Statistics Nav Link    ----------------> */}

              <div className=" flex pl-2 items-center gap-x-4">
                <FcStatistics className="text-[#3C76C2]" />
                <NavLink to="/dashboard/statistics">Statistics</NavLink>
              </div>

              {/* <--------------  User Manage  Nav Link    ---------------> */}

              <div className=" flex pl-2 items-center gap-x-4">
                <FaUsersGear className="text-[#3C76C2]" />
                <NavLink to="/dashboard/users">Users Manage</NavLink>
              </div>

              {/* <-------------   Places Nav Link    --------------> */}
              <div className=" flex pl-2 items-center gap-x-4">
                <MdAddLocationAlt className="text-[#3C76C2]" />
                <NavLink to="/dashboard/places-added">Place Added</NavLink>
              </div>

              {/* Travel Places Updates*/}
              <div className=" flex pl-2 items-center gap-x-4">
                <FaExchangeAlt className="text-[#3C76C2]" />
                <NavLink to="/dashboard/places-updates">Place Update</NavLink>
              </div>

              {/* <----------  Hotels Nav Link    -------------> */}
              <div className=" flex pl-2 items-center gap-x-4">
                <FaMagnifyingGlassPlus className="text-[#3C76C2]" />
                <NavLink to="/dashboard/hotels-added">Hotel Added</NavLink>
              </div>

              {/* Travel Hotel Updates*/}
              <div className=" flex pl-2 items-center gap-x-4">
                <GrUpdate className="text-[#3C76C2]" />
                <NavLink to="/dashboard/hotels-updates">Hotel Update</NavLink>
              </div>

              {/* <---------  Packages Nav Link    -----------> */}
              <div className=" flex pl-2 items-center gap-x-4">
                <TbPackages className="text-[#3C76C2]" />
                <NavLink to="/dashboard/packages">Packages</NavLink>
              </div>

              {/* Blogs */}
              <div className=" flex pl-2 items-center gap-x-4">
                <FcMultipleInputs className="text-[#3C76C2]" />
                <NavLink to="/dashboard/blogs-added">Blog Added</NavLink>
              </div>

              {/* Blogs Updates*/}
              <div className=" flex pl-2 items-center gap-x-4">
                <TfiExchangeVertical  className="text-[#3C76C2]" />
                <NavLink to="/dashboard/blogs-updates">Blog Update</NavLink>
              </div>

              {/* <----------   Upcoming Tour Nav Link    ----> */}
              <div className=" flex pl-2 items-center gap-x-4">
                <FaPersonRunning className="text-[#3C76C2]" />
                <NavLink to="/dashboard/upcoming-tour">Upcoming Tour</NavLink>
              </div>

              {/* <----------   Profile Nav Link    ----------> */}
              <div className=" flex pl-2 items-center gap-x-4">
                <IoPersonCircle className="text-[#3C76C2]" />
                <NavLink to="">Profile</NavLink>
              </div>

              {/* <----   Logout Nav Link    ----------> */}
              <div className=" flex pl-2 items-center gap-x-4">
                <CgLogOut className="text-[#3C76C2]" />
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
            <FcStatistics className="text-[#3C76C2]" />
            <NavLink to="/dashboard/statistics">Statistics</NavLink>
          </div>

          {/* all users */}
          <div className=" flex pl-2 items-center gap-x-4">
            <FaUsersGear className="text-[#3C76C2]" />
            <NavLink to="/dashboard/users">Users Manage</NavLink>
          </div>

          {/* <------------------   Places Nav Link    --------------------> */}

          {/* Travel Places added */}
          <div className=" flex pl-2 items-center gap-x-4">
            <MdAddLocationAlt className="text-[#3C76C2]" />
            <NavLink to="/dashboard/places-added">Place Added</NavLink>
          </div>

          {/* Travel Places Updates*/}
          <div className=" flex pl-2 items-center gap-x-4">
            <FaExchangeAlt className="text-[#3C76C2]" />
            <NavLink to="/dashboard/places-updates">Place Update</NavLink>
          </div>

          {/* <------------------   Hotels Nav Link    --------------------> */}

          {/* Hotel added */}
          <div className=" flex pl-2 items-center gap-x-4">
            <FaMagnifyingGlassPlus className="text-[#3C76C2]" />
            <NavLink to="/dashboard/hotels-added">Hotel Added</NavLink>
          </div>

          {/* Travel Hotel Updates*/}
          <div className=" flex pl-2 items-center gap-x-4">
            <GrUpdate className="text-[#3C76C2]" />
            <NavLink to="/dashboard/hotels-updates">Hotel Update</NavLink>
          </div>

          {/* <------------------   Packages Nav Link    --------------------> */}

          {/* Travel Packages */}
          <div className=" flex pl-2 items-center gap-x-4">
            <TbPackages className="text-[#3C76C2]" />
            <NavLink to="/dashboard/packages">Packages</NavLink>
          </div>

          {/* <------------------  Blogs Nav Link    --------------------> */}

          {/* Blogs */}
          <div className=" flex pl-2 items-center gap-x-4">
            <FcMultipleInputs className="text-[#3C76C2]" />
            <NavLink to="/dashboard/blogs-added">Blog Added</NavLink>
          </div>

          {/* Blogs Updates*/}
          <div className=" flex pl-2 items-center gap-x-4">
            <TfiExchangeVertical  className="text-[#3C76C2]" />
            <NavLink to="/dashboard/blogs-updates">Blog Update</NavLink>
          </div>

          {/* <------------------   Upcoming  Nav Link    --------------------> */}

          {/* Upcoming Tour */}
          <div className=" flex pl-2 items-center gap-x-4">
            <FaPersonRunning className="text-[#3C76C2]" />
            <NavLink to="/dashboard/upcoming-tour">Upcoming Tour</NavLink>
          </div>

          {/* <------------------  Profile Nav Link    --------------------> */}

          {/* profile */}
          <div className=" flex pl-2 items-center gap-x-4">
            <IoPersonCircle className="text-[#3C76C2]" />
            <NavLink to="">Profile</NavLink>
          </div>

          {/* <------------------  Logout Nav Link    --------------------> */}

          {/* Logout */}
          <div className=" flex pl-2 items-center gap-x-4">
            <CgLogOut className="text-[#3C76C2]" />
            <NavLink to="">Logout</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
