const callingAPI = (actionType, payload) => ({ type: actionType, payload })
const callAPISuccess = (actionType, payload) => ({type: actionType, payload})
const callAPIErr = (actionType, err) => (
    {
        type: actionType,
        payload: { 
            err
        }
})
export {
    callingAPI,
    callAPISuccess,
    callAPIErr
}
// const searchParams = new URLSearchParams();
//         searchParams.set("keyword", this.props.keyword);
//         searchParams.set("page", pageNumber);
