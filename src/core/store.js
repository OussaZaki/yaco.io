import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducer'

export default function configure (options = {}) {
  let middlewares = [
    thunk,
    ...options.middlewares
  ]

  let devTools = (f) => f
  if (
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION__
  ) {
    devTools = window.__REDUX_DEVTOOLS_EXTENSION__()
  }

  const store = createStore(rootReducer, {}, compose(
    applyMiddleware(...middlewares),
    devTools
  ))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
