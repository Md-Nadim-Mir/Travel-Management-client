import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import "./Register.css";
import { Helmet } from "react-helmet-async";

const Register = () => {
  // form control
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    console.log(firstName, lastName, email, password, confirmPassword);
    form.reset();
  };

  return (
    < div className="my-5 md:my-12">
      <div className="bgImage  rounded-lg  py-10 m-2 xl:m-0">
        <div className=" m-5 md:max-w-sm md:mx-auto mx-2 pb-5 shadow-2xl rounded-lg">
          <div className=" rounded-md p-5 bg-white">
            <Helmet>
              <title>Travel | Register</title>
            </Helmet>
            <form onSubmit={handleSubmit}>
              {/* title */}
              <h1 className=" md:text-[20px] font-bold my-6 px-10">
                Create an account
              </h1>

              <div className="px-10 py-2 md:py-4">
                {/* first name */}
                <input
                  type="text"
                  name="firstName"
                  className="border-b my-5 outline-none font-medium block placeholder:text-black placeholder:text-sm placeholder:font-medium md:w-full pl-1 rounded-md"
                  placeholder="First Name"
                 
                />

                {/* last name */}
                <input
                  type="text"
                  name="lastName"
                  className="border-b my-5 outline-none font-medium block placeholder:text-black placeholder:text-sm placeholder:font-medium md:w-full pl-1 rounded-md"
                  placeholder="Last Name"
                 
                />

                {/* email*/}
                <input
                  type="email"
                  name="email"
                  className="border-b my-5 outline-none font-medium block placeholder:text-black placeholder:text-sm placeholder:font-medium md:w-full pl-1 rounded-md"
                  placeholder="Email"
                 
                />

                {/* password */}
                <input
                  type="password"
                  name="password"
                  className="border-b my-5 outline-none font-medium block placeholder:text-black placeholder:text-sm placeholder:font-medium md:w-full pl-1 rounded-md"
                  placeholder="Password"
                 
                />
                {/* Confirm Password */}
                <input
                  type="password"
                  name="confirmPassword"
                  className="border-b my-5 outline-none font-medium block placeholder:text-black placeholder:text-sm placeholder:font-medium md:w-full pl-1 rounded-md"
                  placeholder="Confirm Password"
                 
                />

                {/* button */}
                <button className="btn bg-[#4ea7b3] w-full font-bold my-2">
                  Create an account
                </button>

                {/* Already have an account? Login */}
                <h1 className="my-2 text-[10px] md:text-sm flex justify-center font-bold md:font-medium">
                  Already have an account ?
                  <Link to="/login" className="font-bold ml-1 text-[black]">
                    Login
                  </Link>
                </h1>
              </div>
            </form>
          </div>

          <div className="flex flex-col justify-center px-5">
            {/* or */}
            <h1 className="my-5 font-bold text-base text-center">Or</h1>

            {/* connect facebook */}
            <div className="flex gap-5 border rounded-2xl px-2 py-2 btn bg-white hover:bg-white my-1">
              <FaFacebook className="bg-[white] text-[#3076FF] text-[24px]"></FaFacebook>
              <h1 className="font-medium text-[16px]">
                Continue with Facebook
              </h1>
            </div>

            {/* connect google */}
            <div className="flex gap-5 border rounded-2xl px-2 py-2 btn bg-white hover:bg-white my-1">
              <FcGoogle className="bg-[white] text-[#3076FF] text-[24px]"></FcGoogle>
              <h1 className="font-medium text-[16px]">Continue with Google</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
