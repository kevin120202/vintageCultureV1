import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import { useGetProductsQuery } from '../slice/productsApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'

function Home() {
    const { data: products, isLoading, isError } = useGetProductsQuery()

    return (
        <>
            {isLoading ? (<Loader />) : isError ? (<Message variant='danger'>
                {isError?.data?.message || isError.error}
            </Message>) : (<><h1>Latest Products</h1>
                <Row>
                    {products.map(product => (
                        <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row></>)}

        </>
    )
}

export default Home