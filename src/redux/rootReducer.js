import { combineReducers } from 'redux';
import newsReducer from './news/news-reducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


// PERSIST CONFIG
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['news']
}
// ROOT REDUCERS COMBINED
const rootReducer = combineReducers({
    news: newsReducer
});

export default persistReducer( persistConfig, rootReducer)