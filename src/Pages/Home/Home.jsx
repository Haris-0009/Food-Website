import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import homeimage from '../../images/back.jpg'
import pizza from '../../images/pizza.jpg'
import salad from '../../images/salad copy.jpg'
import dessert from '../../images/toppping.jpg'
import drink from '../../images/drink.jpeg'
import chicken from '../../images/chicken.jpg'
import { FaPhone } from "react-icons/fa6";



const Home = () => {
  return (
    <div className="Main-home">
        <Navbar/>
        <div className="home-front">
            <div className="home-Image">
                <img src={homeimage} alt="" />
            </div>
            <div className="home-circle">
                <h1>40%</h1>
                <p>BUSINESS</p>
                <p>LUNCH</p>
            </div>
            <div className="home-heading">
                <h1>Where every ingredient tells a story</h1>
                <button>READ MORE</button>
            </div>
        </div>
        <div className="home-menu">
        <div className="view-heading">
            <h1>View Our Menu</h1>
        </div>
        <div className="view-menu">
            <div className="vm">
                <img src={pizza} alt="" />
                <h3>HOT PIZZA</h3>
                <button>READ MORE</button>
            </div>
            <div className="vm">
                <img src={salad} alt="" />
                <h3>SALADS</h3>
                <button>READ MORE</button>
            </div>
            <div className="vm">
                <img src={dessert} alt="" />
                <h3>DESSERT</h3>
                <button>READ MORE</button>
            </div>
            <div className="vm">
                <img src={drink} alt="" />
                <h3>DRINKS</h3>
                <button>READ MORE</button>
            </div>
        </div>
        </div>
        <div className="number">
            <div className="center">
                <h1>Keep up to date with us</h1>
                <h1><span><FaPhone /></span> +1 (234) 567-8910</h1>
            </div>
        </div>
        <div className="home-front">
            <div className="home-Image">
                <img src={chicken} alt="" />
            </div>
            <div className="home-heading2">
                <p>OUR RESTAURANT</p>
                <h1>A culinary adventure for all the senses
                </h1>
                <button>READ MORE</button>
            </div>
        </div>
                
    </div>
  )
}

export default Home