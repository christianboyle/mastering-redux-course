import { SET_LOADING_INFO } from '../utils/constants'

const initialState = {
  loading: false,
  error: ''
}

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_INFO:
      return { ...state, ...action.info }
    default:
      return state
  }
}

export default loadingReducer
