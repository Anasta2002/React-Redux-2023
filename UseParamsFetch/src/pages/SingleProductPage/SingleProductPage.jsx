import React from 'react'
import { getSingleProducts } from '../../requests/getProducts'
import { useParams } from 'react-router-dom'

export default function SingleProductPage() {
    const { id } = useParams()
    getSingleProducts(id);

    return (
        <div>SingleProductPage</div>
    )
}
