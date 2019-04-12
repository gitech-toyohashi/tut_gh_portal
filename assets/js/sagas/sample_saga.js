import { takeEvery, put } from 'redux-saga/effects'

import sampleAction from '../actions/sample_action'

function* mySaga(action) {
  const newAction = {type: 'ACTION_TYPE', payload: {foo: 'hoge'}}
  yield put(newAction)
}

export default [
  takeEvery(sampleAction.test.toString(), mySaga)
]