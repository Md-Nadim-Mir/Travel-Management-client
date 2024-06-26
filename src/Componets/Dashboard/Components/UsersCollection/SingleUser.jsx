import { MdAutoDelete } from "react-icons/md";

const SingleUser = ({ user, index }) => {
  const { displayName, email, role } = user;

//   const handleDelete = (email) => {
//     deleteUserData(email);
//     toast.success("User delete successfully");
//   };

  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th> {index + 1}</th>


        <td>
          <div>
            <div className="font-bold">{displayName}</div>
          </div>
        </td>

        <td>
          <div>
            <div className="font-bold">{email}</div>
          </div>
        </td>
        <th>
          <button className="btn btn-ghost btn-xs">{role}</button>
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
