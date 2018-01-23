import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Container from './container'
import configureStore from './store'
import coreFunctionality from './core-functionality'


// Setup store
const functionalityMiddlewares = coreFunctionality.reduce((arr, functionality) => {
  return arr.concat(functionality.middlewares || [])
}, [])

const store = configureStore({
  middlewares: [
    ...functionalityMiddlewares
  ]
})

// Setup root element
const rootElement = (
  <Provider store={store}>
      <Container />
  </Provider>
)

export default function (root) {
  render(rootElement, root, () => {
      // something
  })
}