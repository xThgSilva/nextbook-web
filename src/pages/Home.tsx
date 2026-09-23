import "../styles/home.css";

import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div className="home-page-container">
      <Header />
      <section className="hero-section">
        <div className="hero-text">
          <h1>NextBook</h1>
          <p>NextBook is your online library and stationery store. Find books from different categories, or rent them with flexible deadlines. Just don't forget to return them!</p>
        </div>
        <div className="" style={{background: "lightgray"}}>
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
          category={"SUSPENSE"}/>
          <ProductCard 
          name="First Product"
          quantity={5}
          price={2}
          imageUrl={""}/>
          <ProductCard 
          name="Second Product"
          quantity={5}
          price={2}
          imageUrl={""}/>
        </div>
      </section>
    </div>
  )
}

export default Home