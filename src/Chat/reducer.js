import * as actionType from '../Actions'

const initialState = {
  messages: []
}

function chat(state = initialState, action) {
  switch (actionType) {
    case actionType.SEND_MESSAGE:
      return Object.assign({}, state, {user: action.user, content: action.content})
    default:
      return state
  }
}


export default chat

