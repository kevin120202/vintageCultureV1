import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

function Product({ product }) {
    // const [product, setProduct] = useState()

    // useEffect(() => {
    //     const fetchProduct = async () => {
    //         const { data } = await axios.get(`/api/products/${product._id}`)
    //         setProduct(data)
    //     }
    //     fetchProduct()
    // }, [])

    console.log(product);
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product