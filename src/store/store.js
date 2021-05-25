import {
     createStore,
     combineReducers,
     compose
} from 'redux'
import { tareas } from '../reducers/TareasReducer'

// convert object to string and store in localStorage
const saveToLocalStorage = (state) => {
     try {
       const serialisedState = JSON.stringify(state);
       localStorage.setItem("persistantState", serialisedState);
     } catch (e) {
       console.warn(e);
     }
   }
   
   // load string from localStarage and convert back in to an Object
   // invalid output must be undefined
   const loadFromLocalStorage = () => {
     try {
       const serialisedState = localStorage.getItem("persistantState");
       if (serialisedState === null) return undefined;
       return JSON.parse(serialisedState);
     } catch (e) {
       console.warn(e);
       return undefined;
     }
   }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
     tareas,
})
export const store = createStore(reducers, loadFromLocalStorage(), composeEnhancers())

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));
