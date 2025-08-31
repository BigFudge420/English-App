import { auth } from "../config/firebase"
import { useState } from "react"

export const Home = () => {
    let user = auth?.currentUser?.email
    console.log(user)
    let num = user.match(/\d+/)
    num = num ? parseInt(num[0]):null  
    
    return (
        <div>
            <h1>Welcome Home!</h1>
            <p>Your are team {num}</p>
            <p>Logged in as user</p>
        </div>
    )
}