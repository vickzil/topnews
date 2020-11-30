import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchAllSearchNews, setAlert } from "../../redux/news/news-action";
import { useHistory, useLocation } from 'react-router-dom'
import { getFirstWord } from './settings'
const SearchForm =({fetchAllSearchNews, setAlert, alert }) => {

    // STATE VARIABLES
    const [input, setInput] = useState("");
    let [loading, setLoading] = useState(false);


    // GET HISTORY
    let history = useHistory();

    // GET URL LOCATION
    let location = useLocation();


    // HANDLE CHANGE EVENT
    const onChangeHandler = (e) => {
        setInput(e.target.value);
    };

    // HANDLE SUBMIT
    const onSubmitHandler = (e) => {
        // SET LOADING TO TRUE
        setLoading(true);

        // PREVENT DEFAULT 
        e.preventDefault();
        
        // VALIDATE AND CHECK EMPTY INPUT
        if (input !== "") {

            // FETCH NEWS PASSING FORM INPUT AS A QUERY PARAMETER
            fetchAllSearchNews(getFirstWord(input));
            
            // CHECK IF THE CURRENT PAGE IS NOT A SEARCH PAGE, 
            // THEN REDIRECT TO A SEARCH PAGE
            if(location.pathname !== "/page/search") {

                // REDIRECT IN 3 SECONDS 
                setTimeout(() => {

                    // SET LOADING TO TRUE
                    setLoading(false);

                    history.push("/page/search");
                }, 3000);

            } else {
                // SET LOADING TO FALSE
                setLoading(false);
            }

            // CLEAR INPUT AND ALERTS
            setInput("");
            setAlert("");

        } else {
            
            // SHOW FORM ERROR MESSAGE AFTER 1.5SEC AND SET LOADING TO FALSE
            setTimeout(() => {
                setAlert("Please Fill out this field");
                setLoading(false);
            }, 1500);
        }
    };

    return (
        <div className="search-form-component">
            {alert !== "" && <p className="text-center text-danger font-weight-bold">{alert}</p>}
            <form className="form-inline" id="searchForm" onSubmit={onSubmitHandler}>
                
                <input
                type="search"
                id="search-input"
                className="form-control"
                placeholder="Search"
                value={input}
                onChange={onChangeHandler}
                />
                <button className="btn btn-success" type="submit">
                    Search
                    {loading && <span className="spinner-border spinner-border-sm ml-3" role="status" aria-hidden="true"></span>} 
                </button>
            </form>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        news: state.news.searchNews,
        error: state.news.error,
        alert: state.news.alert,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllSearchNews: (payload) => dispatch(fetchAllSearchNews(payload)),
    setAlert: (message) => dispatch(setAlert(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)