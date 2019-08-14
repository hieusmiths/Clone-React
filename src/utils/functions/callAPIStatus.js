const callingAPI = actionType => ({ type: actionType })
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