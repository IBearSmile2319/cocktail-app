import {combineReducers} from 'redux'
import DataReducer from './DataReducer'
const rootReducer=combineReducers({
    data:DataReducer,
})
export default rootReducer