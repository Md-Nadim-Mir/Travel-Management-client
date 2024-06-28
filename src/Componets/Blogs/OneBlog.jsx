import { NavLink } from "react-router-dom";

const OneBlog = ({ blog }) => {
  const { name, image, writer, _id } = blog;

  return (
    <div>
      <div className="card bg-base-100  shadow-xl">

        <div>
          <figure>
            <img src={image} className="h-[50vh]" alt="Shoes" />
          </figure>
        </div>

        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{writer}</p>
          <div className="card-actions justify-end">
            <NavLink to={`/blogs/${_id}`}>
              <button className="btn btn-primary">Visit Now</button>
            </NavLink>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default OneBlog;
