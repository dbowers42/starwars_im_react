import {SEND_MESSAGE} from '../Actions'

export function sendMessage(message) {
  return {type: SEND_MESSAGE, message}
}