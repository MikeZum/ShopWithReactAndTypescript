import { Product } from './components/Product'
import { useProducts } from './hooks/products'
import { Loader } from './components/Loader'
import { ErrorMessage } from './components/ErrorMessage'

function App() {

  const { loading, error, products } = useProducts()

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map(product => <Product product={product} key={product.id} />)}
    </div>
  )
}

export default App;
