import { combineReducers } from 'redux'
import signIn from '../SignIn/reducer'
import chat from '../Chat/reducer'

const rootReducer = combineReducers({signIn, chat})

export default rootReducer