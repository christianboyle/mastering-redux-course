import axios from 'axios'
import { GET_PRODUCTS } from '../utils/constants'

export const getProducts = (category) => {
  return async (dispatch) => {
    try {
      const { data: products } = await axios.get('/products.json')
      const result = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      )

      dispatch(loadProducts(result))
    } catch (error) {
      console.log('Error loading categories data. Try again later.')
    }
  }
}

export const loadProducts = (products) => ({
  type: GET_PRODUCTS,
  products
})
