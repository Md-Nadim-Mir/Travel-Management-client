import { useLoaderData } from "react-router-dom";



const Users = () => {
  const usersCollection = useLoaderData();

  return (
    <div className="py-5">
      <h1 className="text-2xl font-bold animate-pulse text-[green]">
        All Users : <span className="text-[red]">{usersCollection.length}</span>
      </h1>

      <div className="px-2">
        <div className="overflow-x-auto border">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
                   {
                       usersCollection.map(user=>)
                   }
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
