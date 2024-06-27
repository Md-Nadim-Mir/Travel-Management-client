import {  useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
// import { NavLink } from "react-router-dom";

const SingleUser = ({ user, index, deleteFunction , updateFunction }) => {
  const { displayName, email, role, _id } = user;


  //  user role change start 

  const [selectedRole, setSelectedRole] = useState(role);

  const handleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  //  user role chane end 

  // <------------- update opearations ------------------>
  const handleUpdate = (e) => {
    e.preventDefault();
    const role = (e.target.options.value)
    // const newRole = (e.target.userRole.value)
   
    const updateInfo = {role};

    updateFunction(_id,updateInfo)


  };

  //  <--------- delete opearation -------------->
  const handleDelete = (_id) => {
    console.log(_id);
    deleteFunction(_id);
  };

  return (
    <tbody className="text-[#0a0a0a]">
      {/* row 1 */}
      <tr>
        <th> {index + 1}</th>

        <td>
          <div>
            <div className="font-extrabold">{displayName}</div>
          </div>
        </td>

        <td>
          <div>
            <div className="font-extrabold">{email}</div>
          </div>
        </td>
        <th>
          <div className="flex">
            <form onSubmit={handleUpdate}>
              <select
                className="font-extrabold rounded"
                id="options"
                value={selectedRole}
                name="userRole"
                onChange={handleChange}
              >
                 <option value="user">User</option>
                 <option value="admin">Admin</option>
              </select>

              <button className=" ml-5" type="submit">
                <FaCheckCircle className="text-[#eaea42] text-2xl bg-none m-1" />
              </button>
            </form>
          </div>
        </th>

        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-secondary text-base "
          >
            <MdAutoDelete></MdAutoDelete>
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default SingleUser;















