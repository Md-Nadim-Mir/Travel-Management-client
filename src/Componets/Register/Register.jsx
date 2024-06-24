import { Link } from "react-router-dom";

const Register = () => {

  // form control
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="my-5 md:max-w-sm mx-auto">
      <div className="border rounded-md p-5">
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
              className="border-b my-5 outline-none font-medium block placeholder:text-black placeholder:text-sm placeholder:font-medium md:w-full "
              placeholder="First Name"
              id=""
            />

            {/* last name */}
            <input
              type="text"
              name="lastName"
              className="border-b my-5 outline-none font-medium block placeholder:text-black placeholder:text-sm placeholder:font-medium md:w-full "
              placeholder="Last Name"
              id=""
            />

            {/* email*/}
            <input
              type="email"
              name="email"
              className="border-b my-5 outline-none font-medium block placeholder:text-black placeholder:text-sm placeholder:font-medium md:w-full "
              placeholder="Email"
              id=""
            />

            {/* password */}
            <input
              type="password"
              name="password"
              className="border-b my-5 outline-none font-medium block placeholder:text-black placeholder:text-sm placeholder:font-medium md:w-full "
              placeholder="Password"
              id=""
            />
            {/* Confirm Password */}
            <input
              type="password"
              name="confirmPassword"
              className="border-b my-5 outline-none font-medium block placeholder:text-black placeholder:text-sm placeholder:font-medium md:w-full "
              placeholder="Confirm Password"
              id=""
            />

            {/* button */}
            <button className="btn bg-[#4ea7b3] w-full font-bold my-2">Create an account</button>

            {/* Already have an account? Login */}
            <h1 className="my-2 text-sm flex justify-center font-medium">Already have an account ?  <Link to='/login' className="font-bold ml-2 text-[#4ea7b3]">Login</Link></h1>
          </div>
        </form>
      </div>

         {/* or */}
         <h1 className="my-5 font-bold text-base text-center">Or</h1>

         <div>
              <div>
                  <h1>Continue with Facebook</h1>
              </div>
         </div>
      
    </div>
  );
};

export default Register;
