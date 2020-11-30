import React from 'react'
import { removeTimeZone } from '../controls/settings'

function PopularNewsCard({article}) {
    return (
        <div className="col-md-12">
            <div className="media">
                <a target="_blank" href={article.url} rel="noreferrer">
                    {article.urlToImage && <img src={article.urlToImage} className="img-fluid" alt={article.title} /> }
                </a>
                <div className="media-body">
                    <a href={article.url} target="_blank" rel="noreferrer">
                        <h5>
                            {article.title}
                        </h5>
                    </a>
                    <p className="p-info">
                        <span>
                            <i className="fa fa-clock-o mr-2"></i>
                            {removeTimeZone(article.publishedAt)}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default PopularNewsCard