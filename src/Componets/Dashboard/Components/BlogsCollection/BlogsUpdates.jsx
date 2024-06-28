import { useState } from "react";
import swal from "sweetalert";
import SingleBlog from "./SingleBlog";
import { useLoaderData } from "react-router-dom";


const BlogsUpdates = () => {


  // all places data loaded
  const loadedData = useLoaderData();

  const [blogs, setBlogs] = useState(loadedData);

  
  // Delete opearation

  const deleteFunction = (_id) => {
    fetch(`http://localhost:3000/blogs/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingBlogs = blogs.filter((blog) => blog._id !== _id);
          setBlogs(remainingBlogs);
          swal(" ", "Travel places deleted successfully", "success");
        }
      });
  };

  

  return (
    <div>
      
      <h1 className="text-2xl text-center text-[green] font-bold py-5 my-12">
        All Places Database Overview : {blogs.length}
      </h1>

      {/* table */}
      <div className="overflow-x-auto border-4 rounded mx-2 my-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border-4 shadow-2xl text-base font-extrabold text-black">
              <th className="border-4 shadow-xl">No</th>
              <th className="border-4 shadow-xl">Image</th>
              <th className="border-4 shadow-xl">Name</th>
              <th className="border-4 shadow-xl">Writer</th>
              <th className="border-4 shadow-xl">Post Date</th>
              <th className="border-4 shadow-xl">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog, index) => (
              <SingleBlog
                index={index}
                key={blog._id}
                blog={blog}
                deleteFunction={deleteFunction}
              ></SingleBlog>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogsUpdates;