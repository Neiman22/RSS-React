import React, {useState} from 'react'
import { IProduct } from '../data/types'
import { productsArray } from '../data/products'

function Home() {
    return (
        <div>
            <SearchBar/>
            <ProductList/>
        </div>
    );
}

function SearchBar () {
    const [searchText, setSearchText] = useState('');

    function searchCards(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
        setSearchText(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        //Add search cards algoritm
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={searchText}
                placeholder={'Search cards...'}
                onChange={searchCards}
            />
            <button type="submit">SEARCH</button>
        </form>
    )
}

function ProductList () {
    return (
        <div>
            { productsArray.map(el => <ProductCard product={el} key={el.id} />) }
        </div>
    )
}

interface ProductProps {
    product: IProduct
}

function ProductCard ({ product}: ProductProps) {
    const [details, setDetails] = useState(false);
    const btnClassName = details ? 'btnDetails btnYeloow' : 'btnDetails btnBlue'

    return (
        <div className='product-container'>
            <p>{ product.title }</p>
            <img src={product.thumbnail}/>
            <p>Category: {product.category}</p>
            <p>Brand: {product.brand}</p>
            <p>Price: {product.price}$</p>
            <p>Discount: {product.discountPercentage}%</p>
            <p>Rating: {product.rating}</p>
            <p>Stock: {product.stock}</p>
            <button className={btnClassName} onClick={() => setDetails(prev => !prev)}>
                {details ? 'Hide Details' : 'Show Details'}
            </button>
            
            {details && <div>
                <p>{product.description}</p>
            </div>}
        </div>
    )
}