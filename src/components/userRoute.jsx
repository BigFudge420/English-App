import { Navigate } from "react-router-dom";
import { useState, useEffect} from "react";
import { auth } from "../config/firebase";

export const UserRoute = ({children})=>{
    const [loading, setLoading] = useState(true)
    const [isUser, setIsUser] = useState(false)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user=>{
            if (user){
                setIsUser(true)
                console.log(auth?.currentUser?.email)
            }else{
                setIsUser(false)
            }
            setLoading(false)
        })
        
        return () => unsubscribe()
    }, [])

    if (loading) return <p>Loading...</p>
    if (!isUser) return <Navigate to="/"/>

    return children
}