import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/Firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const authInfo={name:'md nadim mir'}
    

    return (
        <AuthContext.Provider value={authInfo}>

            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;