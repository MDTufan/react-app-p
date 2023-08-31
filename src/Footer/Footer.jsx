import './Footer.css'
import { FaFacebookSquare,FaFacebookMessenger,FaLinkedin,FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
    <div className="footer">
    <div className="footer-content">
      <h2>Footer Section</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ducimus sit deleniti architecto tempora animi deserunt dolor unde corporis repudiandae aperiam minima rerum accusantium pariatur, distinctio libero dolores eum maiores.</p>
      <ul class="social-icons">
      <FaFacebookSquare className='icon' />
      <FaFacebookMessenger className='icon' />
      <FaLinkedin className='icon' />
      <FaYoutube className='icon' />
      </ul>
      
    </div>
     </div>
    </div>
  )
}

export default Footer