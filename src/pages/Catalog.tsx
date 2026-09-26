import "../styles/catalog.css";

import Header from '../components/Header';
import { useState } from "react";
import ProductCard from "../components/ProductCard";

const Availabilities = {
  LOAN: "Loan",
  SALE: "Sale",
  LOAN_SALE: "Loan and Sale"
} as const;

const Categories = {
  SUSPENSE: "Suspense",
  ROMANCE: "Romance",
  HORROR: "Horror",
  FICTION: "Fiction",
  BIOGRAPHY: "Biography"
} as const;

type Availabilities = typeof Availabilities[keyof typeof Availabilities];
type Categories = typeof Categories[keyof typeof Categories];

const Catalog = () => {
  const [isABook, setIsABook] = useState<boolean>(false);
  const [availability, setAvailability] = useState<Availabilities>();
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>([]);


  const handleSelectCategory = (category: string) => {
    setCategoriesSelected(prevCategories =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
      )};

  return (
    <>
      <Header />
      <section className="catalog-container">
        <aside className='aside-menu'>
          <section className="filter-type">
            <h2>Product Type</h2>
            <div className="checkinput-group">
              <label>Common Product</label>
              <input
                onChange={() => setIsABook(false)}
                type="radio"
                name="product-type"
                checked={isABook === false}
              />
            </div>
            <div className="checkinput-group">
              <label>Book</label>
              <input
                onChange={() => setIsABook(true)}
                type="radio"
                name="product-type"
                checked={isABook === true} />
            </div>
          </section>
          {isABook && <>
            <section className="filter-type">
              <h2>Book Category</h2>
              <div className="checkinput-group">
                <label>Fiction</label>
                <input
                  type="checkbox"
                  onChange={() => handleSelectCategory(Categories.FICTION)}
                  checked={categoriesSelected.includes(Categories.FICTION)}
                />
              </div>
              <div className="checkinput-group">
                <label>Romance</label>
                <input
                  type="checkbox"
                  onChange={() => handleSelectCategory(Categories.ROMANCE)}
                  checked={categoriesSelected.includes(Categories.ROMANCE)}
                />
              </div>
              <div className="checkinput-group">
                <label>Horror</label>
                <input
                  type="checkbox"
                  onChange={() => handleSelectCategory(Categories.HORROR)}
                  checked={categoriesSelected.includes(Categories.HORROR)}
                />
              </div>
              <div className="checkinput-group">
                <label>Suspense</label>
                <input
                  type="checkbox"
                  onChange={() => handleSelectCategory(Categories.SUSPENSE)}
                  checked={categoriesSelected.includes(Categories.SUSPENSE)}
                />
              </div>
              <div className="checkinput-group">
                <label>Biography</label>
                <input
                  type="checkbox"
                  onChange={() => handleSelectCategory(Categories.BIOGRAPHY)}
                  checked={categoriesSelected.includes(Categories.BIOGRAPHY)}
                />
              </div>
            </section>
            <section className="filter-type">
              <h2>Availability</h2>
              <div className="checkinput-group">
                <label>Loan</label>
                <input
                  type="radio"
                  name="availability"
                  onChange={() => setAvailability(Availabilities.LOAN)}
                  checked={availability === Availabilities.LOAN}
                />
              </div>
              <div className="checkinput-group">
                <label>Sale</label>
                <input
                  type="radio"
                  name="availability"
                  onChange={() => setAvailability(Availabilities.SALE)}
                  checked={availability === Availabilities.SALE}
                />
              </div>
              <div className="checkinput-group">
                <label>Loan and Sale</label>
                <input
                  type="radio"
                  name="availability"
                  onChange={() => setAvailability(Availabilities.LOAN_SALE)}
                  checked={availability === Availabilities.LOAN_SALE}
                />
              </div>
            </section>
          </>}
        </aside>
        <section className='products-container'>
          <h1>Products Catalog</h1>
          <div className="search-container">
            <input type="text" placeholder="Search a product..."/>
          </div>
          <section className="products-list">
            {/* Test */}
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
            imageUrl={""} /><ProductCard
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
          </section>
        </section>
      </section>
    </>
  )
}

export default Catalog