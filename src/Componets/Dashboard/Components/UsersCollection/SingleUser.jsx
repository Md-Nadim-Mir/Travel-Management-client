import { MdAutoDelete } from "react-icons/md";

const SingleUser = ({ user, index }) => {
  const { displayName, email, role } = user;

  //   const handleDelete = (email) => {
  //     deleteUserData(email);
  //     toast.success("User delete successfully");
  //   };

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
          <select className="font-extrabold rounded" id="options" defaultValue={role} name="options">
            <option value="option1">User</option>
            <option value="option2">Admin</option>
          </select>
          <button className="btn btn-ghost btn-xs"></button>
        </th>

        <th>
          <button
            // onClick={() => handleDelete(singleUser.email)}
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
