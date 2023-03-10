import { ADD_CONTACT, DELETE_CONTACT } from '../utils/constants'

const contactReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.contact]
    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.id)
    default:
      return state
  }
}

export default contactReducer
