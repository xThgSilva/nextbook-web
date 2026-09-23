import "../styles/header.css";

import { NavLink, useNavigate } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState<boolean>(false);
    
    return (
        <header>
            <div className="logo-content" onClick={() => navigate("/")}>
                <FaBookReader className="logo-icon" />
                <h1>NextBook</h1>
            </div>
            <nav className="navbar">
                <NavLink to={"/catalog"} className="nav-link">Catalog</NavLink>
                <NavLink to={"/orders"} className="nav-link">Orders</NavLink>
                <NavLink to={"/loans"} className="nav-link">Loans</NavLink>
                <NavLink to={"/account"} className="nav-link">My Account</NavLink>
                {isLogged ? <p>.....</p> : <NavLink to={"/login"} className="nav-link signin-button">Sign In</NavLink>}
            </nav>
        </header>
    )
}

export default Header