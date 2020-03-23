import React from 'react';
import { connect } from 'react-redux';
import NewsList from './NewsList';
import {setCurrentPage, getNewsThunk} from '../../store/actions/news';

import './NewsPage.css'


class NewsPage extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getNewsThunk(currentPage, pageSize);
    }

    onPageChanged = (page) => {
        this.props.getNewsThunk(page, this.props.pageSize)
    }

    render() {
        return (
            
            <div className = "news container">
                <div className = "row">
                    <NewsList 
                        className="news__page"
                        totalItemsCount = {this.props.totalNewsCount} 
                        pageSize = {this.props.pageSize} 
                        currentPage = {this.props.currentPage} 
                        onPageChanged = {this.onPageChanged} 
                        news = {this.props.news} 
                        isFetching = {this.props.isFetching}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.news.news,
        pageSize: state.news.pageSize,
        totalNewsCount: state.news.totalNewsCount,
        currentPage: state.news.currentPage,
        isFetching: state.news.isFetching
    }  
}

export default connect(mapStateToProps, {setCurrentPage, getNewsThunk})(NewsPage)
