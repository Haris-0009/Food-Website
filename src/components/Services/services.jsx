import './services.css'
import sourcing from "../../images/sourcing.jpg"
import menu from "../../images/menu.jpg"
import restaurant from "../../images/restaurant.jpg"

const Services = () => {
    return(
        <>
        <div className="services">
            <div className="service">
                <div className="services-img"> 
                    <img src={sourcing} alt="" />
                </div>
                <h3>FOOD SOURCING</h3>
            </div>
            <div className="service">
                <div className="services-img">
                    <img src={menu} alt="" />
                </div>
                <h3>MENU DEVELOPMENT</h3>
            </div>
            <div className="service">
                <div className="services-img">
                    <img src={restaurant} alt="" />
                </div>
                <h3><span>RESTAURANT</span></h3>
            </div>
        </div>
        </>
    )
}

export default Services