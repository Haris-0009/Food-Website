import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

    const handleActiveLink = () =>{
        var mainDiv =document.getElementById("Main-div");
        var links = mainDiv.getElementsByClassName("link")
    
        for(var i = 0; i < links.length ; i++){
            links[i].addEventListener("click",function(){
                var current = document.getElementsByClassName("active");
    
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" active", "");
                }
                this.className += " active";
            });
        }
    }   

  return (
    <>
      <header>
        <nav>
          <ul className="Main-div">
            <Link to="/home"
            active
            >

                <li className="link active">HOME</li>
            </Link>
            <Link to="/landing">
                <li className="link">LANDING</li>            
            </Link>
            <Link to="/about">
                <li className="link">ABOUT</li>            
            </Link>
            <Link to="/menu">  
                <li className="link">MENU</li>            
            </Link>
            <Link to="/team">
                <li className="link">TEAM</li>            
            </Link>
            <Link to="/contact">
                <li className="link">CONTACT</li>            
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
