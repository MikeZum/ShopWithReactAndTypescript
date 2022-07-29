import React, { useEffect, useState } from 'react';
import { Product } from './components/Product'
// import { products } from './data/products'
import axios from 'axios';
import { IProduct } from './models'

function App() {

  const [products, setProduct] = useState<IProduct[]>([])
  const [loading, setloading] = useState(false)

  async function fetchProducts() {
    setloading(true)
    const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
    setProduct(response.data);
    setloading(false)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <p className='text-center'>Loading...</p>}
      {products.map(product => <Product product={product} key={product.id} />)}
    </div>
  );
}

export default App;
