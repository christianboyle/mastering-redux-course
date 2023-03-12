import { GET_USERS } from '../utils/constants'

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return [...state, ...action.users]
    default:
      return state
  }
}

export default usersReducer
