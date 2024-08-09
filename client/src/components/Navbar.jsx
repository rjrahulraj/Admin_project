
import { NavLink } from "react-router-dom"
import '../styles/Navbar.css';
import { useContext, useEffect, useRef, useState } from "react"
import { AuthContent } from "../store/auth"

const Navbar = () => {
     let navRef=useRef();
   let {isLoggedin,userData}=useContext(AuthContent);
   const [menuActive, setMenuActive] = useState(false);
   const [reload, setReload]=useState(false);
   
   const toggleMenu = () => {
    
       setMenuActive(!menuActive);
       
       if(menuActive===true)
        {   
           navRef.current.classList.remove("routePageLink");
           navRef.current.classList.add("menubar");
        }
        else{
           navRef.current.classList.remove("menubar");
           navRef.current.classList.add("routePageLink");
       }
       
    //    .routePageLink
   };

   useEffect(()=>{
        // if(userData.isAdmin===true)
        // {
            setReload(!reload);
        // }
   },[userData,isLoggedin])

  return (
     <div>
            <header>
                <div className='logoBrand'>
                <img src="/svg/logo3.png" alt="" height="60px" />
                <NavLink to="/" className="BrandName">TechVersity</NavLink>
                </div>
                <div className="menuToggle" onClick={toggleMenu}>
                    &#9776;
                    {/* // menu icons */}
                </div>
                <ul  ref={navRef} className="routePageLink">
                    <li>
                        <NavLink to="/"> Home</NavLink>
                    </li>
                    {isLoggedin &&
                        <>
                            <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">Services</NavLink>
                        </li>
                        </>
                        
                    
                    }
                    
                    {isLoggedin ? (
                        <li>
                            <NavLink to="/logout">Logout</NavLink>
                        </li>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register">SignUp</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </header>
        </div>
  )
}

export default Navbar
