import React from 'react'
import pizza from '../../images/pizza.jpg'
import salad from '../../images/salad copy.jpg'
import dessert from '../../images/toppping.jpg'
import drink from '../../images/drink.jpeg'
import chicken from '../../images/chicken.jpg'

import './menu.css'
export const Menu = () => {
  return (
    <div>
        <div className="menu-main">
            <div className="menu-header">
                <h1>View Our Menu</h1>
            </div>
            <div className="menu-item">
                <div className="m-item">
                    <img src={pizza} alt="" />
                    <h2>HOT PIZZA</h2>
                    <button>READ MORE</button>
                    

                </div>
                <div className="m-item">
                    <img src={salad} alt="" />
                    
                        <h2>SALADS</h2>
                        <button>READ MORE</button>
                    
                </div>
            </div>
            <div className="menu-item">
                <div className="m-item">
                    <img src={dessert} alt="" />
                    
                         <h2>DESSERT</h2>
                         <button>READ MORE</button>
                    
                </div>
                <div className="m-item">
                    <img src={drink} alt="" />
                    
                        <h2>DRINKS</h2>
                        <button>READ MORE</button>
                    
                </div>
            </div>
            <div className="Price-One">
                <div className="item-description">
                    <h1>$14</h1>
                    <h3>SALAD WITH CHICKEN</h3>
                    <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like.</p>
                </div>
                <div className="item-image">
                    <img src={chicken} alt="chicken" />
                </div>
            </div>
        </div>

    </div>
  )
}


export default Menu