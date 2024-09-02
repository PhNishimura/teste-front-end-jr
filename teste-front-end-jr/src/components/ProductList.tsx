import React, { useEffect, useState } from 'react';
import Carousel from './Carousel'; // Ajuste o caminho conforme a estrutura do seu projeto
import './ProductList.css';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'));
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        const data = JSON.parse(result.contents);
        if (data.success) {
          setProducts(data.products);
        } else {
          setError('Failed to fetch products');
        }
      } catch (error: any) {
        setError(error.message || 'Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="product-list">
      <Carousel products={products} />
    </div>
  );
};

export default ProductList;
