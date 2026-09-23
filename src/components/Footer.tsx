import { Link, useNavigate } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";

import "../styles/footer.css";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer>
            <section className="footer-wrapper">
                <div className="logo-content footer-logo" onClick={() => navigate("/")}>
                    <FaBookReader className="logo-icon" />
                    <h1>NextBook</h1>
                </div>
                <div className="footer-column">
                    <Link to={"/catalog"} className="footer-link">Catalog</Link>
                    <Link to={"/loans"} className="footer-link">Loans</Link>
                </div>
                <div className="footer-column">
                    <Link to={"/orders"} className="footer-link">Orders</Link>
                    <Link to={"https://github.com/xthgsilva"} className="footer-link">Contact</Link>
                </div>
            </section>
        </footer>
    )
}

export default Footer