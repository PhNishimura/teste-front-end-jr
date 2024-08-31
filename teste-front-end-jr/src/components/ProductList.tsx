import React from 'react';
import ProductItem from './ProductItem';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface ProductListProps {
  searchTerm: string;
}

const products: Product[] = [
  { id: 1, name: 'iPhone 13', price: 799, imageUrl: '/images/iphone13.jpg' },
  { id: 2, name: 'Samsung Galaxy S21', price: 699, imageUrl: '/images/galaxyS21.jpg' },
  { id: 3, name: 'Google Pixel 6', price: 599, imageUrl: '/images/pixel6.jpg' },
  // Adicione mais produtos aqui
];

const ProductList: React.FC<ProductListProps> = ({ searchTerm }) => {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductList;
