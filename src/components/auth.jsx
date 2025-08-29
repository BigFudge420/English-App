import {auth} from "../config/firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

export const Auth = ()=>{
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [status, setStatus] = useState("")

    async function logIn(user,password){
        const email = `${user}@myapp.local` 
        setError("")
        setStatus("")

        try{
            const userCred = await signInWithEmailAndPassword(auth, email, password)
            console.log("Logged in as:", userCred.user.uid)
            setStatus("Login Successful")

            {status && <p style={{ color:"green" }}>{status}</p>}
        }catch (err){
            console.error(err)

            if (err.code === "auth/invalid-email" || err.code==="auth/invalid-credential"){
                setError("Invalid Email or Password, Please check and try again")
            }else {
                setError("Other error")
            }
        } 
    }   
    
    return(
        <div>
            <input placeholder="Username..." onChange={(e)=>setUser(e.target.value)} />
            <input placeholder="Password..." onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={() => logIn(user, password)}>Log in</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {status && <p style={{ color: "green"}}>{status}</p>}
        </div>
    )    
}

//Usernames & Passwords
//team0 => ubstairs
//admin => neverpineapple