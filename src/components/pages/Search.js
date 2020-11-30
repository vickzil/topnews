import React, { useEffect } from 'react'
import CategoryNews from '../newsCard/CategoryNews'
import Sidebar from '../layouts/Sidebar'
import { connect } from 'react-redux'
import { clearErrorConnection } from "../../redux/news/news-action";


const Search = ({ news, error, clearErrorConnection}) => {
    
    // page title
    document.title = "Bounty news | Search";

    // PAGE NAME
    const page = "Search Result";
    
    // USE EFFECT TO CHECK IF THEIR'S ANY ERROR
    useEffect(() => {
        clearErrorConnection();
    }, [clearErrorConnection, news])

    return (
        <div className="row">
            <div className="col-md-8">
                <div id="site-content">
                    <CategoryNews page={page} news={news} error={error} />
                </div>
            </div>
            <div className="col-md-4 sidebar">
                <Sidebar />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        news: state.news.searchNews,
        error: state.news.error,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearErrorConnection: () => dispatch(clearErrorConnection()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Search)