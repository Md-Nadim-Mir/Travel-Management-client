
const PlacesDetails = (place) => {

    const {name,image, loaction , description}=place;


    return (
        <div>
               <h1>{name}</h1>
        </div>
    );
};

export default PlacesDetails;