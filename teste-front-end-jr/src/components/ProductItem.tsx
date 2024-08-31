import React from 'react';

interface ProductItemProps {
  product: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  };
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
