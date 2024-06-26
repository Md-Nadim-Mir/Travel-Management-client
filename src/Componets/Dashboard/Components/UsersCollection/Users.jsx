import { useLoaderData } from "react-router-dom";
import SingleUser from "./SingleUser";
import swal from "sweetalert";
import { useState } from "react";

const Users = () => {
  const usersCollection = useLoaderData();
  const loadUsers = usersCollection.filter((user) => user.role == "user");
  const [users, setUsers] = useState(loadUsers);



  // <------------ delete function ------------->
  const deleteFunction = (_id) => {
    console.log(_id);
    fetch(`http://localhost:3000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deletedCount > 0) {
          swal("", "User deleted Successfully !", "success");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };

  //  <--------------  update function ------------------->

  const updateFunction = (_id,updateInfo)=>{
      console.log(_id,updateInfo);

      fetch(`http://localhost:3000/users/${_id}`,{
          method:'PUT',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(updateInfo)
      })
      .then(res=>res.json())
      .then((data)=>{
           console.log(data);

           if(data.modifiedCount > 0){
            
              const remainingUser = users.filter(user=>user._id !== _id);
              setUsers(remainingUser);

              swal('','User role updated successfully','success')

           }
      })
  }

  return (
    <div className="py-5">
      {users.length >= 1 ? (
        <h1 className="text-2xl font-bold animate-pulse text-[green] ">
          Number Of Users : <span className="text-[red]">{users.length}</span>
        </h1>
      ) : (
        <h1 className="text-2xl font-bold animate-pulse text-[green] ">
          No Users Found
        </h1>
      )}

      {/*  user data show in table format */}

      {users.length >= 1 ? (
        <div className="overflow-x-auto mt-16 border mx-2 bg-[#0c767a] rounded-xl ">
          <table className="table">
            {/* head */}
            <thead className=" font-extrabold text-[16px] text-[#68b30e] bg-[black]">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Delete</th>
              </tr>
            </thead>

            {users.map((user, index) => (
              <SingleUser
                index={index}
                key={user._id}
                user={user}
                deleteFunction={deleteFunction}
                updateFunction={updateFunction}
              ></SingleUser>
            ))}
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Users;
