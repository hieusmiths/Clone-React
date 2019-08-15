export default class Constants {
    static API_GET_LIST_SUGGESTION = 'http://192.168.1.247:8384/api/v1/search/suggestion'
    static API_GET_ALL_LIST_POST = ' http://192.168.1.247:8384/api/v1/search/all'
    static API_GET_LIST_SEARCH_BY_KEYWORD = 'http://192.168.1.247:8384/api/v1/search/all'
    static API_GET_COUNT_SEARCH_BY_KEY_WORD = 'http://192.168.1.247:8384/api/v1/search/count_by_keyword' // keyword= tring, type= string // default All
    static TYPE_New = {
        POST: 'post',
        RES_ADDRESS: 'res_address',
        REVIEW: 'REVIEW',
        HOME_PERSONAL: 'HOME_PERSONAL'
    }
}