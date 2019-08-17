import { combineReducers } from 'redux'
import  {posts, navigationPost}  from './blog'
const allReducers = combineReducers({
    posts, navigationPost
})
export default allReducers;