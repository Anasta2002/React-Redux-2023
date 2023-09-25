import React from 'react'
import { products } from './products'

export default function Test() {
    // console.log(products)
    const titles = products.map(({title}) => title)
    const prices = products.map(item => item.price)
    const pricesAndTitles = products.map(({title, price}) => ({title, price}))
    const allExceptMarks = products.map(({marks, discount, ...product}) => (product))
    const priceMore100 = products.filter(({price}) => price > 100)
    const titleAndMore100 = products
                            .filter(({price}) => price > 100)
                            .map(({title, price}) => ({title, price}))

    console.log(titleAndMore100)

  return (
    <div>index</div>
  )
}
