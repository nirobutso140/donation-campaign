import { NavLink } from "react-router-dom";
import './Navbar.css'
import Banner from "../Banner/Banner";
const Navbar = () => {
    return (
        <>
           
                  <nav className="navbar p-3">
                    <img src="/public/logo/Logo.png" alt="" />
                    <div className="links">
                    <li><NavLink
                       to="/" 
                       className={({ isActive, isPending}) =>
                         isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                       }
                    >Home</NavLink></li>
                   <li><NavLink
                       to="/donation"
                       className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                       }
                    >Donation</NavLink></li> 
                   <li><NavLink
                       to="/statistics"
                       className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                       }
                    >Statistics</NavLink></li>
                    </div>
                  </nav>

                  
      
        </>
    );
};

export default Navbar;