import * as actionTypes from './news-types';
import axios from 'axios'
import { generateUrl } from '../../components/controls/settings'


// ACTION FETCH FEATURED NEWS
export const fetchFeaturedNews = (news) => {
    return {
        type: actionTypes.FETCH_FEATURED_NEWS,
        payload: news,
    };
};



// ACTION FETCH SEARCH NEWS
export const fetchSearchNews = (news) => {
    return {
        type: actionTypes.FETCH_SEARCH_NEWS,
        payload: news,
    };
};



// ACTION FETCH CATEGORY NEWS
export const fetchCategoryNews = (news) => {
    return {
        type: actionTypes.FETCH_CATEGORY_NEWS,
        payload: news,
    };
};



// ACTION FETCH POPULAR NEWS
export const fetchPopularNews = (news) => {
    return {
        type: actionTypes.FETCH_POPULAR_NEWS,
        payload: news,
    };
};



// ACTION FETCH ALL NEWS
export const fetchAllHomeNews = (news) => {
    return {
        type: actionTypes.FETCH_ALL_NEWS,
        payload: news,
    };
};



// ACTION CLEAR CATEGORY NEWS
export const clearCategoryNews = () => {
    return {
        type: actionTypes.CLEAR_CATEGORY_NEWS,
    };
};



// ACTION ERROR CONNECTION
export const errorConnection = () => {
    return {
        type: actionTypes.ERROR_CONNECTION,
    };
};



// ACTION CLEAR ERROR CONNECTION
export const clearErrorConnection = () => {
    return {
        type: actionTypes.CLEAR_ERROR_CONNECTION,
    };
};



// ACTION CLEAR SEARCH NEWS
export const clearSearchNews = () => {
    return {
        type: actionTypes.CLEAR_SEARCH_NEWS,
    };
};

// ACTION SET ALERT
export const setAlert = (message) => {
    return {
        type: actionTypes.SET_ALERT,
        payload: message,
    };
};


// FETCH FEATURED NEWS FROM API
export const fetchAllFeaturedNews = () => {
    // URL VARIABLES
    const path = "/top-headlines";
    const query = "?sources=bbc-news";
    const Url = generateUrl(path, query);


    return (dispatch) => {
        axios.get(Url)
            .then(response => {
            const news = response.data.articles.slice(0, 2)
            dispatch(fetchFeaturedNews(news)) })
            .catch(error => console.log(error.message))
    };
};

// FETCH ALL CATEGORY NEWS FROM API
export const fetchAllCategoryNews = (category) => {
    // URL VARIABLES
    const path = "/top-headlines";
    const query = "?country=us&category="+category.toLowerCase();
    const Url = generateUrl(path, query);


    return (dispatch) => {
        // CLEAR CATEGORY NEWS
        dispatch(clearCategoryNews())

        // AXIOS 
        axios.get(Url)
            .then(response => {
                const news = response.data.articles
                news.length ? dispatch(fetchCategoryNews(news))  : dispatch(errorConnection()) })
            .catch(() => {
                    dispatch(errorConnection());
                    console.log("there is error")
                }
            )
    };
};

// FETCH ALL NEWS FROM API
export const fetchAllNews = () => {
    // URL VARIABLES
    const path = "/top-headlines";
    const query = "?country=ng&language=en";
    const Url = generateUrl(path, query);

    return (dispatch) => {
        axios.get(Url)
            .then(response => {
                const news = response.data.articles;
                dispatch(fetchAllHomeNews(news));})
            .catch(error => console.log(error.message))
    };
};

// FETCH POPULAR NEWS FROM API
export const fetchAllPopularNews = () => {
    // URL VARIABLES
    const path = "/top-headlines";
    const query = "?country=us&language=en";
    const Url = generateUrl(path, query);

    return (dispatch) => {
        axios.get(Url)
            .then(response => {
                const news = response.data.articles
                dispatch(fetchPopularNews(news))})
            .catch(error => console.log(error.message))
    };
};

// FETCH SEARCH NEWS FROM API
export const fetchAllSearchNews = (search) => {

    // URL VARIABLES
    const path = "/top-headlines";
    const query = "?q=" + search + "&language=en";
    const Url = generateUrl(path, query);


    return (dispatch) => {
        dispatch(clearSearchNews());
        axios.get(Url)
            .then(response => {
                const news = response.data.articles;
                if(news.length > 0) {dispatch(fetchSearchNews(news))} else { dispatch(errorConnection()) }})
            .catch(() => {
                dispatch(errorConnection());
            })
    };
};