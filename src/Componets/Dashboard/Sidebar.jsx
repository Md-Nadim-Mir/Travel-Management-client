import { NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import { FaMagnifyingGlassPlus, FaUsersGear } from "react-icons/fa6";
import { FcStatistics } from "react-icons/fc";
import { IoAppsOutline} from "react-icons/io5";
import { TbPackages } from "react-icons/tb";
import { MdAddCard, MdAddLocationAlt } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { FaExchangeAlt } from "react-icons/fa";
import { TfiExchangeVertical } from "react-icons/tfi";
import { LuPackageSearch } from "react-icons/lu";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";

const Sidebar = () => {
  //  logout

  const {  logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        swal("Log Out Successfully !");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-slate-300 font-serif">
      <div className="dropdown xl:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost  mb-5">
          <IoAppsOutline className="text-red-400" />
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content   z-[1] mt-3  shadow"
        >
          <div className="w-[200px]">
            {/* logo and title */}

            <div className=" bg-base-200   py-2 flex flex-col  items-center">
              <div className="flex justify-center">
                <img
                  src={logo}
                  className="w-[50px] h-[50px] animate-bounce"
                  alt=""
                />
              </div>

              <a
                href="/"
                className=" md:text-base font-bold animate-bounce hover:animate-none"
              >
                <span className="md:text-2xl text-[orange] font-extrabold">
                  Travel.
                </span>
                <span className="md:text-2xl text-[#326fc5] font-extrabold animate-pulse">
                  com
                </span>
              </a>
            </div>

            {/* sidebar link */}
            <div className="bg-slate-300 flex flex-col gap-y-6 text-base font-bold px-5 py-10">
              {/* <----------------   Statistics Nav Link    ----------------> */}

              <div className=" flex pl-2 items-center gap-x-4">
                <FcStatistics className="text-[orange]" />
                <NavLink to="/dashboard/statistics">Statistics</NavLink>
              </div>

              {/* <--------------  User Manage  Nav Link    ---------------> */}

              <div className=" flex pl-2 items-center gap-x-4">
                <FaUsersGear className="text-[orange]" />
                <NavLink to="/dashboard/users">Users Manage</NavLink>
              </div>

              {/* <-------------   Places Nav Link    --------------> */}
              <div className=" flex pl-2 items-center gap-x-4">
                <MdAddLocationAlt className="text-[orange]" />
                <NavLink to="/dashboard/places-added">Place Added</NavLink>
              </div>

              {/* Travel Places Updates*/}
              <div className=" flex pl-2 items-center gap-x-4">
                <FaExchangeAlt className="text-[orange]" />
                <NavLink to="/dashboard/places-updates">Place Update</NavLink>
              </div>

              {/* <----------  Hotels Nav Link    -------------> */}
              <div className=" flex pl-2 items-center gap-x-4">
                <FaMagnifyingGlassPlus className="text-[orange]" />
                <NavLink to="/dashboard/hotels-added">Hotel Added</NavLink>
              </div>

              {/* Travel Hotel Updates*/}
              <div className=" flex pl-2 items-center gap-x-4">
                <GrUpdate className="text-[orange]" />
                <NavLink to="/dashboard/hotels-updates">Hotel Update</NavLink>
              </div>

              {/* <---------  Packages Nav Link    -----------> */}
              {/* Travel Packages */}
              <div className=" flex pl-2 items-center gap-x-4">
                <TbPackages className="text-[orange]" />
                <NavLink to="/dashboard/packages-added">Package Added</NavLink>
              </div>

              <div className=" flex pl-2 items-center gap-x-4">
                <LuPackageSearch className="text-[orange]" />
                <NavLink to="/dashboard/packages-updates">
                  Packages Update
                </NavLink>
              </div>

              {/* Blogs */}
              <div className=" flex pl-2 items-center gap-x-4">
                <MdAddCard className="text-[orange]"  /> 
                <NavLink to="/dashboard/blogs-added">Blog Added</NavLink>
              </div>

              {/* Blogs Updates*/}
              <div className=" flex pl-2 items-center gap-x-4">
                <TfiExchangeVertical className="text-[orange]" />
                <NavLink to="/dashboard/blogs-updates">Blog Update</NavLink>
              </div>

              {/* <----------   Profile Nav Link    ----------> */}

              <button
                onClick={handleLogout}
                className="btn text-[white] bg-[orange] hover:bg-[#326FC5] rounded-md px-2 py-2"
              >
                Log Out
              </button>
            </div>
          </div>
        </ul>
      </div>








      {/* mobile device */}




      <div className="w-[300px] hidden xl:block">
        {/* logo and title */}

        <div className=" bg-base-200   py-14 flex flex-col  items-center">
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
        <div className="bg-slate-300 flex flex-col gap-y-6 text-base font-bold px-5 py-10">
          {/* statistics */}
          <div className=" flex pl-2 items-center gap-x-4">
            <FcStatistics className="text-[orange]" />
            <NavLink to="/dashboard/statistics">Statistics</NavLink>
          </div>

          {/* all users */}
          <div className=" flex pl-2 items-center gap-x-4">
            <FaUsersGear className="text-[orange]" />
            <NavLink to="/dashboard/users">Users Manage</NavLink>
          </div>

          {/* <------------------   Places Nav Link    --------------------> */}

          {/* Travel Places added */}
          <div className=" flex pl-2 items-center gap-x-4">
            <MdAddLocationAlt className="text-[orange]" />
            <NavLink to="/dashboard/places-added">Place Added</NavLink>
          </div>

          {/* Travel Places Updates*/}
          <div className=" flex pl-2 items-center gap-x-4">
            <FaExchangeAlt className="text-[orange]" />
            <NavLink to="/dashboard/places-updates">Place Update</NavLink>
          </div>

          {/* <------------------   Hotels Nav Link    --------------------> */}

          {/* Hotel added */}
          <div className=" flex pl-2 items-center gap-x-4">
            <FaMagnifyingGlassPlus className="text-[orange]" />
            <NavLink to="/dashboard/hotels-added">Hotel Added</NavLink>
          </div>

          {/* Travel Hotel Updates*/}
          <div className=" flex pl-2 items-center gap-x-4">
            <GrUpdate className="text-[orange]" />
            <NavLink to="/dashboard/hotels-updates">Hotel Update</NavLink>
          </div>

          {/* <------------------   Packages Nav Link    --------------------> */}

          {/* Travel Packages */}
          <div className=" flex pl-2 items-center gap-x-4">
            <TbPackages className="text-[orange]" />
            <NavLink to="/dashboard/packages-added">Package Added</NavLink>
          </div>

          <div className=" flex pl-2 items-center gap-x-4">
            <LuPackageSearch className="text-[orange]" />
            <NavLink to="/dashboard/packages-updates">Packages Update</NavLink>
          </div>

          {/* <------------------  Blogs Nav Link    --------------------> */}

          {/* Blogs */}
          <div className=" flex pl-2 items-center gap-x-4">
            <MdAddCard className="text-[orange]"/> 
            <NavLink to="/dashboard/blogs-added">Blog Added </NavLink>
          </div>

          {/* Blogs Updates*/}
          <div className=" flex pl-2 items-center gap-x-4">
            <TfiExchangeVertical className="text-[orange]" />
            <NavLink to="/dashboard/blogs-updates">Blog Update</NavLink>
          </div>

          {/* <------------------  Profile Nav Link    --------------------> */}

          {/* profile */}
          {/* <div className=" mt-10 flex pl-2 items-center gap-x-4">
            {/* <IoPersonCircle className="text-[#3C76C2]" /> */}
          {/* <div>
            <img className="w-10 rounded-full"
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            <NavLink to="">Profile</NavLink>
          </div> */}

          <button
            onClick={handleLogout}
            className="btn text-[white] bg-[orange] hover:bg-[#326FC5] rounded-md px-4 py-2 my-10 font-extrabold text-base border-none"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
