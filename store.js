import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createWrapper } from 'next-redux-wrapper'
import rootReducer from './ducks'

const middleware = [thunk]

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(...middleware))

const makeStore = () => createStore(rootReducer, enhancer)

//used to integrate the Redux store with a Next.js application:
export const wrapper = createWrapper(makeStore)
