import {
    TEAMS_FETCHED, 
    TEAM_CREATE_SUCCESS,
    TEAM_DELETE_SUCCESS
} from '../actions/teams'
const reducer = (state=null, action={}) => {
    switch (action.type) {
        case TEAMS_FETCHED:
            
            return [...action.teams]
        case TEAM_CREATE_SUCCESS:
            return state ? [...state, {...action.team}] : state
        case TEAM_DELETE_SUCCESS:
            return state ? state.filter(
                team => team.id !== action.payload.id
            ) : state
        default:
            return state
    }
}
export default reducer