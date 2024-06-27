import { MdAutoDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SinglePlace = ({place , index, deleteFunction}) => {

    const {name,location,image,date,_id}=place;

    // handleDelete Opearation

    const handelDelete = (_id)=>{


          deleteFunction(_id)
    }

  return (
   
      <tr className="font-semibold">
        <td className="border-2 shadow-xl">{index+1}</td>

        <td className="border-2 shadow-xl">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={image}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </td>

        <td className="text-base font-bold border-2 shadow-xl">{name}</td>

        <td className="border-2 shadow-xl">{location}</td>

        <td className="border-2 shadow-xl">{date}</td>

        <th className="border-2 shadow-xl">
           <div className="flex items-center gap-2">
               <NavLink to={`/dashboard/places-updates/${_id}`}><button className="btn btn-accent text-white text-base btn-sm">Update</button></NavLink>
               <button onClick={()=>handelDelete(_id)} className="btn btn-secondary text-base"><MdAutoDelete></MdAutoDelete></button>
               
            </div> 
          
        </th>
      </tr>
    
  );
};

export default SinglePlace;



    
