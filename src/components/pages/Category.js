import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CategoryNews from '../newsCard/CategoryNews'
import Sidebar from '../layouts/Sidebar'
import { connect } from 'react-redux'
import { fetchAllCategoryNews, clearErrorConnection, setAlert } from "../../redux/news/news-action";


const Sports = ({fetchAllCategoryNews, news, clearErrorConnection, error, setAlert}) => {
    // GET THE ID FROM URL PARAMS
    const { id } = useParams();

    // page title
    document.title = "Bounty news | "+id;

    // USE EFFECT
    useEffect(() => {
        clearErrorConnection();
        fetchAllCategoryNews(id);
        setAlert("");
    }, [clearErrorConnection, fetchAllCategoryNews, id, setAlert])

    return (
        <div className="row">
            <div className="col-md-8">
                <div id="site-content">
                    <CategoryNews page={id} news={news} error={error} />
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
        news: state.news.categoryNews,
        error: state.news.error,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearErrorConnection: () => dispatch(clearErrorConnection()),
    fetchAllCategoryNews: (page) => dispatch(fetchAllCategoryNews(page)),
    setAlert: (message) => dispatch(setAlert(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sports)