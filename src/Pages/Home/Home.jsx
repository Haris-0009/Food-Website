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
import Button from '../../components/Button'
import beef from '../../images/beef.jpg'
import newone from '../../images/new.jpg'
import PageFooter from '../../components/PageFooter/PageFooter'


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
        <div className="check">
            <div className="check-heading">
                <h1>Check Our Blog</h1>
            </div>
            <div className="check-card">
                <div className="post">
                    <h2>Kitchn</h2>
                    <p>Sample small text. Lorem ipsum dolor sit amet.</p>
                    <button>READ MORE</button>
                </div>
                <div className="post">
                    <h2>Food52</h2>
                    <p>Sample small text. Lorem ipsum dolor sit amet.</p>
                    <button>READ MORE</button>
                </div>
                <div className="post">
                    <h2>Serious Eats</h2>
                    <p>Sample small text. Lorem ipsum dolor sit amet.</p>
                    <button>READ MORE</button>
                </div>
                <div className="post">
                    <h2>The Recipe Critc</h2>
                    <p>Sample small text. Lorem ipsum dolor sit amet.</p>       
                    <button>READ MORE</button>
                </div>
            </div>
        </div>
        <div className="home-front">
            <div className="home-Image">
                <img src={beef} alt="" />
            </div>
            <div className="home-heading3">
                <p>OUR RESTAURANT</p>
                <h1>The magic of the kitchen
                </h1>
                <button>READ MORE</button>
            </div>
        </div>  
        <div className="number" style={{backgroundColor : "#f1ae0e"}}>
            <div className="center" style={{gap : "20px"}}>
                <h1>Keep up to date with us</h1>
                <div className="center-div">
                    <input type="text" placeholder='Enter a valid email address'/>
                    <button>SUBMIT</button>
                </div>
            </div>
        </div>
        <div className="home-front">
            <div className="home-Image">
                <img src={newone} alt="" />
            </div>
            <div className="home-heading4">
                <p>OUR RESTAURANT</p>
                <h1>A new way to experience food
                </h1>
                <button>READ MORE</button>
            </div>
        </div>
        <PageFooter/>
                
    </div>
  )
}

export default Home