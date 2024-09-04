import './HeroContent.css'
import img from  '../../images/heroimg.jpg'

const HeroContent = () => {
    return(
        <>
        <div className="hero-img">
            <img src={img} alt="" />
        </div>
        <div className="percent-circle">
            <h1>40%</h1>
            <p>BUSINESS</p>
            <p>LUNCH</p>
        </div>
        <div className="hero-heading">
            <p>NEW RESTAURANT</p> 
            <h1>Where every ingredient tells a story</h1>
            <button>READ MORE</button>
        </div>
        </>
    )

}

export default HeroContent