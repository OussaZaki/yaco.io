import { createAction } from 'redux-actions'

export const INIT_CONNECT = 'core/onBoard/INIT_CONNECT'
export const CONNECT = 'core/order/CONNECT'
export const DISCONNECT = 'core/order/DISCONNECT'

export const initConnect = createAction(INIT_CONNECT)
export const connect = createAction(CONNECT)
export const disconnect = createAction(DISCONNECT)
