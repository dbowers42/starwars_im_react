import * as actionType from '../Actions'

const initialState = {
  currentUser: null
}

function signIn(state = initialState, action) {
  switch (actionType) {
    case actionType.SIGN_IN:
      return {
        ...state,
        currentUser: action.user
      }
    case actionType.SIGN_OUT:
      return {
        ...state,
        currentUser: action.user
      }
    default:
      return state
  }
}

export default signIn

