import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import SinglePackage from "./SinglePackage";

const PackagesUpdate = () => {

  // all packages data loaded
  const loadedData = useLoaderData();

  const [packages,setPackages] = useState(loadedData);

  
  // Delete opearation

  const deleteFunction = (_id) => {
    fetch(`http://localhost:3000/packages/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingPackages = packages.filter((packaged) => packaged._id !== _id);
          setPackages(remainingPackages);
          swal(" ", "Travel package deleted successfully", "success");
        }
      });

    };


  return (
    <div>
      <h1 className="text-2xl text-center text-[green] font-bold py-5 my-12">
        All Packages Database Overview : {packages.length}
      </h1>


        {/* table */}
    <div className="overflow-x-auto border-4 rounded mx-2 my-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="border-4 shadow-2xl text-base font-extrabold text-black">
            <th className="border-4 shadow-xl">No</th>
            <th className="border-4 shadow-xl">Place Image</th>
            <th className="border-4 shadow-xl">Place Name</th>
            <th className="border-4 shadow-xl">Place Location</th>
            <th className="border-4 shadow-xl">Hotel Image</th>
            <th className="border-4 shadow-xl">Hotel Name</th>
            <th className="border-4 shadow-xl">Hotel Location</th>
            <th className="border-4 shadow-xl">Post Date</th>
            <th className="border-4 shadow-xl">Actions</th>
          </tr>
        </thead>

        <tbody>
        {packages.map((packaged, index) => (
           <SinglePackage
              index={index}
              key={packaged._id}
              packaged={packaged}
              deleteFunction={deleteFunction}
            ></SinglePackage>
          ))}
        </tbody>
      </table>
    </div>  

    </div>
  );
};

export default PackagesUpdate;
