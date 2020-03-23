const SET_NEWS = 'news/SET_NEWS';
const SET_CURRENT_PAGE = 'news/SET_CURRENT_PAGE';
const SET_TOTAL_NEWS_COUNT = 'news/SET_TOTAL_NEWS_COUNT';
const TOGGLE_IS_FETCHING = 'news/TOGGLE_IS_FETCHING';


export default (
    state = {
    pageSize: 6,
    totalNewsCount: 0,
    currentPage: 1,
    isFetching: false,
    news: []
}, action) => {
    switch (action.type) {
        case SET_NEWS: {
            debugger;
            return {
                ...state,  
                news: [...action.news]
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case SET_TOTAL_NEWS_COUNT: {
            return {
                ...state,
                totalNewsCount: action.totalNewsCount
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default:
            return state;
    }

}
