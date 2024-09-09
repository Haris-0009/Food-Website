import Dishes_Price from "../components/Dishes_Price/Dishes_Price"
import Footer from "../components/Footer/Footer"
import HeroContent from "../components/HeroContent/HeroContent"
import Menu from "../components/Menu/menu"
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
         <Menu/>
         <Footer/>
        </div>
        </>
    )
} 


export default LandingPage