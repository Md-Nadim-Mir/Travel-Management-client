import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import axios from "axios";

const HotelsDetails = () => {

  const loadHotel = useLoaderData();
  const { user } = useContext(AuthContext);
  const [allUser,setUser]=useState(null)

  useEffect(()=>{
    
     fetch(`http://localhost:3000/users`)
     .then(res=>res.json())
     .then(data=>setUser(data.find((a)=>a?.email ===user?.email)))

  },[])

  const { name, image, location, description, date } = loadHotel;

  const hotelName = name;
  const hotelImage=image;
  const hotelLocation=location;

  const str = description;
  const parts = str.split("#");


  // handleSubmit for booking hotel

  const handleSubmit = (e)=>{
      
    console.log(user.email)

    e.preventDefault();

    const date = e.target.date.value;
   

    //  console.log(placeName,placeImage,price,hotelName,hotelImage,hotelLocation,date,user.email)
    let newBooking;

     {
       if(date !== ''){

        newBooking={
         
          hotelName:hotelName,
          hotelImage:hotelImage,
          hotelLocation:hotelLocation,
          date:date,
          price:160,
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



     // <-------------------  Post Method : New Hotel bookings added to database ------->
    
     
  axios.post("http://localhost:3000/create-payment-hotels",{
    info:newBooking,
     })
    .then((res)=>{
       console.log(res);
   
       const redirectUrl = res.data.paymentUrl;
   
       if(redirectUrl){
  
          window.location.replace(redirectUrl);
  
         
       }
  
   
     })
    
  }

  return (
    <form onSubmit={handleSubmit} className="pb-10 font-serif md:px-4">
      <h1 className="text-lg md:text-3xl font-extrabold mt-12 mb-2 mx-2">
        {name}
      </h1>
      <h1 className="mx-2 mb-2  font-semibold">{location}</h1>
      <h1 className="mx-2 mb-4  font-normal">Date : {date}</h1>

      <img src={image} className="w-full h-[60vh] rounded-xl px-2" alt="" />

      <h1 className="mx-2 mt-12 mb-4 text-lg md:text-2xl  font-bold">Reason to stay {name}</h1>


     {
        parts.map((part,index)=><li key={index} className="mx-2 mb-4  font-medium px-5">{part}</li>)
     }

     <div className="grid grid-cols-1  md:grid-cols-3 w-full justify-center gap-5 mt-10 px-10">
            <h1 className="btn bg-[orange] mb-4 text-white font-bold px-2">$160</h1>

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

    </form>
  );
};

export default HotelsDetails;
