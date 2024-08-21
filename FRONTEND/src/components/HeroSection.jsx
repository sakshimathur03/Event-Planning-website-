import Navbar from "./Navbar"

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
       <Navbar/>
        <div className="container">
            <div className="banner">
                <div className="largeBox">
                    <h1 className="title">Memorable</h1>
                </div>
                <div className="combined_boxes">
                    <div className="imageBox">
                        <img src="../../public/hero1.jpeg" alt="hero1"/>
                    </div>
                    <div className="textWithLogo">
                        <div className="textWithSvg">
                            <h1 className="title">Special</h1>
                            <h1 className="title events_title">Grand</h1>
                            <img src="../../public/threelines.svg" alt="three"></img>
                        </div>
                        <img src='./logo.png' alt="logo" className="logo"/>
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="imageBox">
                    <img src="../../public/hero2.jpeg" alt="hero2"/>
                </div>
                <h1 className="title events_title">Grand</h1>
            </div>

        </div>


    </section>
  )
}

export default HeroSection
