import {
     createStore,
     combineReducers,
     compose
} from 'redux'
import { tareas } from '../reducers/TareasReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
     tareas,
})
export const store = createStore(reducers, composeEnhancers())
