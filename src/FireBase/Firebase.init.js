import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const FirebaseAuthontication = () => {
    
    initializeApp(firebaseConfig)
}

export default FirebaseAuthontication;