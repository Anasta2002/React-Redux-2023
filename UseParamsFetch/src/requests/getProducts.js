export const getProducts = callback => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(json => callback(json))
}

export const getSingleProducts = (id) => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then(response => response.json())
    .then(json => console.log(json))
}