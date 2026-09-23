import { Link } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";

import "../styles/home.css";
import "../styles/footer.css"

import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div className="home-page-container">
      <Header />
      <section className="hero-section" id="hero">
        <div className="hero-text">
          <h1>NextBook</h1>
          <p>NextBook is your online library and stationery store. Find books from different categories, or rent them with flexible deadlines. Just don't forget to return them!</p>
        </div>
        <div className="" style={{ background: "lightgray" }}>
          Future image
        </div>
      </section>
      <section className="featured-products">
        <h1>Featured Products</h1>
        <div className="products">
          <ProductCard
            name="First Book"
            quantity={2}
            price={1000}
            imageUrl={"A image"}
            availability={"LOAN_SALE"}
            category={"SUSPENSE"} />
          <ProductCard
            name="First Product"
            quantity={5}
            price={2}
            imageUrl={""} />
          <ProductCard
            name="Second Product"
            quantity={5}
            price={2}
            imageUrl={""} />
        </div>
      </section>
      <footer>
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
      </footer>
    </div>
  )
}

export default Home