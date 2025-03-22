import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../Store/cartSlice'
import { getProducts } from '../Store/prodctSlice'
import Container from 'react-bootstrap/Container';

const ProductList = () => {
  const dispatch = useDispatch();
  const {items, status} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  if(status === 'loading') {
    return <p>Loading...</p>
  }

  if(status === 'failed') {
    return <p>Failed to load products</p>
  }

  return (
    <>
     <Container>
     <h2 className='mt-4'>Products Dashboard</h2>
      <div className='row  justify-content-space-between' style={{}}>
        {items.map((product) => 
        <Card key={product.id} style={{ width: '18rem', border: '1px solid black', padding: '10px' }}>
          <Card.Img variant="top" src={product.image} alt={product.title}  top
      width="100%" style={{height:'250px', objectFit: 'contain'}} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              Price {product.price}
            </Card.Text>
            <Button variant="primary" onClick={()=> dispatch(addToCart(product))}>Add to cart</Button>
          </Card.Body>
        </Card>

        )}
        </div>
        </Container>
    </>
  )
}

export default ProductList;