import { useLoaderData } from "react-router-dom";


const PackagesDetails = () => {

    const loadPackage = useLoaderData();

  const { placeName,placeImage,placeDescription,hotelName,hotelImage,hotelLoaction,hotelDescription,pirce,postedDate } = loadPackage;

            
  const str1 = placeDescription;
  const parts1 = str.split("#");

    return (
        <div>
                <h1>Packages Details</h1>
        </div>
    );
};

        export default PackagesDetails;