
import { useContext, useEffect, useState } from "react";
import { FaArrowsTurnRight } from "react-icons/fa6";
import { Form, useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from 'axios';
// import swal from "sweetalert";

const PackagesDetails = () => {
  const loadPackage = useLoaderData();

  const { user } = useContext(AuthContext);


  const [allUser,setUser]=useState(null)

  useEffect(()=>{
    
     fetch(`http://localhost:3000/users`)
     .then(res=>res.json())
     .then(data=>setUser(data.find((a)=>a?.email ===user?.email)))

  },[])


    
    

 

  const {
    placeName,
    placeImage,
    placeDescription,
    hotelName,
    hotelImage,
    hotelLocation,
    hotelDescription,
    price,
    postedDate,
  } = loadPackage;

  // placeDescription convert
  const str1 = placeDescription;
  const parts1 = str1.split("#");

  // hotelDescription convert
  const str2 = hotelDescription;
  const parts2 = str2.split("#");

 


  // <<< ----------- Packages info sent to backend -------------- >>> 

  const handleBooking =(e)=>{


   console.log(user.email)

    e.preventDefault();

    const date = e.target.date.value;
   

    //  console.log(placeName,placeImage,price,hotelName,hotelImage,hotelLocation,date,user.email)
    let newBooking;

     {
       if(date !== ''){

        newBooking={
          placeName:placeName,
          placeImage:placeImage,
          price:price,
          hotelName:hotelName,
          hotelImage:hotelImage,
          hotelLocation:hotelLocation,
          date:date,
          condition:'pending',
          email:user.email
        }

       }

       else{
        swal("", "Please Select Your Tour Date !", "error");
        return;
       }
          
        
       
     }


     console.log(user.email)


  // <-------------------  Post Method : New Packages bookings added to database ------->
    
     
  axios.post("http://localhost:3000/create-paymet",{
  info:newBooking,
   })
  .then((res)=>{
     console.log(res);
 
     const redirectUrl = res.data.paymentUrl;
 
     if(redirectUrl){

        window.location.replace(redirectUrl);

       
     }

 
   })
    
    
    
    
  //  fetch("http://localhost:3000/bookings/", {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(newBooking),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     swal("", "New booings added successfully !", "success");
      
  //   });



  }



  return (
    <Form className="pb-10 font-serif md:px-4" onSubmit={handleBooking}>
      <h1 className="text-lg md:text-3xl font-extrabold mt-12 mb-2 mx-2">
        {placeName}
      </h1>
      <h1 className="text-lg  font-extrabold mt-4 mb-2 mx-2">
        Date: {postedDate}
      </h1>

      {/* section 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-4  mt-12 mb-2 mx-2 ">
        <div className="col-span-2 w-full  ">
          <img src={placeImage} className="h-[60vh] w-full rounded" alt="" />
        </div>

        <div className="xl:pl-20">

        <h1 className="text-lg  font-extrabold mt-2 mb-2 mx-2">
            Most tourist place
          </h1>

          {parts1.map((part1, index) => (
            <div
              key={index}
              className="p-3 mx-2  font-medium px-5 flex  items-center  "
            >
              <FaArrowsTurnRight className="mr-2 text-lg font-bold " />{" "}
              <h1 className="font-medium">{part1}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* section 3 */}
      <h1 className="text-lg md:text-3xl font-extrabold mt-12 mb-2 mx-2">
        {hotelName}
      </h1>
      <h1 className="text-lg  font-extrabold md:text-xl  mt-4 mb-2 mx-2">
        {hotelLocation}
      </h1>

      <div className="flex flex-col-reverse lg:grid md:grid-cols-4 gap-2 mt-4 mb-2 mx-2  p-1  items-center">
        <div className=" col-span-2">
          

          {parts2.map((part1, index) => (
            <div
              key={index}
              className="p-3 mx-2   font-semibold px-5 flex  items-center  "
            >
              <FaArrowsTurnRight className="mr-2  text-lg font-bold " />{" "}
              <h1 className="font-medium">{part1}</h1>
            </div>
          ))}

          <div className="grid grid-cols-1  md:grid-cols-3 w-full justify-center gap-5 mt-10">
            <h1 className="btn bg-[orange] mb-4 text-white font-bold px-2">$ {price}</h1>

            <input name="date" className="border-4  rounded-md h-12 px-2" type="date" />

           {
              allUser?.role ==='admin' ? 
              <button
              type="submit"
              disabled
              className="btn cursor-not-allowed bg-[orange] hover:bg-[#326FC5] text-white  mb-4  font-bold px-2"
            >
              Booking Now
            </button>
            :
            <button
            type="submit"
            className="btn  bg-[orange] hover:bg-[#326FC5] text-white  mb-4  font-bold px-2"
          >
            Booking Now
          </button>
           }
          </div>
        </div>

        <div className="col-span-2 w-full  ">
          <img src={hotelImage} className="h-[3/4] w-full rounded" alt="" />
        </div>
      </div>
    </Form>
  );
};

export default PackagesDetails;
