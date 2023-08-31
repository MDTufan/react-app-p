import img from "../assets/11.png"
import "./About.css"
const About = () => {
  return (
    <div>
     <section  className="hero">
    
    <div className="image-div">
     <div className="xx-12" >
     <img className="img-size1" src={img} alt="" />
     </div>
    </div>
    <div className="right-div">
      <h1 >About <span>Me</span></h1>
      <h3><span>MERN </span>Stact Developer</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum omnis officia doloremque voluptatem, iusto repellendus!\</p>
      <div className="btn-2">
        <a href="#" className="btn-1">Read More</a>
      </div>
    </div>
  </section>
    </div>
  )
}

export default About