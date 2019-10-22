import {LOGIN_SUCCESS} from '../actions/auth'
const reducer = (state = null, action = {}) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.payload.jwt
        default:
            return state
    }    
}
export default reducer
