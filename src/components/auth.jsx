import {auth} from "../config/firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import {getFirestore, doc, getDoc} from "firebase/firestore"
import { useState } from "react"

const db = getFirestore()

export const Auth = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function logIn(email ,password){
        
        const userCred = await signInWithEmailAndPassword(auth, email, password)
        console.log("Logged in as:", userCred.user.uid)

    } 
    
    return(
        <div>
            <input placeholder="Username..." onChange={(e)=>setEmail(e.target.value)} />
            <input placeholder="Password..." onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={() => logIn(email, password)}>Log in</button>
        </div>
    )    
}

    
