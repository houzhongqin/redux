import CountReducer from './count_reducers'
import PersonReducer from './person_reducers'

import {combineReducers} from 'redux'

export default combineReducers({
    number:CountReducer,
    persons:PersonReducer
})

