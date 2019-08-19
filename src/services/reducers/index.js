import { combineReducers } from 'redux'
import  {posts, navigationPost}  from './blog'
import search from './search'
const allReducers = combineReducers({
    posts, navigationPost, search
})
export default allReducers;