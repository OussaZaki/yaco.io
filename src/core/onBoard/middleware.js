import axios from 'axios'

import pulser from 'utils/heartbeat'
import {
    INIT_CONNECT
} from './actions'
  
import { initialize } from './hub'

const MASTER_ID = 'theZakiOussa'

export default (store) => (next) => (action) => {
  next(action)

  if (action.type === INIT_CONNECT) {
    console.log('attempt to connect')

    // axios.get('http://yacohub-live.eu-west-1.elasticbeanstalk.com/live-count').then((data) => {
    //   console.log(data)
    // })

    const peer = initialize()
    const keepAlive = pulser(peer)

    const connection = peer.connect(MASTER_ID)
    peer.on('open', (id) => {
      console.log('Connection open: ' + id)
    })

    peer.on('error', ({ type }) => {
      if (type === 'unavailable-id' ) {
        this.peer.reconnect()
      }
    })

    connection.on('data', (data) => {
      console.log('Received: ' + data)
    })

    peer.on('error', (err) => {
      console.log('lost connection')
    })
      // open peer connection
      
      // hub.post(action.payload).then((response) => {
      //   const { data } = response
      //   store.dispatch(setServerOrder(data))
      // }).then(() => {
        
      // }).catch((error) => store.dispatch(openDialogForServerError(error)))
  }
}
  