import axios from 'axios'
import { GET_PRODUCTS } from '../utils/constants'
import { setLoadingInfo } from './loadingActions'

export const getProducts = (category) => {
  return async (dispatch) => {
    try {
      dispatch(
        setLoadingInfo({
          loading: true
        })
      )
      const { data: products } = await axios.get('/products.json')
      const result = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      )

      dispatch(loadProducts(result))
      dispatch(
        setLoadingInfo({
          loading: false,
          error: ''
        })
      )
    } catch (error) {
      dispatch(
        setLoadingInfo({
          loading: false,
          error: 'Error while loading data. Try again later.'
        })
      )
    }
  }
}

export const loadProducts = (products) => ({
  type: GET_PRODUCTS,
  products
})
