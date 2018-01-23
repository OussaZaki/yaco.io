import reducer from './reducer'
import * as actions from './actions'
import * as selectors from './selectors'
import onBoardMiddleware from './middleware'

export default {
  name: 'onBoardFunctionality',
  reducer,
  middlewares: [
    onBoardMiddleware
  ],
  actions,
  selectors
}