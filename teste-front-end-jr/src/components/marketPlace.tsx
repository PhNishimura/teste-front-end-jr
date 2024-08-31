import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
const Marketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="marketplace">
      <h1>Mobile Marketplace</h1>
      <SearchBar onSearch={handleSearch} />
      <ProductList searchTerm={searchTerm} />
    </div>
  );
};

export default Marketplace;
