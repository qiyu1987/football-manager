import {TEAM_FETCHED, TEAM_DELETE_SUCCESS} from '../actions/teams'
const reducer = (state=null, action={}) => {
    switch (action.type) {
        case TEAM_FETCHED:
            
            return action.team
        case TEAM_DELETE_SUCCESS:
            return null
        default:
            return state
    }
}
export default reducer