import { newsAPI } from '../../api/api';

const SET_NEWS = 'news/SET_NEWS';
const SET_CURRENT_PAGE = 'news/SET_CURRENT_PAGE';
const SET_TOTAL_NEWS_COUNT = 'news/SET_TOTAL_NEWS_COUNT';
const TOGGLE_IS_FETCHING = 'news/TOGGLE_IS_FETCHING';


export const setNews = (news) => ({
    type: SET_NEWS,
    news
});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});


export const setTotalNewsCount = (totalNewsCount) => ({
    type: SET_TOTAL_NEWS_COUNT,
    totalNewsCount
});

export const getNewsThunk = (page, pageSize) => {
    return async (dispatch) => {
        debugger
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
       
        const response = await newsAPI.getNews(page, pageSize)
       
        dispatch(toggleIsFetching(false));
        dispatch(setNews(response.articles));
        debugger;
        dispatch(setTotalNewsCount(response.articles.length));
    }
};

