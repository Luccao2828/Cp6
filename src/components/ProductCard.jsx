import React from "react";
import { Link } from "react-router-dom";
import '/src/css/Card.css'; 

function ProductCard({ productName, description, price, linkText, to, imageUrl }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {imageUrl && <img src={imageUrl} className="card-img-top" alt={productName} />} {/* Adicionada a tag img para a imagem do produto */}
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">${price}</h6>
        <p className="card-text">{description}</p>
        <Link to={to} className="card-link">
          {linkText}
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
