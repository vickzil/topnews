import React from 'react'
import PopularNewsCard from './PopularNewsCard'
import { v4 as uuidv4} from 'uuid'
import Loading from '../controls/Loading'

 function PopularNews({articles}) {

    // MAP THROUGH ARTICLES IF IT EXIST, ELSE SHOW LOADING
     const articleLength = articles.length ? (
         articles.map((article, index) => {
            return (<PopularNewsCard article={article} key={uuidv4 + index} />)
        })
     ) : (
        <Loading />
     )
    return (
        <div>
            <div className="blog-column">
                <div className="container">
                    <h4>Popular Post</h4>
                    <div id="popular-news">
                        <div className="row">
                            {articleLength}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularNews