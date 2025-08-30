import "./index.css"
import { Auth } from "./components/auth"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "./components/home"
import { Admin } from "./components/admin"

function App() {
  return  (
    <Router>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>
   )
}

export default App
