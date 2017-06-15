import {SIGN_IN, SIGN_OUT} from '../Actions'

export function signIn(user) {
  return {type: SIGN_IN, user}
}

export function signOut(user) {
  return {type: SIGN_OUT, user}
}