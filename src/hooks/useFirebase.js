import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseAuthontication from "../FireBase/Firebase.init";

FirebaseAuthontication();

const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const useFirebase = () => {

    const [pageReload,setPageReload] = useState(true)

    const [user, setUser] = useState([]);

    const handleGoogleSignIn = () => {
    
     return   signInWithPopup(auth, googleProvider)
            
    }

    const handleGithubSignIn = () => {
            
     return signInWithPopup(auth, githubProvider)
    }

    const userUpdate = (name) => {
        
      return updateProfile(auth.currentUser, {
        displayName: name
       
      });
    }
    useEffect(() => {

        const unsubscribe = () => {

            onAuthStateChanged(auth, user => {
                
                if (user) {
                    
                    setUser(user);
                }

                setPageReload(false)
            })

            
        }
        return  unsubscribe();
    }, [])

    const handleSignIn = (email, password) => {
           
      return createUserWithEmailAndPassword(auth, email, password)
    };

    const handleLogin = (email, password) => {
                
     return   signInWithEmailAndPassword(auth,email,password)
    }

    
    const LogOut = () => {
        setPageReload(true)
        signOut(auth)
            .then(() => {
            setUser({})
        }).finally(()=> setPageReload(false))
    }
    return {
      user,
      handleGoogleSignIn,
      LogOut,
      handleGithubSignIn,
      handleSignIn,
      setUser,
      handleLogin,
      pageReload,
      userUpdate,
    };
};

export default useFirebase;
