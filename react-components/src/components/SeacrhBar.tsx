import React, { useState, useEffect } from 'react'
import '../styles/SearchBar.css'
import {productsArray} from '../data/products'
import ProductCard from './ProductCard'

function SearchBar () {
    const [searchText, setSearchText] = useState(localStorage.getItem('searchText') || '');
    const [products, setProducts] = useState(productsArray);

    function searchCards(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchText(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const filteredProducts = productsArray.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));
        setProducts(filteredProducts);
    }

    useEffect(() => {
        return () => {
          localStorage.setItem('searchText', searchText);
        };
    }, [searchText]);

    return (
        <div className='search__container'>
            <div className='search__block'>
                <p className='search__header'>Site Search</p>
                <form onSubmit={handleSubmit} className='search__form'>
                <input
                    className='search__input'
                    type='text'
                    value={searchText}
                    placeholder={'Search cards...'}
                    onChange={searchCards}
                />
                <button type="submit" className='search__button'>SEARCH</button>
                </form>
            </div>
            <div className='products__container'>
                {products.map(product => (<ProductCard key={product.id} product={product} />))}
            </div>
        </div>

    )
}

export default SearchBar