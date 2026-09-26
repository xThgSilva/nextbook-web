import "../styles/catalog.css";

import Header from '../components/Header';
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const apiUrl = import.meta.env.VITE_API_URL;

const Availabilities = {
  LOAN: "LOAN",
  SALE: "SALE",
  LOAN_SALE: "LOAN_SALE"
} as const;

const Categories = {
  SUSPENSE: "SUSPENSE",
  ROMANCE: "ROMANCE",
  HORROR: "HORROR",
  FICTION: "FICTION",
  BIOGRAPHY: "BIOGRAPHY'"
} as const;

type Availabilities = typeof Availabilities[keyof typeof Availabilities];
type Categories = typeof Categories[keyof typeof Categories];

type ProductsType = {
  readonly id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
  author?: string;
  availability?: "LOAN" | "SALE" | "LOAN_SALE";
  bookId?: number;
  category?: "FICTION" | "ROMANCE" | "HORROR" | "SUSPENSE" | "BIOGRAPHY";
}

const Catalog = () => {
  const [isABook, setIsABook] = useState<boolean>(false);
  const [availability, setAvailability] = useState<Availabilities>();
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>([]);
  const [searchName, setSearchName] = useState<string>("");
  const [products, setProducts] = useState<ProductsType[]>([]);

  const handleSelectCategory = (category: string) => {
    setCategoriesSelected(prevCategories =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    )
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const url = new URL(`${apiUrl}/products`);
        url.searchParams.append("page", "0");
        url.searchParams.append("size", "30");
        url.searchParams.append("searchName", searchName);
        url.searchParams.append("isBook", isABook.toString());

        if (categoriesSelected.length > 0) {
          url.searchParams.append("categories", categoriesSelected.join(","));
        }
        if (availability) {
          url.searchParams.append("availability", availability);
        }

        const response = await fetch(url);
        const data = await response.json();

        setProducts(data.content || []);
      } catch (error) {
        console.error("Error to get products", error);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchName, categoriesSelected, availability, isABook]);

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
            <input type="text" onChange={(e) => setSearchName(e.target.value)} value={searchName} placeholder="Search a product..." />
          </div>
          <section className="products-list">
            {products.map(product => (
              <ProductCard
                key={product.id}
                name={product.name}
                quantity={product.quantity}
                imageUrl={product.imageUrl}
                price={product.price}
                availability={product.availability}
                category={product.category}
              />
            ))}
          </section>
        </section>
      </section>
    </>
  )
}

export default Catalog