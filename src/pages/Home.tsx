import "../styles/home.css";

import Header from "../components/Header";

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
    </div>
  )
}

export default Home