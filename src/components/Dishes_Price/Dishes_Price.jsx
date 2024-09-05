import beef from "../../images/beef.jpg"
import pasta from "../../images/pasta.jpg"
import brownie from "../../images/brownie.jpg"
import salad from "../../images/salad.jpg"
import "../Dishes_Price/Dishes_Price.css"



const Dishes_Price = () => {
    return(
        <>
        <div className="Dishes-price-container">
            <div className="Price-One">
                <div className="item-description">
                    <h1>$27</h1>
                    <h3>BEEF WITH GINGER</h3>
                    <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like.</p>
                </div>
                <div className="item-image">
                    <img src={beef} alt="beef" />
                </div>
            </div>
            <div className="Price-Image">
                <div>
                    <img src={pasta} alt="pasta" />
                </div>
                <div>
                    <img src={salad} alt="salad" />
                </div>
                <div>
                    <img src={brownie} alt="brownie" />
                </div>
            </div>
            <div className="Price-two">

            </div>

        </div>
        </>
    )
}

export default Dishes_Price