import React from 'react'
import './PageFooter.css'
// import { BiMailSend } from 'react-icons/bi'
import { FiMail, FiPhone } from 'react-icons/fi'
import { IoLocationOutline } from 'react-icons/io5'



const PageFooter = () => {
  return (
    <div className="footer-front">
            <div className="footer">
                <div className="left">
                    <div className="per">
                        <h1>40%</h1>
                        <p>BUSINESS</p>
                        <p>LUNCH</p>
                    </div>
                    <div className="bottom">
                        <h1>Our Contact</h1>
                        <button>READ MORE</button>
                    </div>
                </div>
                <div className="right">
                    <div className="right-div">
                        <div className="logo">
                            <FiMail />
                        </div>
                        <div>
                            <h2>CHART TO US</h2>
                            <p>Our friendly team is here to help.</p>
                            <a href="#"><span>hi@company.com</span></a>
                        </div>
                    </div>
                    <div className="right-div">
                        <div className="logo">
                            <IoLocationOutline />
                        </div>
                        <div>
                            <h2>OFFICE</h2>
                            <p>Come say hello at our office HQ.
                            </p>
                            <div className="link-div">
                            <a href="">121 RocK Street, 21 Avenue</a>
                            <a href=""><span>New York, NY 92103-9000</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="right-div">
                        <div className="logo">
                            <FiPhone />
                        </div>
                        <div>
                            <h2>Phone</h2>
                            <p>Mon-Fri from 8am to 5am</p>
                            <a href=""><span>+1(555) 000-000</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PageFooter