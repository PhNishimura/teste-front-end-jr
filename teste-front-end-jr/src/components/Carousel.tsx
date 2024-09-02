import React, { useState } from 'react';
import './Carousel.css';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface CarouselProps {
  products: Product[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const itemsToShow = 4; // Número de itens a mostrar no carrossel
  const totalItems = products.length;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalItems - itemsToShow));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleBuyClick = (productName: string) => {
    alert(`Produto ${productName} adicionado ao carrinho!`);
    // Adicionar lógica para adicionar o produto ao carrinho
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={goToPrev}>❮</button>
      <div className="carousel-items" style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
        {products.map((product, index) => (
          <div key={index} className="carousel-item">
            <img src={product.photo} alt={product.productName} />
            <h2>{product.productName}</h2>
            <p>{product.descriptionShort}</p>
            <p>R$ {product.price.toFixed(2)}</p>
            <button className="buy-button" onClick={() => openModal(product)}>Comprar</button>
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={goToNext}>❯</button>

      {isModalOpen && selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>✖</button>
            <img src={selectedProduct.photo} alt={selectedProduct.productName} />
            <h2>{selectedProduct.productName}</h2>
            <p>{selectedProduct.descriptionShort}</p>
            <p>R$ {selectedProduct.price.toFixed(2)}</p>
            <button className="buy-button" onClick={() => handleBuyClick(selectedProduct.productName)}>Comprar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
