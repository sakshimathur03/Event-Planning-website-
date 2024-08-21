
import {Link} from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
const About = () => {
  return (
    <section className ='about' id ='about'>
        <div className="conatiner">
            <div className="banner">
                <div className="top">
                    <h1 className='heading'>ABOUT US</h1>
                    <p>Our only goal is to make all your special occasions more special... </p>
                </div>
                <p className="mid">
                At SM, we specialize in transforming your vision into unforgettable events. Our comprehensive event planning process ensures every detail is meticulously managed, from concept to execution. We start by understanding your unique needs and preferences, then design a bespoke plan that reflects your style and objectives. Our dedicated team coordinates logistics, vendor management, and on-site coordination, ensuring a seamless and stress-free experience. With a focus on creativity, precision, and personalized service, we are committed to delivering exceptional events that exceed your expectations. Let us bring your dream event to life! 
                </p>
                <Link to={"/"}>Explore More<span>
                    <HiOutlineArrowNarrowRight/>
                </span>
                </Link>
            </div>
            <div className="banner">
                <img src='./about.png' alt="about"></img>
            </div>
        </div>
      
    </section>
  )
}

export default About
