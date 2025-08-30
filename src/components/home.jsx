import { auth } from "../config/firebase"

export const Home = () => {
    let user = auth?.currentUser?.email
    console.log(user)
    let num = user.match(/\d+/)
    num = num ? parseInt(num[0]):null  
    
    return (
        <div>
            <h1>Welcome Home, pookie!</h1>
            <p>You are now logged in, bend over slut</p>
            <p>You are Team {num}</p>
        </div>
    )
}