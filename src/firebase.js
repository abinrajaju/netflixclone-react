
import { initializeApp } from "firebase/app";


import { createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { addDoc,collection,getFirestore} from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyDlWnZ5wR_NrH1xDef5F24it0zIY01L708",
  authDomain: "netflix-clone-d92d4.firebaseapp.com",
  projectId: "netflix-clone-d92d4",
  storageBucket: "netflix-clone-d92d4.firebasestorage.app",
  messagingSenderId: "247706488353",
  appId: "1:247706488353:web:ddf3325758ef6cea0f5d60",
  measurementId: "G-35CFJQTMRM"
};


const app = initializeApp(firebaseConfig);


const auth=getAuth(app)
const db=getFirestore(app)

const signup= async(name,email,password)=>{
  try {
    const res= await createUserWithEmailAndPassword(auth,email,password);
    const user= res.user;
    await addDoc(collection(db,"user"),
    {uid:user.uid,
        name,
        authProvider:"local",
        email})
  } catch (error) {
    console.log(error);
    alert(error);
    
  }
}


const login= async(email,password)=>{
    try {
      await  signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        alert(error)
        
    }
}

const logout=()=>{
    signOut(auth);
}

export{
    auth,db,login,signup,logout
}