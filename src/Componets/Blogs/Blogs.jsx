import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import OneBlog from "./OneBlog";

const Blogs = () => {

  // load all places
  const blogs = useLoaderData();



  return (
    <div className="font-serif">
      <Helmet>
        <title>Travel | Blogs</title>
      </Helmet>

      <h1 className="text-xl md:text-2xl font-bold mt-14 mb-8 text-[#FFA500]  px-2 md:px-4">
        Popular Blogs
      </h1>

      {/* all places card design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-12  px-2 md:px-4">
        {blogs.map((blog) => (
          <OneBlog key={blog._id} blog={blog}></OneBlog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
