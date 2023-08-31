import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Home from '../src/Pages/Home'
import About from '../src/Pages/About'
import Contact from '../src/Pages/Contact'
import Blogs from '../src/Pages/Blogs'
import Navber from "./Navber/Navber"
import Footer from "./Footer/Footer"


function App() {
  

  return (
    <BrowserRouter>
     <Navber />
      <Routes>
       <Route path="/" element={<Home /> } />
       <Route path="/about" element={<About /> } />
       <Route path="/contact" element={<Contact /> } />
       <Route path="/blogs" element={<Blogs /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
