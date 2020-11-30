/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { removeTimeZone, cutString } from '../controls/settings'


 function FeaturedNews({article}) {
    return (
        <div className="box">
            <p className="p-cat">{article.author}</p>
            <h4>
                <a href={article.url} target="_blank" rel="noreferrer">
                    {article.title}
                </a>
            </h4>
            <a rel="noreferrer">
                {article.urlToImage && <img src={article.urlToImage} className="img-fluid" alt={article.title} /> }
            </a>
            <p>{cutString(article.description, 120)}</p>
            <p className="p-date">
                <i className="fa fa-clock-o mr-2"></i>
                {removeTimeZone(article.publishedAt)}
            </p>
        </div>
    )
}

export default FeaturedNews