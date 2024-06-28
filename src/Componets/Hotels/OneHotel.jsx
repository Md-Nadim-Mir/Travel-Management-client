import { NavLink } from "react-router-dom";


const OneHotel = ({hotel}) => {

    const { name, image, location, _id } = hotel;

    return (
        <div className="card bg-base-100  shadow-xl">
        <figure>
          <img src={image} className="h-[50vh]" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{location}</p>
          <div className="card-actions justify-end">
            <NavLink to ={`/hotels/${_id}`}>
              <button className="btn btn-primary"
              >
                Visit Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default OneHotel;