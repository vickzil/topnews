import React from 'react'
import PopularNews from '../newsCard/PopularNews'
import { connect } from 'react-redux'


 const Sidebar = ({articles}) => {

    return (
        <div className="side-bar">
            <div className="side-bar-container">
                <PopularNews articles={articles} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        articles: state.news.popularNews
    }
}

export default connect(mapStateToProps)(Sidebar)