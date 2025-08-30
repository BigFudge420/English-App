import {auth} from "../config/firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { use } from "react"
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import "../index.css"

export const Auth = ()=>{
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()

    async function logIn(user,password){
        const email = `${user}@myapp.local` 
        setError("")

        try{
            const userCred = await signInWithEmailAndPassword(auth, email, password)
            console.log("Logged in as:", auth?.currentUser?.email)

            if(user==="admin"){
                navigate("/admin")
            }else{
                navigate("/home")
            }
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
        <div className="box" >
            <div className="textContainer">
                <h2 className="h1 boxElement">English Portal</h2>
                <p className="sub boxElement">Sign In</p>
            </div>
            <div class="shapes">
                <div id="circle1"></div>
                <div id="hollow-outer"></div>
                <div id="hollow-inner"></div>
                <div id="triangle-border"></div>
                <div id="triangle"></div>
                <div id="square"></div>
                 <svg class="motion-lines" viewBox="150 0 30 150" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 20 C60 0, 90 100, 280 60" stroke="#a5723eff" stroke-width="4" fill="none" opacity="0.9"/>
                    <path d="M20 90 C100 60, 160 120, 280 90" stroke="#925519ff" stroke-width="3" fill="none" opacity="0.5"/>
                    <path d="M0 160 C90 100, 200 160, 300 130" stroke="#845510ff" stroke-width="2" fill="none" opacity="0.7"/>
                </svg>
            </div>
            <input className="username boxElement" placeholder="Username..." onChange={(e)=>setUser(e.target.value)} />
            <div className="passContainer">
                <input className="password  boxElement" placeholder="Password..." type={showPass?"text":"password"} onChange={(e)=>setPassword(e.target.value)}/>
                <button className="showPassBtn  boxElement" onClick={() => setShowPass(!showPass)}>{showPass? "🔒":"🔓"}</button>
            </div>
            <button className="logInBtn boxElement" onClick={() => logIn(user, password)}>Log in</button>
            {error && <p className="errorMsg" style={{ color: "red" }}>{error}</p>}
        </div>
    )    
}

//Usernames & Passwords
//team0 => ubstairs
//admin => neverpineapple