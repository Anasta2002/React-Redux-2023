import React, { useEffect, useState } from 'react'
import { getProducts } from '../../requests/getProducts';
import Product from './Product/Product';
import s from './index.module.css';

export default function ProductsContainer() {
    const [ products, setProducts] = useState([])

    useEffect(() => getProducts(setProducts), [])
    
    console.log(products)

    return (
        <div className={s.cards_container}>
            {products.map(item => <Product key={item.id} {...item} />)}
        </div>
    )
}
