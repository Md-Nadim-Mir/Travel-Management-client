import { useLoaderData } from "react-router-dom";
import SingleUser from "./SingleUser";



const Users = () => {
  const usersCollection = useLoaderData();
  const users = usersCollection.filter(user => user.role == 'user')

  return (
    <div className="py-5">
     
      {
        users ? 
        <h1 className="text-2xl font-bold animate-pulse text-[green] ">
        Number Of Users : <span className="text-[red]">{users.length}</span></h1> :''
      }

       {/*  user data show in table format */}

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

                    {
                        users.map((user, index) => <SingleUser index={index} key={user._id} user={user}></SingleUser>)
                    }




                </table>
            </div>
    </div>
  );
};

export default Users;
