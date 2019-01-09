import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxPromise from 'redux-promise'
import { Provider } from 'react-redux'
import reducers from 'reducers'

export default (props) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middlewares = [reduxPromise]
  const store = createStore(
    reducers,
    props.initialState,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}
