import React, { useEffect, useState } from 'react';
import { Product } from './components/Product'
import axios, { AxiosError } from 'axios';
import { IProduct } from './models'

function App() {

  const [products, setProduct] = useState<IProduct[]>([])
  const [loading, setloading] = useState(false)
  const [error, setError] = useState('')

  async function fetchProducts() {
    try {
      setError('')
      setloading(true)
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
      setProduct(response.data);
      setloading(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setloading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <p className='text-center'>Loading...</p>}
      {error && <p className='text-center text-red-600'>{error}...</p>}
      {products.map(product => <Product product={product} key={product.id} />)}
    </div>
  );
}

export default App;
