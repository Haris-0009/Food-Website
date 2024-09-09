import React from 'react'
import './Footer.css'
import back from '../../images/back.jpg'
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";




export const Footer = () => {
  return (
    <div className="footer-main">
        <div className="footer-back">
          <div className="footer-img">
              <img src={back} alt="" />
          </div>
            <div className="circle">
              <h1>40%</h1>
              <p>BUSINESS</p>
              <p>LUNCH</p>
            </div>
            <div className="footer-heading">
              <h1>Keep up to date with us</h1>
              <div className="footer-input">
              <input type="text" />
              <button>SUBMIT</button>
              </div>
            </div>
        </div>
        <div className="footer-part">
          <div className="footer-flex">
            <div className="logo">
            <FiMail />
            </div>
            <h3>CHART TO US</h3>
            <p>Our friendly team is here to help.</p>
            <a href="">hi@ourcompany.com</a>

          </div>
          <div className="footer-flex">
            <div className="logo">
              <IoLocationOutline />
            </div>
              <h3>OFFICE</h3>
              <p>Come say hello at our office HQ.</p>
              <a href="">121 RocK Street, 21 Avenue</a>
              <a href="">New York, NY 92103-9000</a>
          </div>
          <div className="footer-flex">
            <div className="logo">
            <FiPhone />
            </div>
            <h3>PHONE</h3>
            <p>Mon-Fri from 8am to 5am</p>
            <a href="">+1(555) 000-000</a>
          </div>

        </div>
    </div>
  )
}



export default Footer
