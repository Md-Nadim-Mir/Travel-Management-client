import { MdAutoDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SinglePlace = ({place , index, deleteFunction}) => {

    const {name,location,image,_id}=place;

    // handleDelete Opearation

    const handelDelete = (_id)=>{


          deleteFunction(_id)
    }

  return (
   
      <tr>
        <td>{index+1}</td>

        <td>
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={image}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </td>

        <td>{name}</td>

        <td>{location}</td>

        <th>
           <div className="flex items-center gap-2">
               <NavLink><button className="btn btn-accent text-white text-base btn-sm">Update</button></NavLink>
               <button onClick={()=>handelDelete(_id)} className="btn btn-secondary text-base"><MdAutoDelete></MdAutoDelete></button>
               
            </div> 
          
        </th>
      </tr>
    
  );
};

export default SinglePlace;
