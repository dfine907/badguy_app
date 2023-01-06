import { combineReducers } from 'redux'
import criminal from './criminals.ducks'

const rootReducer = combineReducers({
  criminal,
})

export default rootReducer
