import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const UserInfo = () => {

    const { user, logout } = useContext(AuthContext);

    return (
        <div>
               <div className="text-center text-xl md:text-2xl px-5 py-10 font-extrabold border-b-2 h-[200px] bg-[#0a97bd]">
                     <h1 className="text-[#870c50dc] ">Welcome , <span className="text-[#07f93b]">{user.email}</span> to Travel.com site.</h1>
                     <button className="text-red-200 hover:text-[yellow] border-4 border-[#ee7151cc] hover:border-[orange] rounded-md px-10 py-2 my-10">LogOut</button>
               </div>
        </div>
    );
};

export default UserInfo;