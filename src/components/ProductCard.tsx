import "../styles/productCard.css"

type ProductCardProps = {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  category?: "FICTION" | "ROMANCE" | "HORROR" | "SUSPENSE" | "BIOGRAPHY";
  availability?: "LOAN" | "SALE" | "LOAN_SALE";
}

const ProductCard = ({ name, price, quantity, imageUrl, category, availability }: ProductCardProps) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={imageUrl} alt={`Image from ${name}`}/>
      </div>

      <div className="card-info">
        <h3 className="card-title">{name}</h3>
        
        {category && availability && (
          <div className="card-meta">
            <span className="badge-category">{category}</span>
            <span className="badge-availability">{availability}</span>
          </div>
        )}

        <div className="card-details">
          <p className="card-price">R$ {price}</p>
          <p className="card-quantity">Qty: {quantity}</p>
        </div>
      </div>

      <button className="btn-details">More Details</button>
    </div>
  )
}

export default ProductCard