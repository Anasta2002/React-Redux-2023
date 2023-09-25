import React, { useState } from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function Product({title, price, images, description, id}) {
    const [hover, setHover] = useState(false)

    const product_route = `/products/${id}`

    return (
        <Link to={product_route} className={s.product_card}>
            <div className={s.image_wrapper}>
                <h2 className={s.title}>{title}</h2>
                <img className={s.img} src={images[0]} alt={title} />
                <h3 className={s.price_bubble}>${price}</h3>
            </div>
            <p>{description}</p>
        </Link>
    )
}
