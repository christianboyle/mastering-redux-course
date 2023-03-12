import axios from 'axios'
import { GET_USERS } from '../utils/constants'

export const initiateGetUsers = () => {
  return (dispatch) => {
    axios
      .get('https://randomuser.me/api/?page=0&results=10')
      .then((response) => {
        dispatch(getUsers(response.data.results))
      })
  }
}

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    users
  }
}
