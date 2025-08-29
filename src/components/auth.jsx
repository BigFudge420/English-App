import {auth} from "../config/firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import {getFirestore, doc, getDoc} from "firebase/firestore"
import { useState } from "react"

export const Auth = ()=>{
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    async function logIn(user,password){
        const email = `${user}@myapp.local` 

        try{
            const userCred = await signInWithEmailAndPassword(auth, email, password)
            console.log("Logged in as:", userCred.user.uid)
        }catch (err){
            if (err.code === "auth/invalid-email"){
                console.error("❌ User does not exist")
            }
            else if (err.code === "auth/invalid-credential") {
                console.error("❌ Wrong password for that user")
            } else {
                console.error("Other error:", err.message)
            }
        } 
    }   
    
    return(
        <div>
            <input placeholder="Username..." onChange={(e)=>setUser(e.target.value)} />
            <input placeholder="Password..." onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={() => logIn(user, password)}>Log in</button>
        </div>
    )    
}

