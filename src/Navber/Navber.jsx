
import './Navber.css'
// import logu from "../assets/lugo.png"
import { Link } from 'react-router-dom'
const Navber=()=>{
  return(  
  <div>
    <div className="container-nav">
      <div className="logu">
        <h1>TufanAli</h1>
          {/* <img src={logu} alt="" /> */}
      </div>
      <div className="link-itens">
          <ul>
            <li> <Link to="/"> Home</Link> </li>
            <li><Link to="/about">About</Link></li>
            <li> <Link to="/contact">Contact</Link></li>
            <li> <Link to="/blogs">Blogs</Link></li>
            
          </ul>
      </div>
    </div>
  </div> 
  
  )
  
}
  
  export default Navber
  