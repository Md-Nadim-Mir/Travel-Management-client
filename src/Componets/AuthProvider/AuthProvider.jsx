import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/Firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

//   create user  email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


//  sign in with google 
 
  const signInGoogle=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
  }


//  sing in with email and password 
 
 const logIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
 }

   // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      // console.log('CurrentUser-->', currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, []) 

  const authInfo = { user, loading, setLoading, createUser ,signInGoogle , logIn};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
