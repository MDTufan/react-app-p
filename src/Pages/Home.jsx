import img from "../assets/11.png"
import "./Home.css"


const Home = () => {
 
  return (
    <div>
        <section className="hero">
    <div className="left-div" >
        <h3>Hello,It's Me</h3>
      <h1>Tufan Ali</h1>
      <h3>I'm A MERN Stact Developer</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur laboriosam enim iste inventore ad ex.</p>
        
      <div className="btn-2">
        <a href="#" className=" btn-1">Download CV</a>
      </div>
    </div>
    <div className="image-div">
      <div className="xx-1">
      <img className="img-size1" src={img} alt="" />
       </div>
    </div>
    
  </section>
    </div>
  )
}

export default Home