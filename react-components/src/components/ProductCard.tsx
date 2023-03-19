import React, { useState } from 'react'
import { IProduct } from '../data/types'
import '../styles/ProductCard.css'

interface ProductProps {
    product: IProduct
}

function ProductCard ({ product }: ProductProps) {
    const [details, setDetails] = useState(false);
    const btnClassName = details ? 'btnDetails btnYeloow' : 'btnDetails btnBlue'

    return (
        <div className='product__container'>
            <p className='product__title'>{ product.title }</p>
            <img className='product__image' src={product.thumbnail}/>
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

export default ProductCard