import { Navigate } from "react-router-dom";
import { useState, useEffect} from "react";
import { auth } from "../config/firebase";

export const AdminRoute = ({children})=>{
    const [loading, setLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user=>{
            if (user && user.email === "admin@myapp.local"){
                setIsAdmin(true)
            }else{
                setIsAdmin(false)
            }
            setLoading(false)
        })
        
        return () => unsubscribe()
    }, [])

    if (loading) return <p>Loading...</p>
    if (!isAdmin) return <Navigate to="/"/>

    return children
}