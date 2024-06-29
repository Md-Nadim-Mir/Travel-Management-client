import { NavLink } from "react-router-dom";


const OnePackage = ({packaged}) => {

    const { placeName, placeImage, price, hotelLocation,  _id } = packaged;

    return (
        <div className="card bg-base-100  shadow-xl">
        <figure>
          <img src={placeImage} className="h-[50vh]" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{placeName}</h2>
          <p>{hotelLocation}</p>
          <p>$ {price}</p>
          <div className="card-actions justify-end">
            <NavLink to ={`/packages/${_id}`}>
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

export default OnePackage;