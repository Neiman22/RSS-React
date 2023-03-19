import React from 'react'
import ProductList from '../components/ProductList';
import SearchBar from '../components/SeacrhBar';
import '../styles/HomePage.css'

function Home() {
    return (
        <div className='home-container'>
            <SearchBar/>
            <ProductList/>
        </div>
    );
}
  
  export default Home;