import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import OnePackage from "./OnePackage";

const Packages = () => {
  // load all places
  const packages = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Travel | Packages</title>
      </Helmet>

      <h1 className="text-center text-xl md:text-2xl font-bold mt-14 mb-20">
        Our Travel Packages
      </h1>

      {/* all places card design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 my-24">
        {packages.map((packaged) => (
          <OnePackage key={packaged._id} packaged={packaged}></OnePackage>
        ))}
      </div>
    </div>
  );
};

export default Packages;
