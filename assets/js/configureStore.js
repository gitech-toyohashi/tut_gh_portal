import { applyMiddleware, createStore } from 'redux'
import createRootReducer from './reducers'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import rootSaga from './sagas'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware()
  let middlewares = [
    routerMiddleware(history),
    sagaMiddleware
  ]
  if (process.env.NODE_ENV !== 'production') {
    middlewares = [
      ...middlewares,
      createLogger({ collapsed: true, diff: true })
    ]
  }

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    applyMiddleware(...middlewares)
  )

  sagaMiddleware.run(rootSaga)

  return store
}