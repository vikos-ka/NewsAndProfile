import * as axios from 'axios';

const topic = 'top-headlines?country=ua&top-headlines'
const apiKey = '1b94e1ac41824d27980d005f577c0d2a'

export const newsAPI = {
    getNews(currentPage = 1, pageSize = 10) {
        debugger
    return axios.get(`http://newsapi.org/v2/${topic}&page=${currentPage}&pageSize=${pageSize}&apiKey=${apiKey}`)
                    .then(response => {return response.data});
    }
}
 