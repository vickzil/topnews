import React from 'react'
import CategoryNewsCard from './CategoryNewsCard'
import { v4 as uuidv4} from 'uuid'
import Loading from '../controls/Loading'
import Error from '../controls/Error'

const CategoryNews = ({news, page, error}) =>  {

    // MAP THROUGH NEWS ARTICLES IF IT EXIST, ELSE SHOW LOADING OR ERROR
    const articleLength = news.length ? (
        news.map((article, index) => {
                return (<CategoryNewsCard article={article} key={uuidv4 + index} />)
        })
    ) : (
        <div className="loadar text-center">
            {/* CHECK FOR ERROR */}
            {error ? (
                <Error />
            ) : (
                <Loading />
            )}
        </div>
    )
    return (
        <div>
            <div className="blog-column">
                <div className="container">
                    <h3 className="blog-cat-fet" style={{textTransform: 'capitalize'}} id="fet_title">{ page }</h3>
                    <div id="category_list">
                        <div className="row">
                            {articleLength}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CategoryNews;