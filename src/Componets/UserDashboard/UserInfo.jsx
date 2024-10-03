import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { NavLink, useLoaderData } from "react-router-dom";
import SingleUserInfoBooking from "./SingleUserInfoBooking";
import { FaHome } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const UserInfo = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        swal("Log Out Successfully !");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const bookingData = useLoaderData();

  const specificEmailBookings = bookingData.filter(
    (b) => b?.email === user?.email
  );

  console.log(specificEmailBookings);

  const [booking, setBooking] = useState(specificEmailBookings);
  console.log(booking);

  // const [a,setA]=useState(null)

  // useEffect(()=>{

  //     fetch(`http://localhost:3000/bookings/${user.email}`)
  //     .then(res=>res.json())
  //     .then(data=>setA(data))

  //     console.log(a)

  // },[])

  // Delete opearation

  const deleteFunction = (_id) => {
    fetch(`http://localhost:3000/bookings/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingPackages = booking.filter(
            (booked) => booked._id !== _id
          );
          setBooking(remainingPackages);
          swal(" ", "Travel Booking deleted successfully", "success");
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Travel | User Dashboard</title>
      </Helmet>

      <div className=" text-center text-xl md:text-2xl px-5 py-10 font-extrabold border-b-2 h-[200px] bg-[#0a97bd]">
        <h1 className="text-[#870c50dc] ">
          Welcome , <span className="text-[#07f93b]">{user.email}</span> to
          Travel.com site.
        </h1>

        <button className="text-[white] hover:text-[yellow]  border-[#4ddcfccc] hover:border-[orange] rounded-md px-10 py-2 my-10 mr-2">
          <NavLink to="http://localhost:5173/">
            <FaHome />
          </NavLink>
        </button>

        <button
          onClick={handleLogout}
          className="text-[white] hover:text-[yellow] border-4 border-[#4ddcfccc] hover:border-[orange] rounded-md px-10 py-2 my-10 "
        >
          Log Out
        </button>
      </div>

      {/* booking data load */}

      <div>
        <h1 className="text-center text-3xl font-bold my-10">
          {/* Booking History :{booking.length} */}
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
                <SingleUserInfoBooking
                  index={index}
                  key={booked._id}
                  booked={booked}
                  deleteFunction={deleteFunction}
                ></SingleUserInfoBooking>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
