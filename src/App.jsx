import { 
  FaEllipsisV, FaBookReader, 
  FaHome, FaRegUserCircle, 
  FaSalesforce, FaShoppingBag,
  FaShoppingCart, FaHandshake,
  FaArrowLeft 
} from "react-icons/fa"
import "./styles/app.css"

function App() {
  return (
    <>
      <div className="container">
        <aside className="aside-menu">
          <div className="logo">
            <h1><FaBookReader /> NextBook</h1>
            <i>Library Management</i>
          </div>
          <section className="user-account">
            <p>Welcome, User!</p>
            <p>useremailhere@gmail.com</p>
          </section>
          <nav className="pages">
            <p>Menu</p>
            <button><FaHome />Home</button>
            <button><FaRegUserCircle />Your Account</button>
            <button><FaHandshake />Your Loans</button>
            <button><FaShoppingBag />Your Purchases</button>
            <button><FaShoppingCart />Your Cart</button>
          </nav>
          <button className="logout"><FaArrowLeft />Logout</button>
        </aside>
        <main className="main-content">

        </main>
      </div>
    </>
  )
}

export default App
