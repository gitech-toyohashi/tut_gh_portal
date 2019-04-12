import { handleActions } from 'redux-actions'
import sampleAction from '../actions/sample_action'

const initialState = {
  called: false
}

const sampleReducer = handleActions({
  [sampleAction.test]: (state, _action) => ({
    ...state,
    called: true
  }),
  'ACTION_TYPE': (state, _action) => {
    return state
  }
}, initialState)

export default sampleReducer