import React from 'react';
import News from './News';
import Paginator from '../common/Paginator';
import Preloader from '../common/preloader.js';

const NewsList = ({isFetching, currentPage, onPageChanged, totalItemsCount, pageSize, news}) => {
    debugger
    console.log(news)
    return (
        isFetching? <div className = "preloader__container"><Preloader /></div> 
        : <div className = "news__container">
            <div className = "paginator">
            <Paginator 
                currentPage = {currentPage} onPageChanged = {onPageChanged} 
                totalItemsCount = {totalItemsCount} pageSize = {pageSize} />
            </div>
            <div className="newsItem">
                { news.map( news => {
                     return (<News 
                        key = {news.publishedAt} 
                        {...news} 
                         />)
                    }
                )}
        </div>
        </div>
    )
}

export default NewsList