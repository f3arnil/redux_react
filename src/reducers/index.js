import { combineReducers } from 'redux'
import services from './services'    
import visibilityFilter from './visibilityFilter'

const appReducer = combineReducers({
    services,
    visibilityFilter
})

export default appReducer
