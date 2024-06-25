import { Link, NavLink } from "react-router-dom";
import logo from '../../../public/logo.png'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";


const Navbar = () => {

   const links = <>
               <NavLink to='/'><li><a>Home</a></li></NavLink>
               <NavLink to='/places'><li><a>Places</a></li></NavLink>
               <NavLink to='/packages'><li><a>Packages</a></li></NavLink>
               <NavLink to='/Blogs'><li><a>Blogs</a></li></NavLink>
               <NavLink to='/dashboard'><li><a>Dashboard</a></li></NavLink>

</>

  const {user , logout}=useContext(AuthContext);


  const handleLogout = ()=>{
      console.log('log out successful');
      
      logout()
      .then(()=>{
        swal('','Logout Successful','success')
      })
      .catch((error)=>{
         console.log(error.message)
      })
  }


    return (

<div className="border-b-2 mb-2">
{/* fixed shadow-xl max-w-7xl rounded-lg */}
<div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-md">
       {
         links
       }
      </ul>
    </div>
    
    <img className="w-1/4 block" src={logo} alt="" />
    <NavLink to='/' className="md:text-base font-bold "><span className="md:text-2xl text-[orange] font-extrabold">Travel.</span><span className="md:text-2xl text-[#326fc5] font-extrabold">com</span></NavLink>

  </div>
  <div className="navbar-center hidden lg:flex text-xl">
    <ul className="menu menu-horizontal px-1 text-base font-bold ">
       {
         links
       }
    </ul>
  </div>
  <div className="navbar-end ">
    {
      user ? 
      <NavLink  onClick={handleLogout} className="btn bg-[#4ea7b3]  font-bold md:text-base text-md ">Logout</NavLink> 
      :
      <NavLink  to='/register' className="btn bg-[#4ea7b3]  font-bold md:text-base text-md ">Register</NavLink>
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;