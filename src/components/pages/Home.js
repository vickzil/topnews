import React, { useEffect } from 'react'
import FeaturedNews from '../newsCard/FeaturedNews'
import CategoryNews from '../newsCard/CategoryNews'
import Sidebar from '../layouts/Sidebar'
import { connect } from 'react-redux'
import { fetchAllFeaturedNews, fetchAllNews, fetchAllPopularNews, clearErrorConnection, setAlert } from "../../redux/news/news-action";
import Loading from '../controls/Loading'

const Home = ({clearErrorConnection, setAlert, fetchAllFeaturedNews, fetchAllNews, fetchAllPopularNews, articles, news, error }) => {


    // USE EFFECT
     useEffect(() => {
         setAlert("");
        clearErrorConnection();
        fetchAllFeaturedNews();
        fetchAllNews();
        fetchAllPopularNews();
    }, [clearErrorConnection, setAlert, fetchAllFeaturedNews, fetchAllNews, fetchAllPopularNews])

    // MAP THROUGH NEWS ARTICLES IF IT EXIST, ELSE SHOW LOADING
    const articleLength = articles.length ? (
        articles.map(article => {
            return (<FeaturedNews article={article} key={article.title} />)
        })
    ) : (
        <div className="loadar text-center">
            <Loading />
        </div>
    )
    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <div id="site-content">
                        <div className="all-div">
                            {articleLength}
                        </div>
                        <CategoryNews page="Healine News" error={error} news={news} />
                    </div>
                </div>
                <div className="col-md-4 sidebar">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        articles: state.news.featuredNews,
        news: state.news.allNews,
        error: state.news.error,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearErrorConnection: () => dispatch(clearErrorConnection()),
    fetchAllFeaturedNews: () => dispatch(fetchAllFeaturedNews()),
    fetchAllNews: () => dispatch(fetchAllNews()),
    fetchAllPopularNews: () => dispatch(fetchAllPopularNews()),
    setAlert: (message) => dispatch(setAlert(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
