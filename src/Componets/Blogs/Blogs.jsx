import { Helmet } from "react-helmet-async";
import { Form, NavLink, useLoaderData } from "react-router-dom";
import OneBlog from "./OneBlog";
import { useState } from "react";

const Blogs = () => {

  // load all places
  const blogs = useLoaderData();

  const [search, setSearch] = useState("");



  return (
    <div className="font-serif">
      <Helmet>
        <title>Travel | Blogs</title>
      </Helmet>

      <h1 className="text-xl md:text-2xl font-bold mt-14 mb-8 text-[#FFA500]  px-2 md:px-4">
        Popular Blogs
      </h1>

      <Form className="p-5">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="my-3 w-full border-4 rounded-md p-2   font-bold"
          placeholder="Search By Title .  Example : Iceland"
        ></input>
      </Form>

      {/* all places card design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-12  px-2 md:px-4">
        {blogs.filter((blog) => {
            return search.toLowerCase() === ""
              ? blog
              : blog.name.toLowerCase().includes(search)}).map((blog) => ( <div key= {blog._id} className="card bg-base-100  shadow-xl">

                <div>
                  <figure>
                    <img src={blog.image} className="h-[50vh] rounded-t-2xl" alt="Shoes" />
                  </figure>
                </div>
        
                <div className="card-body">
                  <h2 className="card-title">{blog.name}</h2>
                  <p>{blog.writer}</p>
                  <div className="card-actions mt-4 justify-end">
                    <NavLink to={`/blogs/${blog._id}`}>
                      <button className="btn bg-[orange] hover:bg-[#326FC5] text-white">Visit Now</button>
                    </NavLink>
                  </div>
                </div>
                
              </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
