import { handleActions } from 'redux-actions'
import { handleSimpleAction } from 'utils/redux'
import * as actions from './actions'

export default handleActions({
  [actions.CONNECT]: (state) => {
    return { ...state, loading: false, online: true }
  },
  [actions.DISCONNECT]: (state) => {
    return { ...state, loading: false, online: false }
  },
  [actions.INIT_CONNECT]: handleSimpleAction('loading', true)
}, {
  loading: false,
  online: false
})