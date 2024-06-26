import { FaCheckCircle } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SingleUser = ({ user, index }) => {
  const { displayName, email, role } = user;

    const handleDelete = (email) => {
    //   deleteUserData(email);
    //   toast.success("User delete successfully");
    console.log(email)
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
        <th >
          <div className="flex gap-x-4 items-center">
            <select
              className="font-extrabold rounded"
              id="options"
              defaultValue={role}
              name="options"
            >
              <option value="option1">User</option>
              <option value="option2">Admin</option>
            </select>

           <NavLink onClick={''}> <FaCheckCircle className="text-[#eaea42] text-2xl bg-none m-1" /></NavLink>
          </div>

      
        </th>

        <th>
          <button
            onClick={() => handleDelete(email)}
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
