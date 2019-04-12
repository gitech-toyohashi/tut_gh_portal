import { applyMiddleware, createStore } from 'redux'
import createRootReducer from './reducers'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware()
  let middlewares = [
    sagaMiddleware
  ]
  if (process.env.NODE_ENV !== 'production') {
    middlewares = [
      ...middlewares,
      createLogger({ collapsed: true, diff: true })
    ]
  }

  const store = createStore(
    createRootReducer(),
    preloadedState,
    applyMiddleware(...middlewares)
  )

  sagaMiddleware.run(rootSaga)

  return store
}