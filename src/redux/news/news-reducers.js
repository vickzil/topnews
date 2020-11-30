import * as actionTypes from './news-types';

const INITIAL_STATE = {
    featuredNews: [],
    categoryNews: [],
    popularNews: [],
    searchNews: [],
    allNews: [],
    error: false,
    alert: ""
}

const newsReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      // CHECK FOR FEATURED NEWS
      case actionTypes.FETCH_FEATURED_NEWS:
         return {
            ...state,
            featuredNews: action.payload,
         };
      
      // CHECK FOR CATEGORY NEWS
      case actionTypes.FETCH_CATEGORY_NEWS:
         return {
            ...state,
            categoryNews: action.payload,
         };

      // CHECK FOR SEARCH NEWS
      case actionTypes.FETCH_SEARCH_NEWS:
         return {
            ...state,
            searchNews: action.payload,
         };
      
      // CHECK FOR POPULAR NEWS
      case actionTypes.FETCH_POPULAR_NEWS:
         return {
            ...state,
            popularNews: action.payload,
         };
      
      // CHECK FOR ALL NEWS
      case actionTypes.FETCH_ALL_NEWS:
         return {
            ...state,
            allNews: action.payload,
         };

      // CLEAR CATEGORY NEWS
      case actionTypes.CLEAR_CATEGORY_NEWS:
         return {
            ...state,
            categoryNews: [],
         };

      // CLEAR SEARCH NEWS
      case actionTypes.CLEAR_SEARCH_NEWS:
         return {
            ...state,
            searchNews: [],
         };
         
      // CHECK ERROR CONNECTION
      case actionTypes.ERROR_CONNECTION:
         return {
            ...state,
            error: true,
         };
      
      // CLEAR ERROR CONNECTION
      case actionTypes.CLEAR_ERROR_CONNECTION:
         return {
            ...state,
            error: false,
         };

      // SET ALERT
      case actionTypes.SET_ALERT:
         return {
            ...state,
            alert: action.payload,
         };

      default:
         return state;
    }
}

export default newsReducer;
