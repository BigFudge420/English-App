import "./index.css"
import { Auth } from "./components/auth"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "./components/home"

function App() {
  return  (
    <Router>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
   )
}

export default App
