import { combineReducers } from 'redux'

import sampleReducer from './sample_reducer'

const createRootReducer = () => combineReducers({
  sampleReducer
})

export default createRootReducer