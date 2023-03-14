import axios from 'axios'
import { GET_CATEGORIES } from '../utils/constants'

export const getAllCategories = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/categories.json')
      dispatch(loadCategories(data))
    } catch (error) {
      console.log('Error loading categories data. Try again later.')
    }
  }
}

export const loadCategories = (categories) => ({
  type: GET_CATEGORIES,
  categories
})
