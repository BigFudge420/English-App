import "./index.css"
import { Auth } from "./components/auth"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "./components/home"
import { Admin } from "./components/admin"
import { AdminRoute } from "./components/adminRoute"
import { UserRoute } from "./components/userRoute"

function App() {
  return  (
    <Router>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/home" element={<UserRoute><Home/></UserRoute>}/>
        <Route path="/admin" element={<AdminRoute><Admin/></AdminRoute>}/>
      </Routes>
    </Router>
   )
}

export default App
