import React, { useState } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import productData from './products.json';
import SearchInput from './components/SearchInput';
import AddProductForm from './components/AddProduct';

function App() {
  const [products, setProducts] = useState(productData);
  const [searchValue, setSearchValue] = useState('');

  const handleDelete = (id) => {
    const deleteProduct = [...products].filter(elem => elem._id !== id)
    setProducts(deleteProduct)
  }

  const handleSearch = (value) => {
    setSearchValue(value);
  }

  const handleNewProduct = (product) => {
    const productWithId = { ...product, _id: products.length + 1 };
    setProducts([...products, productWithId]);
  }

  return (
    <section>
      <h1>My shopping cart</h1>
      <SearchInput handleSearch={handleSearch} />
      <div className="cart">
      {products
      .filter(elem => elem.name.toLowerCase().includes(searchValue.toLowerCase()))
      .map((elem) => {
        return ( 
          <ProductCard key= {elem._id} product= {elem} handleDelete = {handleDelete}/>
        )
      })};
      <AddProductForm handleNewProduct={handleNewProduct} />
      </div>
    </section>
  );
}

export default App;
