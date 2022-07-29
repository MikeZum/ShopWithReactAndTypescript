import { useEffect, useState } from 'react'
import { IProduct } from '../models'
import axios, { AxiosError } from 'axios'

export function useProducts() {
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

    return { products, error, loading }
}