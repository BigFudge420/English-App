import {auth} from "../config/firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { use } from "react"
import { useState } from "react"
import {useNavigate} from "react-router-dom"

export const Auth = ()=>{
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    async function logIn(user,password){
        const email = `${user}@myapp.local` 
        setError("")

        try{
            const userCred = await signInWithEmailAndPassword(auth, email, password)
            console.log("Logged in as:", auth?.currentUser?.email)
            
            navigate("/home")

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
            <input placeholder="Password..." type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={() => logIn(user, password)}>Log in</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    )    
}

//Usernames & Passwords
//team0 => ubstairs
//admin => neverpineapple