import React from 'react'
import { productsArray } from '../data/products'
import ProductCard from './ProductCard'
import '../styles/ProductList.css'

function ProductList () {
    return (
        <div className='products__container'>
            { productsArray.map(el => <ProductCard product={el} key={el.id} />) }
        </div>
    )
}

export default ProductList