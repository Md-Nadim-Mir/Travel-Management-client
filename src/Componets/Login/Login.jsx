import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";

const Login = () => {
  // form control
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bgImage py-2 rounded-lg m-2 xl:m-0">
      <div className="border my-5 md:max-w-sm md:mx-auto mx-2 py-2 shadow-2xl rounded-lg">
        <div className=" rounded-md p-5">
          <form onSubmit={handleSubmit}>
            {/* title */}
            <h1 className=" md:text-[20px] font-bold my-6 px-10">Login</h1>

            <div className="px-10 py-2 md:py-4">
              {/* email*/}
              <input
                type="email"
                name="email"
                className="border-b my-5 outline-none font-medium block placeholder:text-black placeholder:text-sm placeholder:font-medium md:w-full pl-1 rounded-md"
                placeholder="Email"
                id=""
              />

              {/* password */}
              <input
                type="password"
                name="password"
                className="border-b my-5 outline-none font-medium block placeholder:text-black placeholder:text-sm placeholder:font-medium md:w-full pl-1 rounded-md"
                placeholder="Password"
                id=""
              />

              {/* forger password */}
              <div className="flex justify-end my-5">
                <Link onClick={""} className="underline font-semibold ">
                  Forgot password
                </Link>
              </div>

              {/* button */}
              <button className="btn bg-[#4ea7b3] w-full font-bold my-2">
                Login
              </button>

              {/* crete account */}
              <h1 className="my-2 text-[10px] md:text-sm flex justify-center font-bold md:font-medium">
                Don't have an account ?
                <Link to="/register" className="font-bold ml-1 text-[black]">
                  Register
                </Link>
              </h1>
            </div>
          </form>
        </div>

        <hr className="text-[#e13232] px-2" />

        <div className="flex flex-col justify-center px-5">
          {/* or */}
          <h1 className="my-5 font-bold text-base text-center">Or</h1>

          {/* connect facebook */}
          <div className="flex gap-5 border rounded-2xl px-2 py-2 btn bg-white hover:bg-white my-1">
            <FaFacebook className="bg-[white] text-[#3076FF] text-[24px]"></FaFacebook>
            <h1 className="font-medium text-[16px]">Continue with Facebook</h1>
          </div>

          {/* connect google */}
          <div className="flex gap-5 border rounded-2xl px-2 py-2 btn bg-white hover:bg-white my-1">
            <FcGoogle className="bg-[white] text-[#3076FF] text-[24px]"></FcGoogle>
            <h1 className="font-medium text-[16px]">Continue with Google</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
