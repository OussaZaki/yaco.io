import {
    INIT_CONNECT
} from './actions'
  
import { initialize } from './hub'

export default (store) => (next) => (action) => {
  next(action)

  if (action.type === INIT_CONNECT) {
    console.log('attempt to connect')
    initialize()
      // open peer connection
      
      // hub.post(action.payload).then((response) => {
      //   const { data } = response
      //   store.dispatch(setServerOrder(data))
      // }).then(() => {
        
      // }).catch((error) => store.dispatch(openDialogForServerError(error)))
  }
}
  