import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
