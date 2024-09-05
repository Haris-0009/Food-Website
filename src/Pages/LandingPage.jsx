import Dishes_Price from "../components/Dishes_Price/Dishes_Price"
import HeroContent from "../components/HeroContent/HeroContent"
import Navbar from "../components/Navbar/Navbar"
import Services from "../components/Services/services"




const LandingPage = () => {
    return(
        <>
        <div>
         <Navbar/>
         <HeroContent/>
         <Services/>
         <Dishes_Price/>
        </div>
        </>
    )
} 


export default LandingPage